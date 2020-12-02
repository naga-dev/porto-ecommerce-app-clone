import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ-4e3wEWepUjnZvNXc-8OjirOB2lLb-s",
  authDomain: "porto-theme-8b1f2.firebaseapp.com",
  databaseURL: "https://porto-theme-8b1f2.firebaseio.com",
  projectId: "porto-theme-8b1f2",
  storageBucket: "porto-theme-8b1f2.appspot.com",
  messagingSenderId: "443326223358",
  appId: "1:443326223358:web:985e522a4ee99b37dde6af",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create user profile
export const createUserProfileDoc = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  // check if user exit or not, if not create it
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error while creating user", error.message);
    }
  }
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const sighInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
