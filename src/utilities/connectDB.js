import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

var connectDB = false;

const firebaseConfig = {
  apiKey: 'AIzaSyAqVBTZfK1ekwuNzGEtBMo-gt8vvE9bUfI',
  authDomain: 'feedback-cngz.firebaseapp.com',
  projectId: 'feedback-cngz',
  storageBucket: 'feedback-cngz.appspot.com',
  messagingSenderId: '915564776571',
  appId: '1:915564776571:web:dae500340eb378806426de',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAll() {
  const allDB = collection(db, 'Comments');
  const commentsSnapshot = await getDocs(allDB);
  const commentList = commentsSnapshot.docs.map((doc) => doc.data());
  console.log(commentList);
  return commentList;
}

function getConnectionStatus() {
  return connectDB;
}

export { getConnectionStatus, getAll };
