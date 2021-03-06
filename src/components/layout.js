import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';

function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen font-sans text-gray-900">
			<Header />

			<main className="max-w-1280 mx-auto px-4 xl:px-0 py-8 w-full md:py-16">
				{children}
			</main>

			<footer className="max-w-1280 mx-auto px-4 xl:px-0 py-8 w-full flex items-center justify-end">
				<a
					href="https://halfcab.com.au"
					target="_blank"
					rel="noopener noreferrer"
					className="transition duration-200 hover:text-green-700">
					Built by Halfcab.
				</a>
			</footer>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
