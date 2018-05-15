<template>
    <v-container grid-list-xl >
        <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm6 md4>
                <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center"><h4>Контакты</h4></div>
                    </v-card-title>
                    <v-card-text>
                        Вы можете связаться с Нами любым удобным для Вас способом:
                    </v-card-text>
                    <v-list class="transparent">
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon class="blue--text text--lighten-2">phone</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>‎063-417-05-91</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon class="blue--text text--lighten-2">place</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title><a href="https://www.google.ru/maps/place/%D0%A2%D0%B8%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+4,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.4798548,30.728593,17z/data=!3m1!4b1!4m5!3m4!1s0x40c63190f14eba53:0x783a039b93654a6a!8m2!3d46.4798548!4d30.7307817" class="noUnderline" target="_blank">г.Одесса, ул-Тираспольская 4</a></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-action>
                                <img src="static/img/instagram.png" alt="instagram" height="24px">
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title><a href="https://www.instagram.com/rock_n_pole/" class="noUnderline"  target="_blank">rock_n_pole</a></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon class="blue--text text--lighten-2">email</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>rocknpole.od.@gmail.com</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center"><h4>Как Нас найти</h4></div>
                    </v-card-title>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.4269117023655!2d30.72859301537732!3d46.479858473118966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63190f14eba53%3A0x783a039b93654a6a!2z0KLQuNGA0LDRgdC_0L7Qu9GM0YHQutCw0Y8g0YPQuy4sIDQsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1523280701705" width="320" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

  export default {
      components: {

      },
      name: 'Contact',
      data () {
          return {
          }
      }
}
</script>

<style scoped>

</style>
