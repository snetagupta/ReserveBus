const express = require("express");
const createNewTrip = require("../controllers/createNewTrip");
const getTrip = require("../controllers/getTrip");
const getTripByDate = require("../controllers/getTripByDate");
const getTripByQuery = require("../controllers/getTripByQuery");
const savedTickets = require("../controllers/savedTickets");

const router = express.Router();

// post route for adding a new trip

router.post('/', createNewTrip);
router.get('/get',getTrip);
router.get('/:date',getTripByDate);
router.get('/trips',getTripByQuery);
router.post('/tickets', savedTickets);

module.exports = router;