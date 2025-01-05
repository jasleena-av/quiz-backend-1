
const express = require("express");
const router = express.Router();
const Question = require("../model/quizmodel");


router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});



module.exports = router;
