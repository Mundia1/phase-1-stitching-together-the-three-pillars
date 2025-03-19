const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red": "",
  "": "red"
};

// STEP 1: Enable heart selection
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText]; 
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: Enable event listeners
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// Mock server function
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
