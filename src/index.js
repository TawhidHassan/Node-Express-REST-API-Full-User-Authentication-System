import cors from "cors";
import consola from "consola";
import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";

// Import Application Constants
import { DB } from "./constants";
const PORT=5000;
// Router exports


// Initialize express application
const app = express();

// Apply Application Middlewares
app.use(cors());
app.use(json());

// Inject Sub router and apis


const main =  () => {
  try {
    // Connect with the database
     mongoose.connect(DB, {
        //must add in order to not get any error masseges:
        useUnifiedTopology:true,
        useNewUrlParser: true,
        useCreateIndex: true
    });
    consola.success("DATABASE CONNECTED...");
    // Start application listening for request on server
    app.listen(PORT, () => consola.success(`Sever started on port ${PORT}`));
  } catch (err) {
    consola.error(`Unable to start the server \n${err.message}`);
  }
};

main();