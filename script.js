
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

    
    

//REGISTRATION FORM

    document.getElementById("signup").addEventListener("click",function(){
        event.preventDefault();
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var firstName = document.getElementById("first_name").value; 
        var lastName = document.getElementById("last_name").value;
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
        const user =userCredential.user;
        console.log(user);
        const userRef = ref(database, 'User Signup Data/' + user.uid);
        set(userRef, { 
                firstName: firstName,
                lastName: lastName,
                email: email,
                password:password
            }).then(() => {
                console.log("User data saved successfully.");
            }).catch((error) => {
                console.error("Error saving user data: ", error);
            });

        alert("Signup Successfully Done.");
        })
        .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        console.log(errorMessage);
        alert(error);
        });
    });

