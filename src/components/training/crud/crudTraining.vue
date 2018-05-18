<template>

    <v-container style="padding: 0 !important;">
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 md4 lg5 >
          <draggable v-model="trainings" @start="drag=true" @end="drag=false">

            <v-card class="my-2" v-for="(item, index) in trainings" :key="item.id">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex lg2 class="hidden-xs-only">
                    <v-card-media
                            :src="item.img_url"
                            height="100px"
                            contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex lg4>
                    <h1>{{item.display_name}}</h1>
                  </v-flex>
                  <v-flex lg1>
                    <v-btn fab small><v-icon>edit</v-icon></v-btn>
                  </v-flex>
                  <v-flex lg1>
                    <v-btn fab small><v-icon>delete</v-icon></v-btn>
                  </v-flex>
                  <v-flex lg1>
                    <v-switch :label="`Switch`" v-model="item.display"></v-switch>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </draggable>
          </v-flex>

          <training v-if="selectedTraining" :training="selectedTraining"></training>

        </v-layout>
    </v-container>

</template>

<script>

    import Axios from '@/axiosInstance';
    import draggable from 'vuedraggable'
    import Training from '@/components/training/crud/training'

    import {trainingConstants} from '@/constants'

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
            trainings: null
          }
      },
      async created() {
          try{
              const res = await Axios.get(trainingConstants.get);
              this.trainings = res.data.data;
          } catch (error) {
              console.log(error);
          }
      },
      methods: {

      }
}
</script>

<style scoped>

</style>
