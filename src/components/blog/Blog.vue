<template>

  <!--<v-container fluid v-bind="{ [`grid-list-${'xs'}`]: true }">-->
    <!--<v-layout row wrap>-->
      <!--<v-flex-->
              <!--xs12-->
              <!--sm8 offset-sm2-->
              <!--md4 offset-md4-->
              <!--lg4 offset-lg4-->
        <!--v-for="(post, i) in posts"-->
        <!--:key="i"-->
      <!--&gt;-->
        <!--&lt;!&ndash;<div class="w3-content w3-display-container"&ndash;&gt;-->
             <!--&lt;!&ndash;v-for="(item,i) in post.medias"&ndash;&gt;-->
             <!--&lt;!&ndash;:key="i"&ndash;&gt;-->
             <!--&lt;!&ndash;@click="openModal(post)"&ndash;&gt;-->
        <!--&lt;!&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;<img  v-bind:src="item[1].url" style="width:100%">&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

      <!--</v-flex>-->
    <!--</v-layout>-->


    <!--<img src="https://scontent-waw1-1.cdninstagram.com/vp/cec75afe00dbec19599f62470c08e76e/5A4E0416/t50.2886-16/26246943_871880202980067_5472363995788648890_n.mp4" alt="" style="height: 640px; width: 640px">-->
    <!--<video width="640" height="640" controls>-->
      <!--<source src="https://scontent-waw1-1.cdninstagram.com/vp/cec75afe00dbec19599f62470c08e76e/5A4E0416/t50.2886-16/26246943_871880202980067_5472363995788648890_n.mp4" alt="" style="height: 640px; width: 640px" type="video/mp4">-->
    <!--</video>-->
  <!--</v-container>-->

  <div class='gallery'>
    <div  v-for="(item,i) in post.medias"
          :key="i" @click="selectImage(img)">
      <img v-bind:src="img.url">
    </div>
  </div>

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
    created() {
        let that = this;
        that.getFeed();
    },
  data () {
    return {
        page: 1,
        on_page: 10,
        PHOTO: 1,
        ALBUM: 8,
        VIDEO: 2,
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
            Axios.get(instagramConstants.feed, {
                params: params
            })
                .then((res)=> {
                console.log(res.data[0].medias);
                that.posts = res.data;
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
