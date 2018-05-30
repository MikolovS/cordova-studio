<template>
        <v-tabs
                v-if="trainings"
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
                {{ training.display_name }}
            </v-tab>

            <v-tabs-items>
                <v-tab-item
                        v-for="(training, i) in trainings"
                        :key="i"
                        :id="'tab-' + i"
                >
                    <v-container class="training-item">
                            <v-layout row wrap justify-center >
                                <v-flex xs12 sm10 lg6>
                                    <v-card class="elevation-0 transparent">
                                    <v-card-media :src="training.img_url" height="350px" contain>
                                    </v-card-media>
                                    <v-card-title primary-title class="layout justify-center">
                                    <div class="headline text-xs-center"><h4>{{ training.display_name }}</h4></div>
                                    </v-card-title>
                                      <v-card-text v-html="training.description"></v-card-text>
                                      <v-card-text>
                                        <p><b>Что надо с собой иметь на тренировке: </b>{{ training.requirements }}</p>
                                      </v-card-text>
                                      <v-card-text>
                                        <p><b>Продолжительность тренировки: </b>{{ training.duration }}</p>
                                      </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>


</template>

<script>

    import {siteConstants} from '@/core/constants';

  export default {
      components: {
      },
      name: 'Training',
      data () {
          return {
              trainings : null
          }

      },
      created() {
          this.getTrainings()
      },
      methods: {
          async getTrainings() {
              let res = await this.$axios.get(siteConstants.trainings);
              this.trainings = res.data.data;
          }
      }
}
</script>

<style >
    .word-wrap {
        white-space: pre-wrap !important;
        padding: 5px;
        text-indent: 50px;
        text-align: justify;
        /*letter-spacing: 3px;*/
    }

    @media screen and (max-width: 769px) {
      .training-item {
        padding: 0 !important;
      }
    }

</style>
