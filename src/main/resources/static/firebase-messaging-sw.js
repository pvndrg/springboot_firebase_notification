/*// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
//importScripts('/__/firebase/9.1.3/firebase-app-compat.js');
//importScripts('/__/firebase/9.1.3/firebase-messaging-compat.js');
//importScripts('/__/firebase/init.js');

//const messaging = firebase.messaging();*/

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.
 **/
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
    apiKey: "AIzaSyCmscG6Gb55G1k2U-wdq0Zch5pCb0ZtdVg",
		    authDomain: "product-demo-b1cff.firebaseapp.com",
		    databaseURL: "https://product-demo-b1cff.firebaseio.com",
		    projectId: "product-demo-b1cff",
		    storageBucket: "product-demo-b1cff.appspot.com",
		    messagingSenderId: "500393293072",
		    appId: "1:500393293072:web:910a167dbebe0beca4e195",
		    measurementId: "G-7JBDV81SQC"
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();



// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
