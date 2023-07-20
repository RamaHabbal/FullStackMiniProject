window.onload = () =>{


    const signup = document.getElementById("signupBtn");
    signup.addEventListener("click" , () => {
        
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password =document.getElementById("password").value;

    const user = {
        first_name,
        last_name,
        email,
        password,
    
    }
    // console.log(first_name)
    fetch("http://localhost/FullStackMiniProject/php/signup.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(user => {
    console.log("User signed up successfully:", user);
 

    })
    .catch(error => console.log("Error during signup:",error))
    })




    const signin = document.getElementById("signinBtn");
    signin.addEventListener("click" , () =>{

        const first_name = document.getElementById("first_name1").value;
        const password =document.getElementById("password1").value;

        const user ={
            first_name1 :first_name,
            password1 : password,
        }
        console.log(first_name)
        fetch("http://localhost/FullStackMiniProject/php/signin.php", {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(user),
              
            })
            
              .then(response => response.json())
              .then(user => {

                console.log("User signed in successfully:", user);

                localStorage.setItem("username", user.username);
                
                window.location.href = "dashboard.html";
          
              })
              .catch(error => console.log("Error during signin:",error))
          
        })
    }