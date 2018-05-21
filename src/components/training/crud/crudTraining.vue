<template>

    <v-container style="padding: 0 !important;">
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 md4 lg5 v-if="! openModal">

            <v-layout row wrap justify-center  class="text-lg-center">
              <v-flex xs6 lg6>
                <v-btn @click="createTraining()">
                  <v-icon>add_circle</v-icon>
                  <span class="hidden-xs-only">Добавить направление</span>
                </v-btn>
              </v-flex>
              <v-flex xs6 lg6>
                <v-btn @click="saveOrderAndDisplay()">
                  <v-icon>save</v-icon>
                  <span class="hidden-xs-only">Сохранить порядок</span>
                </v-btn>
              </v-flex>
            </v-layout>

          <draggable v-model="trainings" @start="drag=true" @end="drag=false">

            <v-card class="my-2" v-for="(item, index) in trainings" :key="index">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex lg2 class="hidden-xs-only">
                    <v-card-media
                            :src="item.img_url"
                            height="100px"
                            contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs5 lg6>
                    <b style="border: 1px solid grey; border-radius: 50px; padding: 5px">{{index + 1}}</b>
                    <div class="hidden-xs-only">
                      <p></p>
                      <h1>{{item.display_name}}</h1>
                    </div>
                    <div class="hidden-sm-and-up">
                      <p></p>
                      <h3>{{item.display_name}}</h3>
                    </div>
                  </v-flex>
                  <v-flex xs2 lg2>
                    <p class="hidden-xs-only">Изменить</p>
                    <v-btn fab small @click="editTraining(item)"><v-icon>edit</v-icon></v-btn>
                  </v-flex>
                  <v-flex xs3 lg2>
                    <p class="hidden-xs-only">Удалить</p>
                    <v-btn fab small><v-icon>delete</v-icon></v-btn>
                  </v-flex>
                  <v-flex xs lg2>
                    <p class="hidden-xs-only">Вкл/Выкл</p>
                    <v-switch v-model="item.display"></v-switch>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </draggable>
          </v-flex>

          <training v-if="openModal" :training="selectedTraining"></training>

        </v-layout>
    </v-container>

</template>

<script>

    import draggable from 'vuedraggable'
    import Training from '@/components/training/crud/training'
    import notifyTemplate from '@/helpers/notifyTemplate'

    import {trainingConstants} from '@/core/constants'


    export default {
      components: {
          Training,
          draggable
      },
        computed: {

        },
      name: 'crudTraining',
      data () {
          return {
            selectedTraining: null,
            openModal: false,
            trainings: null
          }
      },
      async created() {
          let res = await this.$axios.get(trainingConstants.get);
          this.trainings = res.data.data;
      },
      methods: {
          async saveOrderAndDisplay(){
              let params = {};
              params.group_types = this.trainings.map(function (training, index) {
                return {
                    display_order:  index + 1,
                    slug: training.slug,
                    display: training.display
                };
              });

              let res = await this.$axios.post(trainingConstants.saveOrderAndDisplay, params);
              this.trainings = res.data.data;
              this.$notify(notifyTemplate.make(res.data));
        },
          createTraining(){
              this.openModal = true;
          },
          editTraining(training){
              this.openModal = true;
              this.selectedTraining = training;
          }
      }
}
</script>

<style scoped>

</style>
