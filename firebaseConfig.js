import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBV2vUN35kjCvGptbhH3s_t2U2ttsRl_V4',
  authDomain: 'rn-uber-eats-clone-341eb.firebaseapp.com',
  projectId: 'rn-uber-eats-clone-341eb',
  storageBucket: 'rn-uber-eats-clone-341eb.appspot.com',
  messagingSenderId: '1063198940938',
  appId: '1:1063198940938:web:f4770a8d5755f4d6cce4f3',
}

firebase.initializeApp(firebaseConfig)

export default firebase
