import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import "../style/latihan.css";
import IconPetunjuk from "../../../assets/img/informasi.png";

const Latihan = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill([""])); // Ubah menjadi array dua dimensi
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(Array(10).fill(null));
  const [hasAnswered, setHasAnswered] = useState(Array(10).fill(false)); // Track if the question has been answered
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  const questions = [
    {
      id: 1,
      prompt:
        'Lengkapi kode berikut untuk menampilkan output "Mari Belajar C#".',
      code: `class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        Console.WriteLine(_____); 
    } 
}`,
      correctAnswer: ['"Mari Belajar C#"'],
    },
    {
      id: 2,
      prompt: "Lengkapi program C# berikut untuk mencetak angka 10 ke layar.",
      code: `class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        Console.WriteLine(_____); 
    } 
}`,
      correctAnswer: ["10"],
    },
    {
      id: 3,
      prompt: "Lengkapilah program C# berikut untuk membuat komentar.",
      code: `class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        _____
        buatlah komentar ini 
        lebih dari satu baris
        _____
    } 
}`,
      correctAnswer: ["/*", "*/"],
    },
    {
      id: 4,
      prompt:
        'Tambahkan baris baru untuk mencetak "Semangat Belajar C#" setelah "Ayo Belajar".',
      code: `class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        Console.WriteLine("Ayo Belajar"); 
        _____ 
    } 
}`,
      correctAnswer: ['Console.WriteLine("Semangat Belajar C#");'],
    },
    {
      id: 5,
      prompt:
        "Lengkapilan kode program berikut agar mencetak output String “Hello” dan Integer Angka 10.",
      code: `class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        Console.WriteLine(_____); 
    } 
}`,
      correctAnswer: ['"Hello " + 10'],
    },
    {
      id: 6,
      prompt:
        'Lengkapi kode berikut agar dapat menampilkan pesan "Selamat datang di C#".',
      code: `class Program {
    public static void Main(string[] args) {
        _____;
    }
}`,
      correctAnswer: ['Console.WriteLine("Selamat datang di C#");'],
    },
    {
      id: 7,
      prompt:
        "Lengkapi kode berikut untuk menampilkan output yang benar dengan menggunakan struktur eksekusi kode berurutan.",
      code: `class Program {
    public static void Main(string[] args) {
        Console.WriteLine("Langkah 1: Memulai Program");
        Console.WriteLine(_____);
        Console.WriteLine("Langkah 3: Program Selesai");
    }
}`,
      correctAnswer: ['"Langkah 2: Proses Berjalan"'],
    },
    {
      id: 8,
      prompt:
        'Lengkapi kode berikut agar dapat menampilkan pesan "Program C# Pertama Saya" menggunakan metode Main().',
      code: `class Program {
    public static  _____ {
        Console.WriteLine("Program C# Pertama Saya");
    }
}`,
      correctAnswer: ["void Main(string[] args)"],
    },
    {
      id: 9,
      prompt:
        "Lengkapi kode berikut agar program dapat mencetak angka 10 dan 5.5.",
      code: `class Program {
    public static void Main(string[] args) {
        Console.WriteLine(_____);
        Console.WriteLine(_____);
    }
}`,
      correctAnswer: ["10", "5.5"],
    },
    {
      id: 10,
      prompt:
        'Lengkapi kode berikut agar dapat menampilkan output "Hello, User!" dengan menggunakan variabel dan konkatenasi string.',
      code: `class Program {
    public static void Main(string[] args) {
        string nama = "User";
        Console.WriteLine("Hello, " + _____ + "!");
    }
}`,
      correctAnswer: ["nama"],
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
      newAnswers[index] = index === 2 || index === 8 ? ["", ""] : [""]; // Reset jawaban untuk soal yang sedang dipilih
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
            handleLessonComplete("/materi/bab1/latihan-bab1");
            window.scrollTo(0, 0);
            navigate("/materi/bab1/kuis-bab1");
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
          handleLessonComplete("/materi/bab1/latihan-bab1");
          window.scrollTo(0, 0);
          navigate("/materi/bab1/kuis-bab1");
        } else {
          navigate("/materi/bab1/latihan-bab1");
          window.location.reload();
        }
      } else {
        navigate("/materi/bab1/error-csharp");
      }
    });
  };

  return (
    <div className="max-w-full p-2 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-center text-gray-800">
        LATIHAN BAB 1
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
            Jawablah soal-soal di bawah ini dengan mengisikannya pada input an
            yang tersedia.
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
            {questions.slice(0, 5).map((question, index) => (
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
          <div className="flex flex-row mt-2">
            {questions.slice(5, 10).map((question, index) => (
              <button
                key={question.id}
                onClick={() => handleQuestionSelect(index + 5)} // Adjust index for second row
                style={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  margin: "0.125rem",
                  backgroundColor:
                    currentQuestionIndex === index + 5
                      ? "#6E2A7F"
                      : answerStatus[index + 5] === "correct"
                      ? "#10B981"
                      : answerStatus[index + 5] === "incorrect"
                      ? "#EF4444"
                      : "#D1D5DB",
                  color:
                    currentQuestionIndex === index + 5 ||
                    answerStatus[index + 5] === "correct" ||
                    answerStatus[index + 5] === "incorrect"
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
                  .split("_____")
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
                        questions[currentQuestionIndex].code.split("_____")
                          .length -
                          1 && (
                        <span>
                          {currentQuestionIndex === 2 ||
                          currentQuestionIndex === 8 ? (
                            <input
                              type="text"
                              value={answers[currentQuestionIndex][index] || ""}
                              onChange={(e) =>
                                handleAnswerChange(e.target.value, index)
                              }
                              className="w-20 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
                              placeholder="Jawaban..."
                            />
                          ) : (
                            <input
                              type="text"
                              value={answers[currentQuestionIndex][0] || ""}
                              onChange={(e) =>
                                handleAnswerChange(e.target.value, 0)
                              }
                              className="w-20 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
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
              newAnswers[currentQuestionIndex] =
                currentQuestionIndex === 2 || currentQuestionIndex === 8
                  ? ["", ""]
                  : [""]; // Reset jawaban untuk soal yang sedang dipilih
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
