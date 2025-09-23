
import express from "express"
import User from "../models/user.mjs"
const router = express.Router()

// GET all users
router.get("/", async (req, res) => {
  res.json(await User.find());
});

// POST create new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH update user role
router.patch("/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
        req.params.id, 
        req.body, { 
            new: true, 
            runValidators: true 
        });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
});


export default router;