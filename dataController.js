const Data = require('../models/Data');

// Create data
const createData = async (req, res) => {
  const { name, value } = req.body;
  try {
    const newData = new Data({ name, value });
    await newData.save();
    res.json(newData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Read data
const readData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update data
const updateData = async (req, res) => {
  const { name, value } = req.body;
  try {
    let data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ msg: 'Data not found' });
    data = await Data.findByIdAndUpdate(req.params.id, { $set: { name, value } }, { new: true });
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete data
const deleteData = async (req, res) => {
  try {
    let data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ msg: 'Data not found' });
    await Data.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Data removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Bulk upload data
const bulkUpload = async (req, res) => {
  // Implement bulk upload logic
};

// Export data
const exportData = async (req, res) => {
  // Implement data export logic
};

module.exports = { createData, readData, updateData, deleteData, bulkUpload, exportData };