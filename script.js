window.onload = () =>{
    const signup = document.getElementById("signupBtn");
    signup.addEventListener("click" , ()=> {
        

    const user = {
        first_name,
        last_name,
        email,
        password

    }
     fetch("http://localhost/FullStackMiniProject/php/signup.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(user => {
      postsArray.push(user)

    })
    .catch(error => console.log(error))
    })


    const signin = document.getElementById("signinBtn");
    signin.addEventListener('click' , () =>{
        
        const user ={
            first_name,
            password
        }
        fetch("http://localhost/FullStackMiniProject/php/signip.php", {
            method : "GET",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(user)
            })
              .then(response => response.json())
              .then(user => {
                postsArray.push(user)
          
              })
              .catch(error => console.log(error))
          
        })
    }