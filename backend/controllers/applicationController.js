import Application from "../models/Application.js";

// CREATE APPLICATION
export const createApplication = async (req, res) => {
  try {
    const {
      companyName,
      role,
      eventType,
      eventDate,
      status,
      notes,
      userId,
    } = req.body;

    const application = new Application({
      companyName,
      role,
      eventType,
      eventDate,
      status,
      notes,
      userId,
    });

    const savedApplication = await application.save();

    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL APPLICATIONS (for a user)
export const getApplications = async (req, res) => {
  try {
    const { userId } = req.params;

    const applications = await Application.find({
      userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE APPLICATION
export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedApplication =
      await Application.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE APPLICATION
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    await Application.findByIdAndDelete(id);

    res.status(200).json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};