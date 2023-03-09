import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";

const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: " #000" }}>
			NavBar
			<Routes>
				<Route path="/" />
			</Routes>
		</Box>
	</BrowserRouter>
);

export default App;
