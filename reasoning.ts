import { Router } from "express";

const router = Router();

router.post("/reasoning", (req, res) => {
  const { prompt } = req.body;

  res.json({
    success: true,
    prompt,
    reasoning: "Multi-step reasoning generated."
  });
});

export default router;
