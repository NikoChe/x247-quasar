<template>
  <q-layout>
	<q-page-container>
		<div class="row form_wrap q-layout q-layout--standard justify-center">
			<div class="col-md-6 col-10">
				<router-view />
			</div>
		</div>
	</q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'user',
}
</script>