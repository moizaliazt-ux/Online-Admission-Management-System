const Admission = require("../models/Registration");

exports.registerDetails = async (req, res) => {
  try {
    const {
      fname,
      middleName,
      lname,
      fatherName,
      cnic,
      fCnic,
      gender,
      dob,
      phone,
      email,
      address1,
      address2,
      country,
      city,
      state,
      qualification,
      board,
      year,
      program,
      shift,
      semester,
      meritScore,
    } = req.body;

    const image = req.file?.filename;

    const newSemester = parseInt(semester);

    // Check if student exists
    let student = await Admission.findOne({ cnic });

    if (!student) {
      // New student: must start with semester 1
      if (newSemester !== 1) {
        return res.status(400).json({
          success: false,
          message: `❌ First semester must be registered first.`,
        });
      }

      // Create new student
      const rollNo = "2025-" + Math.floor(1000 + Math.random() * 9000);
      student = new Admission({
        firstName: fname,
        middleName,
        lastName: lname,
        fatherName,
        cnic,
        fatherCnic: fCnic,
        gender,
        meritScore,
        dateOfBirth: dob,
        phoneNumber: phone,
        email,
        address1,
        address2,
        country,
        city,
        state,
        qualification,
        board,
        year,
        program,
        shift,
        image,
        rollNo,
        semesters: [{ semester: newSemester }],
      });
    } else {
      // Existing student: update info
      student.firstName = fname;
      student.middleName = middleName;
      student.lastName = lname;
      student.fatherName = fatherName;
      student.fatherCnic = fCnic;
      student.meritScore = meritScore;
      student.gender = gender;
      student.dateOfBirth = dob;
      student.phoneNumber = phone;
      student.email = email;
      student.address1 = address1;
      student.address2 = address2;
      student.country = country;
      student.city = city;
      student.state = state;
      student.qualification = qualification;
      student.board = board;
      student.year = year;
      student.program = program;
      student.shift = shift;
      if (image) student.image = image;

      // Sequential semester check
      const existingSemesters = student.semesters.map((s) => s.semester);
      if (existingSemesters.length > 0) {
        const maxSemester = Math.max(...existingSemesters);
        if (newSemester > maxSemester + 1) {
          return res.status(400).json({
            success: false,
            message: `❌ You must register for semester ${
              maxSemester + 1
            } next.`,
          });
        }
      } else {
        // No semesters yet, must start with 1
        if (newSemester !== 1) {
          return res.status(400).json({
            success: false,
            message: `❌ First semester must be registered first.`,
          });
        }
      }

      // Add new semester if not exists
      const semExists = student.semesters.some(
        (s) => s.semester === newSemester
      );
      if (!semExists) student.semesters.push({ semester: newSemester });
    }

    await student.save();

    res.status(201).json({
      success: true,
      message: "Admission form submitted successfully",
      data: student,
    });
  } catch (error) {
    console.error("Admission Form Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
