exports.getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: admissions.length,
      data: admissions,
    });
  } catch (error) {
    console.error("Fetch Admissions Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
