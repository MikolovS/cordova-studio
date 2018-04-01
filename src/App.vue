<template>
  <v-app light>
    <v-content>
      <nav-bar></nav-bar>
    </v-content>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import NavBar from '@/components/menu/NavBar'
  import FooterBar from '@/components/footer/FooterBar'

  export default {
      components: {
          NavBar,
          FooterBar
      },
    data () {
      return {
        cordova: Vue.cordova,
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    }
  }
</script>

<style>

</style>
