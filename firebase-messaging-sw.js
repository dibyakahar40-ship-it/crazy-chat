importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD88qO_V0WvTKLXBTH0due6mnVnBDIFmn8",
  authDomain: "crazy-chat-7798.firebaseapp.com",
  databaseURL: "https://crazy-chat-7798-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crazy-chat-7798",
  storageBucket: "crazy-chat-7798.firebasestorage.app",
  messagingSenderId: "641157425610",
  appId: "1:641157425610:web:c1a9ae75e42de1e92dc733"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'New message';
  const options = {
    body: payload.notification?.body || '',
    icon: 'icon-192.png'
  };
  self.registration.showNotification(title, options);
});
