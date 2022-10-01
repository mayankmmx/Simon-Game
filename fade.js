// fade out

function fade(el) {
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      el.style.display = 'none';
    }
    el.style.opacity = op;
    op -= op * 0.1;
  }, 50);
}

// fade in

function fadeIn(el) {
  var op = 0;
  el.style.opacity = op;
  el.style.display = 'inline-block';

  var timer = setInterval(function () {
    if (op >= 1.0){
      clearInterval(timer);
    }
    el.style.opacity = op;
    op = op + 0.1;
  }, 50);
}
