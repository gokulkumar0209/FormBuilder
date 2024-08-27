import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AllFields from "./AllFields";

function Create() {
	const { title } = useParams();
	const [fields, setFields] = useState([]);
	return (
		<div>
			<div className=" bg-white p-2  ">
				<h2 className=" ">User Feeedback</h2>
			</div>

			<div className=" flex justify-between bg-yellow-300 h-screen">
				<div className=" w-[75%] flex justify-center items-center ">
					<div className=" bg-red-400 w-[40%] h-[90%]">
						<h2 className=" bg-blue-500 text-white p-1">{title}</h2>
					</div>
				</div>
				<div className=" bg-green-400 w-[25%]  ">
					<AllFields fields={fields} setFields={setFields} />
				</div>
			</div>
		</div>
	);
}

export default Create;
