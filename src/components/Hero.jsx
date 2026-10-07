import cloud from "../assets/images/cloud.png";
import laminar from "../assets/images/laminar.jpg";
import particles from "../assets/images/particles.jpg";

function Hero() {
    return (
		<section id="hero" className="hero">
			<div className="hero-container">
				<img className="particles" src={particles} />
				<h1>kent kawashima</h1>
				<p>
					SWE@UCI 4th year    | jp/cn student | bay area | interested in
					fullstack development
				</p>
			</div>
		</section>
	);
}

export default Hero;
