<script>
  import Input from "../components/Input.svelte"
  import { faLock } from '@fortawesome/free-solid-svg-icons'
  import { replace } from 'svelte-spa-router'

  let password = ''
	let validPassword = undefined
	let actualPassword = import.meta.env.VITE_NEW_DOC_PSWD

	if(localStorage.getItem('secret-password') === actualPassword) {
		replace('/add-archive');
	}

	const validatePassword = (input) => {
		if (input === actualPassword) {
			validPassword = true
			localStorage.setItem('secret-password', actualPassword)
			replace('/add-archive');
		} else {
			validPassword = false
		}
	}
</script>

<div class="upload-barrier">
	<div class="verification-container">
		<Input 
		  isSuccess={validPassword}
			label="Verification Password"
			icon={faLock}
			hasValidation={true}
			errorMessage="That password is incorrect."
			bind:value={password}
		/>
		<button on:click={() => validatePassword(password)}>Continue</button>
	</div>
</div>

<style>
	.upload-barrier {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
	}

	.verification-container {
		width: 50%;
		border: 2px solid black;
		padding: 80px;
	}
</style>
