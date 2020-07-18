import React from 'react';
import heroImage from '../images/hero.jpg';

export default function Header() {
	return (
		<header className="max-h-600 relative">
			<img className="max-h-600 w-full object-cover" src={heroImage} alt="" />
			<div className="absolute inset-0 bg-black bg-opacity-25"></div>
			<div className="absolute inset-0 flex items-center justify-center z-20">
				<h1 className="text-white text-center text-3xl lg:text-5xl tracking-widest">
					Joseph + Anthea<br></br>
					<span className="inline-block relative pb-2">
						Get Married
						<span className="w-full absolute bottom-0 h-2 rounded-full bg-white left-0"></span>
					</span>
				</h1>
			</div>
		</header>
	);
}
