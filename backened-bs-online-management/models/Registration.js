const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
  semester: { type: Number, required: true },
  challanGenerated: { type: Boolean, default: false },
  challanNo: { type: Number },
  date: { type: Date },
});

const admissionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  fatherName: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
  fatherCnic: { type: String },
  gender: {
    type: String,
    enum: ["male", "female", "transgender"],
    required: true,
  },
  dateOfBirth: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },

  address1: { type: String, required: true },
  address2: { type: String },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String },

  qualification: { type: String, required: true },
  board: { type: String, required: true },
  year: { type: String, required: true },

  program: { type: String, required: true },
  shift: { type: String, required: true },

  image: { type: String }, // Passport photo
  rollNo: { type: String, unique: true },

  semesters: [semesterSchema],
  meritScore: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Admission", admissionSchema);
