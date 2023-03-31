
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
 import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBzjYcWnWKZSGyornam6TabkoqEaR1_ONc",
   authDomain: "family-bank-8c3db.firebaseapp.com",
   projectId: "family-bank-8c3db",
   storageBucket: "family-bank-8c3db.appspot.com",
   messagingSenderId: "820571783525",
   appId: "1:820571783525:web:de7d9b0a53702fe09da18c",
   measurementId: "G-L8BTGQBZB1"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 console.log(app);





function mobilemenu(){
     if(document.getElementById('mainnav').style.display == 'block'){
         document.getElementById('mainnav').style.display = 'none';
     }else{
         document.getElementById('mainnav').style.display = 'block';
     }
 }
 
document.getElementById('menuicon').addEventListener('click', mobilemenu);




