import React, { useState } from "react";

const Latihan = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill("")); // Array untuk menyimpan jawaban

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
      correctAnswer: '"Mari Belajar C#"',
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
      correctAnswer: "10",
    },
    {
      id: 3,
      prompt: "Lengkapilah program C# berikut untuk membuat komentar.",
      code: `public class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        /* 
        _____ 
        */ 
    } 
}`,
      correctAnswer: "buatlah komentar lebih dari satu baris",
    },
    {
      id: 4,
      prompt:
        'Tambahkan baris baru untuk mencetak "Semangat Belajar C#" setelah "Ayo Belajar".',
      code: `public class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        Console.WriteLine("Ayo Belajar"); 
        _____ 
    } 
}`,
      correctAnswer: 'Console.WriteLine("Semangat Belajar C#");',
    },
    {
      id: 5,
      prompt:
        "Lengkapilan kode program berikut agar mencetak output String “Hello” dan Integer Angka 10.",
      code: `public class Latihan 
{ 
    public static void Main(string[] args) 
    { 
        Console.WriteLine(_____); 
    } 
}`,
      correctAnswer: '"Hello " + 10',
    },
  ];

  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const question = questions[currentQuestionIndex];
    if (answers[currentQuestionIndex] === question.correctAnswer) {
      alert("Jawaban Anda benar!");
    } else {
      alert("Jawaban Anda salah, coba lagi!");
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="max-w-full mx-auto p-2 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        LATIHAN BAB 1
      </h2>

      {/* Petunjuk Mengerjakan Latihan */}
      <div className="mt-4 p-4 border rounded-lg bg-gray-100">
        <h3 className="font-semibold">Petunjuk Mengerjakan Latihan</h3>
        <ol className="list-decimal list-inside text-gray-600">
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

      <div className="mt-4 flex">
        {/* TOLONG TAMBAHKAN DISINI*/}
        <div className="flex flex-col mr-4">
          {/* Menambahkan Kalimat "SOAL" */}
          <h3 className="font-semibold text-center text-lg mt-4">SOAL</h3>
          {/* Baris Pertama */}
          <div className="flex flex-row mt-8">
            {questions.slice(0, 3).map((question, index) => (
              <button
                key={question.id}
                onClick={() => handleQuestionSelect(index)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg mx-0.5 my-1 ${
                  currentQuestionIndex === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {question.id}
              </button>
            ))}
          </div>
          {/* Baris Kedua */}
          <div className="flex flex-row">
            {questions.slice(3).map((question, index) => (
              <button
                key={question.id}
                onClick={() => handleQuestionSelect(index + 3)} // Menyesuaikan index
                className={`w-8 h-8 flex items-center justify-center rounded-lg mx-0.5 my-1 ${
                  currentQuestionIndex === index + 3
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {question.id}
              </button>
            ))}
          </div>
        </div>

        {/* Kotak untuk soal di Samping Kanan */}
        <div className="w-full p-4 border rounded-lg">
          <h3 className="font-semibold">{`Soal ${questions[currentQuestionIndex].id}`}</h3>
          <p className="text-gray-600">
            {questions[currentQuestionIndex].prompt}
          </p>
          <div className="bg-gray-100 p-4 mt-2 rounded-lg font-mono text-sm">
            <pre style={{ whiteSpace: "pre-wrap" }}>
              <code>
                {questions[currentQuestionIndex].code
                  .split("_____")
                  .map((part, index) => (
                    <>
                      {part}
                      {index <
                        questions[currentQuestionIndex].code.split("_____")
                          .length -
                          1 && (
                        <input
                          type="text"
                          value={answers[currentQuestionIndex]}
                          onChange={(e) => handleAnswerChange(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default Latihan;
