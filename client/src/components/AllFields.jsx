import React, { useState } from "react";
import TextInput from "../fields/TextInput";
import NumericRatingInput from "../fields/NumericRatingInput";
import StarRatingInput from "../fields/StarRatingInput";
import RadioButtonInput from "../fields/RadioButtonInput";

function AllFields({ fields, setFields }) {
	const [hide, setHide] = useState(true);
	const [label, setLabel] = useState("");
	const [error, setError] = useState("");
	const [required, setRequired] = useState(false);
	const [currentFieldType, setCurrentFieldType] = useState("");

	const renderFieldComponent = () => {
		switch (currentFieldType) {
			case "text":
				return (
					<TextInput
						setHide={setHide}
						label={label}
						setLabel={setLabel}
						error={error}
						setError={setError}
						required={required}
						setRequired={setRequired}
						fields={fields}
						setFields={setFields}
					/>
				);
			case "numeric_rating":
				return (
					<NumericRatingInput
						setHide={setHide}
						label={label}
						setLabel={setLabel}
						error={error}
						setError={setError}
						required={required}
						setRequired={setRequired}
						fields={fields}
						setFields={setFields}
					/>
				);
			case "star":
				return (
					<StarRatingInput
						setHide={setHide}
						label={label}
						setLabel={setLabel}
						error={error}
						setError={setError}
						required={required}
						setRequired={setRequired}
						fields={fields}
						setFields={setFields}
					/>
				);
			case "radio":
				return (
					<RadioButtonInput
						setHide={setHide}
						label={label}
						setLabel={setLabel}
						error={error}
						setError={setError}
						required={required}
						setRequired={setRequired}
						fields={fields}
						setFields={setFields}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div className="h-full w-full bg-white p-4 grid ">
			<h2 className="font-bold text-xl">All Fields</h2>
			<div>
				{hide ? (
					<div className=" space-y-2 grid">
						<button
							className="p-2 bg-gray-200  rounded"
							onClick={() => {
								setHide(false);
								setCurrentFieldType("text");
							}}
						>
							Text Area
						</button>
						<button
							className="p-2 bg-gray-200 rounded"
							onClick={() => {
								setHide(false);
								setCurrentFieldType("numeric_rating");
							}}
						>
							Numeric Rating
						</button>
						<button
							className="p-2 bg-gray-200 rounded"
							onClick={() => {
								setHide(false);
								setCurrentFieldType("star");
							}}
						>
							Star Rating
						</button>
						<button
							className="p-2 bg-gray-200 rounded"
							onClick={() => {
								setHide(false);
								setCurrentFieldType("radio");
							}}
						>
							Radio Button
						</button>
					</div>
				) : (
					<div className="h-screen">{renderFieldComponent()}</div>
				)}
			</div>
		</div>
	);
}

export default AllFields;
