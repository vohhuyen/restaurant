<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const {
    createTable,
    getTable,
    getTables,
    findTableByType,
    updateTable,
    deleteTable,
    getTypeTable,
    findTableByName,
    getTableByArea
} = require('../controllers/tableController');

router.post('/', createTable);
router.put('/:id', updateTable);
router.delete('/:id', deleteTable);
router.get('/find/:id', getTable);

router.get('/', getTables);
router.get('/type/:type', findTableByType);
router.get('/type', getTypeTable);
router.get('/findbyname/:name', findTableByName)
router.get('/areawithtable', getTableByArea)


=======
const express = require('express');
const router = express.Router();
const {
    createTable,
    getTable,
    getTables,
    findTableByType,
    updateTable,
    deleteTable
} = require('../controllers/tableController');

router.post('/', createTable);
router.put('/:id', updateTable);
router.delete('/:id', deleteTable);
router.get('/find/:id', getTable);

router.get('/', getTables);
router.get('/type/:type', findTableByType);

>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
module.exports = router;