<template>
	<q-page>
		<h1>page!</h1>
	</q-page>
</template>
<script>

	export default {
	  name: 'logout',

		data () {
			return {}
		},

	  	mounted: function () {
			localStorage.clear();
			console.log(localStorage);
			this.$router.push({name: 'login'});
			return;
		}
	}

</script>