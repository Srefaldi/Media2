import React from "react";

const PenamaanVariabel = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center">BAB 2 - VARIABEL</h1>
      <h2 className="mt-2 text-2xl font-bold">2.2 Penamaan Variabel</h2>

      <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <p>
            Penamaan variabel adalah aspek penting dalam pemrograman karena
            membantu membuat kode lebih mudah dibaca, dipahami, dan dikelola.
            Dalam bahasa pemrograman C#, ada beberapa aturan dan konvensi yang
            harus diikuti untuk memastikan nama variabel yang baik dan benar.
            Nama variabel yang baik tidak hanya mematuhi aturan sintaksis tetapi
            juga mencerminkan tujuan dan makna dari variabel tersebut.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Nama variabel terdiri dari huruf, angka dan under score (_).
            </li>
            <li>
              Nama harus diawali dengan huruf. Under score juga dapat digunakan
              untuk mengawali nama suatu variabel tetapi ini tidak disarankan.
            </li>
            <li>
              C# adalah bahasa yang case sensitif, variabel dengan nama umur
              tidak sama dengan Umur.
            </li>
            <li>
              Keyword tidak bisa digunakan sebagai nama variabel, kecuali kalau
              keyword ini diawali dengan karakter @.
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
        <p className="font-bold">
          Berikut adalah contoh nama variabel yang benar dan salah.
        </p>
        <div className="p-4 text-justify text-gray-700 bg-white rounded-lg shadow-md">
          <div className="flex justify-center">
            <table className="border border-gray-300">
              <thead className="text-center">
                <tr>
                  <th className="border border-gray-300 p-2">Nama</th>
                  <th className="border border-gray-300 p-2">Benar/Salah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    nomorIndukMahasiswa
                  </td>
                  <td className="border border-gray-300 p-2">Benar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">nama_mahasiswa</td>
                  <td className="border border-gray-300 p-2">Benar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">TotalNilai</td>
                  <td className="border border-gray-300 p-2">Benar</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Public</td>
                  <td className="border border-gray-300 p-2">
                    Salah; karena public adalah keyword
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">total#nilai</td>
                  <td className="border border-gray-300 p-2">
                    Salah; karena menggunakan karakter #
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_total_nilai</td>
                  <td className="border border-gray-300 p-2">
                    Benar; tetapi tidak dianjurkan
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">@int</td>
                  <td className="border border-gray-300 p-2">
                    Benar; keyword diawali dengan @
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Banyak konvensi yang digunakan untuk memformat penamaan variabel
            ini. Ada yang disebut dengan notasi Pascal, dimana setiap kata yang
            digunakan sebagai nama variabel akan selalu dimulai dengan huruf
            besar. Notasi Camel memiliki kesamaan dengan notasi Pascal hanya
            saja huruf pertama dalam notasi ini selalu dimulai dengan huruf
            kecil. Sedangkan notasi Hungarian mirip dengan notasi Camel tetapi
            setiap variabel akan dimulai dengan kode yang menyatakan tipe data
            dari variabel tersebut.
          </p>
          <p>
            Penggunaan konvensi dalam penamaan variabel ini bisa disesuai dengan
            selera masing-masing, belakangan ini yang banyak digunakan adalah
            notasi Camel. Yang terpenting dari penamaan variabel ini adalah
            gunakanlah nama yang dapat memudahkan program untuk dibaca.
          </p>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Notasi</th>
                <th className="border border-gray-300 p-2">Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Pascal</td>
                <td className="border border-gray-300 p-2">
                  NamaMahasiswa, TotalMahasiswa
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Camel</td>
                <td className="border border-gray-300 p-2">
                  namaMahasiswa, totalMahasiswa
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Hungarian</td>
                <td className="border border-gray-300 p-2">
                  strNamaMahasiswa, intTotalMahasiswa
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PenamaanVariabel;
