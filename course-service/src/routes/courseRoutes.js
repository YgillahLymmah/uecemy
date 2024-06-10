const {Router} = require('express');
const courseController = require('../controllers/courseController');

const router = Router();

router.post('cadastrarCursos/', courseController.createCourse);
router.get('/pegarCursos', courseController.getCourses);
router.get('pegarCursos/:id', courseController.getCourseById);
router.put('atualizarCursos/:id', courseController.updateCourse);
router.delete('deletarCursos/:id', courseController.deleteCourse);

module.exports = router;
