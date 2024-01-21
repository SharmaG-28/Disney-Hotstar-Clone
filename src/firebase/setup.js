import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZ1ChAORn9kSatWt4lbJMT1tRjDJJ91Xg",
  authDomain: "disney-clone-e4dd5.firebaseapp.com",
  projectId: "disney-clone-e4dd5",
  storageBucket: "disney-clone-e4dd5.appspot.com",
  messagingSenderId: "16493894131",
  appId: "1:16493894131:web:c74f4640c31af75f2fda86"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);