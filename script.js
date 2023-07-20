window.onload = () => {
  const signup = document.getElementById("signupBtn");
  signup.addEventListener("click", () => {
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      first_name,
      last_name,
      email,
      password,
    };

    fetch("http://localhost/FullStackMiniProject/php/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("User signed up successfully:", user);
      })
      .catch((error) => console.log("Error during signup:", error));
  });

  const signin = document.getElementById("signinBtn");
  signin.addEventListener("click", () => {
    const first_name = document.getElementById("first_name1").value;
    const password = document.getElementById("password1").value;

    const user = {
      first_name1: first_name,
      password1: password,
    };
    console.log(first_name);
    fetch("http://localhost/FullStackMiniProject/php/signin.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.staus == "logged in") {
          console.log("User signed in successfully:", user);
          localStorage.setItem("username", first_name);
          window.location.href = "dashboard.html";
        } else if (user.status == "user not found") {
          document.getElementById("firstR").textContent ="User name not found.";
        } else if (user.status == "wrong password") {
          document.getElementById("passR").textContent = "Incorrect password.";
        }
      })
      .catch((error) => console.log("Error during signin:", error));
  });
};
