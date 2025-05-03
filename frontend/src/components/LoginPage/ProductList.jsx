import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEvaluations,
  getQuestionsByEvaluation,
  deleteQuestion,
  createQuestion,
} from "../../features/authSlice.js";
import Swal from "sweetalert2";

const EvaluationList = () => {
  const dispatch = useDispatch();
  const {
    evaluations = [],
    questions = [],
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.auth);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    evaluation_id: "",
    question_text: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    option_e: "",
    correct_answer: "",
  });

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
    Swal.fire({
      title: "Konfirmasi Hapus",
      text: "Apakah Anda yakin ingin menghapus soal ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteQuestion(questionId)).then((action) => {
          if (deleteQuestion.fulfilled.match(action)) {
            Swal.fire({
              title: "Berhasil!",
              text: "Soal telah dihapus.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          } else {
            Swal.fire({
              title: "Gagal!",
              text: action.payload || "Terjadi kesalahan saat menghapus soal.",
              icon: "error",
            });
          }
        });
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const {
      evaluation_id,
      question_text,
      option_a,
      option_b,
      option_c,
      option_d,
      option_e,
      correct_answer,
    } = formData;

    if (
      !evaluation_id ||
      !question_text ||
      !option_a ||
      !option_b ||
      !option_c ||
      !option_d ||
      !option_e ||
      !correct_answer
    ) {
      Swal.fire({
        title: "Gagal!",
        text: "Semua kolom wajib diisi.",
        icon: "error",
      });
      return;
    }

    dispatch(createQuestion(formData)).then((action) => {
      if (createQuestion.fulfilled.match(action)) {
        Swal.fire({
          title: "Berhasil!",
          text: "Soal telah ditambahkan.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setIsModalOpen(false);
        setFormData({
          evaluation_id: "",
          question_text: "",
          option_a: "",
          option_b: "",
          option_c: "",
          option_d: "",
          option_e: "",
          correct_answer: "",
        });
        // Refresh soal untuk evaluasi yang dipilih
        if (selectedEvaluation) {
          dispatch(getQuestionsByEvaluation(selectedEvaluation));
        }
      } else {
        Swal.fire({
          title: "Gagal!",
          text: action.payload || "Terjadi kesalahan saat menambahkan soal.",
          icon: "error",
        });
      }
    });
  };

  const renderHeader = () => (
    <thead>
      <tr className="text-center border-b border-gray-200">
        <th className="px-3 py-2 font-semibold text-center select-none">NO</th>
        <th className="px-3 py-2 font-semibold text-center select-none">BAB</th>
        <th className="px-3 py-2 font-semibold text-center select-none">
          SOAL
        </th>
        <th className="px-3 py-2 font-semibold text-center select-none">A</th>
        <th className="px-3 py-2 font-semibold text-center select-none">B</th>
        <th className="px-3 py-2 font-semibold text-center select-none">C</th>
        <th className="px-3 py-2 font-semibold text-center select-none">D</th>
        <th className="px-3 py-2 font-semibold text-center select-none">E</th>
        <th className="px-3 py-2 font-semibold text-center select-none">
          JAWABAN
        </th>
        <th className="px-3 py-2 font-semibold text-center select-none">
          AKSI
        </th>
      </tr>
    </thead>
  );

  const renderBody = () => (
    <tbody>
      {currentQuestions.length === 0 ? (
        <tr className="items-center text-center border-b border-gray-200">
          <td
            colSpan="10"
            className="px-3 py-2 font-mono text-base text-center select-text"
          >
            Tidak ada soal untuk bab/evaluasi ini.
          </td>
        </tr>
      ) : (
        currentQuestions.map((question, index) => (
          <tr
            key={question.id}
            className="items-center text-center border-b border-gray-200"
          >
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
            <td className="flex justify-center px-3 py-2 space-x-2 font-mono text-base text-center select-text">
              <Link
                to={`/questions/edit/${question.id}`}
                className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
              >
                Perbarui
              </Link>
              <button
                onClick={() => handleDeleteQuestion(question.id)}
                className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700"
              >
                Hapus
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block px-4 py-2 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                TAMBAH SOAL
              </button>
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
            <table className="w-full mt-5 text-base text-gray-700 border">
              {renderHeader()}
              {renderBody()}
            </table>
          </div>

          {renderPagination()}

          {/* Modal Tambah Soal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  Tambah Soal
                </h2>
                <form onSubmit={handleAddQuestion} className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Pilih Bab/Evaluasi
                    </label>
                    <select
                      name="evaluation_id"
                      value={formData.evaluation_id}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
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
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Teks Soal
                    </label>
                    <textarea
                      name="question_text"
                      value={formData.question_text}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Opsi A
                    </label>
                    <input
                      type="text"
                      name="option_a"
                      value={formData.option_a}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Opsi B
                    </label>
                    <input
                      type="text"
                      name="option_b"
                      value={formData.option_b}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Opsi C
                    </label>
                    <input
                      type="text"
                      name="option_c"
                      value={formData.option_c}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Opsi D
                    </label>
                    <input
                      type="text"
                      name="option_d"
                      value={formData.option_d}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Opsi E
                    </label>
                    <input
                      type="text"
                      name="option_e"
                      value={formData.option_e}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Jawaban Benar
                    </label>
                    <select
                      name="correct_answer"
                      value={formData.correct_answer}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Pilih Jawaban</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default EvaluationList;
