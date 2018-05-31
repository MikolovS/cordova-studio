<template>

    <v-container style="padding: 0 !important;">
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 md4 lg5 v-if="! openModal">

            <v-layout row wrap justify-center  class="text-lg-center">
              <v-flex xs5 lg6>
                <v-btn @click="createTrainer()" :disabled="noTrainers">
                  <v-icon class="hidden-xs-only">add_circle</v-icon>
                  <span>Добавить</span>
                </v-btn>
              </v-flex>
              <v-flex xs7 lg6>
                <v-btn @click="saveOrderAndDisplay()">
                  <v-icon  class="hidden-xs-only">save</v-icon>
                  <span>Сохранить порядок</span>
                </v-btn>
              </v-flex>
            </v-layout>

          <draggable v-model="trainers" @start="drag=true" @end="drag=false">

            <v-card class="my-2" v-for="(item, index) in trainers" :key="index">
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
                      <h1>{{item.full_name}}</h1>
                    </div>
                    <div class="hidden-sm-and-up">
                      <p></p>
                      <h3>{{item.full_name}}</h3>
                    </div>
                  </v-flex>
                  <v-flex xs2 lg2>
                    <p class="hidden-xs-only">Изменить</p>
                    <v-btn fab small @click="editTrainer(item)"><v-icon>edit</v-icon></v-btn>
                  </v-flex>
                  <v-flex xs3 lg2>
                    <p class="hidden-xs-only">Удалить</p>
                    <v-btn fab small @click="openDialog(item.name)"><v-icon>delete</v-icon></v-btn>
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

          <trainer v-if="openModal" :trainer="selectedTrainer" :openModal="switchModal" :getTrainersData="getTrainersData" :trainerUsers="trainerUsers"></trainer>

          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline">Удалить елемент?</v-card-title>
              <v-card-text>Можно просто отключить его отображение</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Нет</v-btn>
                <v-btn color="green darken-1" flat="flat" @click.native="deleteTrainer()">Да</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-layout>
    </v-container>

</template>

<script>

    import draggable from 'vuedraggable'
    import Trainer from '@/components/admin/trainer/trainer'
    import notifyTemplate from '@/helpers/notifyTemplate'

    import {trainerConstants} from '@/core/constants'


    export default {
      components: {
          Trainer,
          draggable
      },
        computed: {
            noTrainers: function () {
                let trainers = this.trainerUsers;

                if (trainers === null){
                    return true;
                }

                if (trainers.length === 0){
                    return true;
                }

                return false;
            }
        },
      name: 'crudTrainer',
      data () {
          return {
            dialog: false,
            deletedTrainer: null,
            selectedTrainer: null,
            openModal: false,
            trainers: null,
            trainerUsers: null
          }
      },
        created() {
          this.getTrainersData()
      },
      methods: {
          async getTrainersInfo(){
              let res = await this.$axios.get(trainerConstants.get);
              this.trainers = res.data.data;

              return res;
          },
          async getTrainersUsers(){
              let res = await this.$axios.get(trainerConstants.getUsers);
              this.trainerUsers = res.data.data;

              return res;
          },
          getTrainersData(){
              this.getTrainersInfo();
              this.getTrainersUsers();
          },
          async saveOrderAndDisplay(){
              let params = {};
              params.trainers_info = this.trainers.map(function (trainer, index) {
                return {
                    display_order:  index + 1,
                    name: trainer.name,
                    display: trainer.display
                };
              });

              let res = await this.$axios.put(trainerConstants.saveOrderAndDisplay, params);
              if (res.data.data){
                  this.trainers = res.data.data;
                  this.$notify(notifyTemplate.make(res.data));
              }
        },
        switchModal(){
            this.openModal = ! this.openModal;
        },
          createTrainer(){
            this.openModal = true;
        },
        editTrainer(trainer){
            this.switchModal();
            this.selectedTrainer = trainer;
        },
        async deleteTrainer(){
            if (this.deletedTrainer === null){
                return;
            }

            this.dialog = false;
            let res = await this.$axios.delete(trainerConstants.delete + this.deletedTrainer);
            if (res.data.data){
                this.getTrainersData();
                this.$notify(notifyTemplate.make(res.data));
            }
        },
          openDialog(name){
            this.dialog = true;
            this.deletedTrainer = name;
          }
      }
}
</script>

<style scoped>

</style>
