import express from "express";
import Comment from "../models/comment.mjs";

const router = express.Router();

// GET all comments for a course
router.get("/course/:courseId", async (req, res) => {
  const comments = await Comment.find({ course: req.params.courseId }).populate("author");
  res.json(comments);
});

// POST create comment
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;