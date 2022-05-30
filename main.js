// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName("like");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    mimicServerCall()
      .then(function (result) {
        hearts[i].innerHTML = FULL_HEART;
        hearts[i].classList.add("activated-heart");
        hearts[i].addEventListener("click", function () {
          hearts[i].innerHTML = EMPTY_HEART;
          hearts[i].classList.remove("activated-heart");
        });
      })
      .catch(function (error) {
        document.getElementById("modal").classList.remove("hidden");
        document.getElementById("modal-message").innerHTML = error;
        setTimeout(function () {
          document.getElementById("modal").classList.add("hidden");
        }, 3000);
      });
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
