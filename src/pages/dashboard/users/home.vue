<template>
	<q-page class="flex-center">
		<h2 class="page_title">Список пользователей c ролью {{this.role_id}}</h2>
	</q-page>

</template>

<script>

export default {
	data () {
		return {
			role_id: this.$router.params+' suka'
		}
	},
	methods: {

	},
	mounted: function () {
		console.log(localStorage);
		console.log(this.$router);
		var self = this;
		self.$nextTick(function () {
			self.axios.get(this.domain+'api/dashboard/users/?api_token='+localStorage.getItem('api_token')+'&user_id='+localStorage.getItem('user_id'))
		        .then(function (response) {
		            console.log(response);
		            if (response.data.status == 403) {
		            	self.$router.push({name: 'login'});
		            }
		        })
		        .catch(function (error) {
		            console.log(error);
		        });
		});
	}
}

</script>

<style scoped>
</style>