import mongoose from 'mongoose';
import dotenv from "dotenv";
import app from './app.js';

dotenv.config();
const mongooseURI = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

async function main () {
  try {
    await mongoose.connect(mongooseURI as string)
    console.log('mongoose connected successfully!!!')
    app.listen(port, () => {
      console.log('server is running on port', port)
    })
  } catch (error) {
    console.log(error);
  }
}
main();
