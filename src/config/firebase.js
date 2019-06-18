import * as firebase from 'firebase'

import {FirebaseConfig} from '../config/keys';
firebase.initializeApp(FirebaseConfig)

/**
 * Firebase database has Firebase Ref which is a reference to the data 
 * that we want to access. The Firebase Ref emits a series 
 * of value events, which are Firebase’s way of telling us that it 
 * has received some new data from the application.
 */
const databaseRef = firebase.database().ref();
export const moviesRef = databaseRef.child("movies")