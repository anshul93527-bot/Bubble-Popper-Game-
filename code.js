var y1 = 400;
var y2 = 500;
var y3 = 600;
var score = 0;
timedLoop(30, function() {
  y1 = y1 - 2;
  y2 = y2 - 3;
  y3 = y3 - 1;
  setPosition("bubble1", "y", y1);
  setPosition("bubble2", "y", y2);
  setPosition("bubble3", "y", y3);
  if (y1 < 0) {
    y1 = 400;
  }
  if (y2 < 0) {
    y2 = 500;
  }
  if (y3 < 0) {
    y3 = 600;
  }
});
onEvent("bubble1", "click", function() {
  y1 = 400;
  score = score + 1;
  setText("Score_Label", "score:" + score);
});
onEvent("bubble2", "click", function( ) {
  y2 = 500;
  score = score + 1;
  setText("Score_Lable", "score:" + score);
});
onEvent("bubble3", "click", function( ) {
  y3 = 600;
  score = score + 1;
  setText("Score_Lable", "score:" + score);
});
onEvent("Reset_Button", "click", function( ) {
  y1 = 400;
  y2 = 500;
  y3 = 600;
  score = 0;
  stopTimedLoop();
  setText("Score_Lable", "score:0");
});
