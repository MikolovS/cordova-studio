<template>

  <section>
    <v-container offset-xs0>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm5 lg3 offset-xs0 :class="['loginLayout']">
              <div class="text-xs-center">
                <h2 class="headline">Авторизация</h2>
              </div>
              <v-layout row wrap justify-center>
              <v-flex xs10 sm8 lg8 offset-xs0>
              <v-form v-model="valid">
                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        :counter="6"
                        label="Password"
                        required
                ></v-text-field>
                <div class="text-xs-center">
                  <v-btn large round color="primary" dark  @click="login()">Login</v-btn>
                </div>
              </v-form>
              </v-flex>
              </v-layout>
            </v-flex>

        </v-layout>
    </v-container>
  </section>

</template>

<script>

    import auth from '../../services/auth';

export default {
    components: {

    },
    name: 'Login',
    computed: {

    },
  data () {
    return {
        valid: false,
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 6 || 'Password must be less than 6 characters'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
    }
  },
    methods: {
      login(){
//          email: 'admin@admin.com',
//              password: 'password'
          let params = {
              email: this.email,
              password: this.password
          };
           auth.login(params)
      },
        testLogout(){
            auth.logout()
        }
    }
}
</script>

<style scoped>

  .loginLayout{
    border: 2px solid darkgrey;
    border-radius: 25px;
  }

  .loginForm{
    margin: 10px;
  }


</style>
