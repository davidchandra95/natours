const express = require('express');

const router = express.Router();
const controllers = require('../controllers/tourControllers');

// router.param('id', controllers.checkID);

router.route('/').get(controllers.getAllTours).post(controllers.createTour);
router
  .route('/:id')
  .get(controllers.getTour)
  .patch(controllers.updateTour)
  .delete(controllers.deleteTour);

module.exports = router;
