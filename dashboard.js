window.onload = () => {
    const loggedInUser = localStorage.getItem("username");
  
    if (loggedInUser) {
      const welcomeMessage = document.getElementById("welcomeMessage");
      const usernameElement = document.getElementById("username");
      usernameElement.textContent = loggedInUser;
      welcomeMessage.style.display = "block";
    } else {
      // Redirect to the login page if not logged in
      window.location.href = "dashboard.html";
    }
  };