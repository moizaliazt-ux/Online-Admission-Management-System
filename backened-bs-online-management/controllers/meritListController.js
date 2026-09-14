const Admission = require("../models/Registration");

exports.getMeritList = async (req, res) => {
  try {
    // Sort by meritScore (highest first)
    const students = await Admission.find().sort({ meritScore: -1 });

    // Map and assign ranks
    const meritList = students.map((s, index) => ({
      rank: index + 1,
      studentName: `${s.firstName} ${s.middleName || ""} ${s.lastName}`.trim(),
      fatherName: s.fatherName,
      cnic: s.cnic,
      program: s.program,
      shift: s.shift,
      meritScore: s.meritScore,
    }));

    res.status(200).json({
      success: true,
      data: meritList,
    });
  } catch (error) {
    console.error("Merit List Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
