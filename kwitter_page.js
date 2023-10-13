//YOUR FIREBASE LINKS
var  firebaseConfig = {
      apiKey: "AIzaSyDs_y4p8lprGC0MSfvnMOqzwaiu4z8wG64",
      authDomain: "kwitter-5a9db.firebaseapp.com",
      databaseURL: "https://kwitter-5a9db-default-rtdb.firebaseio.com",
      projectId: "kwitter-5a9db",
      storageBucket: "kwitter-5a9db.appspot.com",
      messagingSenderId: "10539940745",
      appId: "1:10539940745:web:a6109a56ba6b980d677f58"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");
function send() {
  msg=document.getElementById("message_input").value ;
  firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
  });
  document.getElementById("message_input").innerHTML="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";

}