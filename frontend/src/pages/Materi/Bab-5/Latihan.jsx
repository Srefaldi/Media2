import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import "../style/latihan.css";
import IconPetunjuk from "../../../assets/img/informasi.png";

const Latihan = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill([""])); // Ubah menjadi array dua dimensi
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill(null));
  const [hasAnswered, setHasAnswered] = useState(Array(5).fill(false)); // Track if the question has been answered
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeUp(); // Call finish function when time is up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleAnswerChange = (value, inputIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = [...newAnswers[currentQuestionIndex]]; // Copy the current answer array
    newAnswers[currentQuestionIndex][inputIndex] = value; // Simpan jawaban berdasarkan index
    setAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const question = questions[currentQuestionIndex];
    const userAnswers = answers[currentQuestionIndex];

    // Cek apakah jawaban kosong
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
        setScore((prevScore) => prevScore + 20); // Tambah 20 poin jika jawaban benar
        const newAnswerStatus = [...answerStatus];
        newAnswerStatus[currentQuestionIndex] = "correct"; // Tandai jawaban benar
        setAnswerStatus(newAnswerStatus);
        setHasAnswered((prev) => {
          const newHasAnswered = [...prev];
          newHasAnswered[currentQuestionIndex] = true; // Tandai soal sudah dijawab
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
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentQuestionIndex] = "incorrect";
      setAnswerStatus(newAnswerStatus);
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Silakan coba lagi.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleQuestionSelect = (index) => {
    // Cek jika soal sudah dijawab
    if (hasAnswered[index]) {
      Swal.fire({
        icon: "info",
        title: "Sudah Menjawab",
        text: "Anda sudah menjawab soal ini.",
      });
    } else {
      setCurrentQuestionIndex(index);
      // Reset jawaban untuk soal yang dipilih
      const newAnswers = [...answers];
      newAnswers[index] = Array(questions[index].correctAnswer.length).fill(""); // Reset jawaban untuk soal yang sedang dipilih
      setAnswers(newAnswers);
    }
  };

  const handleFinish = () => {
    // Cek apakah ada soal yang belum dijawab
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
      // Jika semua soal sudah dijawab, lanjutkan
      if (score >= 80) {
        Swal.fire({
          title: "Selamat!",
          text: "Anda telah selesai mengerjakan latihan.",
          icon: "success",
          confirmButtonText: "Selanjutnya",
        }).then((result) => {
          if (result.isConfirmed) {
            handleLessonComplete("/materi/bab5/latihan-bab5");
            window.scrollTo(0, 0);
            navigate("/materi/bab5/kuis-bab5");
          }
        });
      } else {
        showFinalScore();
      }
    }
  };

  const handleTimeUp = () => {
    clearInterval(); // Stop the timer
    Swal.fire({
      title: "Waktu Habis!",
      text: `Skor Anda: ${score}`,
      icon: "warning",
      confirmButtonText: "OK",
    }).then(() => {
      showFinalScore(); // Call finish function to show the score
    });
  };

  const showFinalScore = () => {
    Swal.fire({
      title: "WAKTU HABIS",
      text: "Skor anda tidak mencukupi, Silahkan Coba Kembali.",
      icon: score >= 80 ? "success" : "error",
      showCancelButton: true,
      confirmButtonText: score >= 80 ? "Selanjutnya" : "Coba Lagi",
      cancelButtonText: "Kembali",
    }).then((result) => {
      if (result.isConfirmed) {
        if (score >= 80) {
          handleLessonComplete("/materi/bab5/latihan-bab5");
          window.scrollTo(0, 0);
          navigate("/materi/bab5/kuis-bab5");
        } else {
          navigate("/materi/bab5/latihan-bab5");
          window.location.reload();
        }
      } else {
        navigate("/materi/bab5/perulangan-bersarang");
      }
    });
  };

  return (
    <div className="max-w-full p-2 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-center text-gray-800">
        {" "}
        LATIHAN BAB 5 - STRUKTUR KONTROL{" "}
      </h2>

      {/* Petunjuk Mengerjakan Latihan */}
      <div
        className="relative p-4 mt-4 border rounded-lg"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.158)" }}
      >
        <h3
          className="flex items-center p-2 text-lg font-semibold border rounded-lg w-80"
          style={{
            outline: "2px solid #6E2A7F",
            outlineOffset: "2px",
          }}
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
                transition: "background-color 0.2s",
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
                transition: "background-color 0.2s, border-color 0.2s",
                border: "2px solid #6E2A7F",
                cursor: "not-allowed",
                opacity: 0.6,
              }}
              className="ml-2"
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
          <div className="p-4 mt-2 font-mono text-sm bg-gray-100 rounded -lg">
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
                          word.includes("Console")
                        ) {
                          return (
                            <span key={wordIndex} className="keyword">
                              {word}{" "}
                            </span>
                          );
                        } else if (word.includes('"')) {
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
                          {questions[currentQuestionIndex].correctAnswer
                            .length > 1 ? (
                            <input
                              type="text"
                              value={answers[currentQuestionIndex][index] || ""}
                              onChange={(e) =>
                                handleAnswerChange(e.target.value, index)
                              }
                              className="w-20 px-2 py-1 mb-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
                              placeholder="Jawaban..."
                            />
                          ) : (
                            <input
                              type="text"
                              value={answers[currentQuestionIndex][0] || ""}
                              onChange={(e) =>
                                handleAnswerChange(e.target.value, 0)
                              }
                              className="w-20 px-2 py-1 mb-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
                              placeholder="Jawaban..."
                            />
                          )}
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
              ).fill(""); // Reset jawaban untuk soal yang sedang dipilih
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
};

export default Latihan;
