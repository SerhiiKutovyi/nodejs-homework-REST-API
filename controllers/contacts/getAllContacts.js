const { Contact } = require('../../models/contact');

const getAllContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Contact.find({ owner: _id }, '', {
    skip,
    limit: Number(limit),
  }).populate('owner', '_id email');
  res.json(data);
};

module.exports = getAllContacts;
