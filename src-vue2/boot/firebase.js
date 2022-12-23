import { initializeApp } from "firebase/app";

import { getDatabase, ref, child, get } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
    apiKey: "AIzaSyCsjnyveE8M55s3KyErC9X1oSZgT1QfWYs",
    authDomain: "verb-list-practice.firebaseapp.com",
    databaseURL: "https://verb-list-practice-default-rtdb.firebaseio.com",
    projectId: "verb-list-practice",
    storageBucket: "verb-list-practice.appspot.com",
    messagingSenderId: "981556900307",
    appId: "1:981556900307:web:f430421bba296880edbf26"
})

// const db = ref(getDatabase(app));

const dbRef = ref(getDatabase(app));
const dbIdRef = '1YlHOmMWW800YWYNN6mj4vQ9EgdK9a0sU8z1CdM3NDiI'

get(child(dbRef, dbIdRef)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

// export { db };