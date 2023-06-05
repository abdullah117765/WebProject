const FYPProject = require('../models/fypProject');

class FYPProjectController {
  static async createFYPProject(req, res) {
    try {
      const fypProjectData = req.body;
      const fypProject = await FYPProject.create(fypProjectData);
      res.status(201).json(fypProject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create FYP project' });
    }
  }

  static async updateFYPProject(req, res) {
    try {
      const { id } = req.params;
      const fypProjectData = req.body;
      const fypProject = await FYPProject.findByIdAndUpdate(id, fypProjectData, { new: true });
      res.status(200).json(fypProject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update FYP project' });
    }
  }
}

module.exports = FYPProjectController;
