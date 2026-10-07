import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
	// shared so the navbar's project dropdown can switch the Projects player
	const [selectedProject, setSelectedProject] = useState(0);

	return (
		<>
			<div className="layout">
				<Navbar onSelectProject={setSelectedProject} />
				<main>
					<Hero />
					<Projects selected={selectedProject} onSelect={setSelectedProject} />
					<About />
					<Contact />
				</main>
			</div>
			<Footer />
		</>
	);
}

export default Home;