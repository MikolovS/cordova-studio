<template>
        <v-tabs
                dark
                color="cyan"
                show-arrows
                fixed-tabs
        >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
                    v-for="(training, i) in trainings"
                    :key="i"
                    :href="'#tab-' + i"
            >
                {{ training.name }}
            </v-tab>

            <v-tabs-items>
                <v-tab-item
                        v-for="(training, i) in trainings"
                        :key="i"
                        :id="'tab-' + i"
                >
                    <section>
                            <v-layout row wrap justify-center>
                                <v-flex xs12 sm10 lg8 offset-xs0>
                                    <!--<img :src="training.img" :alt="training.img"-->
                                         <!--style="max-width: 100%;-->
                                            <!--max-height: 400px;-->
                                            <!--display: block;-->
                                            <!--margin-left: auto;-->
                                            <!--margin-right: auto;">-->
                                    <v-card class="elevation-0 transparent">
                                    <v-card-media :src="training.img" height="400px" contain>
                                    </v-card-media>
                                    <v-card-title primary-title class="layout justify-center">
                                    <div class="headline text-xs-center"><h4>{{ training.name }}</h4></div>
                                    </v-card-title>
                                    <p class="word-wrap">{{ training.description }}</p>
                                    <p class="word-wrap"><b>Что надо с собой иметь на тренировке: </b>{{ training.requirements }}</p>
                                    <p class="word-wrap"><b>Длительность тренировки один час, включает в себя: </b>{{ training.duration }}</p>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                    </section>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>


</template>

<script>

  export default {
      components: {
      },
      name: 'Training',
      data () {
          return {
              trainings : [
                  {
                      'name' : 'Pole Intro',
                      'description' : 'Pole Intro - Тренировка для тех, кто пришел на пилон впервые. Это вводный уровень занятий, где мы с вами будем изучать несложные крутки, базовые хваты и зацепы. Длится данное направление от 3х до 8ми занятий. За это время вы успеваете "почувствовать" себя на пилоне и с определенной базой перейти к начинающему уровню.\n' +
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
      }
}
</script>

<style scoped>
    .word-wrap {
        white-space: pre-wrap !important;
        padding: 5px
    }
</style>
