<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:closeModal="closeModal" />
    <Loading v-if="isLoading" />
    <div class="form-wrap">
      <form class="reset">
         <p class="login-register">
          Back to ?
          <router-link class="router-link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it.</p>
        <div class="inputs">
          <div class="input">
            <input type="email" placeholder="Email" v-model="email" />
            <i class="fas fa-envelope icon"></i>
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

import Modal from '../components/Modal.vue'
import Loading from '../components/Loading.vue'

export default {
  name: "ForgotPassword",
  components: { Modal, Loading },
  data() {
      return {
          email: null,
          modalActive: null,
          modalMessage: '',
          isLoading: null,
      }
  },
  methods: {
      closeModal() {
          this.modalActive = !this.modalActive
          this.email = ''
      },
      resetPassword() {
        this.isLoading = true
        firebase
          .auth()
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.modalMessage = 'If Your account exists, you will receive a email.'
            this.isLoading = false
            this.modalActive = true
          })
          .catch(err => {
            console.log(err.message)
            this.modalMessage = err.message
            this.isLoading = false
            this.modalActive = true
          })
      }
  }
};
</script>

<style scoped>
.reset-password {
    position: relative;
}

.reset-password .form-wrap .reset h2 {
    margin-bottom: 8px;
}

.reset-password .form-wrap .reset p {
    margin-bottom: 32px;
    text-align: center;
}
</style>