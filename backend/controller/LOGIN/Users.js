import Users from "../../models/LOGIN/UserModel.js";
import argon2 from "argon2";

// Mendapatkan semua pengguna dengan role user
export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ["uuid", "name", "nis", "class", "status"],
      where: {
        role: "user",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Mendapatkan pengguna berdasarkan ID
export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      attributes: ["uuid", "name", "nis", "class", "status"],
      where: {
        uuid: req.params.id,
        role: "user", // Pastikan hanya user
      },
    });

    if (!response) {
      return res.status(404).json({ msg: "Siswa tidak ditemukan" });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Membuat pengguna baru
export const createUsers = async (req, res) => {
  const { name, nis, password, confPassword, class: studentClass } = req.body;

  if (password !== confPassword) {
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  }

  const existingUser = await Users.findOne({
    where: { nis },
  });
  if (existingUser) {
    return res.status(400).json({ msg: "NIS sudah terdaftar" });
  }

  const hashPassword = await argon2.hash(password);
  try {
    await Users.create({
      name,
      nis,
      password: hashPassword,
      role: "user",
      class: studentClass,
      status: "Aktif",
    });
    res.status(201).json({ msg: "Register berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Memperbarui pengguna
export const updateUsers = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id,
      role: "user",
    },
  });

  if (!user) {
    return res.status(404).json({ msg: "Siswa tidak ditemukan" });
  }

  const { name, class: studentClass } = req.body;

  try {
    await Users.update(
      {
        name,
        class: studentClass,
      },
      {
        where: {
          uuid: user.uuid,
        },
      }
    );
    res.status(200).json({ msg: "Siswa berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Menghapus pengguna
export const delateUsers = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { uuid: req.params.id, role: "user" },
    });

    if (!user) {
      return res.status(404).json({ msg: "Siswa tidak ditemukan" });
    }

    await Users.destroy({
      where: { uuid: user.uuid },
    });

    res.status(200).json({ msg: "Siswa berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
