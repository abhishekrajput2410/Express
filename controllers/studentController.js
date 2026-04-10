const Student = require('../models/student');

const buildFilter = (query) => {
  const filter = {};
  if (query.q) {
    const search = new RegExp(query.q, 'i');
    filter.$or = [
      { name: search },
      { city: search },
      { course: search }
    ];
  }
  if (query.name) filter.name = new RegExp(query.name, 'i');
  if (query.city) filter.city = new RegExp(query.city, 'i');
  if (query.course) filter.course = new RegExp(query.course, 'i');
  if (query.age) filter.age = Number(query.age);
  if (query.minGrade || query.maxGrade) {
    filter.grade = {};
    if (query.minGrade) filter.grade.$gte = Number(query.minGrade);
    if (query.maxGrade) filter.grade.$lte = Number(query.maxGrade);
  }
  return filter;
};

exports.getStudents = async (req, res) => {
  try {
    const filter = buildFilter(req.query);
    const students = await Student.find(filter).sort({ createdAt: -1 });
    res.json({ count: students.length, students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) { 
    res.status(400).json({ error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
