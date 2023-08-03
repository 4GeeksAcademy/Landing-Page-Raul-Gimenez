import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";


const Home = () => {
	return (
		<div id="mainContainer" className="container row d-flex justify-content-center m-3">
			<Jumbotron />
			
			<Card 
			img = "https://e1.pxfuel.com/desktop-wallpaper/997/601/desktop-wallpaper-yamaha-r1m-with-sc-r1m-black.jpg"
			title = "First Card" 
			description = "This is a description of the first card"
			button = "Find out More!"
			/>
			<Card 
			img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI_-pCU93crLuGVoX5SUfGk-H6_CodVbR2A&usqp=CAU"
			title = "Second Card" 
			description = "This is a description of the second card"
			button = "Find out More!"
			/>
			<Card 
			img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJPH63RVu3PBF0p6mT5jbsyhFl_f9GQCWEg&usqp=CAU"
			title = "Third Card" 
			description = "This is a description of the third card"
			button = "Find out More!"
			/>
			<Card 
			img = "https://www.honda.es/content/dam/central/motorcycles/supersports/cbr1000rr-r-fireblade-2022/Overview/Overlap-module/Honda-CBR1000RR-R-Fireblade-21-1728x972.jpg/_jcr_content/renditions/fb_r.jpg"
			title = "Fourth Card" 
			description = "This is a description of the fourth card"
			button = "Find out More!"
			/>
			
		</div>
	);
};

export default Home;
