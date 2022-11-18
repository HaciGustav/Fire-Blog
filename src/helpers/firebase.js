import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth';
import swal from 'sweetalert';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//AUTHENTICATION START
export const register = async (email, password, name, lastName, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(auth.currentUser, {
            displayName: name + ' ' + lastName,
        });
        console.log(userCredential);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

export const login = async (email, password, navigate) => {
    console.log('logged in');
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(userCredential);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};
export const logout = async () => {
    await signOut(auth);
};
export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { email, displayName, photoURL } = user;
            setCurrentUser({ email, displayName, photoURL });
            // console.log(user);
        } else {
            setCurrentUser(false);
            console.log('user signed out');
        }
    });
};

//AUTHENTICATION END

//FIRESTORE START
const db = getFirestore();

const colRef = collection(db, 'Articles');

//get collection from firestore
export const getAllArticles = async (setArticles) => {
    try {
        const snapshot = await getDocs(colRef);
        const articles = [];
        snapshot?.docs.forEach((doc) => {
            articles.push({ ...doc.data(), id: doc.id });
        });
        setArticles(articles);
    } catch (error) {
        console.log(error.message);
    }
};

// Add doc into collection
export const addArticle = async (e, values, navigate) => {
    e.preventDefault();
    try {
        addDoc(colRef, {
            title: values.title,
            author: auth.currentUser.email,
            imgURL: values.url,
            text: values.text,
            tags: [
                { tag: values.tag1 },
                { tag: values.tag2 },
                { tag: values.tag3 },
            ],
            date: new Date().toLocaleDateString('tr'),
        });
        console.log('posted');
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

//delete doc from collection

export const deleteArticle = async (id, navigate) => {
    const docRef = doc(db, 'Articles', id);
    const confirm = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this article!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    });

    if (confirm) {
        console.log(confirm);
        try {
            deleteDoc(docRef);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const getArticle = async (id, setArticle) => {
    const docRef = doc(db, 'Articles', id);

    try {
        const docSnap = await getDoc(docRef);

        setArticle(docSnap.data());
    } catch (error) {
        console.log(error.message);
    }
};

export const updateArticle = async (id, values) => {
    const docRef = doc(db, 'Articles', id);
};

//FIRESTORE END
