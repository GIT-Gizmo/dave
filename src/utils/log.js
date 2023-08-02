<<<<<<< HEAD
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAZKGHU4MSTSU3tTXlWM5FxArnt0HYzpGw",
  authDomain: "my-portfolio-webite.firebaseapp.com",
  projectId: "my-portfolio-webite",
  storageBucket: "my-portfolio-webite.appspot.com",
  messagingSenderId: "310784595218",
  appId: "1:310784595218:web:196f549a8c3005bce5cfcb",
  measurementId: "G-F3DR0CWGHF"
};


const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
=======
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAZKGHU4MSTSU3tTXlWM5FxArnt0HYzpGw",
  authDomain: "my-portfolio-webite.firebaseapp.com",
  projectId: "my-portfolio-webite",
  storageBucket: "my-portfolio-webite.appspot.com",
  messagingSenderId: "310784595218",
  appId: "1:310784595218:web:196f549a8c3005bce5cfcb",
  measurementId: "G-F3DR0CWGHF"
};


const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
>>>>>>> 3f642e61df24c30281ad2c416b0c24c3cfe06e12
