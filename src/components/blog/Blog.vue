<template>

  <div>

    <button @click="testLogin()">login</button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <button @click="testLogout()">logout</button>
  </div>

</template>

<script>

    import auth from '../../services/auth';

export default {
    components: {

    },
    name: 'Blog',
    computed: {

    },
  data () {
    return {
    }
  },
    methods: {
      testLogin(){
           auth.login({
              email: 'admin@admin.com',
              password: 'password'
          })
      },
        testLogout(){
            auth.logout()
        }
    }
}
</script>

<style scoped>

</style>
