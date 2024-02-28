import React from 'react'
import '../stylesheets/global.scss'
import { Field, Form } from 'react-final-form'
import tw from 'tailwind-styled-components'

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-black
`
const SidePanelLoginPage = () => {
	
	const onSubmit = (value: { email: string; password: string }) => {
		const payload = value
		chrome.sidePanel.setOptions({ path: 'sidePanelContent.html' })
	}

	return (
		<div className="p-4">
			<Container>
				<div>jsaldjflaskjflasdjflaksdf</div>
			</Container>
			<h5>&lt;blocks/&gt; Language Manager</h5>
			<hr />
			<div className="mt-4">
				<h4 className="mb-4">Sign In</h4>
				<Form
					onSubmit={onSubmit}
					render={({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<div>
								<Field name="email">
									{({ input, meta }) => (
										<div className="relative mb-3" data-te-input-wrapper-init>
											<input
												type="text"
												{...input}
												className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
												placeholder="email"
											/>
											{meta.touched && meta.error && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>

							<Field name="password">
								{({ input, meta }) => (
									<div className="relative mb-3" data-te-input-wrapper-init>
										<input
											type="text"
											{...input}
											className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
											placeholder="Password"
										/>
										{meta.touched && meta.error && <span>{meta.error}</span>}
									</div>
								)}
							</Field>

							<div className="button-container">
								<button
									type="submit"
									className="inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
								>
									Button
								</button>
							</div>
						</form>
					)}
				/>
			</div>
		</div>
	)
}

export default SidePanelLoginPage
