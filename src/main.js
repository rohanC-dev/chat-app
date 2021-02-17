import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

require("firebase/firestore");

let firebaseConfig = {
    apiKey: "AIzaSyDFIiRloNB60UENyh8hR7gvrqMS5DgZd8M",
    authDomain: "rohan-ad71d.firebaseapp.com",
    projectId: "rohan-ad71d",
    storageBucket: "rohan-ad71d.appspot.com",
    messagingSenderId: "469895915995",
    appId: "1:469895915995:web:a9b4483c00ced373151ffe"
  };
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  db.settings({
      timestampsInSnapshots: true
  });

  window.db = db;

createApp(App).use(store).use(router).mount('#app')
