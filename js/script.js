document.addEventListener('DOMContentLoaded', function() {
  var dropdownTrigger = document.querySelectorAll('.dropdown-trigger');
  var dropdownInstances = M.Dropdown.init(dropdownTrigger);

  var sidenav = document.querySelectorAll('.sidenav');
  var sidenavInstances = M.Sidenav.init(sidenav);
});

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function (res) {})
      .catch(function (err) {})
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  // e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
});
/*
let buttonInstall = document.querySelector('footer')
buttonInstall.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  // hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      alert('User accepted the install prompt');
    } else {
      alert('User dismissed the install prompt');
    }
  })
});
*/
