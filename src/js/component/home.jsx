import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
		<Navbar />
		<Footer />
		</div>
	);
};

export default Home;
