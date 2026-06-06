import express from "express";
import {
  createApplication,
  getApplications,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

// CREATE
router.post("/create", createApplication);

// READ (user-specific)
router.get("/user/:userId", getApplications);

// UPDATE
router.put("/:id", updateApplication);

// DELETE
router.delete("/:id", deleteApplication);

export default router;