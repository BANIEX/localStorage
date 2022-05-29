let elRegister = document.getElementById("register");
if (elRegister){
    console.log(elRegister)


    let array = [];
    document.getElementById("register").addEventListener("click", function(){
        let name = document.getElementById("name").value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        alert("successfully gotten values")
        let user = {
            name,
            email,
            password
        }



        alert(user);
        console.log(user);
        console.log(array);
        let detailsContent = localStorage.getItem("details");
        console.log(detailsContent);
        if (detailsContent == null){
            console.log("details no dey")
            alert("there is no 'details' in local storage");
            // We create the storage
            array.push(user)
            let arrayString = JSON.stringify(array);
            localStorage.setItem("details", arrayString);
        }
        else{
            let getter = localStorage.getItem("details");
            alert(getter)
            let a = JSON.parse(getter);
            alert(a);
            a.push(user);
            alert(a)

            const updatedArray = JSON.stringify(a)
            localStorage.setItem("details", updatedArray);
        
        }
    })
}

let elLogin = document.getElementById("login_login");
if (elLogin){


        elLogin.addEventListener("click", function(){
        let login_email = document.getElementById("login_email").value;
        let login_password = document.getElementById("login_password").value;
        var currentArray =  JSON.parse(localStorage.getItem("details"));
        var currentArrayLength = JSON.parse(localStorage.getItem("details")).length
        alert("o de be")
        console.log(currentArrayLength)
        function findUser(user){
            return user.email == login_email;
        }
        let loginUserObject = currentArray.find(user => findUser(user))
        alert(loginUserObject)
        console.log(loginUserObject)
        if (loginUserObject){
            function checkPassword(user){
                return user.password == login_password;
            }
            let correctPasswordUserObject = currentArray.find(user => checkPassword(user));
            if (correctPasswordUserObject){
                alert("correct password bro, welcome")
                // window.location.href("user_homepage.html")
                // http://127.0.0.1:5500/login.html
                // alert(window.location.origin)
                window.location.replace("user_homepage.html")


            }
            else{
                alert("incorrect password bro, get the hell out")
            }

        }
        else{
            alert("you havent registered bro, try register")
        }
  

        
})

}

    
let elAdmin = document.getElementById("myTable");
if (elAdmin){
    var currentArray =  JSON.parse(localStorage.getItem("details"));
    let table = document.getElementById("myTable");

    for(let element of currentArray){
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = element.name;
        cell2.innerHTML = element.email;
        cell3.innerHTML = element.password;
        
    }
    

}
