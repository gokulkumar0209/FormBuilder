import { useState } from "react";
import DashBoard from "./DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<DashBoard />} path="/"></Route>
					<Route element={<Create />} path="/create/:title"></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
