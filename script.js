function submitForm() {
    let name = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let companyName = document.getElementById("companyName").value;
    let country = document.getElementById("pais").value;
    let tel = document.getElementById("tel").value;
    let message = document.getElementById("message").value;
    



    alert("Nombre: " + name + "\nApellido: " + lastName + "\nEmail: " + email + "\nEmail: " + email + "\nCompañía: " + companyName + "\nPaís: " + country + "\nTeléfono: " + tel + "\nMensaje: " + message);

    console.log("Nombre: " + name);
    console.log("Apellido: " + lastName);
    console.log("Email: " + email);
    console.log("Compañía: " + companyName);
    console.log("País: " + country);
    console.log("Teléfono: " + tel);
    console.log("Mensaje: " + message);

  };