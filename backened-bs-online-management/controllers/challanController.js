const PDFDocument = require("pdfkit");
const Admission = require("../models/Registration");

exports.generateChallan = async (req, res) => {
  try {
    const { rollNo } = req.params;

    const student = await Admission.findOne({ rollNo });
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    // Create PDF
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=challan-${rollNo}.pdf`
    );

    doc.pipe(res);

    // Header
    doc.fontSize(18).text("University Challan Form", { align: "center" });
    doc.moveDown();

    // Student Info
    doc.fontSize(12).text(`Roll No: ${student.rollNo}`);
    doc.text(`Name: ${student.firstName} ${student.lastName}`);
    doc.text(`Father Name: ${student.fatherName}`);
    doc.text(`CNIC: ${student.cnic}`);
    doc.moveDown();

    // Challan Details (you can make dynamic)
    doc.fontSize(14).text("Fee Details");
    doc.fontSize(12).text("Admission Fee: Rs. 2000");
    doc.text("Tuition Fee: Rs. 5000");
    doc.text("Misc Charges: Rs. 1000");
    doc.moveDown();

    doc.fontSize(14).text("Total: Rs. 8000", { align: "right" });

    // Footer
    doc.moveDown();
    doc
      .fontSize(10)
      .text("Bank Copy | Student Copy | University Copy", { align: "center" });

    doc.end();
  } catch (error) {
    console.error("Challan Generation Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
