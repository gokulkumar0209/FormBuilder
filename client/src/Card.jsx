import React from "react";

function Card({ form }) {
	return (
		<div className=" bg-white rounded-md">
			<div className=" flex justify-center p-1 text-xl bg-yellow-300">
				<h2 className=" bg-white rounded-full p-1">📑</h2>
			</div>
			<div className=" p-2 grid grid-rows-6">
				<div className=" border-gray-300 col-span-1">{form.title}</div>
				<div className=" flex justify-between">
					<div>Submitted</div>
					<div>0</div>
				</div>
				<div className="flex justify-between">
					<div>Viewed</div>
					<div>0</div>
				</div>
				<div className="flex justify-between">
					<div>Date Published</div>
					<div>Hello</div>
				</div>
				<div className=" flex justify-center">
					<button className=" p-1 px-2 bg-violet-500 rounded-md text-white w-3/4">
						View Submission
					</button>
				</div>
				<div className=" flex justify-center w-full mt-2">
					<div className=" flex justify-between  w-3/4">
						<button className=" p-1 px-4 bg-green-500 rounded-md text-white">
							Edit
						</button>
						<button className=" p-1 px-4  bg-blue-500 rounded-md text-white">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
