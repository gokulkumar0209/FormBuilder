import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import NewForm from "./NewForm";
import Card from "./Card";

function DashBoard() {
	const [createView, setCreateView] = useState(false);
	const [forms, setForms] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const fetchForms = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "allForms"));
				const formsList = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setForms(formsList);
			} catch (error) {
				alert("Error fetching forms: " + error.message);
			}
		};

		fetchForms();
	}, []);

	return (
		<div className=" bg-gray-200">
			<div className=" bg-white p-2">
				<h2>User Feedback</h2>
			</div>
			<div className=" p-4">
				<div className="grid grid-cols-4 gap-4 ">
					<div className=" bg-white  col-span-1 rounded-md shadow text-6xl flex items-center justify-center">
						<button
							className=""
							onClick={() => setCreateView(true)}
							aria-label="Add new form"
						>
							<div className="grid">
								<span>+</span>
								<span className=" text-lg font-bold">New Form</span>
							</div>
						</button>
					</div>
					{forms.map(
						(form) => form.title && <Card key={form.id} form={form}></Card>
					)}
				</div>
			</div>
			{createView && (
				<div className="fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50">
					<NewForm setCreateView={setCreateView} />
				</div>
			)}
		</div>
	);
}

export default DashBoard;
