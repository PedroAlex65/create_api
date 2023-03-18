import mongoose from "mongoose";

async function connectDataBase() {
  await mongoose.connect(
    "mongodb+srv://pedroalex:LUP9qNlrVUG9eyKn@cluster0.wyclfts.mongodb.net/?retryWrites=true&w=majority"
  );
}

export default connectDataBase;
