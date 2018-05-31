<template>
<section>
    <v-btn @click="openModal()">
        <v-icon  class="hidden-xs-only">undo</v-icon>
        <span>Назад</span>
    </v-btn>
    <v-form>
        <v-select
                :items="trainerUsers"
                v-model="name"
                :label="isNew ? 'Тренер' : trainer.full_name"
                single-line
                item-text="full_name"
                item-value="name"
                :disabled="! isNew"
        ></v-select>
        <p>Описание:</p>
        <vue-editor v-model="description"></vue-editor>

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
            <img :src="image_url" alt="training.img_url" style="max-width: 100%; max-height: 600px">
        </div>
        <div class="text-xs-center">
            <v-btn v-if="image_url" large color="info" dark @click="changeImage()">Сменить картинку</v-btn>
            <v-btn v-if="old_img_url" large color="info" dark @click="returnOldImage()">Вернуть картинку</v-btn>
        </div>
        <div class="text-xs-center" v-if="readyToSave">
            <br>
            <hr>
            <v-btn right large round color="success" dark @click="save()">Сохранить</v-btn>
        </div>
    </v-form>
</section>

</template>

<script>

    import {VueEditor} from 'vue2-editor'
    import PictureInput from 'vue-picture-input'

    import {trainerConstants} from '@/core/constants';
    import notifyTemplate from '@/helpers/notifyTemplate'

    export default {
        props: [
            'trainer',
            'openModal',
            'getTrainersData',
            'trainerUsers'
        ],
        components: {
            VueEditor,
            PictureInput
        },
        computed: {
            readyToSave: function () {
                return ((this.name !== null) && ((this.image_url !== null) || (this.image !== null)) && (this.description !== ''))
            },
        },
        name: 'crudTraining',
        data() {
            return {
                isNew: false,
                image: null,
                description: null,
                image_url: null,
                old_img_url: null,
                name: null,
            }
        },
        created() {
            if (this.trainer !== null) {
                this.description = this.trainer.description;
                this.name = this.trainer.name;
                this.image_url = this.trainer.img_url;
            } else {
                this.isNew = true;
            }
        },
        methods: {
            onChange(image) {
                console.log('New picture selected!');
                if (image) {
                    console.log('Picture loaded.');
                    this.image = image
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            },
            async save() {
                if (this.isNew) {
                    let params = {
                        name: this.name,
                        description: this.description,
                        image: this.image,
                    };

                    var res = await this.$axios.post(trainerConstants.create + this.name, params);

                } else {
                    let params = {
                        description: this.description,
                    };
                    if (this.image !== null) {
                        params.image = this.image;
                    }
                    var res = await this.$axios.put(trainerConstants.update + this.name, params);
                }

                this.$notify(notifyTemplate.make(res.data));
                this.openModal();
                this.getTrainersData();
            },
            changeImage() {
                this.old_img_url = this.image_url;
                this.image_url = null;
            },
            returnOldImage() {
                this.image_url = this.old_img_url;
                this.old_img_url = null;
            }
        }
    }
</script>

<style scoped>

</style>
