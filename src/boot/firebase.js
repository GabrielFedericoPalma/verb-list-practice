import { boot } from 'quasar/wrappers'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

import { firebase_db_store } from 'stores/firebase_db.js'

const app = initializeApp({
    apiKey: "AIzaSyCsjnyveE8M55s3KyErC9X1oSZgT1QfWYs",
    authDomain: "verb-list-practice.firebaseapp.com",
    databaseURL: "https://verb-list-practice-default-rtdb.firebaseio.com",
    projectId: "verb-list-practice",
    storageBucket: "verb-list-practice.appspot.com",
    messagingSenderId: "981556900307",
    appId: "1:981556900307:web:f430421bba296880edbf26"
})

const dbRef = ref(getDatabase(app));
const dbIdRef = '1YlHOmMWW800YWYNN6mj4vQ9EgdK9a0sU8z1CdM3NDiI'

const store = firebase_db_store()

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // Call Firebase DB
  get(child(dbRef, dbIdRef)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val()
      store.getFirebaseToStore(data)
    } else {
      console.log("No data available")
    }
  }).catch((error) => {
    console.error(error);
  });

})
