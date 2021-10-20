
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm4l-tmxpP7IVvnxIKnuEB4XY8cjfkl8U",
  authDomain: "new-kwitter-6fa8a.firebaseapp.com",
  databaseURL: "https://new-kwitter-6fa8a-default-rtdb.firebaseio.com",
  projectId: "new-kwitter-6fa8a",
  storageBucket: "new-kwitter-6fa8a.appspot.com",
  messagingSenderId: "390239026834",
  appId: "1:390239026834:web:d348e0f2eb4c7484c1704b",
  measurementId: "G-D3NB48EPDE"
};
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML ="welcome"+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child("room_name").update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room name-" + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick()='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

