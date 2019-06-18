/**
 * These values are unique for each user’s each project.
 *
 * Some important notes on env variables: 
 * Variables can be defined in your shell or in a .env file at the project root.
 * Only variables starting with REACT_APP_ are imported.
 * Imported values are placed in process.env.
 * The development server must be restarted to see new/updated variables.
 * Variables from the shell take precedence those in a .env file.
 */
export const FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,  
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATBASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}