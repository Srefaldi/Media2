import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUpJawabanSalah from "../../../components/Home/Materi/PopUp/Latihan/PopUpSalah"; // Ganti dengan path yang sesuai
import PopUpJawabanKosong from "../../../components/Home/Materi/PopUp/Latihan/PopUpKosong"; // Ganti dengan path yang sesuai
import PopUpSkor from "../../../components/Home/Materi/PopUp/Latihan/PopUpSkor"; // Ganti dengan path yang sesuai
import PopUpJawabanBelumSelesai from "../../../components/Home/Materi/PopUp/Latihan/PopUpBelumSelesai"; // Ganti dengan path yang sesuai
import PopUpJawabanBenar from "../../../components/Home/Materi/PopUp/Latihan/PopUpBenar";
import "../style/latihan.css";
import IconPetunjuk from "../../../assets/img/informasi.png";
const Latihan = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(""));
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill(null));
  const [isFinished, setIsFinished] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showEmptyNotification, setShowEmptyNotification] = useState(false);
  const [showScoreNotification, setShowScoreNotification] = useState(false);
  const [showIncompleteNotification, setShowIncompleteNotification] =
    useState(false); // State untuk notifikasi jawaban belum selesai
  const [showCorrectNotification, setShowCorrectNotification] = useState(false);

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
  ];

  const handleAnswerChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = newAnswers[currentQuestionIndex] || []; // Pastikan array ada
    newAnswers[currentQuestionIndex][index] = value; // Simpan jawaban berdasarkan index
    setAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const question = questions[currentQuestionIndex];
    const userAnswers = answers[currentQuestionIndex] || [];

    // Cek apakah jawaban kosong
    if (userAnswers.every((answer) => answer === "")) {
      setShowEmptyNotification(true); // Tampilkan notifikasi jika jawaban kosong
      return;
    }

    const isCorrect =
      userAnswers.length === question.correctAnswer.length &&
      userAnswers.every(
        (answer, index) => answer === question.correctAnswer[index]
      );

    if (isCorrect) {
      setScore(score + 20); // Tambah 20 poin jika jawaban benar
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentQuestionIndex] = "correct"; // Tandai jawaban benar
      setAnswerStatus(newAnswerStatus);
      setShowCorrectNotification(true); // Tampilkan pop-up jawaban benar
    } else {
      setShowNotification(true); // Tampilkan notifikasi jika salah
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentQuestionIndex] = "incorrect"; // Tandai jawaban salah
      setAnswerStatus(newAnswerStatus);
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Fungsi untuk mereset jawaban untuk soal yang sedang dipilih
  const resetAnswerForCurrentQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = ""; // Reset jawaban untuk soal yang sedang dipilih
    setAnswers(newAnswers);
  };

  // Fungsi untuk menangani tombol selesai
  const handleFinish = () => {
    // Cek apakah ada soal yang belum dijawab
    const hasIncompleteAnswers = answers.some((answer) => answer === "");
    if (hasIncompleteAnswers) {
      setShowIncompleteNotification(true); // Tampilkan pop-up jika ada soal yang belum dijawab
      return;
    }

    if (score < 80) {
      setShowScoreNotification(true); // Tampilkan pop-up skor jika di bawah 80
    }
    setIsFinished(true);
  };

  // Fungsi untuk menangani tombol Next
  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab1/kuis-bab1");
  };

  // Fungsi untuk menangani tombol Back
  const handleBack = () => {
    window.scrollTo(0, 0);
    navigate("/materi/bab1/error-csharp");
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
            Jawablah soal-soal di bawah ini dengan mengisikannya pada inputan
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
        <div className="flex flex-col mr-6">
          <h3 className="mt-8 text-lg font-semibold text-center">SOAL</h3>
          <div className="flex flex-row">
            {questions.slice(0, 3).map((question, index) => (
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
          <div className="flex flex-row">
            {questions.slice(3).map((question, index) => (
              <button
                key={question.id}
                onClick={() => handleQuestionSelect(index + 3)} // Menyesuaikan index
                style={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  margin: "0.125rem",
                  backgroundColor:
                    currentQuestionIndex === index + 3
                      ? "#6E2A7F"
                      : answerStatus[index + 3] === "correct"
                      ? "#10B981"
                      : answerStatus[index + 3] === "incorrect"
                      ? "#EF4444"
                      : "#D1D5DB",
                  color:
                    currentQuestionIndex === index + 3 ||
                    answerStatus[index + 3] === "correct" ||
                    answerStatus[index + 3] === "incorrect"
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
          {/* Tampilkan Skor */}
          <div className="p-4 mt-4 text-center bg-gray-100 border rounded-lg">
            <h3 className="font-semibold">SKOR : {score}</h3>
          </div>
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
                        <input
                          type="text"
                          value={
                            answers[currentQuestionIndex]
                              ? answers[currentQuestionIndex][index]
                              : ""
                          }
                          onChange={(e) =>
                            handleAnswerChange(e.target.value, index)
                          }
                          className="w-20 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
                          placeholder="Jawaban..."
                        />
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
            onClick={resetAnswerForCurrentQuestion}
            className="px-4 py-2 mt-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Hapus Jawaban
          </button>
          <button
            onClick={handleFinish}
            style={{
              backgroundColor: "white", // Warna latar belakang putih
              color: "#6E2A7F", // Warna teks sesuai tema
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s, border-color 0.2s",
              border: "2px solid #6E2A7F", // Outline border dengan warna tema
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e0e0e0"; // Warna abu-abu saat hover
              e.currentTarget.style.borderColor = "#5B1F6A"; // Warna border lebih gelap saat hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white"; // Kembali ke warna latar belakang putih
              e.currentTarget.style.borderColor = "#6E2A7F"; // Kembali ke warna border tema
            }}
            className="ml-2"
          >
            Selesai
          </button>
          {isFinished && (
            <div className="mt-4">
              <button
                onClick={handleNext}
                className={`bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 ${
                  score >= 80 ? "block" : "hidden"
                }`}
              >
                Selanjutnya
              </button>
              <button
                onClick={handleBack}
                className="px-4 py-2 text-white bg-gray-500 rounded-lg"
              >
                Kembali
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notifikasi jika jawaban salah */}
      {showNotification && (
        <PopUpJawabanSalah onClose={() => setShowNotification(false)} />
      )}
      {/* Notifikasi jika jawaban kosong */}
      {showEmptyNotification && (
        <PopUpJawabanKosong onClose={() => setShowEmptyNotification(false)} />
      )}
      {/* Notifikasi jika skor di bawah 80 */}
      {showScoreNotification && (
        <PopUpSkor onClose={() => setShowScoreNotification(false)} />
      )}
      {/* Notifikasi jika ada jawaban yang belum selesai */}
      {showIncompleteNotification && (
        <PopUpJawabanBelumSelesai
          onClose={() => setShowIncompleteNotification(false)}
        />
      )}
      {/* Notifikasi jika jawaban benar */}
      {showCorrectNotification && (
        <PopUpJawabanBenar onClose={() => setShowCorrectNotification(false)} />
      )}
    </div>
  );
};

export default Latihan;
