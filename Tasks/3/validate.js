function validate() {
    const exUsers = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users%27');
    const data = await response.json();
    return data;
  }
    let username = document.getElementById('username').value;
    let name = document.getElementById('name').value;
    let familyname = document.getElementById('family-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let street = document.getElementById('street').value;
    let city = document.getElementById('city').value;
    let postalcode = document.getElementById('postal-code').value;
    let text = "";

    if (Username(username)) 
    {
        exUsers().then(data => {
          exUsers().then(data => console.log(data));
          text = "Вече съществува потребител с това потребителско име.";
          message[0].innerHTML = text;
        })
    }
    if (Name(name)) {
    }
    if (FamilyName(familyname)) {
    }
    if (Email(email)) {
    }
    if (Password(password)) {
    }
    if (PostalCode(postalcode)) {  
    }
    return false;
  }

  function Username(username) {
    var message = document.getElementsByClassName("error");
    if (username.length >= 3 && username.length <= 10) {
      text="";
      message[0].innerHTML = text;
      return true;
    }
    else {
      text="Потребителското име трябва да бъде между 3 и 10 символа";
      message[0].innerHTML = text;
      return false;
    }
  }

  function Name(name) {
    var message = document.getElementsByClassName("error");
    var letters = /^[A-Za-z]+$/;
    if ( (name =="" || name.match(letters)) && name.length < 50 ) {
      text="";
      message[1].innerHTML = text;
      return true;
    }
    else if (!(name.match(letters))){
      text="Името трябва да съдържа само букви";
      message[1].innerHTML = text;
      return false;
    }
    else {
      text="Името трябва да бъде под 50 символа";
      message[1].innerHTML = text;
      return false;
    }
  }

  function FamilyName(familyname) {
    var message = document.getElementsByClassName("error");
    var letters = /^[A-Za-z]+$/;
    if (familyname != "" && !(familyname.match(letters))) {
      text="Името трябва да съдържа само букви";
      message[2].innerHTML = text;
      return false;
    }
    else if (familyname.length > 50){
      text="Името трябва да бъде под 50 символа";
      message[2].innerHTML = text;
      return false;
    }
    else {
      text="";
      message[2].innerHTML = text;
      return true;
    }
  }

  function Email(email) {
    var message = document.getElementsByClassName("error");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
            
    if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
      text="";
      message[3].innerHTML = text;
      return true;
    }        
    else {
      text="Имейлът трябва да бъде в съответния формат";
      message[3].innerHTML = text;
      return false;
    }
  }

  function Password(password) {
    var message = document.getElementsByClassName("error");
    var illegalChars = /[\W_]/; // allow only letters and numbers
    if (illegalChars.test(password)) { 
      text="Паролата съдържа невалидни символи";
      message[4].innerHTML = text;
      return false;
    }
    else if(!(/[A-Z]/.test(password)))
    {
      text="Паролата трябва да съдържа поне една голяма буква";
      message[4].innerHTML = text;
      return false;
    }
    else if(!(/[a-z]/.test(password)))
    {
      text="Паролата трябва да съдържа поне една малка буква";
      message[4].innerHTML = text;
      return false;
    }
    else if ((password.search(/[0-9]+/)==-1) ) {
      text="Паролата трябва да съдържа поне една цифра";
      message[4].innerHTML = text;
      return false;
    }
    else {
      text="";
      message[4].innerHTML = text;
      return true;
    }
  }

  function Street(street) {
    var message = document.getElementsByClassName("error");
    var letters = /^[A-Za-z]+$/;
    if ( street =="" || street.match(letters)) {
      text="";
      message[5].innerHTML = text;
      return true;
    }
    
    else {
      text="Улицата трябва да съдържа само букви";
      message[5].innerHTML = text;
      return false;
    }
  }

  function City(city) {
    var message = document.getElementsByClassName("error");
    var letters = /^[A-Za-z]+$/;
    if ( city =="" || city.match(letters)) {
      text="";
      message[6].innerHTML = text;
      return true;
    }
    
    else {
      text="Градът трябва да съдържа само букви";
      message[6].innerHTML = text;
      return false;
    }
  }

  function  Postalcode(postalcode) {
    var message = document.getElementsByClassName("error");
    var numbers = /^[0-9]+$/;
    if ( postalcode =="" || postalcode.match(numbers)) {
      text="";
      message[7].innerHTML = text;
      return true;
    }
    else {
      text="Пощенският трябва да съдържа само цифри";
      message[7].innerHTML = text;
      return false;
    }
  }