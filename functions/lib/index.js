"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https
    .onRequest((req, res) => {
    res.send("Hello from Firebase!");
});
exports.addExclemation = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => {
    // Get an object representing the document
    const newValue = snap.data();
    // access a particular field as you would any JS property
    const message = newValue.message + '!';
    // return a promise to set the newly created document
    return snap.ref.set({
        message
    }, { merge: true });
});
exports.countMessages = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => __awaiter(this, void 0, void 0, function* () {
    // count documents in collection 'messages'
    const messagesCollectionSnap = yield admin.firestore().collection('messages').get();
    // return a promise to set a document with id 'messages' in collection 'totals'
    return admin.firestore().doc('totals/messages').set({
        total: messagesCollectionSnap.size
    });
}));
//# sourceMappingURL=index.js.map