var frames_string = "";
var frame_data = frames_string.split(" ");
var score = 0;
var frames = [];
let frame;
let roll1;
let roll2;
for (var i = 0; i < frame_data.length; i++) {
  if (i === frame_data.length - 1) {
    roll1 = frame_data[i][0] === "x" ? 10 : frame_data[i][0] * 1;
    roll2 =
      frame_data[i][1] === "x"
        ? 10
        : frame_data[i][1] === "/"
        ? 10 - roll1
        : frame_data[i][1] * 1;
    roll3 =
      frame_data[i][2] === "x"
        ? 10
        : frame_data[i][2] === undefined
        ? 0
        : frame_data[i][2] * 1;
    frames.push({
      frame: roll1 + roll2 + roll3,
      roll1: roll1,
      roll2: roll2,
      roll3: roll3,
    });
  } else if (frame_data[i] === "x") {
    frame = 100;
    frames.push({
      frame: frame,
      roll1: 10,
    });
  } else {
    if (frame_data[i][1] === "/") {
      roll1 = frame_data[i][0] * 1;
      roll2 = 10 - roll1;
      frame = 10;
    } else {
      roll1 = frame_data[i][0] * 1;
      roll2 = frame_data[i][1] * 1;
      frame = roll1 + roll2;
    }
    frames.push({
      frame: frame,
      roll1: roll1,
      roll2: roll2,
    });
  }
}

for (var i = 0; i < frames.length - 1; i++) {
  if (frames[i].frame === 100) {
    if (i < frames.length - 2)
      if (frames[i + 1].frame === 100) {
        score += 10 + 10 + frames[i + 2].roll1;
      } else {
        score += 10 + getCorrectFrame(frames[i + 1].frame);
      }
    else {
      score +=
        10 + frames[frames.length - 1].roll1 + frames[frames.length - 1].roll2;
    }
  } else if (frames[i].frame === 10) {
    score += 10 + frames[i + 1].roll1;
  } else {
    score += getCorrectFrame(frames[i].frame);
  }
  console.log(score);
}

function getCorrectFrame(frame) {
  if (frame === 100) {
    return 10;
  }
  return frame;
}

score += getCorrectFrame(frames[frames.length - 1].frame);
console.log(score);
