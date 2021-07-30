// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBU27rgZiCyXnvnuX05d9VEuK5IIqWy2hM",
  authDomain: "vibez-ac39b.firebaseapp.com",
  databaseURL: "https://vibez-ac39b-default-rtdb.firebaseio.com",
  projectId: "vibez-ac39b",
  storageBucket: "vibez-ac39b.appspot.com",
  messagingSenderId: "73478103415",
  appId: "1:73478103415:web:9f086f212088b27429c172"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose:"adding roomname"});
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room name- "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function RedirectToRoomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}