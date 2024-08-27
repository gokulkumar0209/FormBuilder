import { useState } from "react";
import DashBoard from "./DashBoard";
import { firestore } from "./firebase"; // Import firestore from firebase.js
import { addDoc, collection } from "firebase/firestore";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="bg-green-400">
				<DashBoard />
			</div>
		</>
	);
}

export default App;
