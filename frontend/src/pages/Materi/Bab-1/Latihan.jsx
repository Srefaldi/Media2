import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Pastikan untuk mengimpor useNavigate
import "../style/latihan.css"; // Pastikan untuk mengimpor file CSS

const Latihan = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill("")); // Array untuk menyimpan jawaban
  const [score, setScore] = useState(0); // State untuk menyimpan skor
  const [answerStatus, setAnswerStatus] = useState(Array(5).fill(null)); // Status jawaban untuk setiap soal
  const [isFinished, setIsFinished] = useState(false); // Status selesai

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
      correctAnswer: ["/*", "*/"], // Menyimpan jawaban yang benar sebagai array
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
    const isCorrect =
      userAnswers.length === question.correctAnswer.length &&
      userAnswers.every(
        (answer, index) => answer === question.correctAnswer[index]
      );

    if (isCorrect) {
      alert("Jawaban Anda benar!");
      setScore(score + 20); // Tambah 20 poin jika jawaban benar
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentQuestionIndex] = "correct"; // Tandai jawaban benar
      setAnswerStatus(newAnswerStatus);
    } else {
      alert("Jawaban Anda salah, coba lagi!");
      const newAnswerStatus = [...answerStatus];
      newAnswerStatus[currentQuestionIndex] = "incorrect"; // Tandai jawaban salah
      setAnswerStatus(newAnswerStatus);
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Fungsi untuk mereset jawaban
  const resetAnswers = () => {
    setAnswers(Array(5).fill("")); // Mengatur ulang jawaban ke nilai awal
    setScore(0); // Reset skor ke 0
    setAnswerStatus(Array(5).fill(null)); // Reset status jawaban
    setIsFinished(false); // Reset status selesai
  };

  // Fungsi untuk menangani tombol selesai
  const handleFinish = () => {
    if (score < 80) {
      alert("Skor Anda di bawah 80. Silakan baca ulang materi.");
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
    <div className="max-w-full mx-auto p-2 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        LATIHAN BAB 1
      </h2>

      {/* Petunjuk Mengerjakan Latihan */}
      <div className="mt-4 p-4 border rounded-lg bg-gray-100">
        <h3 className="font-semibold">Petunjuk Mengerjakan Latihan</h3>
        <ol className="list-decimal list-inside text-gray-600 text-justify">
          <li>
            Jawablah soal-soal di bawah ini dengan mengisikannya pada inputan
            yang tersedia.
          </li>
          <li>Tekan tombol cek jawaban untuk mengecek jawaban.</li>
          <li>
            Apabila notifikasi berwarna Merah jawaban salah, dan apabila
            berwarna Hijau jawaban benar.
          </li>
        </ol>
      </div>

      <div className="mt-6 flex">
        <div className="flex flex-col mr-6">
          <h3 className="font-semibold text-center text-lg mt-8">SOAL</h3>
          <div className="flex flex-row">
            {questions.slice(0, 3).map((question, index) => (
              <button
                key={question.id}
                onClick={() => handleQuestionSelect(index)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg mx-0.5 my-1 ${
                  currentQuestionIndex === index
                    ? "bg-blue-500 text-white"
                    : answerStatus[index] === "correct"
                    ? "bg-green-500 text-white"
                    : answerStatus[index] === "incorrect"
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
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
                className={`w-8 h-8 flex items-center justify-center rounded-lg mx-0.5 my-1 ${
                  currentQuestionIndex === index + 3
                    ? "bg-blue-500 text-white"
                    : answerStatus[index + 3] === "correct"
                    ? "bg-green-500 text-white"
                    : answerStatus[index + 3] === "incorrect"
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {question.id}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full p-4 border rounded-lg">
          {/* Tampilkan Skor */}
          <div className="mt-4 p-4 border rounded-lg bg-gray-100 text-center">
            <h3 className="font-semibold">SKOR ANDA: {score}</h3>
          </div>
          <h3 className="font-semibold">{`Soal ${questions[currentQuestionIndex].id}`}</h3>
          <p className="text-gray-600">
            {questions[currentQuestionIndex].prompt}
          </p>
          <div className="bg-gray-100 p-4 mt-2 rounded-lg font-mono text-sm">
            <pre className="code-block">
              <code>
                {questions[currentQuestionIndex].code
                  .split("_____")
                  .map((part, index) => (
                    <>
                      {part.split(" ").map((word, wordIndex) => {
                        // Menentukan warna berdasarkan kata
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
                          className="border border-gray-400 px-2 py-1 w-20 rounded-md focus:ring-2 focus:ring-blue-300"
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
            className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-green-600"
          >
            Cek Jawaban
          </button>
          <button
            onClick={resetAnswers}
            className="bg-red-500 text-white px-4 py-2 mt-2 ml-2 rounded-lg hover:bg-red-600"
          >
            Reset Jawaban
          </button>
          <button
            onClick={handleFinish}
            className="bg-blue-500 text-white px-4 py-2 mt-2 ml-2 rounded-lg hover:bg-blue-600"
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
                Next
              </button>
              <button
                onClick={handleBack}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Latihan;
