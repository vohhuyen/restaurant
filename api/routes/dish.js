const express = require('express');
const router = express.Router();
const {
    createDish,
    getDish,
    getDishs,
    findDishByType,
    updateDish,
    deleteDish,
    getTypeDish
} = require('../controllers/dishController');

router.post('/', createDish);
router.put('/:id', updateDish);
router.delete('/:id', deleteDish);
router.get('/find/:id', getDish);

router.get('/', getDishs);
router.get('/type/:type', findDishByType);
router.get('/typedish', getTypeDish);

module.exports = router;





