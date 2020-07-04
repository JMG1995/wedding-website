import React from 'react';

export default function Form() {
	return (
		<form
			className="mt-4"
			name="wedding-details"
			method="POST"
			action="/success"
			data-netlify="true"
			netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="wedding-details" />
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
				<label className="block">Will you be using the provided coach?</label>
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
					Please list any dietary requirements you have (leave blank if none)
				</label>
				<input
					className="bg-gray-200 px-2 py-1 w-full"
					type="text"
					name="diet-reqs"
				/>
			</div>
			<div>
				<button
					className="px-6 rounded-full text-white tracking-widest      py-1 bg-green-700 block"
					type="submit">
					Send
				</button>
			</div>
		</form>
	);
}
