user_name = localStorage.getItem("user_name");
document.getElementById("welcoming_user").innerHTML = "Welcome: " + user_name + "!";

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

var firebaseConfig = {
    apiKey: "AIzaSyAsmWnfcDrGsVCK0YATTGIb7CtkweSGUbo",
    authDomain: "lets-chat-5f9db.firebaseapp.com",
    databaseURL: "https://lets-chat-5f9db-default-rtdb.firebaseio.com",
    projectId: "lets-chat-5f9db",
    storageBucket: "lets-chat-5f9db.appspot.com",
    messagingSenderId: "681243094096",
    appId: "1:681243094096:web:fa9977e8a234a4f99db555"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  function addRoom()
  {
        room_name= document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);
        document.getElementById("room_name").innerHTML= "";
    }