import express from "express";

import memoryRoutes from "./routes/memory";
import retrievalRoutes from "./routes/retrieval";
import reasoningRoutes from "./routes/reasoning";

const app = express();

app.use(express.json());

app.use("/api/v1", memoryRoutes);
app.use("/api/v1", retrievalRoutes);
app.use("/api/v1", reasoningRoutes);

app.listen(3000, () => {
  console.log("Dark Theory Labs API running");
});
