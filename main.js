// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  //Hide the Error
  const errorMessage = document.getElementById('modal')
  errorMessage.setAttribute('class', 'hidden')

  //Event Listener for Heart
  const hearts = document.getElementsByClassName('like-glyph')
  for(let heart of hearts){
    heart.addEventListener('click', () => mimicServerCall()
    .then(function(rtn){
      if(heart.textContent === EMPTY_HEART){
        heart.textContent = FULL_HEART
        heart.setAttribute('class', 'activated-heart')
      }
      else{
        heart.textContent = EMPTY_HEART
        heart.removeAttribute('class', 'activated-heart')
      }
    })
    .catch((e) => {
      errorMessage.removeAttribute('class', 'hidden') 
    }))
  }
  



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      console.log(isRandomFailure)
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
