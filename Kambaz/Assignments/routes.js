import * as dao from './dao.js';

export default function AssignmentRoutes(app) {
  // Get a specific assignment by ID
  app.get('/api/assignments/:assignmentId', async (req, res) => {  // Fixed: added req, res
    const { assignmentId } = req.params;
    const assignment = await dao.findAssignment(assignmentId);
    res.send(assignment);
  });

  // Update an assignment
  app.put('/api/assignments/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

  // Delete an assignment
  app.delete('/api/assignments/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
  });
}