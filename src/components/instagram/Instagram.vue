<template>

  <v-layout
          column
          align-center
          justify-center
          class="white--text"
  >
  <v-flex xs12 lg6 wrap column>
    <v-layout row wrap align-center>
      <v-flex xs4 md3
              v-for="(post, i) in posts"
              key="i"
              class="instagram_flex_box"
      >
        <div

          class="bg_img"
          :style="{ 'background-image': 'url(' + post.medias[0][0].url + ')' , 'height': boxHeight + 'px'}"></div>
      </v-flex>
    </v-layout>
  </v-flex>

  </v-layout>


</template>

<script>
    import Axios from '@/axiosInstance';
    import VCard from "vuetify/es5/components/VCard/VCard";
    import VCardMedia from "vuetify/es5/components/VCard/VCardMedia";
    import VCardTitle from "vuetify/es5/components/VCard/VCardTitle";
    import VDialog from "vuetify/es5/components/VDialog/VDialog";
    import VCarousel from "vuetify/es5/components/VCarousel/VCarousel";
    import VCarouselItem from "vuetify/es5/components/VCarousel/VCarouselItem";

    import {instagramConstants} from '@/constants';

    export default {
        components: {
            VCarouselItem,
            VCarousel,
            VCardTitle,
            VCardMedia,
            VCard,
            VDialog
        },
        name: 'Blog',
        computed: {

        },
        mounted () {
        },
        created() {
            let that = this;
            that.getFeed();
        },
        data () {
            return {
                page: 2,
                on_page: 6,
                PHOTO: 1,
                ALBUM: 8,
                VIDEO: 2,
                boxHeight: document.querySelector('.instagram_flex_box').offsetWidth,
                dialog: false,
                selectedPost: {
                    title: '',
                    img: '',
                    hashtags: [
                        '',
                        '',
                        '',
                    ],
                    likes: 0,
                    comments:{
                        username: '',
                        text: ''
                    }
                },
                posts: []
            }
        },
        methods: {
            openModal(post) {
                this.selectedPost = post;
                this.dialog = true;
            },
            getFeed() {
                let that = this;
                let params = {
                    page: this.page,
                    on_page: this.on_page,
                };
                Axios.get(instagramConstants.feed, params)
                    .then((res)=> {
//                        console.log(res.data[0].medias);
                        that.posts = res.data;
                        console.log(that.posts[0].medias[0][0].url);
//                        console.log(that.posts);
                    })
                    .catch((error)=> {
                        console.log('error');
                    })
            }
        }
    }
</script>

<style scoped>
  .bg_img {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    /*max-height: 240px;*/
    min-height: 100px;
    min-width: 100px;
    /*max-width: 240px;*/
  }
 /*.carousel {*/
  /*overflow: inherit !important;*/
   /*height: auto !important;*/
 /*}*/
</style>
