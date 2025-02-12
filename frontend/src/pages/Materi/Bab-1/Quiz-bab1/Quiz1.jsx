import React, { useState } from "react";

const Quiz = ({ onComplete }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi jawaban
    if (answer === "jawabanBenar") {
      onComplete();
    } else {
      alert("Jawaban salah, coba lagi!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Kuis</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Apa itu C#?
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border p-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Quiz;
