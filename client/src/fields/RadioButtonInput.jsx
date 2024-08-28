import React, { useState } from "react";
import { Switch } from "@mui/material";

function RadioButtonInput({
	setHide,
	label,
	setLabel,
	error,
	setError,
	required,
	setRequired,
}) {
	const [options, setOptions] = useState([""]);

	const addOption = () => setOptions([...options, ""]);
	const updateOption = (index, value) => {
		const newOptions = [...options];
		newOptions[index] = value;
		setOptions(newOptions);
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

			<div>
				<h3 className="mb-2">Options</h3>
				{options.map((option, index) => (
					<div key={index} className="flex items-center mb-2">
						<input
							type="text"
							value={option}
							onChange={(e) => updateOption(index, e.target.value)}
							className="ml-2 border border-gray-300 rounded p-1 flex-grow"
						/>
					</div>
				))}
				<button className="p-1 bg-blue-200 rounded" onClick={addOption}>
					Add Option
				</button>
			</div>

			<button
				className="p-2 bg-green-500 text-white rounded"
				onClick={() => {
					setHide(true);
				}}
			>
				Save
			</button>
		</div>
	);
}

export default RadioButtonInput;
