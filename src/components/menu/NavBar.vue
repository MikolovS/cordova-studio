<template>
  <div class="main">
    <v-navigation-drawer
            class="hidden-sm-and-up"
            temporary
            v-model="drawer"
            absolute
            fixed
            :clipped="clipped"
            app
            value=""
     >
      <v-list>
        <v-list-tile value="true">
          <v-list-tile-action>
            <v-avatar class="grey lighten-4">
              <img :src="user.img" alt="avatar">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="user.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Application
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list dense class="pt-0" two-line>
              <v-list-tile v-for="item in navLinks" :key="item.title" :href="item.to">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list>
        <v-divider></v-divider>
        <v-list dense class="pt-0" two-line>
          <v-list-tile v-for="item in userLinks" :key="item.title" :href="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
          <a :href="site.home" class="siteTitle" :class="[active('#/') ? 'not-active': '']">
              <v-avatar class="grey lighten-4" size="40px">
                  <img :src="'static/img/v.png'" alt="avatar">
              </v-avatar>
              {{ site.name }}
          </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="(item, i) in navLinks" :key="i" class="hidden-sm-and-down">
        <v-btn flat :href="item.to" :class="[active(item.to) ? 'btn--active': '']">{{item.title}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <v-btn flat slot="activator">
            {{user.name}}
            <v-avatar class="grey lighten-4 pl-3" size="40px">
              <img :src="user.img" alt="avatar">
            </v-avatar>
          </v-btn>
          <v-list dense>
            <v-list-tile v-for="item in userLinks" :key="item.title" :href="item.to">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>111{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main-content></main-content>
  </div>
</template>

<script>
  import MainContent from '@/components/content/Content'

  export default {
      components: {
          MainContent
      },
      computed: {

      },
      data () {
          return {
              name: 'NavBar',
              clipped: false,
              drawer: false,
              fixed: true,
              site: {
                  name : 'Rock&Pole',
                  home : '#/'
              } ,

              navLinks: [
                  {
                      title: 'Направления',
                      to: '#/training',
                      icon: 'call_split',
                  },
                  {
                      title: 'Команда',
                      to: '#/command',
                      icon: 'group',
                  },
                  {
                      title: 'Рассписание',
                      to: '#/timetable',
                      icon: 'alarm',
                  },
                  {
                      title: 'Instagram',
                      to: '#/instagram',
                      icon: 'bubble_chart'
                  },
                  {
                      title: 'Блог',
                      to: '#/blog',
                      icon: 'forum'
                  },
                  {
                      title: 'Стоимость',
                      to: '#/price',
                      icon: 'attach_money'
                  },
                  {
                      title: 'Контакты',
                      to: '#/contact',
                      icon: 'contact_phone'
                  },
              ],

              userLinks: [
                  {
                      title: 'Settings',
                      to: '#/settings',
                      icon: 'build',
                  },
                  {
                      title: 'Logout',
                      to: '#/logout',
                      icon: 'power_settings_new'
                  },
              ],

              user : {
                  name: 'Test Name',
                  img: 'static/img/home/cherep.jpg'
              }
          }
      },
      mounted () {
      },
      methods: {
          active(path) {
              return ('#' + this.$route.path) === path
          },
      }
  }
</script>

<style scoped>
  /* для бокового меню */
    .main {
        min-height: 100%;
    }

    .siteTitle {
        text-decoration: none !important;
        color: black !important;
    }

  .not-active {
      pointer-events: none;
      cursor: default;
      text-decoration:none;
      color:black;
  }
</style>
