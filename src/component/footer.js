import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTumblr, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import "../../src/navbar.css";

const Footer = () => (
	<footer className="page-footer	 py-3 text-center sticky-bottom">
		<h6>Follow Star Wars:</h6>
		<div className="social-icons ">
			<ul className="nav justify-content-center mt-0">
				<li className="nav-item">
					<a className="nav-link icons" href="https://www.facebook.com/StarWars"  target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</li>
				<li className="nav-item ">
					<a className="nav-link icons" href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram}  />
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link icons" href="https://starwars.tumblr.com/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTumblr} />
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link icons" href="https://twitter.com/starwars" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link icons"  href="https://www.youtube.com/user/starwars" rel="noopener noreferrer" target="_blank">
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</li>
			</ul>
		</div>
		<ul className="nav justify-content-center ">
			<li className="nav-item border-right">
				<a className="nav-link footer-information" href="https://disneytermsofuse.com/" target="_blank" rel="noopener noreferrer">
					Terms of Use 
				</a>
			</li>
			<li className="nav-item border-right">
				<a className="nav-link footer-information" href="https://support.disney.com/hc/es-es" target="_blank" rel="noopener noreferrer">
					Additional Content Information
				</a>
			</li>
			<li className="nav-item footer-information border-right">
				<a className="nav-link footer-information" href="https://privacy.thewaltdisneycompany.com/en/" target="_blank" rel="noopener noreferrer">
					Privacy Policy
				</a>
			</li>
			<li className="nav-item border-right">
				<a className="nav-link footer-information" href="https://www.shopdisney.com/uptown-disney/?src=starwars&CMP=OTL-Dcom&att=StarWars_Footer_Store" target="_blank">
					Star Wars at shopDisney
				</a>
			</li>
			<li className="nav-item border-right">
				<a className="nav-link footer-information" href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/" target="_blank">
					Children's Online Privacy Policy
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link footer-information" href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/" target="_blank">
					Your California Privacy Rights
				</a>
			</li>
		</ul>
	</footer>
);

export default Footer;