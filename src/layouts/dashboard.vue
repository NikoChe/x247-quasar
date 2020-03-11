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
        <router-link class="ml-a" to='logout'>
        	<q-btn
        		icon="logout"
        		label="Выход"
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
      content-class="bg_white"
    >
      <q-list>
        <q-item-label class="text-center p-4">
          <router-link class="sidebar_logo flex-center" to="/dashboard">
            <img src="~assets/logo.png" alt=""><p class="mb-0 ml-1">иск247</p>
          </router-link>
        </q-item-label>

        <q-separator/>

    		<q-item clickable to='/dashboard'>
    			<q-item-section avatar>
    				<q-icon class="text-primary" name="dashboard" />
    			</q-item-section>
    			<q-item-section>
    				<q-item-label>Dashboard</q-item-label>
    				<!-- <q-item-label caption>some text</q-item-label> -->
    			</q-item-section>
    		</q-item>

    		<q-expansion-item
    		expand-separator
    		icon="people" 
        class="icon-primary"
    		label="Пользователи"
    		>
    			<q-card>
    				<q-card-section>
    					<q-item clickable to='/dashboard/users/add'>
    						<q-item-section>
    							<q-item-label>Добавить пользователя</q-item-label>
    						</q-item-section>
    					</q-item>
    					<q-item clickable to='/dashboard/users/16'>
    						<q-item-section>
    							<q-item-label>Диспетчеры</q-item-label>
    						</q-item-section>
    					</q-item>

    					<q-item clickable to='/dashboard/users/17'>
    						<q-item-section>
    							<q-item-label>Бухгалтеры</q-item-label>
    						</q-item-section>
    					</q-item>

    					<q-item clickable to='/dashboard/users/18'>
    						<q-item-section>
    							<q-item-label>Мастера</q-item-label>
    						</q-item-section>
    					</q-item>
    				</q-card-section>
    			</q-card>
    		</q-expansion-item>

        <q-item clickable to="/dashboard/applications/home">
          <q-item-section avatar>
            <q-icon class="text-primary" name="description" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Заявки</q-item-label>
            <!-- <q-item-label caption>some text</q-item-label> -->
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon class="text-primary" name="no_sim" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Отключения</q-item-label>
            <!-- <q-item-label caption>some text</q-item-label> -->
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

<style scoped>
  .sidebar_logo {
    vertical-align: middle;
  }

  .sidebar_logo p {
    color: #3c4858;
  }

  .bg_white {
    background: white;
  }
</style>
