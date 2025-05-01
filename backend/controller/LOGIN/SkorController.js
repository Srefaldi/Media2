import User from "../../models/LOGIN/UserModel.js";
import Score from "../../models/MateriSkor/SkorModel.js";

const getScores = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda" });
  }

  try {
    const user = await User.findOne({
      attributes: ["name", "nis"],
      where: { uuid: req.session.userId },
    });

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    const scores = await Score.findAll({
      where: { user_id: req.session.userId },
      attributes: ["type", "chapter", "score", "created_at"],
    });

    res.status(200).json({
      user,
      scores,
    });
  } catch (error) {
    console.error("Error di getScores:", error.message);
    res
      .status(500)
      .json({ msg: "Terjadi kesalahan pada server", error: error.message });
  }
};

const getScoresByUserId = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda" });
  }

  const { user_id } = req.params;

  try {
    const user = await User.findOne({
      attributes: ["name", "nis"],
      where: { uuid: user_id, role: "user" },
    });

    if (!user) {
      return res
        .status(404)
        .json({ msg: "User tidak ditemukan atau bukan siswa" });
    }

    const scores = await Score.findAll({
      where: { user_id },
      attributes: ["type", "chapter", "score", "created_at"],
    });

    res.status(200).json({
      user,
      scores,
    });
  } catch (error) {
    console.error("Error di getScoresByUserId:", error.message);
    res
      .status(500)
      .json({ msg: "Terjadi kesalahan pada server", error: error.message });
  }
};

const createScore = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda" });
  }

  if (!req.body) {
    return res.status(400).json({ msg: "Request body tidak ditemukan" });
  }

  const { user_id, type, chapter, score } = req.body;

  // Validasi input
  if (!user_id || !type || score === undefined) {
    return res
      .status(400)
      .json({ msg: "user_id, type, dan score wajib diisi" });
  }

  // Validasi type
  if (!["latihan", "evaluasi", "evaluasi_akhir"].includes(type)) {
    return res
      .status(400)
      .json({ msg: "Type harus latihan, evaluasi, atau evaluasi_akhir" });
  }

  // Validasi chapter
  if (
    type !== "evaluasi_akhir" &&
    (chapter < 1 || chapter > 6 || !Number.isInteger(chapter))
  ) {
    return res.status(400).json({
      msg: "Chapter harus integer antara 1 dan 6 untuk latihan atau evaluasi",
    });
  }
  if (type === "evaluasi_akhir" && chapter !== undefined) {
    return res
      .status(400)
      .json({ msg: "Evaluasi akhir tidak memerlukan chapter" });
  }

  // Validasi score
  if (typeof score !== "number" || score < 0 || score > 100) {
    return res.status(400).json({ msg: "Score harus angka antara 0 dan 100" });
  }

  // Ambil informasi pengguna yang login
  const loggedInUser = await User.findOne({
    where: { uuid: req.session.userId },
  });

  if (!loggedInUser) {
    return res.status(404).json({ msg: "Pengguna yang login tidak ditemukan" });
  }

  // Jika pengguna adalah siswa (role: "user"), mereka hanya boleh membuat skor untuk diri sendiri
  if (loggedInUser.role === "user" && user_id !== req.session.userId) {
    return res
      .status(403)
      .json({ msg: "Anda hanya dapat menambahkan skor untuk diri sendiri" });
  }

  // Validasi user_id (harus role "user")
  const user = await User.findOne({
    where: { uuid: user_id, role: "user" },
  });
  if (!user) {
    return res
      .status(404)
      .json({ msg: "User tidak ditemukan atau bukan siswa" });
  }

  try {
    await Score.create({
      user_id,
      type,
      chapter: type === "evaluasi_akhir" ? null : chapter,
      score,
    });
    res.status(201).json({ msg: "Skor berhasil ditambahkan" });
  } catch (error) {
    console.error("Error di createScore:", error.message);
    res
      .status(500)
      .json({ msg: "Terjadi kesalahan pada server", error: error.message });
  }
};

export { getScores, getScoresByUserId, createScore };
