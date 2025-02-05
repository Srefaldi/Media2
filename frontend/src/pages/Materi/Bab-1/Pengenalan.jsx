import React, { useState } from "react";

const PengenalanCSharp = () => {
  const [isPendahuluanOpen, setPendahuluanOpen] = useState(false);
  const [isTujuanOpen, setTujuanOpen] = useState(false);
  const [isKontenOpen, setKontenOpen] = useState(false);
  const [isSubMateriOpen, setSubMateriOpen] = useState(false);

  const togglePendahuluan = () => {
    setPendahuluanOpen(!isPendahuluanOpen);
  };

  const toggleTujuan = () => {
    setTujuanOpen(!isTujuanOpen);
  };

  const toggleKonten = () => {
    setKontenOpen(!isKontenOpen);
  };

  const toggleSubMateri = () => {
    setSubMateriOpen(!isSubMateriOpen);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">BAB 1 - PENDAHULUAN</h1>

      <div>
        <h3
          className="text-bold cursor-pointer flex items-center"
          onClick={togglePendahuluan}
        >
          PENDAHULUAN MATERI
          <span className="ml-2">{isPendahuluanOpen ? "▲" : "▼"}</span>
        </h3>
        {isPendahuluanOpen && (
          <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
            Pada bab ini, kita akan mempelajari pendahuluan bahasa pemrograman
            C#. Bahasa ini memiliki kesamaan dan perbedaan dengan bahasa
            pemrograman lain, yang memberikan ciri khas tersendiri. Setelah
            mempelajari materi ini, diharapkan pembaca dapat menulis kode
            program sesuai ketentuan dan menghindari kesalahan umum dalam
            pemrograman.
          </p>
        )}
      </div>

      <div>
        <h3
          className="text-bold cursor-pointer flex items-center"
          onClick={toggleTujuan}
        >
          Tujuan Pembelajaran
          <span className="ml-2">{isTujuanOpen ? "▲" : "▼"}</span>
        </h3>
        {isTujuanOpen && (
          <ul className="text-gray-700 bg-white p-4 rounded-lg shadow-md list-disc pl-6 text-justify">
            <li>Mampu memahami struktur kode bahasa pemrograman C#</li>
            <li>
              Mampu memahami struktur eksekusi kode (sequence, selection, dan
              iteration)
            </li>
            <li>
              Mampu menggunakan sintaks print untuk fungsi output dan sintaks
              komentar
            </li>
            <li>
              Mampu mengetahui jenis-jenis error yang ada pada bahasa
              pemrograman C#
            </li>
          </ul>
        )}
      </div>

      <div>
        <h3
          className="text-bold cursor-pointer flex items-center"
          onClick={toggleKonten}
        >
          KONTEN MATERI
          <span className="ml-2">{isKontenOpen ? "▲" : "▼"}</span>
        </h3>
        {isKontenOpen && (
          <ul className="text-gray-700 bg-white p-4 rounded-lg shadow-md list-decimal pl-6 text-justify">
            <li>Pengenalan C#</li>
            <li>Instalasi Setup .NET dan Visual Studio Code</li>
            <li>Struktur Kode Bahasa Pemrograman C#</li>
            <li>Struktur Eksekusi Kode</li>
            <li>Sintaks Print</li>
            <li>Sintaks Komentar</li>
            <li>Error pada C#</li>
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-bold">1.1 Pengenalan C#</h2>
        <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md text-justify">
          C# (“See-Sharp”) adalah bahasa pemrograman modern yang dikembangkan
          oleh Microsoft sebagai bagian dari inisiatif .NET mereka. Bahasa ini
          pertama kali dirilis pada tahun 2000 dan dirancang di bawah
          kepemimpinan Anders Hejlsberg, seorang tokoh terkemuka dalam
          pengembangan bahasa pemrograman, yang juga dikenal sebagai pengembang
          Borland Turbo C++ dan Borland Delphi. C# merupakan bahasa yang
          dikompilasi dan sangat kuat, fleksibel, serta mendukung pemrograman
          berorientasi objek.
        </p>
      </div>
    </div>
  );
};

export default PengenalanCSharp;
