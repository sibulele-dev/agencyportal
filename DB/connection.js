const mongoose = require("mongoose");

const connectDB = function() {
  try {
    const conn = mongoose.connect(`mongodb://localhost:27017/Portal`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.export = connectDB