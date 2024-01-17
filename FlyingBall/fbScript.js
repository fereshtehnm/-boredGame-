var block = document.getElementById('block')
var hole = document.getElementById('hole')
var ball = document.getElementById('ball')


////<color changer
const btn = document.getElementById('setColor');
btn.addEventListener('click', function onClick(event) {
  ball.style.backgroundColor = document.getElementById('color').value
})
////color changer/>


////<counter
var scoreCounter = 0
var levelCounter = 1
var score = document.getElementById('score')
var level = document.getElementById('level')

function count() {
    scoreCounter += 10
    if (scoreCounter%150 == 0){
      levelCounter += 1
      level.innerText = "level : " + levelCounter
    }
    score.innerText = "score : " + scoreCounter
}
var cancel = setInterval(count, 1000)
////counter/>


////<making random holes
hole.addEventListener('animationiteration', () => {
    var rand = -((Math.random()*300)+150)
    //apply the new position to css
    hole.style.top = rand+"px"
})
////making random holes/>


////<ball's movement
function isTouchDevice() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent")
    return true
  } catch (e) {
    return false
  }
}

const move = (e) => {
  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY
  } catch (e) {}
  if (x>500 && x<1220 && y>=105 && y<=605){
    //set left and top of div based on mouse position
    ball.style.left = x - 20 + "px"
    ball.style.top = y - 20 + "px"
  }
}
//For mouse
document.addEventListener("mousemove", (e) => {
  move(e)
})
//For touch
document.addEventListener("touchmove", (e) => {
  move(e)
})
////ball's movement/>


////<losing
let lost = false
let hit = false
setInterval(function(){
  var x_ball = ball.style.left // parseInt(ball.style.left.replace('px',''))
  var x_block = block.style.left //parseInt(block.style.left.replace('px',''))
  // if (x_ball == x_block) {
  //   alert("you lost!")
  //   lost = true
  // }
  var y_ball = parseInt(ball.style.top.replace('px',''))

  if ((x_ball == 86) || (y_ball == 584) ) {
    alert("you lost!"+ y_ball)
  }
}, 1)
////losing/>