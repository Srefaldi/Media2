import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert
import questionsData from "./SoalJson/BAB2.json"; // Ganti dengan path yang sesuai
import IconPetunjuk from "../../../assets/img/informasi.png";

const Kuis = () => {
  const navigate = useNavigate();
  const { handleLessonComplete } = useOutletContext();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answerStatus, setAnswerStatus] = useState([]);
  const [hasAnswered, setHasAnswered] = useState(
    Array(questionsData.length).fill(false)
  );
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  const getTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const questions = questionsData
    .map((item) => {
      try {
        const soalData = JSON.parse(item.soal_data);
        return {
          id: item.judul_soal,
          question: getTextFromHTML(soalData.pertanyaan),
          options: soalData.pilihan.map((option) =>
            getTextFromHTML(option.text)
          ),
          correctAnswer: getTextFromHTML(
            soalData.pilihan.find((option) => option.benar)?.text || ""
          ),
        };
      } catch (error) {
        console.error("Error parsing question data:", error);
        return null;
      }
    })
    .filter(Boolean);

  useEffect(() => {
    setSelectedAnswers(Array(questions.length).fill(""));
    setAnswerStatus(Array(questions.length).fill(null));

    // Timer
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
  }, [questions.length]);

  const handleAnswerChange = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const answer = selectedAnswers[currentQuestionIndex];
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (answer === "") {
      Swal.fire({
        title: "Soal Belum Dijawab!",
        text: "Silakan isi jawaban sebelum melanjutkan.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const newAnswerStatus = [...answerStatus];
    if (answer === correctAnswer) {
      if (!hasAnswered[currentQuestionIndex]) {
        setScore((prevScore) => prevScore + 10);
        newAnswerStatus[currentQuestionIndex] = "correct";
        Swal.fire({
          title: "Jawaban Anda Benar!",
          text: "Silakan lanjutkan ke soal berikutnya.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setHasAnswered((prev) => {
          const newHasAnswered = [...prev];
          newHasAnswered[currentQuestionIndex] = true;
          return newHasAnswered;
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Sudah Menjawab",
          text: "Anda sudah menjawab soal ini.",
        });
      }
    } else {
      newAnswerStatus[currentQuestionIndex] = "incorrect";
      Swal.fire({
        title: "Jawaban Salah!",
        text: "Silakan coba lagi.",
        icon: "error",
        confirmButtonText: "OK",
      });
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
      Swal.fire({
        title: "Masih Ada Soal Belum Dijawab!",
        text: "Silakan periksa kembali jawaban anda.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      if (score >= 80) {
        Swal.fire({
          title: "Selamat!",
          text: "Anda telah selesai mengerjakan kuis.",
          icon: "success",
          confirmButtonText: "Selanjutnya",
        }).then((result) => {
          if (result.isConfirmed) {
            handleLessonComplete("/materi/bab1/kuis-bab1");
            window.scrollTo(0, 0);
            navigate("/materi/bab1/rangkuman-bab1");
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
          handleLessonComplete("/materi/bab1/kuis-bab1");
          window.scrollTo(0, 0);
          navigate("/materi/bab1/rangkuman-bab1");
        } else {
          navigate("/materi/bab1/kuis-bab1");
          window.location.reload();
        }
      } else {
        navigate("/materi/bab1/error-csharp");
      }
    });
  };

  const resetQuiz = () => {
    setSelectedAnswers(Array(questions.length).fill(""));
    setAnswerStatus(Array(questions.length).fill(null));
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setHasAnswered(Array(questions.length).fill(false));
    setTimeLeft(20 * 60); // Reset time to 20 minutes in seconds
  };

  const handleQuestionSelect = (index) => {
    if (hasAnswered[index]) {
      Swal.fire({
        icon: "info",
        title: "Sudah Menjawab",
        text: "Anda sudah menjawab soal ini.",
      });
    } else {
      setCurrentQuestionIndex(index);
    }
  };

  return (
    <div className="max-w-full p-4 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-center text-gray-800">
        KUIS BAB 2
      </h2>

      <div
        className="relative p-4 mt-4 border rounded-lg"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.158)" }}
      >
        <h3
          className="flex items-center p-2 text-lg font-semibold border rounded-lg w-75"
          style={{
            outline: "2px solid #6E2A7F",
            outlineOffset: "2px",
          }}
        >
          <img src={IconPetunjuk} alt="Icon" className="w-6 h-6 mr-2" />
          PETUNJUK MENGERJAKAN
        </h3>
        <ol className="z-10 mt-2 text-justify text-gray-600 list-decimal list-inside ">
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

      <div className="flex mt-6 mr-6">
        <div className="flex flex-col">
          <div className="p-4 mt-4 mr-2 text-center text-red-600 bg-gray-100 border rounded-lg">
            <h3 className="font-semibold">
              Waktu Tersisa: {Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </h3>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-center">SOAL</h3>
          <div className="flex flex-col ml-2 mr-5">
            <div className="flex flex-row mb-2">
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
            <div className="flex flex-row">
              {questions.slice(5, 10).map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => handleQuestionSelect(index + 5)}
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
          <div className="p-4 mb-4 text-center bg-gray-100 border rounded-lg">
            <h3 className="font-semibold">SKOR : {score}</h3>
          </div>

          <h3 className="font-semibold">{`${questions[currentQuestionIndex].id}. ${questions[currentQuestionIndex].question}`}</h3>
          <div className="mt-2 mb-4">
            {questions[currentQuestionIndex].options.map((option) => (
              <div key={option} className="mb-2">
                <label
                  className={`flex items-center cursor-pointer p-3 rounded-lg border-2 transition duration-200 ${
                    selectedAnswers[currentQuestionIndex] === option
                      ? "bg-[#6E2A7F] text-white border-[#6E2A7F]"
                      : "bg-gray-100 text-gray-800 border-gray-300 hover:bg -gray-200"
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

      {isFinished && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold">Kuis Selesai!</h3>
            <p>Skor Anda: {score}</p>
            <div className="mt-4">
              {score >= 80 ? (
                <button
                  onClick={() => navigate("/materi/bab1/rangkuman-bab1")}
                  className="px-4 py-2 text-white bg-gray-500 rounded-lg"
                >
                  Selanjutnya
                </button>
              ) : (
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2 text-white bg-gray-500 rounded-lg"
                >
                  Coba Lagi
                </button>
              )}
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
    </div>
  );
};

export default Kuis;
