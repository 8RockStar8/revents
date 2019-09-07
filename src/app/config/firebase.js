import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAE6L0HY72_6NLf4TUp8qh3TPtVjlXcMoA',
    authDomain: 'revents-252021.firebaseapp.com',
    databaseURL: 'https://revents-252021.firebaseio.com',
    projectId: 'revents-252021',
    storageBucket: '',
    messagingSenderId: '397674908954',
    appId: '1:397674908954:web:e2599e2154b91f265d30a3'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
