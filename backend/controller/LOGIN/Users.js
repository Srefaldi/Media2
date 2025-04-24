import Users from "../../models/LOGIN/UserModel.js";
import argon2 from "argon2";

// Mendapatkan semua pengguna dengan role user
export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ["uuid", "name", "nis", "class", "status", "progress"],
      where: {
        role: "user",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in getUsers:", error.message);
    res.status(500).json({ msg: error.message });
  }
};

// Mendapatkan pengguna berdasarkan ID
export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      attributes: ["uuid", "name", "nis", "class", "status", "progress"],
      where: {
        uuid: req.params.id,
        role: "user",
      },
    });

    if (!response) {
      return res.status(404).json({ msg: "Siswa tidak ditemukan" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in getUsersById:", error.message);
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
      progress: null,
    });
    res.status(201).json({ msg: "Register berhasil" });
  } catch (error) {
    console.error("Error in createUsers:", error.message);
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
    console.error("Error in updateUsers:", error.message);
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
    console.error("Error in delateUsers:", error.message);
    res.status(400).json({ msg: error.message });
  }
};

// Memperbarui progres pengguna
export const updateProgress = async (req, res) => {
  try {
    console.log("updateProgress called with params:", req.params);
    console.log("Request body:", req.body);
    console.log("Session userId:", req.session.userId);

    const user = await Users.findOne({
      where: {
        uuid: req.params.id,
        role: "user",
      },
    });

    if (!user) {
      console.log("User not found for uuid:", req.params.id);
      return res.status(404).json({ msg: "Siswa tidak ditemukan" });
    }

    // Verifikasi bahwa pengguna hanya memperbarui progres mereka sendiri
    if (req.session.userId !== user.uuid) {
      console.log(
        "Unauthorized: Session userId does not match user uuid",
        req.session.userId,
        user.uuid
      );
      return res
        .status(403)
        .json({ msg: "Tidak diizinkan memperbarui progres pengguna lain" });
    }

    const { progress } = req.body;

    if (progress === undefined || progress < 0 || progress > 100) {
      console.log("Invalid progress value:", progress);
      return res.status(400).json({ msg: "Progres harus antara 0 dan 100" });
    }

    await Users.update(
      {
        progress,
      },
      {
        where: {
          uuid: user.uuid,
        },
      }
    );

    console.log("Progress updated successfully for user:", user.uuid);
    res.status(200).json({ msg: "Progres berhasil diperbarui" });
  } catch (error) {
    console.error("Error in updateProgress:", error.message);
    res.status(400).json({ msg: error.message });
  }
};
