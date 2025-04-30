import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvaluations, getKkm, setKkm } from "../../features/authSlice";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Pengaturan = () => {
  const dispatch = useDispatch();
  const { user, evaluations, kkm, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const [kkmValues, setKkmValues] = useState({});

  // Cek apakah pengguna adalah admin, jika tidak redirect ke halaman lain
  if (user && user.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  useEffect(() => {
    dispatch(getEvaluations());
    dispatch(getKkm());
  }, [dispatch]);

  useEffect(() => {
    // Inisialisasi kkmValues berdasarkan data kkm
    const initialKkm = {};
    kkm.forEach((item) => {
      initialKkm[item.evaluation_id] = item.kkm;
    });
    setKkmValues(initialKkm);
  }, [kkm]);

  const handleKkmChange = (evaluationId, value) => {
    setKkmValues((prev) => ({
      ...prev,
      [evaluationId]: value,
    }));
  };

  const handleSubmit = (evaluationId) => {
    const kkmValue = parseFloat(kkmValues[evaluationId]);
    if (isNaN(kkmValue) || kkmValue < 0 || kkmValue > 100) {
      Swal.fire({
        title: "Gagal!",
        text: "KKM harus angka antara 0 dan 100",
        icon: "error",
      });
      return;
    }
    dispatch(setKkm({ evaluation_id: evaluationId, kkm: kkmValue })).then(
      (action) => {
        if (setKkm.fulfilled.match(action)) {
          Swal.fire({
            title: "Berhasil!",
            text: "KKM telah disimpan.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          dispatch(getKkm()); // Refresh data KKM
        } else {
          Swal.fire({
            title: "Gagal!",
            text: action.payload || "Terjadi kesalahan saat menyimpan KKM.",
            icon: "error",
          });
        }
      }
    );
  };

  const renderEvaluationLabel = (evaluation) => {
    if (evaluation.type === "bab") {
      return `Evaluasi Bab ${evaluation.chapter}`;
    }
    return "Evaluasi Akhir";
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex flex-1 overflow-hidden">
        <section className="flex-1 p-8 overflow-auto">
          <h1 className="mb-5 text-3xl font-semibold text-gray-800">
            Pengaturan KKM
          </h1>

          {isError && (
            <p className="mb-4 text-center text-red-500">{message}</p>
          )}
          {isLoading && (
            <p className="mb-4 text-center text-gray-500">Memuat...</p>
          )}

          <div className="overflow-x-auto">
            <table className="w-full mt-5 text-base text-center text-gray-700 bg-white border">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-3 py-2 text-base font-semibold text-center select-none">
                    Evaluasi
                  </th>
                  <th className="px-3 py-2 text-base font-semibold text-center select-none">
                    KKM
                  </th>
                  <th className="px-3 py-2 text-base font-semibold text-center select-none">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {evaluations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-3 py-2 text-base text-center text-gray-500"
                    >
                      Tidak ada data evaluasi
                    </td>
                  </tr>
                ) : (
                  evaluations.map((evaluation) => (
                    <tr
                      key={evaluation.id}
                      className="border-b border-gray-200"
                    >
                      <td className="px-3 py-2 font-mono text-base text-center select-text">
                        {renderEvaluationLabel(evaluation)}
                      </td>
                      <td className="px-3 py-2 font-mono text-base text-center select-text">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={kkmValues[evaluation.id] || ""}
                          onChange={(e) =>
                            handleKkmChange(evaluation.id, e.target.value)
                          }
                          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600"
                        />
                      </td>
                      <td className="px-3 py-2 font-mono text-base text-center select-text">
                        <button
                          onClick={() => handleSubmit(evaluation.id)}
                          className="px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded hover:bg-purple-700"
                        >
                          Simpan
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pengaturan;
