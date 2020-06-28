import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Home"
			/>

			<section className="text-center">
				<h2 className="inline-block mb-4 text-4xl font-bold">
					{`Yup, we're getting hitched!`}
				</h2>
			</section>

			<section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-20">
				<div>
					<p>
						We’re getting married at sittella winery in the swan valley on
						february 26, 2021 at 4pm.
					</p>
					<p>
						Since it’s pretty far, we’ve arranged a coach to go to and from the
						vines resort for any guests who wish to get their party on and not
						worry about driving.
					</p>
					<p>
						We recommend booking pretty soon if you wish to stay, as they tend
						to fill their rooms quick.
					</p>
				</div>
			</section>
		</Layout>
	);
}

export default IndexPage;
