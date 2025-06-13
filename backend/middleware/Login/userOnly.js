// authuser.js
export const userOnly = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        uuid: req.session.userId,
      },
    });
    if (!user) {
      console.log(
        "userOnly: User tidak ditemukan untuk userId:",
        req.session.userId
      );
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }
    if (user.role !== "user") {
      console.log("userOnly: Akses ditolak untuk user:", user.nis, user.role);
      return res.status(403).json({ msg: "Akses ditolak, hanya untuk siswa" });
    }
    console.log("userOnly: Akses diberikan untuk user:", user.nis);
    next();
  } catch (error) {
    console.error("userOnly: Error:", error.message);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
