import React from "react";
import Switch from "@mui/material/Switch";

function TextInput({
	setHide,
	label,
	setLabel,
	error,
	setError,
	required,
	setRequired,
	fields,
	setFields,
}) {
	const addField = () => {
		if (fields.length < 7) {
			setFields((prevFields) => [
				...prevFields,
				{ id: Date.now(), type: "text", label: label, required: required },
			]);
			setLabel("");
			setRequired("");
		}
	};
	return (
		<div className="space-y-4">
			<label className="block">
				Label
				<input
					type="text"
					value={label}
					onChange={(e) => setLabel(e.target.value)}
					className="ml-2 border border-gray-300 rounded p-1"
				/>
			</label>

			<div className="flex items-center">
				<Switch
					checked={required}
					onChange={(e) => setRequired(e.target.checked)}
					color="primary"
				/>
				<span className="ml-2">Required</span>
			</div>
			<button
				className="p-2 bg-green-500 text-white rounded"
				onClick={() => {
					setHide(true);
					addField();
				}}
			>
				Save
			</button>
		</div>
	);
}

export default TextInput;
