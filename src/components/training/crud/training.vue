<template>
    <v-form v-model="valid">
        <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="3"
                label="Название"
                required
        ></v-text-field>
      <p>Описание:</p>
      <vue-editor v-model="description"></vue-editor>
      <v-text-field
              v-model="requirements"
              :rules="requirementsRules"
              label="Tребования"
              required
      ></v-text-field>
      <v-text-field
              v-model="duration"
              :rules="durationRules"
              label="Продолжительность занятия"
              required
      ></v-text-field>
      <picture-input
              ref="pictureInput"
              @change="onChange"
              width="600"
              height="600"
              margin="16"
              accept="image/jpeg,image/png"
              size="10"
              buttonClass="btn"
              :customStrings="{
                upload: '<h1>Bummer!</h1>',
                drag: 'Drag a 😺 GIF or GTFO'
              }">
      </picture-input>
      <div class="text-xs-center" v-if="readyToSave">
        <br>
        <hr>
        <v-btn right large round color="success" dark  @click="save()">Сохранить</v-btn>
      </div>
    </v-form>

</template>

<script>

    import { VueEditor } from 'vue2-editor'
    import PictureInput from 'vue-picture-input'
    import Axios from '@/axiosInstance';

    import {trainingConstants} from '@/constants';

    export default {
        props:[
            'training'
        ],
      components: {
          VueEditor,
          PictureInput
      },
        computed: {
          readyToSave : function () {
              console.log(this.valid, (this.image !== null), (this.description !== ''));
              return ((this.valid === true) && (this.image !== null) && (this.description !== ''))
          },
        },
      name: 'crudTraining',
      data () {
          return {
              training: null,
              valid: false,

//              FORM
              image: null,
              description: '',
              name: '',
              nameRules: [
                  v => !!v || 'Нужно заполнить название',
                  v => v.length >= 3 || 'Название должно быть более 2-х символов'
              ],
              requirements: '',
              requirementsRules: [
                  v => !!v || 'Нужно заполнить требования',
              ],
              duration: '',
              durationRules: [
                  v => !!v || 'Нужно заполнить продолжительность занятия',
              ],
          }
      },
        created() {
            if (this.training){
                console.log(training);
            }
            console.log(this.training);
        },
      methods: {
          onChange (image) {
              console.log('New picture selected!');
              if (image) {
                  console.log('Picture loaded.');
                  this.image = image
              } else {
                  console.log('FileReader API not supported: use the <form>, Luke!')
              }
          },
          save() {
              let params = {
                  display_name: this.name,
                  description: this.description,
                  image: this.image,
                  requirements: this.requirements,
                  duration: this.duration,
              };
              Axios.post(trainingConstants.create, params)
                  .then((res)=> {
                      console.log(res)
                  })
                  .catch((error)=> {
                      console.log(error);
                  })
          }

      }
}
</script>

<style scoped>

</style>
