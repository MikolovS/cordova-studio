<template>

        <v-tabs dark color="cyan" show-arrows fixed-tabs>

            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
                v-for="(trainer, i) in trainers"
                :key="i"
                :href="'#tab-' + i"
            >
                <v-avatar class="grey lighten-4" size="40px">
                    <img :src="trainer.img" alt="avatar">
                </v-avatar>
                {{ trainer.name }}
            </v-tab>

            <v-tabs-items>
                <v-tab-item
                    v-for="(trainer, i) in trainers"
                    :key="i"
                    :id="'tab-' + i"
                >
                    <v-container grid-list-xl>
                        <v-layout row wrap justify-center class="my-5">
                            <v-flex xs12 sm4 offset-sm1>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">About</div>
                                    </v-card-title>
                                    <div>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                    </div>
                                    <v-list class="transparent">
                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>777-867-5309</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon class="blue--text text--lighten-2">place</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Chicago, US</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon class="blue--text text--lighten-2">email</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-media :src="trainer.img" height="400px" contain>
                                    </v-card-media>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">trainer.name</div>
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>

</template>

<script>

  export default {
      components: {
      },
      name: 'Command',
      data () {
          return {
              active: null,
              trainers : [
                  {
                      'name' : 'Pole Intro',
                      'about' : 'Pole Intro - Тренировка для тех, кто пришел на пилон впервые. Это вводный уровень занятий, где мы с вами будем изучать несложные крутки, базовые хваты и зацепы. Длится данное направление от 3х до 8ми занятий. За это время вы успеваете "почувствовать" себя на пилоне и с определенной базой перейти к начинающему уровню.\n' +
                      'Систематизированная методика обучения упрощает и даёт большую результативность ваших тренировок. Идея ввести такой уровень в обиход принадлежит известной спортсменке акробатики и спорта на пилоне Кристине Думанской. Мы гордимся и рады, что имеем возможность обучать вас по данной методике, приносящей прекрасные результаты.\n',
                      'img' : 'static/img/home/pole_sport.jpg',
                      'requirements' : 'топ и шорты, носки (чешки или босиком), лосины (спортивные штаны) и кофта для разминки.',
                      'duration' : 'разминку, работу на пилоне, офп и заминку.'
                  },
                  {
                      'name' : 'Pole Kids',
                      'description' : '231231awdawdawd 3d 23e r23e 232 ',
                      'img' : 'static/img/home/pole_kids.jpg'
                  },
                  {
                      'name' : 'Exotic',
                      'description' : '23233241234',
                      'img' : 'static/img/home/exotic.jpg'
                  },
              ]
          }
      },
      methods: {
          next () {
              console.log(active)
              const active = parseInt(this.active);
              this.active = (active < 2 ? active + 1 : 0).toString()
          }
      }
}
</script>

<style scoped>
    .word-wrap {
        white-space: pre-wrap !important;
        padding: 5px
    }
</style>
