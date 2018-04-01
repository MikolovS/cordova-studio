<template>
    <v-layout row wrap>
      <v-flex
        xs12
        sm8 offset-sm2
        md8 offset-md2
        lg6 offset-lg3
      >
        <v-dialog v-model="dialog" width="600px">
          <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Use Google's location service?</span>
            </v-card-title>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat="flat" @click="closeModal()">Disagree</v-btn>
              <v-btn color="green darken-1" flat="flat" @click="closeModal()">Agree</v-btn>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
</template>

<script>

import VDialog from "vuetify/es5/components/VDialog/VDialog";
import VCard from "vuetify/es5/components/VCard/VCard";
import VCardMedia from "vuetify/es5/components/VCard/VCardMedia";
import VCardTitle from "vuetify/es5/components/VCard/VCardTitle";

export default {
    props: ["post", "dialog"],
    components: {
        VCardTitle,
        VCardMedia,
        VCard,
        VDialog
    },
    name: 'ModalBlog',
    computed: {
//        dialog: function(){
////            if (!this.dialog) {
////                this.$emit('update:dialog', false)
////            }
//        }
    },
  data () {
    return {

    }
  },
    methods: {
      closeModal() {
          this.$emit('update:dialog', false)
      }
    }
}
</script>

<style scoped>

</style>
