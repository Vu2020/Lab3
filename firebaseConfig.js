import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAbvzAWaWiDW3jVcad5bctKkWVOCGFI_Ak",
    authDomain: "fir-6c2e6.firebaseapp.com",
    projectId: "fir-6c2e6",
    storageBucket: "fir-6c2e6.appspot.com",
    messagingSenderId: "973681125939",
    appId: "1:973681125939:web:ac09cd0cf5203596055146",
    measurementId: "G-0D6SQF35EN"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
