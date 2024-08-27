import React, { useState } from "react";

import NewForm from "./NewForm";

function DashBoard() {
	const [createView, setCreateView] = useState(false);

	return (
		<div className=" bg-slate-500">
			<div className="bg-red-500 w-20 h-20">
				<button className="bg-blue-100" onClick={() => setCreateView(true)}>
					Add
				</button>
			</div>
			{createView && (
				<div
					className={`fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50 `}
				>
					<NewForm setCreateView={setCreateView} />
				</div>
			)}
		</div>
	);
}

export default DashBoard;
