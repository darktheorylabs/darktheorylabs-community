import { Router } from "express";

const router = Router();

router.post("/memory/store", (req, res) => {
  const { key, value } = req.body;

  res.json({
    success: true,
    key,
    stored: true
  });
});

router.get("/memory/:key", (req, res) => {
  res.json({
    key: req.params.key,
    value: "sample memory"
  });
});

export default router;
