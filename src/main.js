import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Editor from 'vue2-editor'
import firebase from "firebase/app";
import "firebase/auth";

let app;
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        createApp(App).use(store).use(router).use(Vue2Editor).mount('#app')
    }
})

