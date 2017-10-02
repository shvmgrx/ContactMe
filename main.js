
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyArO5I9aUL8DsHy7ZcULPa6j5UuTk5a1FQ",
    authDomain: "contactform-fda70.firebaseapp.com",
    databaseURL: "https://contactform-fda70.firebaseio.com",
    projectId: "contactform-fda70",
    storageBucket: "contactform-fda70.appspot.com",
    messagingSenderId: "821887004269"
  };
  firebase.initializeApp(config);

var messagesRef= firebase.database().ref('messages');



document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name,company,email,phone,message);

    document.querySelector('.alert').style.display='block';

    setTimeout(function(){
    document.querySelector('.alert').style.display='none';
        
    },3000);

    document.getElementById('contactForm').reset();

}

function getInputVal(id){
    return document.getElementById(id).value;
}


function saveMessage(name,company, email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}