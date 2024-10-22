const express = require('express');

const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// newsController.index;

router.get('/test', courseController.test);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.post('/trash-handle-form-actions', courseController.trashHandleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestory);
router.get('/:slug', courseController.show);

module.exports = router;
