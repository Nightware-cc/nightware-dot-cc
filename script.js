var titleText = document.title;
let songIndex = 0;
let volume_ = 0.3;
let volume = document.getElementById("volume-slider");
let nextSong = document.getElementById("next-song");
let previousSong = document.getElementById("previous-song");
var audio;
let assignMeVouches = document.getElementById("assign-me-vouches");
let lastVouch = "";

songArr = [
  "6LACK - PRBLMS.mp3",
  "HOME - Resonance.mp3",
  "oneheart - nostalgia.mp3",
  "oneheart x reidenshi - snowfall.mp3",
  "analog_mannequin - milk cassette x.mp3",
  "oneheart - this feeling.mp3",
  "reidenshi - november 8.mp3",
  "tilekid - you not the same (slowed).mp3",
];

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
  rotateVouches();
};

function getRandomSong(arr) {
  const random = Math.floor(Math.random() * arr.length);
  songIndex = random;
  currentSong = arr[random];
  console.info({
    index: songIndex,
    randomItem: currentSong,
  });

  return arr[random];
}

function playSong(songPath) {
  nowPlaying = document.getElementById("now-playing-name");

  volume.addEventListener("change", function(e) {
    console.info("Volume set to: ", volume.value / 10);
    audio.volume = e.currentTarget.value / 10;
    volume_ = e.currentTarget.value / 10;
  });

  song = "assets/songs/" + songPath;

  audio = new Audio(song);

  audio.crossOrigin = "anonymous";

  nowPlaying.innerHTML = songPath.slice(0, -4);

  audio.volume = volume_;

  audio.play();
  console.info("Now playing: ", songPath, " (" + songIndex + ")");

  audio.addEventListener("ended", function(e) {
    songIndex++;
    console.log("audio ended spawned audio");
    if (songIndex < songArr.length) {
      playSong(songArr[songIndex]);
    } else {
      songIndex = 0;
      playSong(songArr[songIndex]);
    }
  });
}

nextSong.addEventListener("click", function(e) {
  songIndex++;
  audio.pause();
  console.log("nextSong spawned audio");
  if (songIndex < songArr.length) {
    playSong(songArr[songIndex]);
  } else {
    songIndex = 0;
    playSong(songArr[songIndex]);
  }
});

previousSong.addEventListener("click", function(e) {
  songIndex--;
  audio.pause();
  console.log("previousSong spawned audio");
  if (songIndex < 0) {
    songIndex = songArr.length - 1;
    playSong(songArr[songIndex]);
  } else if (songIndex < songArr.length) {
    playSong(songArr[songIndex]);
  } else {
    songIndex = 0;
    playSong(songArr[songIndex]);
  }
});

default_links =
  '<a class="middle-link link" onclick="loadLinks(\'products\');">Products</a><a class="middle-link link" href="https://discord.gg/FhbEGyRNeg" target="_blank">Discord</a><a class="middle-link link" onclick="loadLinks(\'contact\');">Contact</a>';
contact_links =
  '<a class="middle-link link" href="https://www.youtube.com/channel/UCqeMsuFXrAKigWp1QxdP3Mw" target="_blank">YouTube</a><a class="middle-link link" href="https://pathetic.sell.app" target="_blank">Sell.app</a><a class="middle-link link" onclick="loadLinks(\'back\')">Go Back</a>';
//product_links = '<div id="product-middle-link-div"><a class="middle-link-products">CS:GO Cheats</a><a class="middle-link-products">Apex Cheats</a><a class="middle-link-products">ACD MW2</a><a class="middle-link-products">Sprintz FN</a><a class="middle-link-products">Ibuprofen.cc</a><a class="middle-link-products">Release.lua</a><a class="middle-link-products">Nighty.one</a><a class="middle-link-products">Rust Cheats</a><a class="middle-link-products">GTA Menus</a><a class="middle-link-products">VPNs</a><a class="middle-link-products">+ MORE</a><a onclick="loadLinks(\'back\');">Go Back</a></div>';
//product_links = '<div id="product-middle-link-div"><table> <tr> <td class="middle-link-products">CS:GO Cheats</td><td class="middle-link-products">Apex Cheats</td><td class="middle-link-products">ACD MW2</td></tr><tr> <td class="middle-link-products">Sprintz FN</td><td class="middle-link-products">Ibuprofen.cc</td><td class="middle-link-products">Release.lua</td></tr><tr> <td class="middle-link-products">Nighty.one</td><td class="middle-link-products">Rust Cheats</td><td class="middle-link-products">GTA Menus</td></tr><tr> <td class="middle-link-products">VPNs</td><td class="middle-link-products">+ MORE</td><td id="product-go-back" onclick="loadLinks(\'back\');">Go Back</td></tr></table></div>';
//product_links = '<div id="product-middle-link-div"> <p id="top">What do we have?</p><table> <tr> <td class="middle-link-products">CS:GO Cheats</td><td class="middle-link-products">Apex Cheats</td><td class="middle-link-products">ACD MW2</td></tr><tr> <td class="middle-link-products">Sprintz FN</td><td class="middle-link-products">Ibuprofen.cc</td><td class="middle-link-products">Release.lua</td></tr><tr> <td class="middle-link-products">Nighty.one</td><td class="middle-link-products">Rust Cheats</td><td class="middle-link-products">GTA Menus</td></tr><tr> <td class="middle-link-products">VPNs</td><td class="middle-link-products">Steam Keys</td><td id="product-go-back" onclick="loadLinks(\'back\');">Go Back Home</td></tr></table> <p id="bottom">And so many more!</p></div>';
product_links = '<div id="product-middle-link-div"> <p id="top">What do we have?</p><table> <tr> <td class="middle-link-products">CS:GO Cheats</td><td class="middle-link-products">Rust Cheats</td><td class="middle-link-products">Cheap Accounts</td></tr><tr> <td class="middle-link-products">VPN Accounts</td><td class="middle-link-products">Apex Cheats</td><td class="middle-link-products">GTA Menus</td></tr><tr> <td class="middle-link-products">Cards & Methods</td><td class="middle-link-products">$$$ Exchanges</td><td id="product-go-back" onclick="loadLinks(\'back\');">Go Back Home</td></tr></table> <p id="bottom">And so much more!</p></div>';

async function loadLinks(links_to_load) {
  console.log(links_to_load);
  linkDiv = document.getElementById("assign-me-links");
  linkDivLinks = document.getElementById("assign-me-links");

  if (links_to_load.toLowerCase() == "contact") {
    linkDivLinks.classList.add("fade-out-quick");

    await sleep(500);
    linkDivLinks.classList.remove("assign-me-links-styling");

    linkDiv.innerHTML = contact_links;
    linkDivLinks.classList.remove("fade-out-quick");
    linkDivLinks.classList.add("fade-in-quick");

    await sleep(500);

    linkDivLinks.classList.remove("fade-in-quick");
  } else if (links_to_load.toLowerCase() == "products") {
    linkDivLinks.classList.add("fade-out-quick");

    await sleep(500);
    linkDivLinks.classList.add("assign-me-links-styling");

    linkDiv.innerHTML = product_links;
    linkDivLinks.classList.remove("fade-out-quick");
    linkDivLinks.classList.add("fade-in-quick");

    await sleep(500);

    linkDivLinks.classList.remove("fade-in-quick");
  } else {
    linkDivLinks.classList.add("fade-out-quick");

    await sleep(500);
    linkDivLinks.classList.remove("assign-me-links-styling");

    linkDiv.innerHTML = default_links;
    linkDivLinks.classList.remove("fade-out-quick");
    linkDivLinks.classList.add("fade-in-quick");

    await sleep(500);

    linkDivLinks.classList.remove("fade-in-quick");
  }
}

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
