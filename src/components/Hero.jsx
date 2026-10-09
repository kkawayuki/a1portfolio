import cloud from "../assets/images/cloud.png";
import laminar from "../assets/images/laminar.jpg";
import particles from "../assets/images/particles.jpg";

function Hero() {
    return (
		<section id="hero" className="hero">
			<div className="hero-container">
				<div className="particles-wrap">
					<div className="particles-frame">
						<img className="particles" src={particles} />
					</div>
					<span className="particles-bubble">
						unrelated graphic I <s>stole</s> borrowed from pinterest
					</span>
				</div>
				<h1>kent kawashima</h1>
				<p>
					SWE@UCI 4th year student | jp/cn | bay area | interested in
					fullstack development
				</p>
			</div>
		</section>
	);
}

export default Hero;
