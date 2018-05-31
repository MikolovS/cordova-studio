<template>
  <section>

    <v-container class="hidden-sm-and-up" style="padding: 0 !important;">
        <v-layout row wrap justify-center>
            <v-flex xs12 sm4 lg2 offset-xs0 >
              <v-list dense class="pt-0" two-line  v-for="(item, y) in adminLinks" :key="y">
                <v-subheader><h2>{{ item.header }}</h2></v-subheader>
                <v-list-tile v-for="(link, i) in item.links" :key="i" :href="link.to">
                  <v-list-tile-action>
                    <v-icon>{{ link.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ link.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
        </v-layout>
    </v-container>

    <v-container class="hidden-xs-only; my-5" >
      <v-layout row wrap justify-center>
        <v-flex xs12 sm4 lg2 offset-xs0 >
          <v-list dense class="pt-0" two-line  v-for="(item, y) in adminLinks" :key="y">
            <v-subheader><h2>{{ item.header }}</h2></v-subheader>
            <v-list-tile v-for="(link, i) in item.links" :key="i" :href="link.to">
              <v-list-tile-action>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ link.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>

  </section>
</template>

<script>

export default {
    components: {

    },
    name: 'Admin',
    computed: {

    },
  data () {
    return {
        adminLinks: [
            {
                header: 'Редакторы',
                links: [
                    {
                        title: 'Тренировки',
                        to: '#/admin/crud/training',
                        icon: 'exit_to_app',
                    },
                    {
                        title: 'Тренера',
                        to: '#/admin/crud/trainer',
                        icon: 'exit_to_app',
                    },
                ]
            },
        ],
    }
  },
    methods: {

    }
}
</script>

<style scoped>

  .block {
    border: 2px solid black;
    border-radius: 10px;
  }

</style>
