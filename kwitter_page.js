//TUS ENLACES DE FIREBASE
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia código

//Termina código
      } });  }); }
getData();
