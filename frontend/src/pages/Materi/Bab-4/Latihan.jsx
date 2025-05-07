import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import nextIcon from "../../../assets/img/selanjutnya.png";
import IconPetunjuk from "../../../assets/img/informasi.png";
import "../style/latihan.css";

const LatihanBab4 = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const { user } = useSelector((state) => state.auth);
  const [showLatihan, setShowLatihan] = useState(false); // State untuk beralih antara instruksi dan latihan

  // State untuk instruksi
  const [riwayat, setRiwayat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // State untuk latihan
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill([""]));
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill(null));
  const [hasAnswered, setHasAnswered] = useState(Array(5).fill(false));
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 menit dalam detik

  const questions = [
    {
      id: 1,
      prompt:
        "Lengkapilah bagian kosong pada kode berikut untuk menghitung jumlah dua bilangan ...",
      code: `public class Latihan \n{ \n    public static void Main(string[] args) \n    { \n        int a = 10, b = 5; \n        int hasil = ___ + ___; \n        Console.WriteLine("Hasil Penjumlahan: " + hasil); \n    } \n}`,
      correctAnswer: ["a", "b"],
    },
    {
      id: 2,
      prompt:
        "Lengkapilah bagian kosong pada kode berikut untuk menambah nilai variabel sebanyak satu ...",
      code: `public class Latihan \n{ \n    public static void Main(string[] args) \n    { \n        int angka = 10; \n        ___; \n        Console.WriteLine("Angka setelah increment: " + angka); \n    } \n}`,
      correctAnswer: ["angka++"],
    },
    {
      id: 3,
      prompt:
        "Lengkapilah bagian kosong pada kode berikut untuk memeriksa apakah dua angka sama ...",
      code: `public class Latihan \n{ \n    public static void Main(string[] args) \n    { \n        int x = 15, y = 20; \n        Console.WriteLine("Apakah x == y? " + (___ == ___)); \n    } \n}`,
      correctAnswer: ["x", "y"],
    },
    {
      id: 4,
      prompt:
        "Lengkapilah bagian kosong pada kode berikut untuk memeriksa apakah kedua kondisi bernilai true ...",
      code: `public class Latihan \n{ \n    public static void Main(string[] args) \n    { \n        bool kondisi1 = true, kondisi2 = false; \n        Console.WriteLine("Apakah kedua kondisi benar? " + (___ && ___)); \n    } \n}`,
      correctAnswer: ["kondisi1", "kondisi2"],
    },
    {
      id: 5,
      prompt:
        "Lengkapilah bagian kosong pada kode berikut untuk menentukan apakah sebuah angka positif atau negatif ...",
      code: `public class Latihan \n{ \n    public static void Main(string[] args) \n    { \n        int angka = -5; \n        string hasil = (angka > 0) ? "Positif" : ___; \n        Console.WriteLine("Angka tersebut adalah: " + hasil); \n    } \n}`,
      correctAnswer: ["Negatif"],
    },
  ];

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

  // Ambil data riwayat dari API
  useEffect(() => {
    const fetchRiwayat = async () => {
      if (!user?.uuid) {
        setError("Mohon login ke akun Anda");
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/scores", {
          withCredentials: true,
        });
        console.log("Data scores dari API:", response.data);

        // Filter hanya skor untuk latihan Bab 4
        const filteredScores = response.data.scores.filter(
          (score) => score.type === "latihan" && score.chapter === 4
        );
        console.log("Filtered scores (Bab 4):", filteredScores);

        // Format data untuk tabel
        const formattedRiwayat = filteredScores.map((score) => {
          console.log("Score item:", score);
          return {
            tanggal: formatDate(score.created_at),
            persentase: `${score.score}%`,
            status: score.score >= 75 ? "Lulus" : "Tidak Lulus",
          };
        });
        setRiwayat(formattedRiwayat);
      } catch (error) {
        const errorMsg =
          error.response?.data?.msg || "Gagal mengambil data riwayat";
        console.error("Error fetching scores:", errorMsg);
        setError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRiwayat();
  }, [user]);

  // Timer untuk latihan
  useEffect(() => {
    if (showLatihan) {
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
  }, [showLatihan]);

  const handleAnswerChange = (value, inputIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = [...newAnswers[currentQuestionIndex]];
    newAnswers[currentQuestionIndex][inputIndex] = value;
    setAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const question = questions[currentQuestionIndex];
    const userAnswers = answers[currentQuestionIndex];

    if (userAnswers.some((answer) => answer === "")) {
      Swal.fire({
        title: "Soal Belum Dijawab!",
        text: "Silakan isi jawaban sebelum melanjutkan.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const isCorrect = question.correctAnswer.every(
      (correctAnswer, index) => correctAnswer === userAnswers[index]
    );

    if (isCorrect) {
      if (!hasAnswered[currentQuestionIndex]) {
        setScore((prevScore) => prevScore + 20); // 20 poin per soal (100/5 soal)
        const newAnswerStatus = [...answerStatus];
        newAnswerStatus[currentQuestionIndex] = "correct";
        setAnswerStatus(newAnswerStatus);
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
        }).then(() => {
          setCurrentQuestionIndex((prevIndex) =>
            Math.min(prevIndex + 1, questions.length - 1)
          );
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Sudah Menjawab",
          text: "Anda sudah menjawab soal ini.",
        });
      }
    } else {
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentQuestionIndex] = "incorrect";
      setAnswerStatus(newAnswerStatus);
      setHasAnswered((prev) => {
        const newHasAnswered = [...prev];
        newHasAnswered[currentQuestionIndex] = true;
        return newHasAnswered;
      });
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Silakan lanjut ke soal berikutnya",
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        setCurrentQuestionIndex((prevIndex) =>
          Math.min(prevIndex + 1, questions.length - 1)
        );
      });
    }
  };

  const handleQuestionSelect = (index) => {
    if (hasAnswered[index]) {
      Swal.fire({
        icon: "info",
        title: "Sudah Menjawab",
        text: "Anda sudah menjawab soal ini.",
      });
    } else {
      setCurrentQuestionIndex(index);
      const newAnswers = [...answers];
      newAnswers[index] = Array(questions[index].correctAnswer.length).fill("");
      setAnswers(newAnswers);
    }
  };

  const handleFinish = async () => {
    const hasIncompleteAnswers = answers.some((answer) =>
      answer.some((a) => a === "")
    );
    if (hasIncompleteAnswers) {
      Swal.fire({
        title: "Masih Ada Soal Belum Dijawab!",
        text: "Silakan periksa kembali jawaban anda.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      try {
        await axios.post(
          "http://localhost:5000/scores",
          {
            user_id: user.uuid,
            type: "latihan",
            chapter: 4,
            score: score,
          },
          { withCredentials: true }
        );
      } catch (error) {
        console.error("Error saving score:", error);
      }

      if (score >= 5) {
        Swal.fire({
          title: "Selamat!",
          text: `Skor Anda: ${score}. Anda telah selesai mengerjakan latihan.`,
          icon: "success",
          confirmButtonText: "Selanjutnya",
        }).then((result) => {
          if (result.isConfirmed) {
            handleLessonComplete("/materi/bab4/latihan-bab4");
            handleLessonComplete("/materi/bab4/kuis-bab4");
            window.scrollTo(0, 0);
            navigate("/materi/bab4/kuis-bab4");
          }
        });
      } else {
        showFinalScore();
      }
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
      title: score >= 75 ? "Latihan Selesai" : "WAKTU HABIS",
      text:
        score >= 75
          ? `Skor Anda: ${score}.`
          : "Skor anda tidak mencukupi, Silahkan Coba Kembali.",
      icon: score >= 75 ? "success" : "error",
      showCancelButton: true,
      confirmButtonText: score >= 75 ? "Selanjutnya" : "Coba Lagi",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        if (score >= 75) {
          handleLessonComplete("/materi/bab4/latihan-bab4");
          window.scrollTo(0, 0);
          navigate("/materi/bab4/kuis-bab4");
        } else {
          setShowLatihan(false); // Kembali ke instruksi untuk coba lagi
          setCurrentQuestionIndex(0);
          setAnswers(Array(5).fill([""]));
          setScore(0);
          setAnswerStatus(Array(5).fill(null));
          setHasAnswered(Array(5).fill(false));
          setTimeLeft(20 * 60);
        }
      } else {
        setShowLatihan(false); // Kembali ke instruksi untuk coba lagi
        setCurrentQuestionIndex(0);
        setAnswers(Array(5).fill([""]));
        setScore(0);
        setAnswerStatus(Array(5).fill(null));
        setHasAnswered(Array(5).fill(false));
        setTimeLeft(20 * 60);
        navigate("/materi/bab4/latihan-bab4");
      }
    });
  };

  // UI untuk halaman instruksi
  const renderInstruksi = () => (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">
          BAB 4 - OPERATOR
        </h1>
        <section>
          <h2 className="mb-3 font-semibold text-gray-800">Aturan</h2>
          <p className="mb-3 leading-relaxed">
            Latihan ini bertujuan untuk menguji pengetahuan Anda tentang
            operator equality dan conditional dalam pemrograman C#.
          </p>
          <p className="mb-3 leading-relaxed">
            Terdapat {questions.length} pertanyaan yang harus dikerjakan dalam
            latihan ini. Beberapa ketentuannya sebagai berikut:
          </p>
          <ul className="mb-3 leading-relaxed list-disc list-inside">
            <li>Syarat nilai kelulusan: 75%</li>
            <li>Durasi ujian: 20 menit</li>
          </ul>
          <p className="mb-3 leading-relaxed">
            Apabila tidak memenuhi syarat kelulusan, maka Anda harus mengulang
            pengerjaan latihan kembali.
          </p>
          <p className="mb-6 leading-relaxed">Selamat Mengerjakan!</p>
          <div className="flex justify-end">
            <button
              onClick={() => setShowLatihan(true)}
              className="flex items-center gap-2 px-6 py-3 text-base text-white transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
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
          <h3 className="pb-1 mb-3 font-semibold text-gray-800 border-b border-gray-300">
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

  // UI untuk halaman latihan
  const renderLatihan = () => (
    <div className="max-w-full p-2 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-center text-gray-800">
        LATIHAN BAB 4
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
            Jawablah soal-soal di bawah ini dengan mengisikannya pada input yang
            tersedia.
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
          <div className="flex flex-row">
            {questions.map((question, index) => (
              <button
                key={question.id}
                onClick={() => handleQuestionSelect(index)}
                style={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  margin: "0.125rem",
                  backgroundColor:
                    currentQuestionIndex === index
                      ? "#6E2A7F"
                      : answerStatus[index] === "correct"
                      ? "#10B981"
                      : answerStatus[index] === "incorrect"
                      ? "#EF4444"
                      : "#D1D5DB",
                  color:
                    currentQuestionIndex === index ||
                    answerStatus[index] === "correct" ||
                    answerStatus[index] === "incorrect"
                      ? "white"
                      : "black",
                }}
              >
                {question.id}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full p-4 border rounded-lg">
          <h3 className="font-semibold">{`Soal ${questions[currentQuestionIndex].id}`}</h3>
          <p className="text-gray-600">
            {questions[currentQuestionIndex].prompt}
          </p>
          <div className="p-4 mt-2 font-mono text-sm bg-gray-100 rounded-lg">
            <pre className="code-block">
              <code>
                {questions[currentQuestionIndex].code
                  .split("___")
                  .map((part, index) => (
                    <>
                      {part.split(" ").map((word, wordIndex) => {
                        if (
                          word.includes("class") ||
                          word.includes("public") ||
                          word.includes("static") ||
                          word.includes("void") ||
                          word.includes("Console") ||
                          word.includes("bool") ||
                          word.includes("int") ||
                          word.includes("string")
                        ) {
                          return (
                            <span key={wordIndex} className="keyword">
                              {word}{" "}
                            </span>
                          );
                        } else if (word.includes('"') || word.includes("'")) {
                          return (
                            <span key={wordIndex} className="string">
                              {word}{" "}
                            </span>
                          );
                        } else if (word.includes("//")) {
                          return (
                            <span key={wordIndex} className="comment">
                              {word}{" "}
                            </span>
                          );
                        }
                        return <span key={wordIndex}>{word} </span>;
                      })}
                      {index <
                        questions[currentQuestionIndex].code.split("___")
                          .length -
                          1 && (
                        <span>
                          <input
                            type="text"
                            value={answers[currentQuestionIndex][index] || ""}
                            onChange={(e) =>
                              handleAnswerChange(e.target.value, index)
                            }
                            className="w-20 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
                            placeholder="Jawaban..."
                          />
                        </span>
                      )}
                    </>
                  ))}
              </code>
            </pre>
          </div>

          <button
            onClick={checkAnswer}
            style={{
              backgroundColor: "#6E2A7F",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#5B1F6A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6E2A7F")
            }
          >
            Cek Jawaban
          </button>
          <button
            onClick={() => {
              const newAnswers = [...answers];
              newAnswers[currentQuestionIndex] = Array(
                questions[currentQuestionIndex].correctAnswer.length
              ).fill("");
              setAnswers(newAnswers);
            }}
            className="px-4 py-2 mt-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Hapus Jawaban
          </button>
          <button
            onClick={handleFinish}
            style={{
              backgroundColor: "white",
              color: "#6E2A7F",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s, border-color 0.2s",
              border: "2px solid #6E2A7F",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e0e0e0";
              e.currentTarget.style.borderColor = "#5B1F6A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.borderColor = "#6E2A7F";
            }}
            className="ml-2"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );

  return showLatihan ? renderLatihan() : renderInstruksi();
};

export default LatihanBab4;
