import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUpJawabanSalah from "../../../components/Home/Materi/PopUp/Latihan/PopUpSalah"; // Ganti dengan path yang sesuai
import PopUpJawabanKosong from "../../../components/Home/Materi/PopUp/Latihan/PopUpKosong"; // Ganti dengan path yang sesuai
import PopUpJawabanBenar from "../../../components/Home/Materi/PopUp/Latihan/PopUpBenar"; // Ganti dengan path yang sesuai
import PopUpSkor from "../../../components/Home/Materi/PopUp/Latihan/PopUpSkor"; // Ganti dengan path yang sesuai
import PopUpJawabanBelumSelesai from "../../../components/Home/Materi/PopUp/Latihan/PopUpBelumSelesai"; // Ganti dengan path yang sesuai
import questions from "./SoalJson/KuisBab1.json"; // Ganti dengan path yang sesuai

const Kuis = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [showCorrectNotification, setShowCorrectNotification] = useState(false);
  const [showEmptyNotification, setShowEmptyNotification] = useState(false);
  const [showIncompleteNotification, setShowIncompleteNotification] =
    useState(false);
  const [showScoreNotification, setShowScoreNotification] = useState(false); // State untuk pop-up skor
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(
    Array(questions.length).fill(null)
  );

  const handleAnswerChange = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const answer = selectedAnswers[currentQuestionIndex];
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (answer === "") {
      setShowEmptyNotification(true);
      return;
    }

    const newAnswerStatus = [...answerStatus];
    if (answer === correctAnswer) {
      setScore((prevScore) => prevScore + 10);
      newAnswerStatus[currentQuestionIndex] = "correct";
      setShowCorrectNotification(true);
    } else {
      newAnswerStatus[currentQuestionIndex] = "incorrect";
      setShowNotification(true);
    }
    setAnswerStatus(newAnswerStatus);
  };

  const resetAnswerForCurrentQuestion = () => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = "";
    setSelectedAnswers(newAnswers);
  };

  const handleFinish = () => {
    const hasIncompleteAnswers = selectedAnswers.some(
      (answer) => answer === ""
    );
    if (hasIncompleteAnswers) {
      setShowIncompleteNotification(true); // Tampilkan pop-up jika ada soal yang belum dijawab
    } else {
      if (score < 80) {
        setShowScoreNotification(true); // Tampilkan pop-up skor jika di bawah 80
      }
      setIsFinished(true); // Tandai kuis selesai
    }
  };

  return (
    <div className="max-w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        KUIS BAB 1
      </h2>
      <div className="mt-4 p-4 border rounded-lg bg-gray-100">
        <h3 className="font-semibold">Petunjuk Mengerjakan Kuis</h3>
        <ol className="list-decimal list-inside text-gray-600 text-justify mt-2">
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

      <div className="mt-4 p-4 border rounded-lg bg-gray-100 text-center">
        <h3 className="font-semibold">SKOR : {score}</h3>
      </div>

      <div className="mt-4 flex">
        <div className="flex flex-col mr-6">
          <h3 className="font-semibold text-center text-lg mt-8">SOAL</h3>
          <div className="flex flex-col">
            <div className="flex flex-row mb-2">
              {questions.slice(0, 5).map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestionIndex(index)}
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
              {questions.slice(5, 10).map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestionIndex(index + 5)}
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
        </div>

        <div className="w-full p-4 border rounded-lg">
          <h3 className="font-semibold">{`${questions[currentQuestionIndex].id}. ${questions[currentQuestionIndex].question}`}</h3>
          <div className="mt-2 mb-4">
            {questions[currentQuestionIndex].options.map((option) => (
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
            ))}
            <div className="flex justify-start mt-4">
              <button
                onClick={checkAnswers}
                className="btn"
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
                className="btn bg-red-500 text-white ml-2 mr-2"
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  transition: "background-color 0.2s",
                }}
              >
                Hapus Jawaban
              </button>
              <button
                onClick={handleFinish}
                className="btn"
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
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      </div>

      {showNotification && (
        <PopUpJawabanSalah onClose={() => setShowNotification(false)} />
      )}
      {showEmptyNotification && (
        <PopUpJawabanKosong onClose={() => setShowEmptyNotification(false)} />
      )}
      {showCorrectNotification && (
        <PopUpJawabanBenar onClose={() => setShowCorrectNotification(false)} />
      )}
      {showIncompleteNotification && (
        <PopUpJawabanBelumSelesai
          onClose={() => setShowIncompleteNotification(false)}
        />
      )}
      {isFinished && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold">Kuis Selesai!</h3>
            <p>Skor Anda: {score}</p>
            <div className="mt-4">
              <button
                onClick={() => navigate("/materi/bab1/kuis-bab1")}
                className={`bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 ${
                  score >= 80 ? "block" : "hidden"
                }`}
              >
                Selanjutnya
              </button>
              <button
                onClick={() => navigate("/materi/bab1/error-csharp")}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
      {showScoreNotification && (
        <PopUpSkor onClose={() => setShowScoreNotification(false)} />
      )}
    </div>
  );
};

export default Kuis;
