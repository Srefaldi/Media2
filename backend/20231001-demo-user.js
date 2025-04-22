// seeders/20231001-demo-user.js
import Users from "./models/LOGIN/UserModel.js"; // Sesuaikan path jika perlu
import argon2 from "argon2";

const users = [
  {
    name: "Faldi",
    email: "admin@gmail.com",
    nis: "123456789",
    password: "123", // Password yang akan di-hash
    role: "admin",
  },
  {
    name: "Budi",
    email: "budi@gmail.com",
    nis: "987654321",
    password: "123",
    role: "user",
  },
  // Tambahkan lebih banyak pengguna jika diperlukan
];

const seedUsers = async () => {
  for (const user of users) {
    // Hash password sebelum menyimpan ke database
    const hashedPassword = await argon2.hash(user.password);
    await Users.create({
      ...user,
      password: hashedPassword,
    });
  }
};

export default seedUsers;
