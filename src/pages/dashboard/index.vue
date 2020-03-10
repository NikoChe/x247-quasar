<template>
	<q-page class="flex-center p-2">
		<!-- <div class="row welcome_text"> -->
			<q-banner class="bg-primary round-3 text-white w-100">
		      <h1>Добро пожаловать, {{name}}</h1>
		      <template v-slot:action>

		      </template>
		    </q-banner>
		<!-- </div> -->
	</q-page>
</template>

<script>

	export default {

	  data () {
	    return {
	      phone: '',
	      name: '',
	      password: '',
	      isPwd: true ,
	      applications: {}
	    }
	  },

	  methods: {

	  },

	  mounted: function(){
	  	var user = JSON.parse(localStorage.user);
		this.name = user.last_name+' '+user.first_name;
		var self = this;

		this.axios.post(this.domain+'api/get_dashboard_application', 
			{
				id : user.id,
				api_token : user.api_token
			}
		).then(function(response){
			console.log(response);
		}).catch(function(){
			// self.$router.push({name:'login'});
		});

	  	console.log('is dashboard, TO DO get application');
	  }
	}

</script>

<style scoped>
	
	.welcome_text {
		align-items: center;
	}

	h1 {
		font-size: 20px;
		line-height: 24px;
	}

</style>