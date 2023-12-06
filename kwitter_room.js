
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
      apiKey: "AIzaSyB4jKV8h11oDzQkd9j3keR2fB3goljgbGY",
      authDomain: "pruebaclase-60fdb.firebaseapp.com",
      databaseURL: "https://pruebaclase-60fdb-default-rtdb.firebaseio.com",
      projectId: "pruebaclase-60fdb",
      storageBucket: "pruebaclase-60fdb.appspot.com",
      messagingSenderId: "843202284874",
      appId: "1:843202284874:web:3d433ae0b13fd4a48345b3",
      measurementId: "G-9X7DV494R1"
    };
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user-name");
    document.getElementById("user_name").innerHTML = "Te damos la bienvenida, " + user_name + "!";

    function addRoom() {
      function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
    Room_names = childKey;
    //Inicia el código
<div redirectToRoomName ></div>
    //Finaliza el código
    });});}
  getData();
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "Agregando el nombre de la sala"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala:" + Room_names);

       row = "<div class='room name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"
      //Inicia el código
  document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "kwitter.html";
}