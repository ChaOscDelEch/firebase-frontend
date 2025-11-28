import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator, httpsCallable } from 'firebase/functions';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Firebase configuration for emulator
const firebaseConfig = {
  projectId: 'demo-no-project',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Functions and connect to emulator
const functions = getFunctions(app, 'europe-west1');
connectFunctionsEmulator(functions, '127.0.0.1', 5001);

// Initialize Firestore and connect to emulator
const db = getFirestore(app);
connectFirestoreEmulator(db, '127.0.0.1', 8080);

// Export callable functions
export const readNotes = httpsCallable(functions, 'readNotes');
export const createNote = httpsCallable(functions, 'createNote');

export { db };
