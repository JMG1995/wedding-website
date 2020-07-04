import React from 'react';

import Sunset from '../images/sunset.jpg';

export default function SuccessPage() {
	return (
		<div className="flex flex-col h-full mt-12 px-4 md:px-0 justify-center items-center max-w-800 mx-auto">
			<h1 className="text-2xl text-center mb-6">Thanks for letting us know!</h1>
			<img src={Sunset} alt="" />
			<a
				href="/"
				className="mt-6 px-6 uppercase rounded-full text-white text-sm py-1
			bg-green-700 font-bold block transition duration-200 ease-in-out
			hover:bg-green-900">
				Back to home
			</a>
		</div>
	);
}
