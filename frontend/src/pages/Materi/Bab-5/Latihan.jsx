import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import nextIcon from "../../../assets/img/selanjutnya.png";
import IconPetunjuk from "../../../assets/img/informasi.png";
import "../style/latihan.css";

const LatihanBab5 = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const { user } = useSelector((state) => state.auth);
  const [showLatihan, setShowLatihan] = useState(false);

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
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 menit

  // Soal hard-coded
  const questions = [
    {
      id: 1,
      prompt:
        "Lengkapilah kode berikut untuk memeriksa apakah nilai lebih besar dari 50 dan cetak 'Nilai Memadai' jika iya ...",
      code: `public class Latihan {
  public static void Main(string[] args) {
    int nilai = 65;
    if (___ > ___) {
      Console.WriteLine("Nilai Memadai");
    }
  }
}`,
      correctAnswer: ["nilai", "50"],
    },
    {
      id: 2,
      prompt:
        "Lengkapilah program berikut untuk mencetak angka dari 1 hingga 5 ...",
      code: `public class Latihan {
  public static void Main(string[] args) {
    for (int i = ___; ___; i++) {
      Console.WriteLine(i);
    }
  }
}`,
      correctAnswer: ["1", "i <= 5"],
    },
    {
      id: 3,
      prompt:
        "Lengkapilah kode berikut untuk menghentikan perulangan ketika i bernilai 3 ...",
      code: `public class Latihan {
  public static void Main(string[] args) {
    for (int i = 0; i < 10; i++) {
      if (___ == ___) {
        break;
      }
      Console.WriteLine(i);
    }
  }
}`,
      correctAnswer: ["i", "3"],
    },
    {
      id: 4,
      prompt:
        "Lengkapilah kode berikut untuk melewati iterasi jika i adalah bilangan ganjil ...",
      code: `public class Latihan {
  public static void Main(string[] args) {
    for (int i = 0; i <= 5; i++) {
      if (___ % 2 != 0) {
        continue;
      }
      Console.WriteLine(i);
    }
  }
}`,
      correctAnswer: ["i"],
    },
    {
      id: 5,
      prompt:
        "Lengkapilah kode berikut untuk mencetak jenis makanan berdasarkan jenis hewan yang diberikan ...",
      code: `public class Latihan {
  public static void Main(string[] args) {
    Console.Write("Masukkan jenis hewan: ");
    string jenisHewan = Console.ReadLine();

    switch (___) {
      case "Kucing":
        Console.WriteLine("Makanan: Ikan");
        break;
      case "Kelinci":
        Console.WriteLine("Makanan: Wortel");
        break;
      ___:
        Console.WriteLine("Makanan: Tidak diketahui");
        break;
    }
  }
}`,
      correctAnswer: ["jenisHewan", "default"],
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

  // Ambil riwayat dari API
  useEffect(() => {
    const fetchRiwayat = async () => {
      if (!user?.uuid) {
        setError("Mohon login ke akun Anda");
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/scores`,
          {
            withCredentials: true,
          }
        );
        const filteredScores = response.data.scores.filter(
          (score) => score.type === "latihan" && score.chapter === 5
        );
        const formattedRiwayat = filteredScores.map((score) => ({
          tanggal: formatDate(score.created_at),
          persentase: `${score.score}%`,
          status: score.score >= 75 ? "Lulus" : "Tidak Lulus",
        }));
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

    if (user?.uuid) {
      fetchRiwayat();
    }
  }, [user]);

  // Timer untuk latihan
  useEffect(() => {
    if (showLatihan && timeLeft > 0) {
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
  }, [showLatihan, timeLeft]);

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

    // Fungsi untuk normalisasi jawaban (ignore spaces and case)
    const normalizeAnswer = (answer) => {
      return answer.replace(/\s+/g, "").toLowerCase();
    };

    const isCorrect = question.correctAnswer.every((correctAnswer, index) => {
      const normalizedCorrect = normalizeAnswer(correctAnswer);
      const normalizedUser = normalizeAnswer(userAnswers[index]);
      return normalizedCorrect === normalizedUser;
    });

    // Jika benar tetapi ada perbedaan kapitalisasi, perbaiki jawaban pengguna
    if (isCorrect) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = question.correctAnswer.map(
        (correct, index) => {
          // Jika jawaban user sudah benar secara konten (tapi mungkin beda kapitalisasi/spasi)
          // Kembalikan format yang benar dari question.correctAnswer
          return correct;
        }
      );
      setAnswers(newAnswers);
    }

    const newAnswerStatus = [...answerStatus];
    newAnswerStatus[currentQuestionIndex] = isCorrect ? "correct" : "incorrect";
    setAnswerStatus(newAnswerStatus);

    setHasAnswered((prev) => {
      const newHasAnswered = [...prev];
      newHasAnswered[currentQuestionIndex] = true;
      return newHasAnswered;
    });

    if (isCorrect) {
      if (!hasAnswered[currentQuestionIndex]) {
        setScore((prevScore) => prevScore + 20);
        Swal.fire({
          title: "Jawaban Anda Benar!",
          text: "Silakan lanjutkan ke soal berikutnya.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Sudah Menjawab",
          text: "Anda sudah menjawab soal ini.",
        }).then(() => {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }
        });
      }
    } else {
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Silakan lanjut ke soal berikutnya.",
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
      });
    }
  };

  const handleQuestionSelect = (index) => {
    if (hasAnswered[index]) {
      Swal.fire({
        icon: "info",
        title: "Sudah Menjawab",
        text: "Anda sudah menjawab soal ini, silakan lanjutkan ke soal berikutnya.",
      });
      // Tidak mengizinkan kembali ke soal yang sudah dijawab
      return;
    }
    setCurrentQuestionIndex(index);
    const newAnswers = [...answers];
    newAnswers[index] = Array(questions[index].correctAnswer.length).fill("");
    setAnswers(newAnswers);
  };

  const handleFinish = () => {
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
      return;
    }

    Swal.fire({
      title: "Konfirmasi Pengiriman",
      text: "Apakah Anda yakin untuk mengirim jawaban Anda?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      confirmButtonColor: "#6E2A7F",
      cancelButtonColor: "#EF4444",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post(
            `${import.meta.env.VITE_API_ENDPOINT}/scores`,
            {
              user_id: user.uuid,
              type: "latihan",
              chapter: 5,
              score: score,
            },
            { withCredentials: true }
          );

          if (score >= 75) {
            handleLessonComplete("/materi/bab5/latihan-bab5");
            handleLessonComplete("/materi/bab5/kuis-bab5");
          }

          navigate("/materi/bab5/hasil-latihan-bab5", {
            state: { score, totalQuestions: questions.length },
          });
        } catch (error) {
          console.error("Error saving score:", error);
          Swal.fire({
            title: "Gagal!",
            text: "Terjadi kesalahan saat menyimpan skor.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  const handleTimeUp = () => {
    Swal.fire({
      title: "Waktu Habis!",
      text: "Apakah Anda yakin untuk mengirim jawaban Anda?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      confirmButtonColor: "#6E2A7F",
      cancelButtonColor: "#EF4444",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post(
            `${import.meta.env.VITE_API_ENDPOINT}/scores`,
            {
              user_id: user.uuid,
              type: "latihan",
              chapter: 5,
              score: score,
            },
            { withCredentials: true }
          );

          if (score >= 75) {
            handleLessonComplete("/materi/bab5/latihan-bab5");
            handleLessonComplete("/materi/bab5/kuis-bab5");
          }

          navigate("/materi/bab5/hasil-latihan-bab5", {
            state: { score, totalQuestions: questions.length },
          });
        } catch (error) {
          console.error("Error saving score:", error);
          Swal.fire({
            title: "Gagal!",
            text: "Terjadi kesalahan saat menyimpan skor.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  // UI untuk halaman instruksi
  const renderInstruksi = () => (
    <div className="mx-auto max-w-4xl p-2 sm:p-4 lg:p-6 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-xl sm:text-2xl font-bold text-center">
        BAB 5 - KONTROL ALUR
      </h1>
      <section>
        <h2 className="mb-3 font-semibold text-gray-800 text-base sm:text-lg">
          Aturan
        </h2>
        <p className="mb-3 leading-relaxed text-sm sm:text-base">
          Latihan ini bertujuan untuk menguji pengetahuan Anda tentang control
          flow (if, for, switch, break, continue) dalam pemrograman C#.
        </p>
        <p className="mb-3 leading-relaxed text-sm sm:text-base">
          Terdapat {questions.length} pertanyaan yang harus dikerjakan dalam
          latihan ini. Beberapa ketentuannya sebagai berikut:
        </p>
        <ul className="mb-3 leading-relaxed list-disc list-inside text-sm sm:text-base">
          <li>Syarat nilai kelulusan: 75%</li>
          <li>Durasi ujian: 10 menit</li>
        </ul>
        <p className="mb-3 leading-relaxed text-sm sm:text-base">
          Apabila tidak memenuhi syarat kelulusan, maka Anda harus mengulang
          pengerjaan latihan kembali.
        </p>
        <p className="mb-6 leading-relaxed text-sm sm:text-base">
          Selamat Mengerjakan!
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => setShowLatihan(true)}
            className="flex items-center gap-2 px-6 py-3 text-base text-white transition-all duration-200 rounded-lg shadow-sm hover:shadow-md sm:px-8"
            style={{ backgroundColor: "#6E2A7F" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#5B1F6A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6E2A7F")
            }
          >
            <span>MULAI</span>
            <img
              src={nextIcon}
              alt="Selanjutnya"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
          </button>
        </div>
      </section>

      <section className="mt-8 sm:mt-16">
        <h3 className="pb-1 mb-3 font-semibold text-gray-800 border-b border-gray-300 text-base sm:text-lg">
          Riwayat
        </h3>
        {isLoading ? (
          <p className="text-gray-600 text-sm sm:text-base">
            Memuat riwayat...
          </p>
        ) : error ? (
          <p className="text-red-600 text-sm sm:text-base">{error}</p>
        ) : riwayat.length === 0 ? (
          <p className="text-gray-600 text-sm sm:text-base">
            Belum ada riwayat
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-600 text-sm sm:text-base">
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
                        className={`text-[10px] sm:text-xs font-semibold px-2 py-[2px] rounded ${
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
          </div>
        )}
      </section>
    </div>
  );

  // UI untuk halaman latihan
  const renderLatihan = () => (
    <div className="mx-auto max-w-6xl p-2 sm:p-4 lg:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-base sm:text-lg font-semibold text-center text-gray-800">
        LATIHAN BAB 5
      </h2>

      <div
        className="relative p-2 sm:p-4 mt-4 border rounded-lg"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.158)" }}
      >
        <h3
          className="flex items-center p-2 text-base sm:text-lg font-semibold border rounded-lg w-full sm:w-80 md:w-96"
          style={{ outline: "2px solid #6E2A7F", outlineOffset: "2px" }}
        >
          <img
            src={IconPetunjuk}
            alt="Icon"
            className="w-5 sm:w-6 h-5 sm:h-6 mr-2"
          />
          PETUNJUK MENGERJAKAN
        </h3>
        <ol className="mt-2 text-justify text-gray-600 list-decimal list-inside text-sm sm:text-base">
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

      <div className="flex flex-col lg:flex-row mt-6 gap-2 sm:gap-4 lg:items-start">
        <div className="flex flex-col mr-0 lg:mr-6 w-full lg:w-auto">
          <div className="p-2 sm:p-4 mt-2 sm:mt-5 text-center text-red-600 bg-gray-100 border rounded-lg">
            <h3 className="font-semibold text-sm sm:text-base">
              Waktu Tersisa: {Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </h3>
          </div>
          <h3 className="mt-4 sm:mt-8 text-base sm:text-lg font-semibold text-center">
            SOAL
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
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
                className="w-8 h-8 sm:w-8 sm:h-8"
              >
                {question.id}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full p-2 sm:p-4 lg:p-6 border rounded-lg">
          <h3 className="font-semibold text-sm sm:text-base">{`Soal ${questions[currentQuestionIndex].id}`}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {questions[currentQuestionIndex].prompt}
          </p>
          <div className="p-2 sm:p-4 mt-2 font-mono text-xs sm:text-sm bg-gray-100 rounded-lg">
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
                          word.includes("string") ||
                          word.includes("for") ||
                          word.includes("if") ||
                          word.includes("switch") ||
                          word.includes("case") ||
                          word.includes("break") ||
                          word.includes("continue") ||
                          word.includes("default")
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
                            className="w-20 sm:w-24 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
                            placeholder="Jawaban..."
                          />
                        </span>
                      )}
                    </>
                  ))}
              </code>
            </pre>
          </div>

          <div className="flex flex-col mt-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
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
              className="w-full sm:w-auto"
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
              className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 sm:w-auto"
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
              className="w-full sm:w-auto"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return showLatihan ? renderLatihan() : renderInstruksi();
};

export default LatihanBab5;
