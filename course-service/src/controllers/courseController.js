const courseService = require('../services/courseService');

const createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};

const getCourses = async (req, res) => {
  console.log("apanho, mas aprendo");
  res.status(200).json('simbora')
  // try {
  //   const courses = await courseService.getCourses();
  //   res.status(200).json(courses);
  // } catch (error) {
  //   res.status(500).json({ message: 'Error fetching courses', error });
  // }
};

const getCourseById = async (req, res) => {
  try {
    const course = await courseService.getCourseById(req.params.id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await courseService.updateCourse(req.params.id, req.body);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await courseService.deleteCourse(req.params.id);
    if (course) {
      res.status(200).json({ message: 'Course deleted successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};
