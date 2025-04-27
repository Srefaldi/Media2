import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEvaluations, createQuestion } from "../../features/authSlice.js";

const AddQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { evaluations, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

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

  useEffect(() => {
    dispatch(getEvaluations());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion(formData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/products");
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-8 overflow-auto">
          <h1 className="mb-5 text-3xl font-semibold text-gray-800">
            Tambah Soal
          </h1>

          {isLoading && <p className="text-center">Loading...</p>}
          {isError && <p className="text-center text-red-500">{message}</p>}

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Pilih Bab/Evaluasi
              </label>
              <select
                name="evaluation_id"
                value={formData.evaluation_id}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
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

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Teks Soal
              </label>
              <textarea
                name="question_text"
                value={formData.question_text}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Opsi A
              </label>
              <input
                type="text"
                name="option_a"
                value={formData.option_a}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Opsi B
              </label>
              <input
                type="text"
                name="option_b"
                value={formData.option_b}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Opsi C
              </label>
              <input
                type="text"
                name="option_c"
                value={formData.option_c}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Opsi D
              </label>
              <input
                type="text"
                name="option_d"
                value={formData.option_d}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Opsi E
              </label>
              <input
                type="text"
                name="option_e"
                value={formData.option_e}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Jawaban Benar
              </label>
              <select
                name="correct_answer"
                value={formData.correct_answer}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
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
                onClick={() => navigate("/evaluations")}
                className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AddQuestion;
