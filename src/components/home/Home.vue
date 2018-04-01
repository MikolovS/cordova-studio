<template>
    <div>
      <section>
        <v-parallax src="static/img/home/hero.jpeg" height="600">
          <v-layout
                  column
                  align-center
                  justify-center
                  class="white--text"
          >
            <img src="static/img/home/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Pole&Rock</h1>
            <div class="subheading mb-3 text-xs-center">Студия танца и акробатики на пилоне</div>
            <v-btn
                    class="blue lighten-2 mt-5"
                    dark
                    large
                    to="/qwerty"
            >
              Записаться
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
                column
                wrap
                class="my-5"
                align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Основные направления</h2>
              <span class="subheading">
                  Выбери свой путь
                </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-start>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-media src="static/img/home/pole_sport.jpg" height="300px">
                    </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><h4>Pole Sport</h4></div>
                    </v-card-title>
                    <div>
                      <b>Pole Sport</b> - направление пилонного спорта, входящее в состав дисциплин воздушно-силовой атлетики. Красота и сила исполнения  сложных элементов крайне важны в этом  зрелищном виде спорта. Занятия pole sport нужны и полезны как начинающим без физической подготовки, так и профессиональным спортсменам.
                    </div>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                      <v-card-media src="static/img/home/pole_kids.jpg" height="300px">
                      </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline"><h4>Pole Kids</h4></div>
                    </v-card-title>
                    <div>
                      <b>Pole Kids</b> - это программа обучения, которая подстроена специально под детскую категорию, учитывая её возрастные особенности. Во время занятий дети научатся красивым акробатическим элементам на пилоне, укрепят здоровье и выносливость, приобретут хорошую физическую форму, а главное - им привьется любовь к спорту и танцам.
                    </div>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                      <v-card-media src="static/img/home/exotic.jpg" height="300px">
                      </v-card-media>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"><h4>Exotic Pole Dance</h4></div>
                    </v-card-title>
                    <div>
                      <b>Exotic Pole Dance</b> - это смесь женственности и силового спорта, привлекательности женского тела и рельефности мышц, открытости движений и чарующей индивидуальностью. На тренировках вы научитесь грации и женственности, вам покажут как можно двигаться двигаться красиво и изящно. Такой вид танца призван не оставить равнодушным ни одного мужчину или женщину.
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="static/img/home/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
                    class="blue lighten-2 mt-5"
                    dark
                    large
                    href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <div>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </div>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
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
          </v-layout>
        </v-container>
      </section>
    </div>
</template>

<script>

export default {
    components: {

    },
    name: 'Home',
  data () {
    return {
        tako : ''
    }
  }
}
</script>

<style scoped>

</style>
