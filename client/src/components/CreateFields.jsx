import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	getFirestore,
	doc,
	getDoc,
	updateDoc,
	setDoc,
} from "firebase/firestore";
import AllFields from "./AllFields";

function CreateFields() {
	const navigate = useNavigate();
	const { id, title } = useParams();
	const [fields, setFields] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const fetchFields = async () => {
			try {
				const formRef = doc(db, "allForms", id);
				const formDoc = await getDoc(formRef);
				if (formDoc.exists()) {
					const data = formDoc.data();
					setFields(data.fields || []);
				} else {
					alert("Error in fetching the Document");
				}
			} catch (error) {
				alert(
					error.message || "An error occurred while fetching the document."
				);
			}
		};
		fetchFields();
	}, []);

	const createComponent = (field, index) => {
		switch (field.type) {
			case "text":
				return (
					<div key={index} className="grid">
						<label>{field.label}</label>
						<input type="text" required={field.required} className="" />
					</div>
				);
			case "numeric_rating":
				return (
					<div key={index} className="grid">
						<label>{field.label}</label>
						<div className="flex justify-center items-center">
							{Array.from({ length: 10 }, (_, i) => (
								<button key={i} className="border p-2 bg-white border-black">
									{i + 1}
								</button>
							))}
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	const handlePublish = async (e) => {
		const db = getFirestore();
		e.preventDefault();
		const formRef = doc(db, "allForms", id);

		try {
			const docSnapshot = await getDoc(formRef);

			if (docSnapshot.exists()) {
				await updateDoc(formRef, {
					fields: fields,
				});
			} else {
				await setDoc(formRef, {
					fields: fields,
				});
			}
			alert("Form Published");
		} catch (error) {
			alert.error(
				`Error publishing form: ${
					error.message || "An error occurred while publishing the form."
				}`
			);
		}
	};

	return (
		<div className=" h-screen">
			<form className=" h-full" action="" onSubmit={handlePublish}>
				<div className="bg-white p-2 flex justify-between border-b-4 border-gray-400">
					<h2
						className=" bg-gray-100 rounded-lg hover:cursor-pointer p-2"
						onClick={() => navigate("/")}
					>
						User Feedback
					</h2>
					<div>
						<button className=" bg-blue-500 text-white p-2 rounded mx-4">
							Save
						</button>
						<button
							type="submit"
							className="bg-green-600 text-white p-2 rounded mx-4"
						>
							Publish
						</button>
					</div>
				</div>

				<div className="flex justify-between bg-gray-200 h-full">
					<div className="w-[75%] flex justify-center items-center ">
						<div className=" bg-gray-100 w-[40%] h-[90%] ">
							<h2 className="bg-blue-500 text-white p-2 font-bold">{title}</h2>
							<div className=" p-2 bg-gray-100">
								{fields.map((field, index) => createComponent(field, index))}
							</div>
						</div>
					</div>
					<div className="bg-green-400 w-[25%]">
						<AllFields fields={fields} setFields={setFields} />
					</div>
				</div>
			</form>
		</div>
	);
}

export default CreateFields;
