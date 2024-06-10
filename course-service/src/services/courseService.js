const Course = require('../models/courseModel');

const createCourse = async (courseData) => {
  const course = new Course(courseData);
  return await course.save();
};

const getCourses = async () => {
  return await Course.find();
};

const getCourseById = async (courseId) => {
  return await Course.findById(courseId);
};

const updateCourse = async (courseId, updateData) => {
  return await Course.findByIdAndUpdate(courseId, updateData, { new: true });
};

const deleteCourse = async (courseId) => {
  return await Course.findByIdAndDelete(courseId);
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};
