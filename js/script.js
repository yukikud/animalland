const hero = document.querySelector('.hero.index');
const images = [
  'images/image2.jpeg',
  'images/image1.jpeg',
  'images/image3.jpeg',
  'images/image4.jpeg'
];// 修正済み

let index = 0;
setInterval(() => {
  console.log("現在の画像:", images[index]); 
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}, 4000);

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle('open');
  });
});

const cards = [
  { name: "ビスコ", image: "images/catcafe/ccbisco.jpeg" },
  { name: "シャドウ", image: "images/catcafe/ccshadow.jpeg" },
  { name: "ノアール", image: "images/catcafe/ccnoir.jpeg" },
  { name: "おこげ", image: "images/catcafe/ccokoge.jpeg" },
  { name: "クリーム", image: "images/catcafe/cccream.jpeg" },
  { name: "レオ", image: "images/catcafe/ccleo.jpeg" },
  { name: "シャルル", image: "images/catcafe/ccshalulu.jpeg" },
  { name: "マロン", image: "images/catcafe/ccmarron.jpeg" },
  { name: "ミミ", image: "images/catcafe/ccmimi.jpeg" },
  { name: "ムギ", image: "images/catcafe/ccmugi.jpeg" },
  { name: "タビ", image: "images/catcafe/cctabi.jpeg" },
  { name: "寧々", image: "images/catcafe/ccnene.jpeg" },
  { name: "ポウ", image: "images/catcafe/ccpow.jpeg" },
  { name: "太々", image: "images/catcafe/cctata.jpeg" }
];

function drawCard() {
  const random = Math.floor(Math.random() * cards.length);
  const selected = cards[random];

  const card = document.getElementById("card");
  const image = document.getElementById("cardImage");
  const name = document.getElementById("cardName");

  image.src = selected.image;
  image.alt = selected.name;
  name.textContent = selected.name;

  card.classList.remove("flipped");
  setTimeout(() => {
    card.classList.add("flipped");
  }, 100); // リセットしてから再フリップ
}

function drawCard() {
  const audio = document.getElementById("drumroll");
  const card = document.getElementById("card");
  const image = document.getElementById("cardImage");
  const name = document.getElementById("cardName");

  // まずカードを裏返す
  card.classList.remove("flipped");

  // ドラムロール再生
  audio.currentTime = 0;
  audio.play();

  // 数秒後に当たり演出をセット＆カードを反転
  setTimeout(() => {
    const random = Math.floor(Math.random() * cards.length);
    const selected = cards[random];
    image.src = selected.image;
    image.alt = selected.name;
    name.textContent = selected.name;

    card.classList.add("flipped");
  }, 3000); // ドラムロール終了後にflip（3秒くらいが◎）
}

// トップへ戻る
const gotop = document.querySelector('.gotop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    gotop.classList.add('show');
  } else {
    gotop.classList.remove('show');
  }
});
