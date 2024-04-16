
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDpWKIkX6sMh4C8dg2Um9mRqLMZa2cWNCI",
      authDomain: "fir-auth-1dca4.firebaseapp.com",
      databaseURL:"https://fir-auth-1dca4-default-rtdb.firebaseio.com",
      projectId: "fir-auth-1dca4",
      storageBucket: "fir-auth-1dca4.appspot.com",
      messagingSenderId: "785332022781",
      appId: "1:785332022781:web:615b96b66891b0a1d6bd94",
      measurementId: "G-B1FVJYS9MD"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    //console.log(app);
    const auth = getAuth();
    const database = getDatabase(app);




// LOGIN FORM 

document.getElementById("Login").addEventListener("click",function(event){
    event.preventDefault();
        var email=document.getElementById("login_email").value;
        var password=document.getElementById("login_password").value;
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
        const user =userCredential.user;
        console.log(user);
        alert(user.email+"Login Successfully Done.");
            window.location.href = "dashboard.html?email=" + encodeURIComponent(user.email);
        })
        .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        console.log(errorMessage);
        alert(error);
        });
    });

