<template>
  <v-container class="mt-5">
    <h1>Welcome to My Portfolio</h1>
    <p>This is the home page of Shakeeb's portfolio.</p>

    <v-row>
      <v-col cols="12" md="4" v-for="i in 3" :key="i">
        <v-card>
          <v-img src="https://via.placeholder.com/300x200" height="200px"></v-img>
          <v-card-title>Project {{ i }}</v-card-title>
          <v-card-text>This is a sample project description.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UserHome'
}
</script>

<style scoped>

</style>
