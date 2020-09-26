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

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
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

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection('devits').add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}

export const fetchLatestDevits = () => {
  return db.collection('devits')
    .get()
    .then(({ docs }) => {
      return docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        const normalizedCreatedAt = new Date(createdAt.seconds * 1000).toString()
        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt
        }
      })
    })
}
