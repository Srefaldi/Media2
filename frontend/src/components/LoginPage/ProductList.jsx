import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEvaluations,
  getQuestionsByEvaluation,
  deleteQuestion,
} from "../../features/authSlice.js";

const EvaluationList = () => {
  const dispatch = useDispatch();
  const { evaluations, questions, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter soal berdasarkan pencarian
  const filteredQuestions = questions.filter((question) =>
    question?.question_text
      ? question.question_text.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
  const currentQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    dispatch(getEvaluations());
  }, [dispatch]);

  useEffect(() => {
    if (selectedEvaluation) {
      dispatch(getQuestionsByEvaluation(selectedEvaluation));
    } else {
      // Jika tidak ada evaluasi yang dipilih, kosongkan soal
      dispatch({
        type: "questions/getQuestionsByEvaluation/fulfilled",
        payload: { questions: [] },
      });
    }
  }, [selectedEvaluation, dispatch]);

  // Log untuk debugging
  useEffect(() => {
    console.log("Evaluations:", evaluations);
    console.log("Selected Evaluation:", selectedEvaluation);
    console.log("Questions:", questions);
    console.log("Filtered Questions:", filteredQuestions);
    console.log("Current Questions:", currentQuestions);
    console.log("Is Error:", isError, "Message:", message);
  }, [
    evaluations,
    selectedEvaluation,
    questions,
    filteredQuestions,
    currentQuestions,
    isError,
    message,
  ]);

  // Redirect ke login jika sesi kadaluarsa
  useEffect(() => {
    if (isError && message === "Mohon login ke akun anda") {
      window.location.href = "/login";
    }
  }, [isError, message]);

  const handleEvaluationChange = (e) => {
    setSelectedEvaluation(e.target.value);
    setCurrentPage(1);
  };

  const handleDeleteQuestion = (questionId) => {
    dispatch(deleteQuestion(questionId));
  };

  const renderHeader = () => (
    <thead>
      <tr className="border-b border-gray-200">
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          NO
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          BAB
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          SOAL
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          A
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          B
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          C
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          D
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          E
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          JAWABAN
        </th>
        <th className="px-3 py-2 text-base font-semibold text-center align-middle select-none">
          AKSI
        </th>
      </tr>
    </thead>
  );

  const renderBody = () => (
    <tbody>
      {currentQuestions.length === 0 ? (
        <tr>
          <td
            colSpan="10"
            className="px-3 py-2 text-base text-center text-gray-500"
          >
            Tidak ada soal untuk bab/evaluasi ini.
          </td>
        </tr>
      ) : (
        currentQuestions.map((question, index) => (
          <tr key={question.id} className="border-b border-gray-200">
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {(currentPage - 1) * itemsPerPage + index + 1}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {evaluations.find(
                (evaluation) => evaluation.id === question.evaluation_id
              )?.type === "bab"
                ? `Bab ${
                    evaluations.find(
                      (evaluation) => evaluation.id === question.evaluation_id
                    )?.chapter
                  }`
                : "Evaluasi Akhir"}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {question.question_text}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {question.option_a}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {question.option_b}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {question.option_c}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {question.option_d}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {question.option_e}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              {question.correct_answer}
            </td>
            <td className="px-3 py-2 font-mono text-base text-center select-text">
              <Link
                to={`/questions/edit/${question.id}`}
                className="inline-block px-2 py-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                PERBARUI
              </Link>
              <button
                onClick={() => handleDeleteQuestion(question.id)}
                className="inline-block px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                HAPUS
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );

  const renderPagination = () => (
    <div className="flex justify-end mt-6 space-x-1 select-none">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded-l hover:bg-gray-600"
        disabled={currentPage === 1}
      >
        «
      </button>
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 hover:bg-gray-600"
        disabled={currentPage === 1}
      >
        ‹
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-3 py-1 text-xs font-semibold text-white bg-gray-500 ${
            currentPage === index + 1 ? "bg-gray-700" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 hover:bg-gray-600"
        disabled={currentPage === totalPages}
      >
        ›
      </button>
      <button
        onClick={() => setCurrentPage(totalPages)}
        className="px-3 py-1 text-xs font-semibold text-white bg-gray-500 rounded-r hover:bg-gray-600"
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-8 overflow-auto">
          <h1 className="mb-5 text-3xl font-semibold text-gray-800">
            Data Evaluasi
          </h1>

          <div className="flex flex-col mb-6 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex flex-col space-y-2 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <span>Menampilkan</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
                <span>data</span>
              </div>
              <Link
                to="/questions/add"
                className="inline-block px-4 py-2 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                TAMBAH SOAL
              </Link>
            </div>
            <div className="flex space-x-2">
              <select
                value={selectedEvaluation || ""}
                onChange={handleEvaluationChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
              >
                <option value="">Pilih Bab/Evaluasi</option>
                {evaluations.map((evaluation) => (
                  <option key={evaluation.id} value={evaluation.id}>
                    {evaluation.type === "bab"
                      ? `Bab ${evaluation.chapter}`
                      : "Evaluasi Akhir"}
                  </option>
                ))}
              </select>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari soal..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-600"
              />
            </div>
          </div>

          {isLoading && <p className="text-center">Loading...</p>}
          {isError && <p className="text-center text-red-500">{message}</p>}

          <div className="overflow-x-auto">
            <table className="w-full mt-5 text-base text-center text-gray-700 bg-white border">
              {renderHeader()}
              {renderBody()}
            </table>
          </div>

          {renderPagination()}
        </section>
      </main>
    </div>
  );
};

export default EvaluationList;
