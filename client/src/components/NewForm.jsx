import React, { useState } from "react";
import {} from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "../firebase";
import { useNavigate } from "react-router-dom";
function NewForm({ setCreateView }) {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");

	const handleCreation = async () => {
		const db = getFirestore();
		const date = new Date();
		const formattedDate = date.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
		try {
			const docRef = await addDoc(collection(db, "allForms"), {
				title: title,
				date: formattedDate,
			});
			const docId = docRef.id;
			navigate(`/${docId}/${title}`);
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
