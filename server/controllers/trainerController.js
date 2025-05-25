const User = require('../models/User');

exports.addCertificate = async (req, res) => {
  try {
    const { userId } = req.params;
    const certificateData = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { 'trainerDetails.certificates': certificateData } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Certificate added successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTrainerProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const trainer = await User.findById(userId).select('name email role trainerDetails');

    if (!trainer || trainer.role !== 'trainer') {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.status(200).json(trainer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};