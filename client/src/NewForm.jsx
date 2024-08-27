import React, { useState } from "react";
import {} from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "./firebase"; // Ensure this file correctly initializes Firebase
import { useNavigate } from "react-router-dom";
function NewForm({ setCreateView }) {
	const db = getFirestore();
	const navigate = useNavigate();
	const [title, setTitle] = useState("");

	const handleCreation = async () => {
		try {
			await addDoc(collection(db, "allForms"), { title: title });
			alert("Form Created");
			navigate(`/create/${title}`);
		} catch (error) {
			alert("Error creating form: " + error.message);
		}
	};
	return (
		<div className={`bg-white p-4 rounded-md `}>
			<h2 className=" font-bold">Create Feedback Form</h2>
			<div className=" grid">
				<input
					type="text"
					className=" p-2 border-b-2 border-black  focus:outline-none"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<div className=" flex justify-end">
					<button
						className=" m-2 p-1 bg-green-500 rounded-lg "
						onClick={handleCreation}
					>
						Create
					</button>
					<button onClick={() => setCreateView(false)}>Cancel</button>
				</div>
			</div>
		</div>
	);
}

export default NewForm;
