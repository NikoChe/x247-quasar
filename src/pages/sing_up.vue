<template>
	<q-page>
		<q-form name="auth" @submit = onSubmit() >
			<h6 class="text-center">Регистрация</h6>
			<div class="row form-fields ai-start">
				<div class="form-group col-sm-6 col-12">
					<q-input autocomplete='off' name="first_name" required v-model="formData.first_name" label="Ваше имя"/>
				</div>
				<div class="form-group col-sm-6 col-12">
					<q-input autocomplete='off' name="last_name" required v-model="formData.last_name" label="Ваша фамилия"/>
				</div>
				<div class="form-group col-sm-6 col-12">
					<q-input autocomplete='off' name="city" required v-model="formData.city" label="Город"/>
				</div>
				<div class="form-group col-sm-6 col-12">
					<q-input autocomplete='off' name="phone" @input="validation.phone=false" required v-model="formData.phone" label="Ваш телефон" mask="+38(###)###-##-##"
					:rules="[val => !validation.phone || 'Этот телефон уже используется']"/>
				</div>
				<div class="form-group col-sm-12 col-12">
					<q-input autocomplete='off' name="email" required v-model="formData.email" type="email" label="Электронная почта"
					:rules="[val => !validation.email || 'Эта электронная почта уже используется']"/>
				</div>
				<div class="form-group col-sm-6 col-12">
					<q-input v-model="formData.password" label="Ваш пароль" required :type="isPwd ? 'password' : 'text'"
						:rules="[val => val.length >= 8 || 'Минимальная длина пароля 8 символов']">
						<template v-slot:append>
						  <q-icon
						    :name="isPwd ? 'visibility_off' : 'visibility'"
						    class="cursor-pointer"
						    @click="isPwd = !isPwd"
						  />
						</template>
					</q-input>
				</div>
				<div class="form-group col-sm-6 col-12">
					<q-input v-model="check_password" label="Подтвердите пароль" required :type="isPwd ? 'password' : 'text'"
					lazy-rules
        			:rules="[ val => val && val == formData.password || 'Пароли не совпадают',
        					  val => val.length >= 8 || 'Минимальная длина пароля 8 символов']"
					>
						<template v-slot:append>
						  <q-icon
						    :name="isPwd ? 'visibility_off' : 'visibility'"
						    class="cursor-pointer"
						    @click="isPwd = !isPwd"
						  />
						</template>
					</q-input>
				</div>
			</div>
		  	<div class="btns">
			  <q-btn label="Зарегестрироватся" type="submit" color="primary"/>
			</div>
			<router-link class="auth_link" to="login">Есть аккаунт?</router-link>
		</q-form>
	</q-page>
</template>

<script>
	export default {
	  name: 'sign_up',

	  data () {
	    return {
	    	formData: {
				first_name		: '',
				last_name		: '',
				city			: '',
				phone			: '',
				email			: '',
				password		: '',
	    	},
	    	validation: {
	    		phone: false,
	    		email: false,
	    	},
			check_password	: '',

	      isPwd: true,
	    }
	  },

	  methods: {
	  	onSubmit(){
	  		var self = this;

	  		this.axios.post(this.domain+'api/register', {
			    data: this.formData
			})
			.then(function (response) {
				console.log(response);
				if (response.status == 201) {
				    console.log(response.data.api_token);
				    localStorage.setItem('api_token', response.data.api_token);
				    localStorage.setItem('user_id', response.data.id);
				    console.log(localStorage);

				    self.$router.push({name: 'dashboard'});
				} else {
					console.log(response.data);
				}
			})
			.catch(function (error) {
			    console.log(error.response);
			    for (var key in error.response.data.errors) {
				  console.log( "Ключ: " + key + ". Значение: " + error.response.data.errors[key] );
				  self.validation[key] = true;
				}
			});
	  	},
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