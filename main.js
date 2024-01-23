window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
    } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
    import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCPcHh69MDdC6sCUG-70WXgGaZA4_uOVeo",
    authDomain: "needsforneeds-4.firebaseapp.com",
    projectId: "needsforneeds-4",
    storageBucket: "needsforneeds-4.appspot.com",
    messagingSenderId: "949861572978",
    appId: "1:949861572978:web:49d1073d3707482f89fdeb"
  };
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
      const auth = getAuth();
    const database = getDatabase(app);

    submitData.addEventListener('click', (e) => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('psw').value;

        //sign up user
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ... user.uid
                set(ref(database, 'users/' + user.uid), {
                    email: email,
                    password: password
                })
                    .then(() => {
                        // Data saved successfully!
                        alert('user created successfully');
        
                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });

        // log in user
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...

                // save log in details into real time database
                var lgDate = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: lgDate,
                })
                    .then(() => {
                        // Data saved successfully!
                        alert('user logged in successfully');

                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

        
        signOut(auth).then(() => {
               // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    });
    var time = document.querySelector('.time');
    var dateTime = document.querySelector('.date-time');
    function updateClock() {
      // Get the current time, day , month and year
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var day = now.getDay();
      var date = now.getDate();
      var month = now.getMonth();
      var year = now.getFullYear();
      // store day and month name in an array
      var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      // format date and time
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      date = date < 10 ? '0' + date : date;
      // display date and time
      var period = hours < 12 ? 'AM' : 'PM';
      time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
      dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
    }
    updateClock();
    setInterval(updateClock, 1000);
    $(document).on("ready", function () {
      if (document.cookie.indexOf("accepted_cookies=") < 0) {
        $(".cookie-overlay").removeClass("d-none").addClass("d-block");
      }
      $(".accept-cookies").on("click", function () {
        document.cookie = "accepted_cookies=yes;";
        $(".cookie-overlay").removeClass("d-block").addClass("d-none");
      });
      // expand depending on your needs
      $(".close-cookies").on("click", function () {
        $(".cookie-overlay").removeClass("d-block").addClass("d-none");
      });
    });
    src="https://app.wotnot.io/chat-widget/4dXc9aPiJnMi165945995614vRgYw8If.js" 
