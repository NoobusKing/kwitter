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
//ADD YOUR FIREBASE LINKS HERE
var username=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="Welcome " +username + " ! ";

function addroom() {
      roomname=document.getElementById("input_room").value ;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding Roomname"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names +" onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);

      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";

}