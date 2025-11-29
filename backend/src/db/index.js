import mongoose from "mongoose";
import app from "../app.js";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
     `${[process.env.DB_URI]}`
    );

    console.log(
      "Database handshake finalized. Connected to host:",
      connectionInstance.connection.host
    );

    // Express does not need a DB event bridge; remove invalid handlers.
  } catch (err) {
    console.error("DB initialization failure:", err);
    process.exit(1);
  }
};

export { dbConnect };
