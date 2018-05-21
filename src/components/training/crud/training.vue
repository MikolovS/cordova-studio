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
              v-if="! image_url"
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
                drag: 'Drag a 😺 .jpeg, .png '
              }">
      </picture-input>
      <div class="text-xs-center" v-else>
          <img :src="image_url" alt="training.img_url" style="max-width: 600px">
      </div>
      <div class="text-xs-center" >
        <v-btn v-if="image_url"  large color="info" dark  @click="changeImage()">Сменить картинку</v-btn>
        <v-btn v-if="old_img_url" large color="info" dark  @click="returnOldImage()">Вернуть картинку</v-btn>
      </div>
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

    import {trainingConstants} from '@/core/constants';

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
              return ((this.valid === true) && ((this.image_url !==null) || (this.image !== null)) && (this.description !== ''))
          },
        },
      name: 'crudTraining',
      data () {
          return {
              valid: false,

//              FORM
              isNew: false,
              image: null,
              image_url: null,
              old_img_url: null,
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

            if (this.training !== null){
                this.description = this.training.description;
                this.name = this.training.display_name;
                this.requirements = this.training.requirements;
                this.duration = this.training.duration;
                this.image_url = this.training.img_url;
            } else {
                this.isNew = true;
            }
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
          async save() {
              let params = {
                  display_name: this.name,
                  description: this.description,
                  image: this.image,
                  requirements: this.requirements,
                  duration: this.duration,
              };

              await this.$axios.post(trainingConstants.create, params)
                  .then((res)=> {
                      console.log(res)
                  })
                  .catch((error)=> {
                      console.log(error);
                  })
          },
          changeImage(){
              this.old_img_url = this.image_url;
              this.image_url = null;
          },
          returnOldImage(){
              this.image_url = this.old_img_url;
              this.old_img_url = null;
          }
      }
}
</script>

<style scoped>

</style>
