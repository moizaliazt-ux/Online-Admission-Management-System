const express = require("express");
const router = express.Router();
const Admission = require("../models/Registration");

router.post("/generate", async (req, res) => {
  try {
    let { cnic, semester } = req.body;
    if (!cnic || !semester)
      return res
        .status(400)
        .json({ message: "CNIC and Semester are required" });

    cnic = cnic.trim();
    semester = parseInt(semester);

    const admission = await Admission.findOne({ cnic });
    if (!admission)
      return res.status(404).json({ message: "Student not found" });

    // Check if semester exists
    const sem = admission.semesters.find((s) => s.semester === semester);
    if (!sem) {
      return res.status(400).json({
        message: `❌ Student has not registered for semester ${semester}`,
      });
    }

    // Fees
    const baseFees = [
      { title: "Admission Fee", amount: 0 },
      { title: "Tuition Fee", amount: 7200 },
      { title: "General Fund", amount: 2400 },
      { title: "Science Fund", amount: 1200 },
      { title: "Computer Fund", amount: 2400 },
      { title: "Sports Fund", amount: 1800 },
      { title: "Transport Fund", amount: 1400 },
      { title: "Magazine Fund", amount: 1200 },
      { title: "Library Security Fund", amount: 3000 },
      { title: "Board/University Affiliation Fee", amount: 2000 },
      { title: "Hilal-e-Ahmar Fund", amount: 600 },
      { title: "Lab Charges", amount: 1500 },
      { title: "Building Fund", amount: 2500 },
      { title: "Exam Fee", amount: 1000 },
      { title: "Others", amount: 0 },
    ];

    let totalFee = baseFees.reduce((sum, item) => sum + item.amount, 0);

    if (admission.shift === "morning") {
      totalFee = semester >= 2 && semester <= 8 ? 3000 : 21000;
    } else if (admission.shift === "evening") {
      totalFee = semester >= 2 && semester <= 8 ? 8000 : 31000;
    }

    const challanNo = Math.floor(100000 + Math.random() * 900000);

    // Update semester info
    sem.challanGenerated = true;
    sem.challanNo = challanNo;
    sem.date = new Date();

    await admission.save();

    const challan = {
      bank: "The Bank of Punjab",
      bankChallanNo: challanNo,
      date: new Date().toISOString().split("T")[0],
      studentName: `${admission.firstName} ${admission.lastName}`,
      fatherName: admission.fatherName,
      rollNo: admission.rollNo,
      semester,
      session: admission.year,
      shift: admission.shift,
      fee: baseFees,
      totalFee,
    };

    res.json(challan);
  } catch (err) {
    console.error("Error generating challan:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
