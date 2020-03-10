<template>
	<q-page>
		<q-form name="auth" @submit = onSubmit()>
			<h6 class="text-center">Авторизация</h6>
			<q-toggle
		      :label="'Вход по телефону'"
		      v-model="mask"
		    />
			<q-input v-model="phone" v-show="mask" type="text" label="Ваш телефон" :mask="'+7(###)###-##-##'"/>
			<q-input v-model="email" v-show="!mask" type="text" label="Ваш email"/>
			<q-input v-model="formData.password" required label="Ваш пароль" :type="isPwd ? 'password' : 'text'">
				<template v-slot:append>
				  <q-icon
				    :name="isPwd ? 'visibility_off' : 'visibility'"
				    class="cursor-pointer"
				    @click="isPwd = !isPwd"
				  />
				</template>
			</q-input>
			<p class="fs-14 bs-warning p-1 my-1" v-if="!is_correct_data">Неверный телефон или пароль </p>
		  	<div class="btns row">
			  <q-btn label="Войти" type="submit" color="primary"/>
			</div>
		</q-form>
	</q-page>
</template>

<script>

	export default {
		name: 'sign_up',

		data () {
			return {
				formData: {
					identity: '',
					password: '',
				},
				phone: '',
				email: '',
				mask: false,
				label: 'email',
				type: 'email',
				pinkModel: '',
				is_correct_data: true,
				isPwd: true 
			}
		},

		methods: {

			onSubmit(){
				this.formData.identity = this.mask ? this.phone : this.email;
				if (this.formData.identity == '') {
					alert('Укажите email или телефон');
					return;
				}
				var self = this;

				this.axios.post(this.domain+'api/login', this.formData)
				.then(function (response) {
					console.log(response);
					if (response.status == 200) {
						localStorage.setItem('user', JSON.stringify(response.data.data));

						console.log(localStorage);
						self.$router.push({name: 'dashboard'});
					} else {
					}
				})
				.catch(function (error) {
					console.log(error);
					console.log('данные введены не корректно');
					self.is_correct_data = false;
				});
			},

		},

		mounted: function(){
			var self = this;
			console.log(localStorage);
			if (localStorage.user!=undefined) {
				var user = JSON.parse(localStorage.user);
				this.axios.post(this.domain + 'api/is_auth', user).then(function(response){
					self.$router.push({name: 'dashboard'});
				}).catch(function(){
					localStorage.clear();
				});
			}
		}
	}

</script>

<style scoped>

	h6 {
		margin-bottom: 20px;
	}

	.btns {
		margin-top: 20px;
	}

	.auth_link {
	    color: #666;
	    text-decoration: unset;
	    display: inline-block;
	    margin-top: 20px;
	}

</style>