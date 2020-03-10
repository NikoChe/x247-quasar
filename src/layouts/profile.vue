<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Toolbar
        </q-toolbar-title>
        <router-link to='/'>
        	<q-btn
        		icon="home_work"
        		label="На главную"
        		color="primary"
        		no-caps
        	/>
        </router-link>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label class="text-center p-4">Личный кабинет</q-item-label>
        <q-separator/>

		<q-item clickable>
			<q-item-section avatar>
				<q-icon name="school" />
			</q-item-section>
			<q-item-section>
				<q-item-label>Персональные данные</q-item-label>
				<q-item-label caption>some text</q-item-label>
			</q-item-section>
		</q-item>

		<q-item clickable>
			<q-item-section avatar>
				<q-icon name="code" />
			</q-item-section>
			<q-item-section>
				<q-item-label>Dashboard item 2</q-item-label>
				<q-item-label caption>some text 2</q-item-label>
			</q-item-section>
		</q-item>

		<q-item clickable>
			<q-item-section avatar>
				<q-icon name="chat" />
			</q-item-section>
			<q-item-section>
				<q-item-label>Dashboard item 3</q-item-label>
			</q-item-section>
		</q-item>

		<q-item clickable>
			<q-item-section avatar>
				<q-icon name="record_voice_over" />
			</q-item-section>
			<q-item-section>
				<q-item-label>Dashboard item 4</q-item-label>
				<q-item-label caption>some text 2</q-item-label>
			</q-item-section>
		</q-item>

		<q-expansion-item
		expand-separator
		icon="signal_wifi_off"
		label="Dropdown item"
		>
			<q-card>
				<q-card-section>
					<q-item clickable>
						<q-item-section avatar>
							<q-icon name="code" />
						</q-item-section>
						<q-item-section>
							<q-item-label>Dashboard item 2</q-item-label>
							<q-item-label caption>some text 2</q-item-label>
						</q-item-section>
					</q-item>

					<q-item clickable>
						<q-item-section avatar>
							<q-icon name="chat" />
						</q-item-section>
						<q-item-section>
							<q-item-label>Dashboard item 3</q-item-label>
						</q-item-section>
					</q-item>

					<q-item clickable>
						<q-item-section avatar>
							<q-icon name="record_voice_over" />
						</q-item-section>
						<q-item-section>
							<q-item-label>Dashboard item 4</q-item-label>
							<q-item-label caption>some text 2</q-item-label>
						</q-item-section>
					</q-item>
				</q-card-section>
			</q-card>
		</q-expansion-item>

		<q-item clickable>
			<q-item-section avatar>
				<q-icon name="public" />
			</q-item-section>
			<q-item-section>
				<q-item-label>Dashboard item 5</q-item-label>
			</q-item-section>
		</q-item>

		<q-item clickable>
			<q-item-section avatar>
				<q-icon name="rss_feed" />
			</q-item-section>
			<q-item-section>
				<q-item-label>Dashboard item 6</q-item-label>
			</q-item-section>
		</q-item>




        

      </q-list>
    </q-drawer>

    <!-- INCLUDE PAGE -->
    <q-page-container>
      <router-view />
    </q-page-container>
  
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
