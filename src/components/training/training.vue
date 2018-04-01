<template>
    <v-tabs fixed-tabs>
        <v-tab v-for="n in 3" :key="n">
            Item {{ n }}
        </v-tab>
    </v-tabs>
</template>

<script>

  export default {
      components: {
      },
      name: 'Training',
      data () {
          return {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
      }
}
</script>

<style scoped>

</style>
