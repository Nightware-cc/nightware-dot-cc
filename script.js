var titleText = document.title;
let lastVouch = "";
var assignMeVouches = document.getElementById("assignMeVouches");

vouchArr = [
  ['+rep fast, friendly and halal', 'eth#1818'],
  ['+rep bought vypervpn fast and cheap ❤️', 'Magiker#3760'],
  ['+rep good service and quick and sexy prices :D ✅🍀', 'Spoopy#2323'],
  ['Vouch! Bought 1-day WZ2 cheat and transaction went smoothly! Very friendly and talkative. I reccomend!', 'unkown#6905'],
  ['+halal USD to BTC exchange', 'Some Guy#2451'],
  ['+ rep lil bro goated', 'Dulzi#1337'],
  ['Got the shit LES GOOOO +rep100000 😘', 'exo#5802'],
  ['+rep lil bro go goated never scammm one of the realest safest fastest sellers 🖤🖤🖤', 'Carti#1025'],
  ['W WERPPPPPPPPPPPPP he a real og', 'sc#2002'],
  ['+rep extremely nice owner and quick delivery', 'Deleted User#0000'],
  ['+rep fast asf cashap for nl sub', 'fartsniff#0062'],
  ['+rep cheap as hell but super hq, methods are recent and work like promised', 'rxchobeats#3097'],
  ['+rep gave me steam wallet code', 'Miska#6564'],
  ['boss ass mofo hooked me up with a resell in 2 minutes', 'log#0021'],
  ['vouch for @Pathetic#0420 exchanged twice, very legit +rep, would highly recommend ❤️', 'AESI#3191'],
  ['+rep @Pathetic#0420 is very fast took me litteraly 1 minute :D', 'laP#0048'],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function titleMarquee() {
  titleText =
    titleText.substring(1, titleText.length) + titleText.substring(0, 1);
  document.title = titleText;
  setTimeout("titleMarquee()", 500);
}

window.onload = function () {
  let clause = window.innerWidth < 768;
  config.particles.number.value = clause ? 80 : 150;
  particlesJS("particle", config);
  titleMarquee();
  rotateVouches();
};

function getRandomVouch(arr) {
  const randomVouch = Math.floor(Math.random() * arr.length);
  vouchIndex = randomVouch;
  currentVouch = arr[randomVouch];

  if (currentVouch == lastVouch) {
    console.info("repeat vouch, picking another.");
    if (vouchIndex == 0) {
      vouchIndex++;
    } else {
      vouchIndex--;
    }
  }

  currentVouch = arr[vouchIndex]

  lastVouch = currentVouch;

  return currentVouch;
}

function createVouchElement(vouch) {
  let vouchElement = document.createElement('div');
  let vouchQuote = document.createElement('p');
  let vouchSep = document.createElement('p');
  let vouchAuthor = document.createElement('p');

  vouchQuote.textContent = vouch[0];
  vouchSep.textContent = '-';
  vouchAuthor.textContent = vouch[1]

  vouchElement.appendChild(vouchQuote);
  vouchElement.appendChild(vouchSep);
  vouchElement.appendChild(vouchAuthor);

  vouchElement.setAttribute('id', 'vouch')
  vouchElement.style.visibility = 'hidden';

  return vouchElement;
}

async function rotateVouches() {

  let vouch = getRandomVouch(vouchArr);
  let vouchElement = createVouchElement(vouch);
  let currentVouch = document.getElementById('vouch');

  assignMeVouches.classList.add("fade-out");
  await sleep(1000);
  assignMeVouches.removeChild(currentVouch);
  assignMeVouches.appendChild(vouchElement);
  document.getElementById('vouch').style.visibility = 'visible';
  assignMeVouches.classList.remove("fade-out");
  assignMeVouches.classList.add("fade-in");
  await sleep(1000);
  assignMeVouches.classList.remove("fade-in");

  setTimeout("rotateVouches()", 5000);
}
