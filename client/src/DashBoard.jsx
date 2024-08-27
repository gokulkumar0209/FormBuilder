import React, { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "./firebase"; // Ensure this file correctly initializes Firebase

function DashBoard() {
	const db = getFirestore();
	const [title, setTitle] = useState("");

	const handleCreation = async () => {
		try {
			await addDoc(collection(db, "allForms"), { title: title });
			alert("Form Created");
		} catch (error) {
			alert("Error creating form: " + error.message);
		}
	};

	return (
		<div>
			<div className="bg-red-500 w-20 h-20">
				<input
					type="text"
					className="bg-green-200"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button className="bg-blue-100" onClick={handleCreation}>
					Add
				</button>
			</div>
		</div>
	);
}

export default DashBoard;
