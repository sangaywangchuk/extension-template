import React from 'react'
import '../stylesheets/global.scss'
import { Field, Form } from 'react-final-form'

const SidePanelPage = () => {

  const onSubmit = (value: {email: string, password: string}) => {
    const payload  = value;
    chrome.sidePanel.setOptions({path: 'sidePanelContent.html'})
  }

	return (
		<div className="p-4">
			<h5>&lt;blocks/&gt; Language Manager</h5>
			<hr />
			<div className="mt-4">
				<h4 className="mb-4">Sign in</h4>
				<Form
					onSubmit={onSubmit}
					render={({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<div>
								<Field name="email">
									{({ input, meta }) => (
										<div className="mb-[14px] flex flex-1 flex-col">
											<input
												type="text"
												{...input}
												className="input"
												placeholder="Email"
											/>
											{meta.touched && meta.error && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>

							<Field name="password">
								{({ input, meta }) => (
									<div className="mb-[14px] flex flex-1 flex-col">
										<input
											type="text"
											{...input}
											className="input"
											placeholder="Password"
										/>
										{meta.touched && meta.error && <span>{meta.error}</span>}
									</div>
								)}
							</Field>

							<div className="flex flex-1">
								<button
									type="submit"
									className="btn btn-primary"
								>
									Login
								</button>
							</div>
						</form>
					)}
				/>
			</div>
		</div>
	)
}

export default SidePanelPage
