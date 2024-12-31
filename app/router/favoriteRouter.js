const express = require('express');
const favoriteController= require('../controller/favouriteController');

const router = express.Router();

router.post('/add-favorite', favoriteController.createFavourite);

// router.delete('/remove-favorite/:id', favoriteController.removeFavorite);

module.exports = router;