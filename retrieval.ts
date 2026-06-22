import { Router } from "express";

const router = Router();

router.post("/retrieval/search", (req, res) => {
  const { query } = req.body;

  res.json({
    query,
    results: [
      "Document A",
      "Document B",
      "Document C"
    ]
  });
});

export default router;
