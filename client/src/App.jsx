import { useState } from "react";
import DashBoard from "./DashBoard";
import "./firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

function App() {
	const [count, setCount] = useState(0);
	const db = getFirestore();
	const save = async () => {
		try{
		console.log("Hi");
		await addDoc(collection(db, "myCollection"), {
			field1: count,
		});
		console.log("Hi");
		alert("Document Written");}
		catch(error){
			console.log(error)
		}
	};
	return (
		<>
			<div className=" bg-green-400">
				<div>
					<button className=" bg-yellow-300" onClick={() => save()}>
						Hi
					</button>
				</div>
				<DashBoard />
			</div>
		</>
	);
}

export default App;
