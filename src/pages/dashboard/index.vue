<template>
	<q-page class="flex-center-col p-2">
		<!-- <div class="row welcome_text"> -->
			<q-banner class="bg-primary round-3 text-white w-100">
		      <h1>Добро пожаловать, {{name}}</h1>
		    </q-banner>
		    <q-card flat bordered class="my-card w-100 mt-5">
		      <q-card-section>
		        <div class="text-h6">Заявки</div>
		      </q-card-section>

		      <q-card-section class="q-pt-none overflow-a p-0">
		      	<table>
		      		<thead>
		      			<tr>
		      				<th v-for="item in applications_column" class="p-1 border-default" v-html="item"></th>
		      				<th class="border-default p-1"></th>
		      			</tr>
		      		</thead>
		      		<tbody>
		      			<tr v-for="application in applications">
		      				<th v-for="item in application" class="p-1 border-default" v-html="item"></th>
		      				<th class="p-1 border-default"><q-btn class="p-0"><q-icon name="remove_red_eye" class="text-primary" /></q-btn></th>
		      			</tr>
		      		</tbody>
		      	</table>
		      </q-card-section>
		    </q-card>
		<!-- </div> -->
	</q-page>
</template>

<script>

	export default {

	  data () {
	    return {
	      name: '',
	      applications: [],
	      applications_column: ['ID','Создано','Cтатус', 
	      'Классификатор', 'Проблемное место', 
	      'Адрес', 'Источник', 'Житель', 'УК/ответственный'] 
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
			self.applications = response.data.applications;
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