import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDrMrgkNgrYnMkanxEZiytxul3Rjxq4G0M",
  authDomain: "auth-firebase-8a2ef.firebaseapp.com",
  databaseURL: "https://auth-firebase-8a2ef.firebaseio.com",
  projectId: "auth-firebase-8a2ef",
  storageBucket: "auth-firebase-8a2ef.appspot.com",
  messagingSenderId: "384023702615",
  appId: "1:384023702615:web:17d348426eb7cfc7ee4712",
  measurementId: "G-KG84BW39GD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = "it";
export const db = firebase.firestore();

//Initialize Firebae Auth
export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "/account",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: "<your-tos-url>",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>",
};

// Google signin
export const googleProvider = new firebase.auth.GoogleAuthProvider();
