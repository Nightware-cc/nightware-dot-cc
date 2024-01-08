var titleText = document.title;
let assignMeVouches = document.getElementById("assign-me-vouches");
let lastVouch = "";

vouchArr = [
  '<i id="vouches-quote">"+rep fast, friendly and halal"</i><strong id="vouches-customer"> - eth#1818</strong>',
  '<i id="vouches-quote">"+rep bought vypervpn fast and cheap ❤️"</i><strong id="vouches-customer"> - Magiker#3760</strong>',
  '<i id="vouches-quote">"+rep good service and quick and sexy prices :D ✅🍀"</i><strong id="vouches-customer"> - Spoopy#2323</strong>',
  '<i id="vouches-quote">"Vouch! Bought 1-day WZ2 cheat and transaction went smoothly! Very friendly and talkative. I reccomend!"</i><strong id="vouches-customer"> - ｋａｙ ｆｌｏｃｋｓ ｃａｔ#6905</strong>',
  '<i id="vouches-quote">"+halal USD to BTC exchange"</i><strong id="vouches-customer"> - Some Guy#2451</strong>',
  '<i id="vouches-quote">"+ rep lil bro goated"</i><strong id="vouches-customer"> - Dulzi#1337</strong>',
  '<i id="vouches-quote">"Got the shit LES GOOOO +rep100000 😘"</i><strong id="vouches-customer"> - exo#5802</strong>',
  '<i id="vouches-quote">"+rep lil bro go goated never scammm one of the realest safest fastest sellers 🖤🖤🖤"</i><strong id="vouches-customer"> - Carti#1025</strong>',
  '<i id="vouches-quote">"W WERPPPPPPPPPPPPP he a real og"</i><strong id="vouches-customer"> - sc#2002</strong>',
  '<i id="vouches-quote">"+rep extremely nice owner and quick delivery"</i><strong id="vouches-customer"> - Deleted User#0000</strong>',
  '<i id="vouches-quote">"+rep fast asf cashap for nl sub"</i><strong id="vouches-customer"> - fartsniff#0062</strong>',
  '<i id="vouches-quote">"+rep cheap as hell but super hq, methods are recent and work like promised "</i><strong id="vouches-customer"> - rxchobeats#3097</strong>',
  '<i id="vouches-quote">"+rep gave me steam wallet code "</i><strong id="vouches-customer"> - Miska#6564</strong>',
  '<i id="vouches-quote">"+rep again this guy literally is the best reseller I\'ve ever worked with he\'s the most patient person and his prices are like your not even using a reseller definitely would recommend!"</i><strong id="vouches-customer"> - Hash#0002</strong>',
  '<i id="vouches-quote">"boss ass mofo hooked me up with a resell in 2 minutes"</i><strong id="vouches-customer"> - log#0021</strong>',
  '<i id="vouches-quote">"vouch for @Pathetic#0420 exchanged twice, very legit +rep, would highly recommend ❤️ "</i><strong id="vouches-customer"> - AESI#3191</strong>',
  '<i id="vouches-quote">"+rep @Pathetic#0420 is very fast took me litteraly 1 minute :D"</i><strong id="vouches-customer"> - laP#0048</strong>',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function titleMarquee() {
  titleText =
    titleText.substring(1, titleText.length) + titleText.substring(0, 1);
  document.title = titleText;
  setTimeout("titleMarquee()", 500);
}

window.onload = function() {
  let clause = window.innerWidth < 768;
  config.particles.number.value = clause ? 80 : 150;
  particlesJS("particle", config);
  titleMarquee();
  // rotateVouches();
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

async function rotateVouches() {
  assignMeVouches.classList.add("fade-out");
  await sleep(1000);
  assignMeVouches.innerHTML = getRandomVouch(vouchArr);
  assignMeVouches.classList.remove("fade-out");
  assignMeVouches.classList.add("fade-in");
  await sleep(1000);
  assignMeVouches.classList.remove("fade-in");

  setTimeout("rotateVouches()", 5000);
}

/*
<div id="vouches">
    <div>
      <i id="vouches-quote">+rep extremely fast and cheap services</i>
      <br />
      <strong id="vouches-customer">Customer#0000</strong>
    </div>
  </div>
*/
