import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAI, getGenerativeModel, GoogleAIBackend } from 'firebase/ai'


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

// Initialize the Gemini Developer API backend service
const ai = getAI(app, { backend: new GoogleAIBackend() })

// Create a `GenerativeModel` instance with a model that supports your use case
export const GeminiAiModel = getGenerativeModel(ai, { model: 'gemini-3.5-flash' })
