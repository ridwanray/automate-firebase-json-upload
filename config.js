// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const dotenv = require('dotenv');
dotenv.config();

const firebaseConfig = {
  apiKey:process.env.apiKey,
  authDomain:process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
}
// Exports
module.exports = firebaseConfig;