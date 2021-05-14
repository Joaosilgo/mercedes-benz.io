import {hello} from './greeting'
//import img from './img/mercedes-benz-io-logo.svg';
import  './images/mercedes-benz-io-white.png';
import image from './images/mercedes-benz-io-white.png';

import './styles/main.scss'

console.log(hello('Hi 🍕'))

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
*/
/*
        if ('serviceWorker' in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register("sw.js")
                    .then(console.log)
                    .catch(console.error);
            });
        }
        */


        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
            .register('/service-worker-cache.js')
            .then(() => {
              console.log('Service Worker Registered')
            })
        }
