const express = require('express');
const router = express.Router();
const { createData, readData, updateData, deleteData, bulkUpload, exportData } = require('../controllers/dataController');

router.post('/create', createData);
router.get('/read', readData);
router.put('/update/:id', updateData);
router.delete('/delete/:id', deleteData);
router.post('/bulk-upload', bulkUpload);
router.get('/export', exportData);

module.exports = router;