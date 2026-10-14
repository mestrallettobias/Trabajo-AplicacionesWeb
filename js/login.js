function loguear(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email == "" || password == ""){
        alert("Por favor, complete todos los campos.");
        return;
    }
    else{
        // inicio de sesión
        if(email == "admin@dyaboo.com" && password == "admin123"){
            alert("Inicio de sesión exitoso.");
            window.location.href = "../Index.html";
        }
        else{
            alert("Email o contraseña incorrectos.");
        }
    }
}