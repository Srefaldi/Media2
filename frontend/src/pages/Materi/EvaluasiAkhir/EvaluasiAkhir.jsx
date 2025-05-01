import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import nextIcon from "../../../assets/img/selanjutnya.png";
import IconPetunjuk from "../../../assets/img/informasi.png";
import "../style/latihan.css";

const EvaluasiAkhir = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const { user } = useSelector((state) => state.auth);
  const [showEvaluasi, setShowEvaluasi] = useState(false);

  // State untuk instruksi
  const [riwayat, setRiwayat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [kkm, setKkm] = useState(75);

  // State untuk evaluasi
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState([]);
  const [hasAnswered, setHasAnswered] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [evaluationId, setEvaluationId] = useState(null);

  // Fungsi untuk memformat tanggal
  const formatDate = (dateString) => {
    if (!dateString) {
      console.warn("Tanggal tidak tersedia:", dateString);
      return "Tanggal tidak tersedia";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn("Format tanggal tidak valid:", dateString);
      return "Tanggal tidak valid";
    }
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Ambil data evaluasi, KKM, soal, dan riwayat
  useEffect(() => {
    const fetchInitialData = async () => {
      if (!user?.uuid) {
        console.warn("User UUID tidak tersedia, menunggu autentikasi");
        setError("Silakan login kembali.");
        navigate("/login");
        return;
      }

      setIsLoading(true);
      try {
        // Ambil evaluasi untuk Evaluasi Akhir
        const evalResponse = await axios.get(
          "http://localhost:5000/evaluations",
          { withCredentials: true }
        );
        const evaluasiAkhir = evalResponse.data.find(
          (evaluation) => evaluation.type === "evaluasi_akhir"
        );
        if (!evaluasiAkhir) {
          setError("Evaluasi Akhir tidak ditemukan");
          return;
        }
        setEvaluationId(evaluasiAkhir.id);

        // Ambil KKM
        const kkmResponse = await axios.get("http://localhost:5000/kkm", {
          withCredentials: true,
        });
        const evaluasiKkm = kkmResponse.data.find(
          (k) => k.evaluation_id === evaluasiAkhir.id
        );
        if (evaluasiKkm) {
          setKkm(evaluasiKkm.kkm);
        }

        // Ambil soal
        const questionsResponse = await axios.get(
          `http://localhost:5000/questions/evaluation/${evaluasiAkhir.id}`,
          { withCredentials: true }
        );
        const fetchedQuestions = questionsResponse.data.questions.map(
          (q, index) => ({
            id: index + 1,
            question: q.question_text || "Pertanyaan tidak tersedia",
            options: [
              q.option_a,
              q.option_b,
              q.option_c,
              q.option_d,
              q.option_e,
            ].filter(Boolean),
            correctAnswer:
              q[`option_${q.correct_answer?.toLowerCase()}`] ||
              q.option_a ||
              "Jawaban tidak tersedia",
          })
        );
        setQuestions(fetchedQuestions);
        setSelectedAnswers(Array(fetchedQuestions.length).fill(""));
        setAnswerStatus(Array(fetchedQuestions.length).fill(null));
        setHasAnswered(Array(fetchedQuestions.length).fill(false));

        // Ambil riwayat skor
        const scoresResponse = await axios.get("http://localhost:5000/scores", {
          withCredentials: true,
        });
        const filteredScores = scoresResponse.data.scores.filter(
          (score) => score.type === "evaluasi_akhir"
        );
        const formattedRiwayat = filteredScores.map((score) => ({
          tanggal: formatDate(score.created_at),
          persentase: `${score.score}%`,
          status: score.score >= kkm ? "Lulus" : "Tidak Lulus",
        }));
        setRiwayat(formattedRiwayat);
      } catch (error) {
        const errorMsg =
          error.response?.data?.msg ||
          "Gagal mengambil data. Silakan coba lagi.";
        console.error("Error fetching data:", errorMsg, error);
        setError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.uuid) {
      fetchInitialData();
    }
  }, [user, kkm, navigate]);

  // Timer untuk evaluasi
  useEffect(() => {
    if (showEvaluasi && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showEvaluasi, timeLeft]);

  const handleAnswerChange = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (questions.length === 0 || !questions[currentQuestionIndex]) return;

    const answer = selectedAnswers[currentQuestionIndex];
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (answer === "") {
      Swal.fire({
        title: "Soal Belum Dijawab!",
        text: "Silakan pilih jawaban sebelum melanjutkan.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const newAnswerStatus = [...answerStatus];
    if (answer === correctAnswer) {
      if (!hasAnswered[currentQuestionIndex]) {
        setScore((prevScore) => prevScore + 5);
        newAnswerStatus[currentQuestionIndex] = "correct";
        setHasAnswered((prev) => {
          const newHasAnswered = [...prev];
          newHasAnswered[currentQuestionIndex] = true;
          return newHasAnswered;
        });
        Swal.fire({
          title: "Jawaban Anda Benar!",
          text: "Silakan lanjutkan ke soal berikutnya.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Sudah Menjawab",
          text: "Anda sudah menjawab soal ini.",
        });
      }
    } else {
      newAnswerStatus[currentQuestionIndex] = "incorrect";
      setHasAnswered((prev) => {
        const newHasAnswered = [...prev];
        newHasAnswered[currentQuestionIndex] = true;
        return newHasAnswered;
      });
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Silakan lanjut ke soal berikutnya.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    setAnswerStatus(newAnswerStatus);
  };

  const resetAnswerForCurrentQuestion = () => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = "";
    setSelectedAnswers(newAnswers);
  };

  const handleQuestionSelect = (index) => {
    if (index >= questions.length) return;
    if (hasAnswered[index]) {
      Swal.fire({
        icon: "info",
        title: "Sudah Menjawab",
        text: "Anda sudah menjawab soal ini.",
      });
    } else {
      setCurrentQuestionIndex(index);
    }
  };

  const handleFinish = async () => {
    const hasIncompleteAnswers = selectedAnswers.some(
      (answer) => answer === ""
    );
    if (hasIncompleteAnswers) {
      Swal.fire({
        title: "Masih Ada Soal Belum Dijawab!",
        text: "Silakan periksa kembali jawaban Anda.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!user?.uuid) {
      Swal.fire({
        title: "Autentikasi Gagal",
        text: "Silakan login kembali.",
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => navigate("/login"));
      return;
    }

    const payload = {
      user_id: user.uuid,
      type: "evaluasi_akhir",

      score: score,
    };
    console.log("Sending score payload:", payload);

    try {
      const response = await axios.post(
        "http://localhost:5000/scores",
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Score saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving score:", error);
      console.error("Error response:", error.response?.data);
      const errorMsg =
        error.response?.data?.msg || "Gagal menyimpan skor. Silakan coba lagi.";
      Swal.fire({
        title: "Gagal Menyimpan Skor",
        text: errorMsg,
        icon: "error",
        confirmButtonText: "OK",
      });
      return; // Stop execution to prevent navigation
    }

    if (score >= kkm) {
      Swal.fire({
        title: "Selamat!",
        text: `Skor Anda: ${score}. Anda telah selesai mengerjakan evaluasi akhir.`,
        icon: "success",
        confirmButtonText: "Selanjutnya",
      }).then((result) => {
        if (result.isConfirmed) {
          handleLessonComplete("/materi/evaluasi/evaluasi-akhir");
          window.scrollTo(0, 0);
          navigate("/materi/evaluasi/sertifikat");
        }
      });
    } else {
      showFinalScore();
    }
  };

  const handleTimeUp = () => {
    Swal.fire({
      title: "Waktu Habis!",
      text: `Skor Anda: ${score}`,
      icon: "warning",
      confirmButtonText: "OK",
    }).then(() => {
      showFinalScore();
    });
  };

  const showFinalScore = () => {
    Swal.fire({
      title: score >= kkm ? "Evaluasi Selesai" : "WAKTU HABIS",
      text:
        score >= kkm
          ? `Skor Anda: ${score}.`
          : `Skor Anda tidak mencukupi (KKM: ${kkm}). Silakan coba lagi.`,
      icon: score >= kkm ? "success" : "error",
      showCancelButton: true,
      confirmButtonText: score >= kkm ? "Selanjutnya" : "Coba Lagi",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        if (score >= kkm) {
          handleLessonComplete("/materi/evaluasi/evaluasi-akhir");
          window.scrollTo(0, 0);
          navigate("/materi/evaluasi/sertifikat");
        } else {
          setShowEvaluasi(false);
          setCurrentQuestionIndex(0);
          setSelectedAnswers(Array(questions.length).fill(""));
          setScore(0);
          setAnswerStatus(Array(questions.length).fill(null));
          setHasAnswered(Array(questions.length).fill(false));
          setTimeLeft(20 * 60);
        }
      } else {
        setShowEvaluasi(false);
        setCurrentQuestionIndex(0);
        setSelectedAnswers(Array(questions.length).fill(""));
        setScore(0);
        setAnswerStatus(Array(questions.length).fill(null));
        setHasAnswered(Array(questions.length).fill(false));
        setTimeLeft(20 * 60);
        navigate("/materi/evaluasi/evaluasi-akhir");
      }
    });
  };

  // UI untuk halaman instruksi
  const renderInstruksi = () => (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">EVALUASI AKHIR</h1>
        <section>
          <h2 className="font-semibold text-gray-800 mb-3">Aturan</h2>
          <p className="mb-3 leading-relaxed">
            Evaluasi ini bertujuan untuk menguji pengetahuan Anda tentang semua
            materi dalam pemrograman C# (Bab 1-6), termasuk variabel, tipe data,
            kontrol alur, dan method.
          </p>
          <p className="mb-3 leading-relaxed">
            Terdapat {questions.length} pertanyaan pilihan ganda yang harus
            dikerjakan dalam evaluasi ini. Beberapa ketentuannya sebagai
            berikut:
          </p>
          <ul className="list-disc list-inside mb-3 leading-relaxed">
            <li>Syarat nilai kelulusan: {kkm}%</li>
            <li>Durasi ujian: 20 menit</li>
          </ul>
          <p className="mb-3 leading-relaxed">
            Apabila tidak memenuhi syarat kelulusan, Anda harus mengulang
            pengerjaan evaluasi kembali.
          </p>
          <p className="mb-6 leading-relaxed">Selamat Mengerjakan!</p>
          <div className="flex justify-end">
            <button
              onClick={() => {
                if (questions.length === 0) {
                  Swal.fire({
                    title: "Gagal Memuat Evaluasi",
                    text:
                      error ||
                      "Soal tidak dapat dimuat. Silakan coba lagi nanti.",
                    icon: "error",
                    confirmButtonText: "OK",
                  });
                  return;
                }
                setShowEvaluasi(true);
              }}
              className="flex items-center gap-2 text-base px-6 py-3 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              style={{ backgroundColor: "#6E2A7F" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#5B1F6A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#6E2A7F")
              }
            >
              <span>MULAI</span>
              <img src={nextIcon} alt="Selanjutnya" className="w-5 h-5" />
            </button>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            Riwayat
          </h3>
          {isLoading ? (
            <p className="text-gray-600">Memuat riwayat...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : riwayat.length === 0 ? (
            <p className="text-gray-600">Belum ada riwayat</p>
          ) : (
            <table className="w-full text-left text-gray-600">
              <thead>
                <tr>
                  <th className="pb-2 font-semibold">Tanggal</th>
                  <th className="pb-2 font-semibold">Persentase</th>
                  <th className="pb-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {riwayat.map((item, index) => (
                  <tr key={index}>
                    <td className="pt-2 pb-3">{item.tanggal}</td>
                    <td className="pt-2 pb-3">{item.persentase}</td>
                    <td className="pt-2 pb-3">
                      <span
                        className={`text-[10px] font-semibold px-2 py-[2px] rounded ${
                          item.status === "Lulus"
                            ? "text-green-600 bg-green-100"
                            : "text-red-600 bg-red-100"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );

  // UI untuk halaman evaluasi
  const renderEvaluasi = () => {
    if (questions.length === 0 || !questions[currentQuestionIndex]) {
      return (
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            EVALUASI AKHIR
          </h2>
          <p className="mt-4 text-red-600">
            {error || "Gagal memuat soal. Silakan coba lagi nanti."}
          </p>
        </div>
      );
    }

    return (
      <div className="max-w-full p-4 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-center text-gray-800">
          EVALUASI AKHIR
        </h2>

        <div
          className="relative p-4 mt-4 border rounded-lg"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.158)" }}
        >
          <h3
            className="flex items-center p-2 text-lg font-semibold border rounded-lg w-80"
            style={{ outline: "2px solid #6E2A7F", outlineOffset: "2px" }}
          >
            <img src={IconPetunjuk} alt="Icon" className="w-6 h-6 mr-2" />
            PETUNJUK MENGERJAKAN
          </h3>
          <ol className="mt-2 text-justify text-gray-600 list-decimal list-inside">
            <li>
              Jawablah pertanyaan berikut dengan memilih salah satu jawaban yang
              paling tepat.
            </li>
            <li>
              Tekan tombol{" "}
              <button
                disabled
                style={{
                  backgroundColor: "#6E2A7F",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  cursor: "not-allowed",
                  opacity: 0.6,
                }}
              >
                Cek Jawaban
              </button>{" "}
              untuk mengecek jawaban.
            </li>
            <li>
              Apabila notifikasi berwarna Merah jawaban salah, dan apabila
              berwarna Hijau jawaban benar.
            </li>
            <li>
              Tekan tombol{" "}
              <button
                disabled
                style={{
                  backgroundColor: "white",
                  color: "#6E2A7F",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "2px solid #6E2A7F",
                  cursor: "not-allowed",
                  opacity: 0.6,
                }}
              >
                Selesai
              </button>{" "}
              untuk mengirim semua jawaban.
            </li>
          </ol>
        </div>

        <div className="flex mt-6">
          <div className="flex flex-col mr-3">
            <div className="p-4 mt-5 text-center text-red-600 bg-gray-100 border rounded-lg">
              <h3 className="font-semibold">
                Waktu Tersisa: {Math.floor(timeLeft / 60)}:
                {(timeLeft % 60).toString().padStart(2, "0")}
              </h3>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-center">SOAL</h3>
            <div className="flex flex-col">
              {Array.from({ length: Math.ceil(questions.length / 5) }).map(
                (_, rowIndex) => (
                  <div className="flex flex-row mb-2" key={rowIndex}>
                    {questions
                      .slice(rowIndex * 5, rowIndex * 5 + 5)
                      .map((question, index) => (
                        <button
                          key={question.id}
                          onClick={() =>
                            handleQuestionSelect(rowIndex * 5 + index)
                          }
                          style={{
                            width: "2rem",
                            height: "2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.5rem",
                            margin: "0.125rem",
                            backgroundColor:
                              currentQuestionIndex === rowIndex * 5 + index
                                ? "#6E2A7F"
                                : answerStatus[rowIndex * 5 + index] ===
                                  "correct"
                                ? "#10B981"
                                : answerStatus[rowIndex * 5 + index] ===
                                  "incorrect"
                                ? "#EF4444"
                                : "#D1D5DB",
                            color:
                              currentQuestionIndex === rowIndex * 5 + index ||
                              answerStatus[rowIndex * 5 + index] ===
                                "correct" ||
                              answerStatus[rowIndex * 5 + index] === "incorrect"
                                ? "white"
                                : "black",
                          }}
                        >
                          {rowIndex * 5 + index + 1}
                        </button>
                      ))}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="w-full p-4 border rounded-lg">
            <div className="p-4 mb-4 text-center bg-gray-100 border rounded-lg">
              <h3 className="font-semibold">SKOR: {score}</h3>
            </div>

            <h3 className="font-semibold">
              {questions[currentQuestionIndex]?.id &&
              questions[currentQuestionIndex]?.question
                ? `${questions[currentQuestionIndex].id}. ${questions[currentQuestionIndex].question}`
                : "Memuat soal..."}
            </h3>
            <div className="mt-2 mb-4">
              {questions[currentQuestionIndex]?.options?.map((option) => (
                <div key={option} className="mb-2">
                  <label
                    className={`flex items-center cursor-pointer p-3 rounded-lg border-2 transition duration-200 ${
                      selectedAnswers[currentQuestionIndex] === option
                        ? "bg-[#6E2A7F] text-white border-[#6E2A7F]"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      value={option}
                      checked={selectedAnswers[currentQuestionIndex] === option}
                      onChange={() => handleAnswerChange(option)}
                      className="hidden"
                    />
                    {option}
                  </label>
                </div>
              )) || <p>Memuat opsi...</p>}
              <div className="flex justify-start mt-4">
                <button
                  onClick={checkAnswers}
                  className="px-4 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
                  style={{
                    backgroundColor: "#6E2A7F",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    transition: "background-color 0.2s",
                  }}
                >
                  Cek Jawaban
                </button>
                <button
                  onClick={resetAnswerForCurrentQuestion}
                  className="px-4 py-2 mt-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Hapus Jawaban
                </button>
                <button
                  onClick={handleFinish}
                  className="px-4 py-2 mt-2 ml-2 text-purple-700 border-2 border-purple-700 rounded-lg hover:bg-gray-100"
                  style={{
                    backgroundColor: "white",
                    color: "#6E2A7F",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    transition: "background-color 0.2s, border-color 0.2s",
                    border: "2px solid #6E2A7F",
                  }}
                >
                  Selesai
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return showEvaluasi ? renderEvaluasi() : renderInstruksi();
};

export default EvaluasiAkhir;
