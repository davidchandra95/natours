const express = require('express');
const router = express.Router();
const tourControllers = require('./../controllers/tourControllers');

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);
router
  .route('/:id')
  .get(tourControllers.getTour)
  .put(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
