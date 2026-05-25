import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'visionslidedes.firebaseapp.com',
  projectId: 'visionslidedes',
  storageBucket: 'visionslidedes.firebasestorage.app',
  messagingSenderId: '401368757683',
  appId: '1:401368757683:web:b61287d841f4d86defc7c6',
  measurementId: 'G-D54ZHVB2Z6'
}

const app = initializeApp(firebaseConfig)

export const firebaseDb = getFirestore(app)