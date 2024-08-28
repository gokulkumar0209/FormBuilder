import { useState } from "react";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/CreateFields";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<DashBoard />} path="/"></Route>
					<Route element={<Create />} path="/:id/:title"></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
