import Users from "../../models/LOGIN/UserModel.js";
import argon2 from "argon2";

// Mendapatkan semua pengguna
export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ["uuid", "name", "email", "role", "nis"],
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
      attributes: ["uuid", "name", "email", "role", "nis"],
      where: {
        uuid: req.params.id,
      },
    });

    if (!response) {
      return res.status(404).json({ msg: "User  tidak ditemukan" });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Membuat pengguna baru
export const createUsers = async (req, res) => {
  const { name, nis, email, password, confPassword, role } = req.body;

  if (password !== confPassword) {
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  }

  const hashPassword = await argon2.hash(password);
  try {
    await Users.create({
      name,
      nis,
      email,
      password: hashPassword,
      role,
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
    },
  });

  if (!user) {
    return res.status(404).json({ msg: "User  tidak ditemukan" });
  }

  const { name, nis, password, confPassword, role } = req.body;
  let hashPassword;

  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    if (password !== confPassword) {
      return res
        .status(400)
        .json({ msg: "Password dan Confirm Password tidak cocok" });
    }
    hashPassword = await argon2.hash(password);
  }

  try {
    await Users.update(
      {
        name,
        email,
        email,
        password: hashPassword,
        role,
      },
      {
        where: {
          uuid: user.uuid,
        },
      }
    );
    res.status(200).json({ msg: "User  berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Menghapus pengguna
export const delateUsers = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { uuid: req.params.id },
    });

    if (!user) {
      return res.status(404).json({ msg: "User   tidak ditemukan" });
    }

    await Users.destroy({
      where: { uuid: user.uuid },
    });

    res.status(200).json({ msg: "User  berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
