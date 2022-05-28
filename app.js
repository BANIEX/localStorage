let array = []
document.getElementById("register").addEventListener("click", function(){
    
    
    let name = document.getElementById("name").value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value
    alert("successfully gotten values")
    let user = {
        'name' : name,
        'email' : email,
        'password': password
    }
    let detailsContent = localStorage.getItem("details")
    if (detailsContent == null){
        alert("there is no 'details' in local storage")
    }
    array.push(user)
    let arrayString = JSON.stringify(array);
    localStorage.setItem("details", arrayString);
    alert(details.length)

})