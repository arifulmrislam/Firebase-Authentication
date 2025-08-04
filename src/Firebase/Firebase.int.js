// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDw8B65Afl9sfIE_C6jYHSZNetb7teoeqA',
    authDomain: 'fir-auth-648ea.firebaseapp.com',
    projectId: 'fir-auth-648ea',
    storageBucket: 'fir-auth-648ea.firebasestorage.app',
    messagingSenderId: '210036237869',
    appId: '1:210036237869:web:59430ff4f3ba5012de3aa4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);