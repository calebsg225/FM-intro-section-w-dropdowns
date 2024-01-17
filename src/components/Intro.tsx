import heroDesktop from '../images/image-hero-desktop.png';
import heroMobile from '../images/image-hero-mobile.png';
import clientDatabiz from '../images/client-databiz.svg';
import clientAudiophile from '../images/client-audiophile.svg';
import clientMeet from '../images/client-meet.svg';
import clientMaker from '../images/client-maker.svg';

const Intro = () => {
	const clientLogos = [clientDatabiz, clientAudiophile, clientMeet, clientMaker]
	return (
		<main>
			<img src={heroMobile} alt="hero"/>
			<section className='intro-text-container'>
				<h2>Make remote work</h2>
				<p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
				<button className='learn-more'>
					<p>Learn More</p>
				</button>
				<div className='client-logos'>
					{clientLogos.map((logo, key) => {
						return <img key={key} src={logo} alt='client logo' />;
					})}
				</div>
			</section>
		</main>
	);
}

export default Intro;