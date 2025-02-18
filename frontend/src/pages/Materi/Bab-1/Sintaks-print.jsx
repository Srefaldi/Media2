import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Quiz from "./Quiz-bab1/Quiz5";

const SintaksPrint = () => {
  const navigate = useNavigate();

  // State untuk bagian utama
  const [mainCode, setMainCode] = useState(
    `Console.WriteLine("Hello World!");`
  );
  const [mainOutput, setMainOutput] = useState("");

  // State untuk bagian nilai numerik
  const [numericCode, setNumericCode] = useState(
    `Console.WriteLine(1);\nConsole.WriteLine(7.5);`
  );
  const [numericOutput, setNumericOutput] = useState("");

  // State untuk bagian menggabungkan string
  const [stringConcatCode, setStringConcatCode] = useState(
    `Console.WriteLine("Hello " + "Hello");`
  );
  const [stringConcatOutput, setStringConcatOutput] = useState("");

  // State untuk bagian string dan angka
  const [stringAndNumberCode, setStringAndNumberCode] = useState(
    `Console.WriteLine("Hello " + 10);`
  );
  const [stringAndNumberOutput, setStringAndNumberOutput] = useState("");

  // State untuk bagian angka dan angka
  const [numberAndNumberCode, setNumberAndNumberCode] = useState(
    `Console.WriteLine(10 + 10);`
  );
  const [numberAndNumberOutput, setNumberAndNumberOutput] = useState("");

  // State untuk kuis
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { handleLessonComplete } = useOutletContext(); // Ambil fungsi dari konteks
  const handleBack = () => {
    navigate("/materi/bab1/struktur-eksekusi");
  };
  const handleNext = () => {
    handleLessonComplete("/materi/bab1/sintaks-print");
    navigate("/materi/bab1/sintaks-komentar");
  };

  const handleRunMain = () => {
    const trimmedCode = mainCode.trim();
    if (
      trimmedCode.startsWith("Console.WriteLine(") &&
      trimmedCode.endsWith('");')
    ) {
      const outputText = trimmedCode.slice(
        trimmedCode.indexOf('"') + 1,
        trimmedCode.lastIndexOf('"')
      );
      setMainOutput(outputText);
    } else {
      setMainOutput(
        "Format kode tidak valid. Pastikan menggunakan Console.WriteLine()."
      );
    }
  };

  const handleRunNumeric = () => {
    const trimmedCode = numericCode.trim();
    const lines = trimmedCode.split("\n");
    const outputLines = lines.map((line) => {
      if (line.startsWith("Console.WriteLine(") && line.endsWith(");")) {
        const number = line.slice(line.indexOf("(") + 1, line.lastIndexOf(")"));
        return number; // Mengembalikan angka yang dicetak
      }
      return "Format kode tidak valid.";
    });
    setNumericOutput(outputLines.join("\n"));
  };

  const handleRunStringConcat = () => {
    const trimmedCode = stringConcatCode.trim();
    if (
      trimmedCode.startsWith("Console.WriteLine(") &&
      trimmedCode.endsWith(");")
    ) {
      const outputText = trimmedCode.slice(
        trimmedCode.indexOf('"') + 1,
        trimmedCode.lastIndexOf('"')
      );
      setStringConcatOutput(outputText.replace(/" \+ "/g, " ")); // Mengganti " + " dengan spasi
    } else {
      setStringConcatOutput(
        "Format kode tidak valid. Pastikan menggunakan Console.WriteLine()."
      );
    }
  };

  const handleRunStringAndNumber = () => {
    const trimmedCode = stringAndNumberCode.trim();
    if (
      trimmedCode.startsWith("Console.WriteLine(") &&
      trimmedCode.endsWith(");")
    ) {
      const outputText = trimmedCode.slice(
        trimmedCode.indexOf('"') + 1,
        trimmedCode.lastIndexOf('"')
      );
      const number = trimmedCode.match(/\d+/); // Mencari angka dalam kode
      setStringAndNumberOutput(`${outputText} ${number}`); // Menggabungkan string dan angka
    } else {
      setStringAndNumberOutput(
        "Format kode tidak valid. Pastikan menggunakan Console.WriteLine()."
      );
    }
  };

  const handleRunNumberAndNumber = () => {
    const trimmedCode = numberAndNumberCode.trim();
    if (
      trimmedCode.startsWith("Console.WriteLine(") &&
      trimmedCode.endsWith(");")
    ) {
      const expression = trimmedCode.slice(
        trimmedCode.indexOf("(") + 1,
        trimmedCode.lastIndexOf(")")
      );
      const result = eval(expression); // Menghitung hasil dari ekspresi
      setNumberAndNumberOutput(result); // Hanya menampilkan hasil
    } else {
      setNumberAndNumberOutput(
        "Format kode tidak valid. Pastikan menggunakan Console.WriteLine()."
      );
    }
  };

  const handleQuizCompletion = () => {
    setQuizCompleted(true); // Set quiz as completed
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">1.5 Sintaks Print</h2>
      <h3 className="text-xl font-semibold mt-4">
        Menampilkan hasil dalam program menggunakan fungsi
      </h3>
      <h4 className="text-xl font-semibold mt-4">Console.WriteLine()</h4>

      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify mb-4">
        <code>Console.WriteLine()</code> dalam bahasa pemrograman C# adalah
        sebuah command untuk menampilkan hasil di dalam (). Untuk menampilkan
        sebuah karakter atau kalimat menggunakan fungsi{" "}
        <code>Console.WriteLine()</code> maka karakter atau kalimat tersebut
        harus dilingkupi dengan tanda kutip ("").
      </p>
      <p className="text-gray-700 text-justify mb-2">
        Cobalah kode program pada compiler:
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Compiler</h2>
          <textarea
            className="w-full h-32 border border-gray-300 rounded-lg p-2"
            value={mainCode}
            onChange={(e) => setMainCode(e.target.value)} // Update state saat textarea berubah
          />
          <button
            onClick={handleRunMain}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Run
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Output</h2>
          <pre className="border border-gray-300 rounded-lg p-2 h-32 overflow-auto">
            {mainOutput}
          </pre>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4">
        Contoh Console.WriteLine Nilai Numerik
      </h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify mb-4">
        Untuk mencetak nilai numerik, masukkan angka tanpa tanda kutip.
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Compiler</h2>
          <textarea
            className="w-full h-32 border border-gray-300 rounded-lg p-2"
            value={numericCode}
            onChange={(e) => setNumericCode(e.target.value)} // Update state saat textarea berubah
          />
          <button
            onClick={handleRunNumeric}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Run
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Output</h2>
          <pre className="border border-gray-300 rounded-lg p-2 h-32 overflow-auto">
            {numericOutput}
          </pre>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4">
        Contoh Menggabungkan String
      </h3>
      <p className="text-gray -700 bg-white p-4 rounded-lg shadow-md text-justify mb-4">
        Anda dapat menggabungkan string dan string lainnya.
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Compiler</h2>
          <textarea
            className="w-full h-32 border border-gray-300 rounded-lg p-2"
            value={stringConcatCode}
            onChange={(e) => setStringConcatCode(e.target.value)} // Update state saat textarea berubah
          />
          <button
            onClick={handleRunStringConcat}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Run
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Output</h2>
          <pre className="border border-gray-300 rounded-lg p-2 h-32 overflow-auto">
            {stringConcatOutput}
          </pre>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4">Contoh String dan Angka</h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify mb-4">
        Anda juga dapat menggabungkan string dan angka.
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Compiler</h2>
          <textarea
            className="w-full h-32 border border-gray-300 rounded-lg p-2"
            value={stringAndNumberCode}
            onChange={(e) => setStringAndNumberCode(e.target.value)} // Update state saat textarea berubah
          />
          <button
            onClick={handleRunStringAndNumber}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Run
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Output</h2>
          <pre className="border border-gray-300 rounded-lg p-2 h-32 overflow-auto">
            {stringAndNumberOutput}
          </pre>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4">Contoh Angka dan Angka</h3>
      <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify mb-4">
        Anda juga dapat menggabungkan angka dan angka lainnya.
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Compiler</h2>
          <textarea
            className="w-full h-32 border border-gray-300 rounded-lg p-2"
            value={numberAndNumberCode}
            onChange={(e) => setNumberAndNumberCode(e.target.value)} // Update state saat textarea berubah
          />
          <button
            onClick={handleRunNumberAndNumber}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Run
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Output</h2>
          <pre className="border border-gray-300 rounded-lg p-2 h-32 overflow-auto">
            {numberAndNumberOutput}
          </pre>
        </div>
      </div>

      {/* Komponen Kuis */}
      {!quizCompleted && <Quiz onCorrectAnswer={handleQuizCompletion} />}

      {/* Tombol Next dan Back */}
      {quizCompleted && (
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Kembali
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SintaksPrint;
