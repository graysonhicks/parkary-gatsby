import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const prodConfig = {
  apiKey: 'AIzaSyATC-pXkN7hvLays8_OSSoqtb8DipzuvE4',
  authDomain: 'gatsby-parkary.firebaseapp.com',
  databaseURL: 'https://gatsby-parkary.firebaseio.com',
  projectId: 'gatsby-parkary',
  storageBucket: 'gatsby-parkary.appspot.com',
  messagingSenderId: '104877626112',
}

const devConfig = {
  apiKey: 'AIzaSyATC-pXkN7hvLays8_OSSoqtb8DipzuvE4',
  authDomain: 'gatsby-parkary.firebaseapp.com',
  databaseURL: 'https://gatsby-parkary.firebaseio.com',
  projectId: 'gatsby-parkary',
  storageBucket: 'gatsby-parkary.appspot.com',
  messagingSenderId: '104877626112',
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let db, auth

if (typeof window !== 'undefined') {
  // Gatsby build will fail otherwise
  db = firebase.database()
  auth = firebase.auth()
}

export { db, auth }
