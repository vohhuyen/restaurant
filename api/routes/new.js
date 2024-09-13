<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const {
    createNew,
    getNew,
    getNews,
    findNewByType,
    findNewByTitle,
    updateNew,
    deleteNew
} = require('../controllers/newController');

router.post('/', createNew);
router.put('/:id', updateNew);
router.delete('/:id', deleteNew);
router.get('/find/:id', getNew);

router.get('/', getNews);
router.get('/type/:type', findNewByType);
router.get('/title/:title', findNewByTitle);

=======
const express = require('express');
const router = express.Router();
const {
    createNew,
    getNew,
    getNews,
    findNewByType,
    findNewByTitle,
    updateNew,
    deleteNew
} = require('../controllers/newController');

router.post('/', createNew);
router.put('/:id', updateNew);
router.delete('/:id', deleteNew);
router.get('/find/:id', getNew);

router.get('/', getNews);
router.get('/type/:type', findNewByType);
router.get('/title/:title', findNewByTitle);

>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
module.exports = router;