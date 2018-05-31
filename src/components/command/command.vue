<template>

    <v-tabs v-if="trainers" dark color="cyan" show-arrows fixed-tabs>

        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab
                v-for="(trainer, i) in trainers"
                :key="i"
                :href="'#tab-' + i"
        >
            <v-avatar class="grey lighten-4" size="40px">
                <img :src="trainer.img_url" alt="avatar">
            </v-avatar>
            {{ trainer.full_name }}
        </v-tab>

        <v-tabs-items>
            <v-tab-item
                    v-for="(trainer, i) in trainers"
                    :key="i"
                    :id="'tab-' + i"
            >
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">About</div>
                                </v-card-title>
                                <v-card-text v-html="trainer.description"></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-media :src="trainer.img_url" height="400px" contain>
                                </v-card-media>
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">{{trainer.full_name}}</div>
                                </v-card-title>
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
        components: {},
        name: 'Command',
        data() {
            return {
                active: null,
                trainers: null
            }
        },
        created() {
            this.getTrainers()
        },
        methods: {
            next() {
                const active = parseInt(this.active);
                this.active = (active < 2 ? active + 1 : 0).toString()
            },
            async getTrainers() {
                let res = await this.$axios.get(siteConstants.trainers);
                this.trainers = res.data.data;
            }
        }
    }
</script>

<style scoped>
    .word-wrap {
        white-space: pre-wrap !important;
        padding: 5px
    }
</style>
