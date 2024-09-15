import mongoose from "mongoose";

const dbConnection = (db_url : string) => {
  mongoose
      .connect(db_url)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Could not connect to MongoDB", err));
};

export default dbConnection;
