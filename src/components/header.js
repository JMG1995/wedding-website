import React from 'react';
import heroImage from '../images/hero.jpg';

function Header() {
	return (
		<header className="max-h-600 relative">
			<img className="max-h-600 w-full object-cover" src={heroImage} alt="" />
			<div className="absolute inset-0 bg-black bg-opacity-25"></div>
			<div className="absolute inset-0 flex items-center justify-center z-20">
				<h1 className="text-white text-3xl lg:text-5xl tracking-widest">
					Joseph + Anthea
					<span className="block text-center">Get Married</span>
				</h1>
			</div>
		</header>
	);
}

export default Header;
