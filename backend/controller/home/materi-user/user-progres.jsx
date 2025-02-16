import UserProgress from "../../../models/home/materi-user/user-progres";

// Menyimpan riwayat materi
export const saveProgress = async (req, res) => {
  const { userId, lessonId } = req.body;

  try {
    await UserProgress.create({ userId, lessonId });
    res.status(201).json({ msg: "Progress saved successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Mengambil riwayat materi
export const getProgress = async (req, res) => {
  const { userId } = req.params;

  try {
    const progress = await UserProgress.findAll({
      where: { userId },
    });
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
