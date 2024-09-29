// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getFirestore, QueryDocumentSnapshot, setDoc } from "firebase/firestore";
import type { Comment, Post } from "./types";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB226b_ohVrR-WuVO5ZbG34-9pPIPrkaX8",

    authDomain: "sf-forum-demo.firebaseapp.com",

    projectId: "sf-forum-demo",

    storageBucket: "sf-forum-demo.appspot.com",

    messagingSenderId: "1084658864793",

    appId: "1:1084658864793:web:68ade01af57ce987935e08"

};


// Initialize Firebase

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase)

export async function newPost(post: Post) {
    const docRef = await addDoc(collection(db, "posts"), {
        userName: post.userName,
        content: post.content,
        upvotes: post.upvotes,
        downvotes: post.downvotes,
    })

    const doc = (await getDoc(docRef));
    if (!doc.exists()) {
        console.log("Post not created.");
        throw "Error while creating post";
    }

    console.log(doc.data());

    return docToPost(doc, false);
}

function docToPost(doc: QueryDocumentSnapshot, fetchComments: boolean) {

    let post = doc.data();
    post.id = doc.id;

    if (!fetchComments) {
        post.replies = [];
    }

    console.log(post);
    

    return post as Post;
}

export async function newComment(post: Post, comment: Comment): Promise<Comment | undefined> {
    const docref = await addDoc(collection(db, "posts", `${post.id}`, "comments"), {
        commenter: comment.userName,
        message: comment.content
    })

    const doc = (await getDoc(docref));

    if (!doc.exists()) {
        console.log("Comment not created.");
        throw "Error while creating comment";

    }

    return docToComment(doc);
}

function docToComment(doc: QueryDocumentSnapshot) {
    let comment = doc.data();
    comment.id = doc.id;

    return comment as Comment;
}