import React from "react";

function AllFields({ fields, setFields }) {
	const addField = (type) => {
		console.log(fields);
		setFields((prevFields) => [...prevFields, { id: Date.now(), type }]);
	};
	return (
		<div className=" h-full w-full bg-white grid">
			<h2 className=" font-bold">All Fields</h2>
			<button onClick={() => addField("text")}>Text Area</button>
			<button>Numeric Rating</button>
			<button>Star Rating</button>
			<button>Smiley Rating</button>
			<button>Single Line Input</button>
			<button>Radio Button</button>
			<button>Categories</button>
		</div>
	);
}

export default AllFields;
