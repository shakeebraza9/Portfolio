<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item link to="/admin">
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
   
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout'
}
</script>
