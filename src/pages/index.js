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

			<section className="mt-12 grid grid-cols-1">
				<p>
					We’re getting married at sittella winery in the swan valley on
					February 26, 2021 at <u>4pm.</u>
				</p>
				<p>
					We’ve arranged coach transfers between The Novotel vines resort and
					sittella for any guests who wish to get their party on and not worry
					about driving.
				</p>
				<p>
					Leaving novotel vines at <u>3:30pm</u>, with pickup from sittella at{' '}
					<u>11:50pm.</u>
				</p>
				<p>
					Please note: children are welcome to attend the ceremony, however our
					reception is an adult only occasion.
				</p>
			</section>

			<section className="mt-12 grid grid-cols-1">
				<h2 className="inline-block mb-0 text-4xl font-bold text-center">
					{`A few things we need to know`}
				</h2>
				<p className="text-center">
					Please fill out the following form for <u>each person attending</u> by
					no later than november 20.
				</p>
				<form
					className="mt-4"
					name="wedding-details"
					method="POST"
					data-netlify="true">
					<div>
						<label className="block">Full Name</label>
						<input
							className="bg-gray-200 px-2 py-1 w-full"
							type="text"
							name="name"
						/>
					</div>
					<div>
						<label className="block">Are you attending?</label>
						<p>
							<input
								type="radio"
								id="yes-attending"
								name="attending"
								value="yes-attending"
							/>
							<label htmlFor="yes-attending">Yes, I am attending</label>
						</p>
						<p>
							<input
								type="radio"
								id="no-attending"
								name="attending"
								value="no-attending"
							/>
							<label htmlFor="no-attending">{"No, I can't make it"}</label>
						</p>
					</div>
					<div>
						<label className="block">
							Will you be staying at the vines resort?
						</label>
						<p>
							<input
								type="radio"
								id="yes-staying"
								name="staying"
								value="yes-staying"
							/>
							<label htmlFor="yes-staying">{"Yes, I'll be staying"}</label>
						</p>
						<p>
							<input
								type="radio"
								id="no-staying"
								name="staying"
								value="no-staying"
							/>
							<label htmlFor="no-staying">No, not staying</label>
						</p>
					</div>
					<div>
						<label className="block">
							Will you be using the provided coach?
						</label>
						<p>
							<input type="radio" id="yes-to" name="coach" value="yes-to" />
							<label htmlFor="yes-to">Only to the wedding</label>
						</p>
						<p>
							<input type="radio" id="yes-from" name="coach" value="yes-from" />
							<label htmlFor="yes-from">Only from the wedding</label>
						</p>
						<p>
							<input
								type="radio"
								id="yes-to-from"
								name="coach"
								value="yes-to-from"
							/>
							<label htmlFor="yes-to-from">Yes, to and from the wedding</label>
						</p>
						<p>
							<input type="radio" id="no-coach" name="coach" value="no-coach" />
							<label htmlFor="no-coach">Not using the coach</label>
						</p>
					</div>
					<div>
						<label className="block">
							Please list any dietary requirements you have (leave blank if
							none)
						</label>
						<input
							className="bg-gray-200 px-2 py-1 w-full"
							type="text"
							name="diet-reqs"
						/>
					</div>
					<div>
						<button
							className="px-6 rounded-full text-white tracking-widest py-1 bg-green-700 block"
							type="submit">
							Send
						</button>
					</div>
				</form>
			</section>
		</Layout>
	);
}

export default IndexPage;
