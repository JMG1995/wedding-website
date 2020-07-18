import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Form from '../components/form';

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

			<section className="mt-4 lg:mt-12 max-w-800 mx-auto grid grid-cols-1">
				<p>
					We’re getting married at Sittella Winery in the Swan Valley on
					February 26, 2021 at <u>4pm.</u>
				</p>
				<p>
					We’ve arranged coach transfers between The Novotel Vines Resort and
					Sittella for any guests who wish to get their party on and not worry
					about driving.
				</p>
				<p>
					The coach will leave the Novotel Vines at <u>3:30pm</u>, with pickup
					from Sittella at <u>11:50pm.</u>
				</p>
				<p>
					Please note: children are welcome to attend the ceremony, however our
					reception is an adult only occasion.
				</p>
				<div>
					<h2 className="mb-2 mt-4 lg:mt-12 text-4xl font-bold text-center">
						{`A few things we need to know`}
					</h2>
					<p className="mb-4 lg:mb-8">
						Please fill out the following form for <u>each person attending</u>{' '}
						by no later than November 20.
					</p>
					<Form />
				</div>
			</section>
		</Layout>
	);
}

export default IndexPage;
