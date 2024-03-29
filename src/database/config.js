import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp27_0PNgCrZ3VoHKm_469LHGejx22yxE",
  authDomain: "info6132-lab02-14cb3.firebaseapp.com",
  projectId: "info6132-lab02-14cb3",
  storageBucket: "info6132-lab02-14cb3.appspot.com",
  messagingSenderId: "214631569211",
  appId: "1:214631569211:web:61f0e62256e430cf48891e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);