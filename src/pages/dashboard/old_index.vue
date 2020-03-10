<template>
	<q-page class="flex-center">
		<div class="row welcome_text">
			<h1>Добро пожаловать, User User</h1>
		</div>
	</q-page>
</template>

<script>

	export default {
	  name: 'sign_up',

	  data () {
	    return {
	      phone: '',
	      password: '',
	      isPwd: true 
	    }
	  }
	}

</script>

<style scoped>
	
	.welcome_text {
		align-items: center;
	}

	h1 {
		font-size: 30px;
	}

</style>