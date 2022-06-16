//For the algorithm!
document.getElementById("btn").onclick = function () {
  let x = Math.floor(Math.random() * 6) + 1;
  document.getElementById("xlabel").innerHTML = x;

  let y = Math.floor(Math.random() * 6) + 1;
  document.getElementById("ylabel").innerHTML = y;

  let z = Math.floor(Math.random() * 6) + 1;
  document.getElementById("zlabel").innerHTML = z;
};
