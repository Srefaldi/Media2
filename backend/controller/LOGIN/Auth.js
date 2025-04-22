import User from "../../models/LOGIN/UserModel.js";
import argon2 from "argon2";

// Login Controller
export const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        nis: req.body.nis, // Mencari pengguna berdasarkan NIS
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User  tidak ditemukan" });
    }

    const match = await argon2.verify(user.password, req.body.password);
    if (!match) {
      return res.status(400).json({ msg: "Password salah" });
    }

    req.session.userId = user.uuid; // Simpan ID pengguna di session
    const { uuid, name, nis, role } = user; // Ambil data pengguna
    res.status(200).json({ uuid, name, nis, role }); // Kirim data pengguna
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Controller untuk mendapatkan informasi pengguna yang sedang login
export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda" });
  }

  try {
    const user = await User.findOne({
      attributes: ["uuid", "name", "nis", "role"],
      where: {
        uuid: req.session.userId,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User  tidak ditemukan" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Controller untuk logout
export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(400).json({ msg: "Tidak dapat logout" });
    }
    res.status(200).json({ msg: "Berhasil logout" });
  });
};
