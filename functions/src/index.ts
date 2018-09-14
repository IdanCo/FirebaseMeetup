import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const helloWorld = functions.https
  .onRequest((req, res) => {
    res.send("Hello from Firebase!");
});

export const addExclemation = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snap, context) => {
    // Get an object representing the document
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const message = newValue.message + '!';

    // return a promise to set the newly created document
    return snap.ref.set({
      message
    }, {merge: true});
});

export const countMessages = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap, context) => {
    // count documents in collection 'messages'
    const messagesCollectionSnap = await admin.firestore().collection('messages').get();

    // return a promise to set a document with id 'messages' in collection 'totals'
    return admin.firestore().doc('totals/messages').set({
      total: messagesCollectionSnap.size
    });
  });
