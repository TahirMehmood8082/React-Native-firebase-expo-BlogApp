import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from '@firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkMgiCfIvu36xLFkdxGLxrSgOdYLqwVRE",
  authDomain: "blogapp-61b1d.firebaseapp.com",
  databaseURL: "https://blogapp-61b1d-default-rtdb.firebaseio.com",
  projectId: "blogapp-61b1d",
  storageBucket: "blogapp-61b1d.appspot.com",
  messagingSenderId: "172890131950",
  appId: "1:172890131950:web:62a40467d72191bebd12ff",
  measurementId: "G-ZJ2GSE0WKF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

