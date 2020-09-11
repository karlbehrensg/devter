import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAuDXI1mmChpMMO3gwo2E2RqBuouidVhXI',
  authDomain: 'devter-b3d78.firebaseapp.com',
  databaseURL: 'https://devter-b3d78.firebaseio.com',
  projectId: 'devter-b3d78',
  storageBucket: 'devter-b3d78.appspot.com',
  messagingSenderId: '482645793756',
  appId: '1:482645793756:web:1be6107904b6236d438d19',
  measurementId: 'G-69MC0KKTKQ'
}

!firebase.apps.length &&
firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}
