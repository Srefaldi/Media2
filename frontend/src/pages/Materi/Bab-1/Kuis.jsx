import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PopUpJawabanSalah from "../../../components/Home/Materi/PopUp/Latihan/PopUpSalah"; // Ganti dengan path yang sesuai
import PopUpJawabanKosong from "../../../components/Home/Materi/PopUp/Latihan/PopUpKosong"; // Ganti dengan path yang sesuai
import PopUpJawabanBenar from "../../../components/Home/Materi/PopUp/Latihan/PopUpBenar"; // Ganti dengan path yang sesuai
import PopUpSkor from "../../../components/Home/Materi/PopUp/Latihan/PopUpSkor"; // Ganti dengan path yang sesuai
import PopUpJawabanBelumSelesai from "../../../components/Home/Materi/PopUp/Latihan/PopUpBelumSelesai"; // Ganti dengan path yang sesuai
import questionsData from "./SoalJson/BAB1.json"; // Ganti dengan path yang sesuai

const Kuis = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [showCorrectNotification, setShowCorrectNotification] = useState(false);
  const [showEmptyNotification, setShowEmptyNotification] = useState(false);
  const [showIncompleteNotification, setShowIncompleteNotification] =
    useState(false);
  const [showScoreNotification, setShowScoreNotification] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answerStatus, setAnswerStatus] = useState([]);
  const [hasAnswered, setHasAnswered] = useState(
    Array(questionsData.length).fill(false)
  ); // Menyimpan status apakah soal sudah dijawab

  // Fungsi untuk mengambil teks dari HTML
  const getTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Parse questions from JSON data
  const questions = questionsData
    .map((item) => {
      try {
        const soalData = JSON.parse(item.soal_data);
        return {
          id: item.judul_soal,
          question: getTextFromHTML(soalData.pertanyaan), // Ambil teks dari HTML
          options: soalData.pilihan.map((option) =>
            getTextFromHTML(option.text)
          ), // Ambil teks dari setiap opsi
          correctAnswer: getTextFromHTML(
            soalData.pilihan.find((option) => option.benar)?.text || ""
          ), // Ambil teks dari pilihan yang benar
        };
      } catch (error) {
        console.error("Error parsing question data:", error);
        return null; // Kembalikan null jika terjadi kesalahan
      }
    })
    .filter(Boolean); // Hapus item null dari array

  useEffect(() => {
    setSelectedAnswers(Array(questions.length).fill(""));
    setAnswerStatus(Array(questions.length).fill(null));
  }, [questions.length]);

  const handleAnswerChange = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const answer = selectedAnswers[currentQuestionIndex];
    const correctAnswer = questions[currentQuestionIndex].correctAnswer; // Ambil teks dari jawaban yang benar

    if (answer === "") {
      setShowEmptyNotification(true);
      return;
    }

    const newAnswerStatus = [...answerStatus];
    if (answer === correctAnswer) {
      if (!hasAnswered[currentQuestionIndex]) {
        // Cek apakah soal sudah dijawab
        setScore((prevScore) => prevScore + 10);
        newAnswerStatus[currentQuestionIndex] = "correct";
        setShowCorrectNotification(true);
        setHasAnswered((prev) => {
          const newHasAnswered = [...prev];
          newHasAnswered[currentQuestionIndex] = true; // Tandai soal sebagai sudah dijawab
          return newHasAnswered;
        });
      }
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
      setShowIncompleteNotification(true);
    } else {
      if (score < 80) {
        setShowScoreNotification(true);
      }
      setIsFinished(true);
    }
  };

  return (
    <div className="max-w-full p-4 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-center text-gray-800">
        KUIS BAB 1
      </h2>
      <div className="p-4 mt-4 bg-gray-100 border rounded-lg">
        <h3 className="font-semibold">Petunjuk Mengerjakan Kuis</h3>
        <ol className="mt-2 text-justify text-gray-600 list-decimal list-inside">
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

      <div className="p-4 mt-4 text-center bg-gray-100 border rounded-lg">
        <h3 className="font-semibold">SKOR : {score}</h3>
      </div>

      <div className="flex mt-4">
        <div className="flex flex-col mr-6">
          <h3 className="mt-8 text-lg font-semibold text-center">SOAL</h3>
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
                className="ml-2 mr-2 text-white bg-red-500 btn"
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
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold">Kuis Selesai!</h3>
            <p>Skor Anda: {score}</p>
            <div className="mt-4">
              <button
                onClick={() => navigate("/materi /bab1/kuis-bab1")}
                className={`bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 ${
                  score >= 80 ? "block" : "hidden"
                }`}
              >
                Selanjutnya
              </button>
              <button
                onClick={() => navigate("/materi/bab1/error-csharp")}
                className="px-4 py-2 text-white bg-gray-500 rounded-lg"
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
