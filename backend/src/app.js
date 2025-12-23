import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoute);

export default app;
