<template>
  <div class="form-wrap">
      <form class="register">
          <p class="login-register">
              Have an account ?
              <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
          </p>
          <h2>Create your Fireblog account</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="First Name" v-model="firstName">
                  <i class="fas fa-user icon"></i>
              </div>
              <div class="input">
                  <input type="text" placeholder="Last Name" v-model="lastName">
                  <i class="fas fa-user icon"></i>
              </div>
              <div class="input">
                  <input type="text" placeholder="Username" v-model="userName">
                  <i class="fas fa-user icon"></i>
              </div>
              <div class="input">
                  <input type="email" placeholder="Email" v-model="email">
                  <i class="fas fa-envelope icon"></i>
              </div>
              <div class="input">
                  <input type="password" placeholder="Password" v-model="password">
                  <i class="fas fa-lock icon"></i>
              </div>
              <div v-show="error" class="error">{{ errorMsg }}</div>
          </div>
          <button @click.prevent="register">Register</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

export default {
    name: 'Register',
    data() {
        return {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            error: null,
            errorMsg: ''
        }
    },
    methods: {
        async register() {
            if(
                this.email !== '' &&
                this.firstName !== '' &&
                this.lastName !== '' &&
                this.userName !== '' &&
                this.password !== ''
            ) {
                this.error = false
                this.errorMsg = ''
                const firebaseAuth = await firebase.auth()
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email,this.password)
                const result = await createUser;
                const dataBase = db.collection('users').doc(result.user.uid)
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.userName,
                    email: this.email,
                })

                this.$router.push({name: 'Home'})
                return;
            }

            this.error = true,
            this.errorMsg = 'Please Fillout all the fields!'
        }
    }
}
</script>

<style scoped>
.register h2 {
    max-width: 350px;
}
</style>