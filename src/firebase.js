import { initializeApp } from "firebase/app";

const firebaseConfig =
{

    apiKey: "AIzaSyDGaXcsqLOCAz4pghLquR7Z82_fz6z2iIc",
    authDomain: "codingblaze-d0281.firebaseapp.com",
    projectId: "codingblaze-d0281",
    storageBucket: "codingblaze-d0281.appspot.com",
    messagingSenderId: "902109389793",
    appId: "1:902109389793:web:74fb4ccb78790f7a3728a0"
};

const app = initializeApp(firebaseConfig);
const bp = getFirestore(app)

export default bp;

