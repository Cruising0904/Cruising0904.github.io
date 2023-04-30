const clock = document.querySelector("#clock");

function time() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();

  clock.innerText = `${hour}:${minute}:${seconds}`;
}
time();
setInterval(time, 1000);
