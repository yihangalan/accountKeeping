import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Setup Express
const app = express();
const port = process.env.PORT || 3000;

// Use CORS we can deal with the client and server running on different hosts.
app.use(cors());

// Setup body-parser
app.use(express.json());

// Setup our routes.
import routes from "./routes";
app.use("/", routes);

app.listen(port, () => console.log(`accountKeeping Server listening on port ${port}!`))

//
// // Start the DB running. Then, once it's connected, start the server.
// mongoose
//   .connect(process.env.DB_URL, { useNewUrlParser: true })
//   .then(() =>
//     app.listen(port, () => console.log(`accountKeeping Server listening on port ${port}!`))
//   );
