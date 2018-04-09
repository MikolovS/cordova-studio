<template>
  <section>
    <v-container offset-xs0>
      <v-infinite-scroll :loading="loading" @top="prevPage" @bottom="nextPage" :offset='onPage' style="max-height: 90vh; overflow-y: scroll;">
      <v-layout row wrap justify-center  v-if="posts"
                v-for="(post, i) in posts"
                :key="i">
        <v-flex xs12 sm4 lg4 offset-xs0 v-html="post.embed">
        </v-flex>
      </v-layout>
      </v-infinite-scroll>
    </v-container>
  </section>
</template>

<script>
    import Axios from '@/axiosInstance';

    import {instagramConstants} from '@/constants';

    export default {
        components: {
        },
        name: 'Instagram',
        computed: {

        },
        mounted () {
        },
        updated: function () {
            this.$nextTick(function () {
                window.instgrm.Embeds.process()
            })
        },
        created() {
            let that = this;
            that.getFeed();
        },
        data () {
            return {
                page: 1,
                onPage: 10,
                posts: [],
                loading: false
            }
        },
        methods: {
            prevPage () {
                if (this.page === 1)
                    return
                --this.page
                this.getFeed()
            },
            nextPage () {
                if (this.loading)
                    return
                ++this.page
                this.getFeed()
            },
            getFeed() {
                let that = this;
                let params = {
                    page: this.page,
                    on_page: this.onPage,
                };
                Axios.get(instagramConstants.feed, {params})
                    .then((res)=> {
                    if (res.data.length > 0)
                        that.posts = that.posts.concat(res.data)
                      else
                        that.loading = true
                    })
                    .catch((error)=> {
                        console.log('error');
                    })
            }
        }
    }
</script>

<style scoped>

</style>
