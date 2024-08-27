// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCsW6UwNg-yYdqxyF0aeJFefiSrXpjnRUA",
	authDomain: "formbuilder-697e6.firebaseapp.com",
	projectId: "formbuilder-697e6",
	storageBucket: "formbuilder-697e6.appspot.com",
	messagingSenderId: "122561849100",
	appId: "1:122561849100:web:661cfe7f28ce7c66120b29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
