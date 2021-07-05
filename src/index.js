import cors from "cors";
import consola from "consola";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import { json } from "body-parser";


// Import Application Constants
import { DB } from "./constants";
const PORT=5000;
// Router imports
import userApis from './apis/user'

// Import passport middleware
require("./middlewares/passport-middleware");

// Initialize express application
const app = express();

// Apply Application Middlewares
app.use(cors());
app.use(json());
app.use(passport.initialize());
// Inject Sub router and apis
app.use('/users',userApis);

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