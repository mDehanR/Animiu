// Cegah fetch/URL yang tidak valid
if (window.location.href.includes("undefined")) {
  console.warn("URL undefined dicegah:", window.location.href);
  window.history.replaceState({}, "", window.location.pathname);
}

const animeList = [
  {
    id: 1,
    title: "One Piece",
    img: "onepiece.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "9.1",
    genre: "Action, Adventure, comedy, fantasy, Shounen, Super Power",
    desc: "Petualangan Monkey D. Luffy bersama teman-teman uniknya dalam usaha mencari One Piece, bersama-sama menghadapi bahaya dan keajaiban dalam petualangan sekali seumur hidup mereka.",
    episodes: 1080,
    tabs: {
      info: "Petualangan Monkey D. Luffy bersama teman-teman uniknya dalam usaha mencari One Piece, bersama-sama menghadapi bahaya dan keajaiban dalam petualangan sekali seumur hidup mereka.",
      episodes: 1147,
      season: [
        { title: "One Piece", img: "onepiece.jpg" }   
      ]
    }
  },
  {
    id: 2,
    title: "Gachiakuta",
    img: "gachiakuta1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "8.9",
    genre: "Action, Fantasy, Shounen",
    desc: "Bercerita kisah Rudo hidup bersama ayah angkat nya di rumah nya yang kumuh tetapi ia terjatuh ke Abyys (lubang besar yang berisikan sampah yang dibuang), lalu disana ia berusaha mencari informasi untuk bisa kembali ke rumah nya lagi.",
    episodes: 24,
    tabs: {
      info: "Bercerita kisah Rudo hidup bersama ayah angkat nya di rumah nya yang kumuh tetapi ia terjatuh ke Abyys (lubang besar yang berisikan sampah yang dibuang), lalu disana ia berusaha mencari informasi untuk bisa kembali ke rumah nya lagi.",
      episodes: 24,
      season: [{ title: "Gachiakuta", img: "gachiakuta1.jpg" }]
    }
  },
  {
    id: 3,
    title: "Dandadan",
    img: "dandadan1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "8.3",
    genre: "Supernatural, Action, Comedy, Shounen",
    desc: "Momo dan Okarun terlibat dalam pertempuran melawan alien dan roh jahat.",
    episodes: 10,
    tabs: {
      info: "Petualangan Momo dan Okarun yang berhadapan dengan alien dan roh jahat agar mereka dapat kembali ke kehidupan normal.",
      episodes: 10,
      season: [
        { title: "Dandadan", img: "dandadan1.jpg" },
        { title: "Dandadan. Season 2", img: "dandadan2.jpg "}
      ]
    }
  },
  {
    id: 4,
    title: "One Punch Man",
    img: "opm.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "8.6",
    genre: "Action, Comedy, Seinen, Slice of Life, Super Power, Supernatural",
    desc: "Saitama, hero yang mengalahkan musuh hanya dengan satu pukulan.",
    episodes: 24,
    tabs: {
      info: "Saitama hero yang mengalahkan musuh hanya dengan satu pukulan.",
      episodes: 24,
      season: [{ title: "Season 1", img: "opm.jpg" }]
    }
  },
  {
    id: 5,
    title: "Sakamoto Days",
    img: "sakamoto.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "8.5",
    genre: "Action, Comedy, Shounen, Slice of Life",
    desc: "Taro Sakamoto, mantan pembunuh bayaran legendaris, kini hidup damai sebagai pemilik toko.",
    episodes: 11,
    tabs: {
      info: "Taro Sakamoto meninggalkan dunia bayaran, tapi masa lalunya menghantui.",
      episodes: 11,
      season: [{ title: "Season 1", img: "sakamoto.jpg" }]
    }
  },
  {
    id: 6,
    title: "Jujutsu Kaisen",
    img: "jujutsu1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "9.2",
    genre: "Action, Supernatural, Comedy, Shounen",
    desc: "Yuji Itadori menelan jari Sukuna dan harus melawan roh jahat.",
    episodes: 24,
    tabs: {
      info: "Yuji Itadori menelan jari Sukuna dan harus melawan roh jahat.",
      episodes: 24,
      season: [
        { title: "Jujutsu Kaisen", img: "jujutsu1.jpg" },
        { title: "Jujutsu Kaisen. Season 2", img: "jujutsu2.jpg" }
      ]
    }
  },
  {
    id: 7,
    title: "Violet Evergarden Movie",
    img: "violet.jpg",
    rating: "8.4",
    genre: "Drama, Fantasy, Romance, Slice of Life",
    desc: "Menceritakan Violet Evergarden yang masih tidak bisa melupakan Gilbert yang mengajarkannya tentang cinta.",
    episodes: [
    { ep: 1, url: "https://drive.google.com/file/d/1VkHgf0FtytJ6f-ZR72uhPzhPFdm3Gew1/preview" }
  ],
    tabs: {
      info: "Menceritakan Violet yang masih tak bisa melupakan Gilbert yang mengajarkannya tentang cinta.",
      season: [{ title: "Violet Evergarden Movie", img: "violet.jpg" }]
    }
  },
  {
    id: 8,
    title: "Spy x Family",
    img: "spy1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "8.8",
    genre: "Comedy, Action, Shounen, School",
    desc: "Keluarga mata-mata dengan rahasia unik dan anak pembaca pikiran.",
    episodes: 12,
    tabs: {
      info: "Keluarga mata-mata dengan rahasia unik.",
      episodes: 12,
      season: [{ title: "Season 1", img: "spy1.jpg" }]
    }
  },
  {
    id: 9,
    title: "Komi-san Wa, Comyushou desu",
    img: "komi1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "8.7",
    genre: "Slice of Life, Comedy, Drama, School, Shounen, Romance",
    desc: "Komi-san adalah gadis yang sangat cantik dan populer, tetapi memiliki masalah besar dalam berkomunikasi. Bersama Tadano, ia berusaha mendapatkan 100 teman di sekolahnya.",
    episodes: 12,
    tabs: {
      info: "Komi-san adalah gadis yang sangat cantik dan populer, tetapi memiliki masalah besar dalam berkomunikasi. Bersama Tadano, ia berusaha mendapatkan 100 teman di sekolahnya.",
      episodes: 12,
      season: [
        { title: "Komi-san Wa, Comyushou desu", img: "komi1.jpg" },
        { title: "Komi-san wa, Comyushou desu. Season 2", img: "komi2.jpg" }
      ]
    }
  },
  {
    id: 10,
    title: "Naruto",
    img: "naruto1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "9.2",
    genre: "Action, Adventure",
    desc: "Kisah ninja muda yang bermimpi menjadi Hokage.",
    episodes: 220,
    tabs: {
      info: "Kisah Naruto yang bermimpi menjadi Hokage.",
      episodes: 220,
      season: [
        { title: "Season 1", img: "naruto1.jpg" },
        { title: "Season 2", img: "naruto2.jpg" }
      ]
    }
  },
  {
    id: 11,
    title: "Attack on Titan",
    img: "aot.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "9.5",
    genre: "Action, Drama",
    desc: "Manusia berjuang melawan para raksasa pemakan manusia.",
    episodes: 87,
    tabs: {
      info: "Manusia berjuang melawan para raksasa pemakan manusia.",
      episodes: 87,
      season: [
        { title: "Season 1", img: "aot1.jpg" },
        { title: "Season 2", img: "aot2.jpg" },
        { title: "Season 3", img: "aot3.jpg" }
      ]
    }
  },
  {
    id: 12,
    title: "JoJo's Bizarre Adventure",
    img: "jojo1.jpg",
    rating: "8.5",
    genre: "Action, Adventure, Shounen, Supernatural",
    desc: "Jotaro harus menjinakkan kekuatan gelap dan menyelamatkan ibunya.",
    episodes: [
    { ep: 24, url: "https://drive.google.com/file/d/1RQbnIbm30ZCsaQpraaXf32-H7iMDiT8M/preview" }
  ],
    tabs: {
      info: "Jotaro harus menjinakkan kekuatan gelap dan menyelamatkan ibunya.",
      season: [{ title: "Season 1", img: "jojo1.jpg" }]
    }
  },
  {
    id: 13,
    title: "Otonari Ni Ginga",
    img: "otonari.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "7.6",
    genre: "Comedy, Romance, Seinen, Supernatural",
    desc: "Ichiro menghidupi kedua adiknya dan bertemu asisten baru.",
    episodes: 12,
    tabs: {
      info: "Ichiro menghidupi kedua adiknya dan bertemu asisten baru.",
      episodes: 12,
      season: [{ title: "Season 1", img: "otonari.jpg" }]
    }
  },
  {
    id: 14,
    title: "Kimetsu no Yaiba",
    img: "kimetsu1.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "9.0",
    genre: "Action, Fantasy, Adventure, Shounen, Demons",
    desc: "Tanjiro Kamado berjuang melawan iblis untuk menyelamatkan adiknya, Nezuko.",
    episodes: 26,
    tabs: {
      info: "Tanjiro berjuang menyelamatkan Nezuko dari kutukan iblis.",
      episodes: 26,
      season: [{ title: "Season 1", img: "kimetsu1.jpg" }]
    }
  },
  {
    id: 15,
    title:"Komi-san wa, Comyushou desu. Season 2",
    img:"komi2.jpg",
    video:"https://www.w3schools.com/html/mov_bbb.mp4",
    rating: "8.7",
    genre: "Slice of Life, Comedy, Drama, School, Shounen, Romance",
    desc:"Lanjutan kisah Komi-san dalam perjalanan sosialnya.",
    episodes:12,
    tabs:{
      info: "Komi-san adalah gadis yang sangat cantik dan populer, tetapi memiliki masalah besar dalam berkomunikasi. Bersama Tadano, ia berusaha mendapatkan 100 teman di sekolahnya.",
      episodes: 12,
      season:[
        {title:"Komi-san Wa, Comyushou desu", img:"komi1.jpg"},
        {title:"Komi-san wa, Comyushou desu. Season 2", img:"komi2.jpg"}
      ]
    }
  },
  {
    id: 16,
    title: "Dandadan. Season 2",
    img: "dandadan2.jpg",
    rating: "8.3",
    genre: "Supernatural, Action, Romance",
    desc: "Momo dan Okarun terlibat dalam pertempuran melawan alien dan roh jahat.",
    episodes: [
    { ep: 12, url: "https://drive.google.com/file/d/1ZoSkLYAdLtMmlFRhTf3gA-bdF5l8Swbv/preview" }
  ],
    tabs: {
      info: "Momo dan Okarun berhadapan dengan alien dan roh jahat.",
      season: [
        { title: "Dandadan", img: "dandadan1.jpg" },
        { title: "Dandadan. Season 2", img: "dandadan2.jpg "}
      ]
    }
  },
   {
    id: 17,
    title: "Jujutsu Kaisen. Season 2",
    img: "jujutsu2.jpg",
    rating: "9.2",
    genre: "Action, Supernatural, Comedy, Shounen",
    desc: "Yuji Itadori menelan jari Sukuna dan harus melawan roh jahat.",
    episodes: [
    { ep: 16, url: "https://drive.google.com/file/d/1UMAD4xltv1u_v2yiFxwX_8AmPgMfesEY/preview" }
  ],
    tabs: {
      info: "Yuji Itadori menelan jari Sukuna dan harus melawan roh jahat.",
      season: [
        { title: "Jujutsu Kaisen", img: "jujutsu1.jpg" },
        { title: "Jujutsu Kaisen. Season 2", img: "jujutsu2.jpg" }
      ]
    }
  },
  {
    id: 18,
    title: "Chainsaw Man",
    img: "chain1.jpg",
    rating: "8.5",
    genre: "Action, Adventure, Demons, Shounen",
    desc: "Chainsaw Man mengisahkan Denji, seorang remaja miskin yang harus melunasi utang ayahnya dengan bekerja sebagai pemburu iblis bersama Pochita, iblis gergaji mesin peliharaannya. Setelah dikhianati dan dibunuh oleh yakuza, Denji dihidupkan kembali oleh Pochita yang memberikan jantungnya, memungkinkannya berubah menjadi manusia-iblis dengan kemampuan gergaji mesin. Ia kemudian direkrut oleh Biro Keamanan Publik untuk bertarung melawan iblis, di mana ia bertemu dengan pemburu iblis lainnya seperti Makima, Aki Hayakawa, dan Power. ",
    episodes: [
    { ep: 11, url: "https://drive.google.com/file/d/1d_lO_Qibfns75v3UEbzjrg77lEBG4OmW/preview" },
    { ep: 12, url: "https://drive.google.com/file/d/1h6cF7dD8REhErFHTEsHbNNux6jgwvWfh/preview" }
  ],
    tabs: {
      info: "Chainsaw Man mengisahkan Denji, seorang remaja miskin yang harus melunasi utang ayahnya dengan bekerja sebagai pemburu iblis bersama Pochita, iblis gergaji mesin peliharaannya. Setelah dikhianati dan dibunuh oleh yakuza, Denji dihidupkan kembali oleh Pochita yang memberikan jantungnya, memungkinkannya berubah menjadi manusia-iblis dengan kemampuan gergaji mesin. Ia kemudian direkrut oleh Biro Keamanan Publik untuk bertarung melawan iblis, di mana ia bertemu dengan pemburu iblis lainnya seperti Makima, Aki Hayakawa, dan Power. ",
      season: [
        { title: "Chainsaw Man", img: "chain1.jpg" }
      ]
    }
  },
  {
    id: 19,
    title: "Snow White with the Red Hair",
    img: "snow.jpg",
    rating: "7.9",
    genre: "Drama, Fantasy, Romance, Shoujo",
    desc: "Tentang Shirayuki, seorang apoteker berambut merah unik yang melarikan diri dari kerajaan asalnya, Tanbarun, setelah Pangeran Raji memaksanya menjadi selir. Ia melarikan diri ke kerajaan tetangga, Clarines, dan bertemu dengan Pangeran Zen Wistaria yang membantunya setelah ia terluka karena racun apel.",
    episodes: [
    { ep: 1, url: "https://drive.google.com/file/d/1mRNW2eOLHqdRfgte5HOw6uV5DCfQjmzi/preview" }
  ],
    tabs: {
      info: "Tentang Shirayuki, seorang apoteker berambut merah unik yang melarikan diri dari kerajaan asalnya, Tanbarun, setelah Pangeran Raji memaksanya menjadi selir. Ia melarikan diri ke kerajaan tetangga, Clarines, dan bertemu dengan Pangeran Zen Wistaria yang membantunya setelah ia terluka karena racun apel.",
      season: [
        { title: "Snow White with the Red Hair", img: "snow.jpg" },
        { title: "Snow White with the Red Hair. Season 2", img: "snow2.jpg "}
      ]
    }
  },
  {
    id: 20,
    title: "Snow White with the Red Hair. Season 2",
    img: "snow2.jpg",
    rating: "7.9",
    genre: "Drama, Fantasy, Romance, Shoujo",
    desc: "Tentang Shirayuki, seorang apoteker berambut merah unik yang melarikan diri dari kerajaan asalnya, Tanbarun, setelah Pangeran Raji memaksanya menjadi selir. Ia melarikan diri ke kerajaan tetangga, Clarines, dan bertemu dengan Pangeran Zen Wistaria yang membantunya setelah ia terluka karena racun apel.",
    episodes: 12,
    tabs: {
      info: "Tentang Shirayuki, seorang apoteker berambut merah unik yang melarikan diri dari kerajaan asalnya, Tanbarun, setelah Pangeran Raji memaksanya menjadi selir. Ia melarikan diri ke kerajaan tetangga, Clarines, dan bertemu dengan Pangeran Zen Wistaria yang membantunya setelah ia terluka karena racun apel.",
      episodes: 12,
      season: [
        { title: "Snow White with the Red Hair", img: "snow.jpg" },
        { title: "Snow White with the Red Hair. Season 2", img: "snow2.jpg "}
      ]
    }
  },
  {
    id: 21,
    title: "Kekkon suru tte, Hontou desu ka",
    img: "kekkon.jpg",
    rating: "8.0",
    genre: "Drama, Romance, Seinen",
    desc: "Takuya dan Rika, dua rekan kerja di sebuah biro perjalanan di Tokyo. Karena perusahaan mereka akan menempatkan karyawan lajang ke kantor cabang di Siberia, Rika mengusulkan agar mereka berpura-pura menikah untuk menghindari tugas tersebut, meskipun mereka hampir tidak mengenal satu sama lain.",
   episodes: [
    { ep: 10, url: "https://drive.google.com/file/d/1hDuPEXDhIOMocq2A_cCVMLfg5_2tvzA7/preview" }
  ],
    tabs: {
      info: "Takuya dan Rika, dua rekan kerja di sebuah biro perjalanan di Tokyo. Karena perusahaan mereka akan menempatkan karyawan lajang ke kantor cabang di Siberia, Rika mengusulkan agar mereka berpura-pura menikah untuk menghindari tugas tersebut, meskipun mereka hampir tidak mengenal satu sama lain.",
      season: [
        { title: "Kekkon suru tte, Hontou desu ka", img: "kekkon.jpg" },
      ]
    }
  },
  {
    id: 22,
    title: "Black Clover",
    img: "blackclover.jpg",
    rating: "7.9",
    genre: "Action, Fantasy, Adventure, Comedy ",
    desc: "Asta, seorang pemuda yang lahir tanpa sihir di dunia yang dipenuhi sihir, yang bercita-cita menjadi Raja Penyihir. Bersama saingan sekaligus sahabatnya, Yuno, yang berbakat secara alami, Asta berjuang untuk mewujudkan mimpinya dengan menggunakan grimoire (buku sihir) yang aneh dan misterius yang memberinya kekuatan anti-sihir.",
    episodes: 12,
    tabs: {
      info: "Asta, seorang pemuda yang lahir tanpa sihir di dunia yang dipenuhi sihir, yang bercita-cita menjadi Raja Penyihir. Bersama saingan sekaligus sahabatnya, Yuno, yang berbakat secara alami, Asta berjuang untuk mewujudkan mimpinya dengan menggunakan grimoire (buku sihir) yang aneh dan misterius yang memberinya kekuatan anti-sihir.",
      episodes: 12,
      season: [
        { title: "Black Clover", img: "blackclover.jpg" },
      ]
    }
  },
  {
    id: 23,
    title: "Mato Seihei no Slave",
    img: "mato1.jpg",
    rating: "8.5",
    genre: "Action, Fantasy, Ecchi, Harem, Shounen",
    desc: "Dimensi iblis bernama Mato telah muncul di Jepang, dan di dalamnya terdapat buah persik yang hanya memberikan kekuatan pada perempuan. Karena hal ini, perempuan menjadi pelindung umat manusia sementara laki-laki diremehkan. Yuuki Wakura menyelamatkan Kyouka Uzen dari iblis dan menjadi budaknya, memberikannya kekuatan untuk mengalahkan iblis.",
    episodes: 12,
    tabs: {
      info: "Dimensi iblis bernama Mato telah muncul di Jepang, dan di dalamnya terdapat buah persik yang hanya memberikan kekuatan pada perempuan. Karena hal ini, perempuan menjadi pelindung umat manusia sementara laki-laki diremehkan. Yuuki Wakura menyelamatkan Kyouka Uzen dari iblis dan menjadi budaknya, memberikannya kekuatan untuk mengalahkan iblis.",
      episodes: 12,
      season: [
        { title: "Mato Seihei no Slave", img: "mato1.jpg" },
      ]
    }
  },
  {
    id: 24,
    title: "Sousou no Frieren",
    img: "frieren.jpg",
    rating: "8.9",
    genre: "Adventure, Fantasy, Drama, Magic",
    desc: "Penyihir elf bernama Frieren yang dulu tergabung dalam kelompok pahlawan legendaris yang berhasil mengalahkan Raja Iblis. Setelah 50 tahun berlalu, Frieren kembali dan melihat teman-temannya, seperti Himmel, telah menua dan meninggal dunia karena ia adalah elf yang hidup abadi. Dihantui penyesalan dan kesedihan, Frieren memulai petualangan baru untuk memahami umat manusia dan menjalin ikatan dengan orang baru, kali ini ditemani oleh muridnya, Fern.",
    episodes: 28,
    tabs: {
      info: "Penyihir elf bernama Frieren yang dulu tergabung dalam kelompok pahlawan legendaris yang berhasil mengalahkan Raja Iblis. Setelah 50 tahun berlalu, Frieren kembali dan melihat teman-temannya, seperti Himmel, telah menua dan meninggal dunia karena ia adalah elf yang hidup abadi. Dihantui penyesalan dan kesedihan, Frieren memulai petualangan baru untuk memahami umat manusia dan menjalin ikatan dengan orang baru, kali ini ditemani oleh muridnya, Fern.",
      episodes: 28,
      season: [
        { title: "Sousou no Frieren", img: "frieren.jpg" },
      ]
    }
  },
];

const hotAnimes = animeList.slice(0, 4);
const popularAnimes = animeList.slice(8, 12);
const content = document.getElementById('content');

/* localStorage keys */
const KEY_FAV = 'animiu_favorites';
const KEY_HISTORY = 'watchHistory';
const KEY_WATCHLIST = 'animiu_watchlist';
const KEY_THEME = 'animiu_theme';
const KEY_PHOTO = 'animiu_userphoto';
const KEY_SESSION = 'animiu_session';
const HERO_INTERVAL_MS = 5000;
let heroTimer = null;

/* util */
function qs(sel){return document.querySelector(sel)}
function qsa(sel){return Array.from(document.querySelectorAll(sel))}
function save(key,data){localStorage.setItem(key,JSON.stringify(data))}
function load(key){try{return JSON.parse(localStorage.getItem(key))}catch(e){return null}}

function initAuthCTA(){
  const cta = qs('.auth-cta');
  const session = load(KEY_SESSION);
  if(!cta) return;
  if(session?.name){
    cta.textContent = session.name;
    cta.href = '#';
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      if(confirm('Keluar dari akun saat ini?')){
        localStorage.removeItem(KEY_SESSION);
        location.reload();
      }
    });
  }else{
    cta.textContent = 'Login';
    cta.href = 'login.html';
  }
}

/* ============================
   Jadwal (local mapping)
   gunakan huruf kecil kunci: 'senin','selasa',...
   ============================ */
const jadwalAnime = {
  senin: ["One Piece", "Gachiakuta"],
  selasa: ["JoJo's Bizarre Adventure", "Spy x Family"],
  rabu: ["Jujutsu Kaisen", "Dandadan"],
  kamis: ["Kimetsu no Yaiba", "Naruto"],
  jumat: ["Violet Evergarden Movie", "Komi-san Wa, Comyushou desu"],
  sabtu: ["Otonari Ni Ginga", "Sakamoto Days"],
  minggu: ["One Punch Man", "Attack on Titan"]
};

function getToday() {
  const days = ["minggu","senin","selasa","rabu","kamis","jumat","sabtu"];
  return days[new Date().getDay()];
}

/* ============================
   Render helpers
   ============================ */
function getEpisodeCount(anime) {
  if (Array.isArray(anime.episodes)) return anime.episodes.length;
  return anime.tabs?.episodes || anime.episodes || 0;
}

function getAnimeStatus(anime) {
  const total = getEpisodeCount(anime);
  return total >= 24 ? 'Ongoing' : 'New';
}

function safeImagePath(path) {
  const clean = (path || '').trim();
  if (!clean) return '';
  if (clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('data:')) return clean;
  if (clean.includes('/')) return clean;
  return `poster/${clean}`;
}

function createPosterFallback(title = 'ANIMIU') {
  const safeTitle = String(title).replace(/[<>&"]/g, '').slice(0, 28) || 'ANIMIU';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#2f1454'/>
        <stop offset='100%' stop-color='#6d35a6'/>
      </linearGradient>
    </defs>
    <rect width='400' height='600' fill='url(#g)'/>
    <rect x='20' y='20' width='360' height='560' rx='18' ry='18' fill='none' stroke='rgba(255,255,255,.3)'/>
    <text x='200' y='300' fill='#f3e9ff' font-size='26' font-family='Arial, sans-serif' text-anchor='middle'>${safeTitle}</text>
    <text x='200' y='338' fill='#d9c7ef' font-size='16' font-family='Arial, sans-serif' text-anchor='middle'>Poster belum tersedia</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getPosterSrc(anime) {
  const src = safeImagePath(anime?.img);
  return src || createPosterFallback(anime?.title);
}

function renderEmptyState(container, message) {
  container.innerHTML = `<div class="empty-state">${message}</div>`;
}

function renderAnimeList(list, containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  if(!list.length){
    renderEmptyState(container, 'Belum ada data untuk kategori ini.');
    return;
  }
  list.forEach(a=>{
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.dataset.id = a.id;
    card.innerHTML = `
      <div class="card-poster-wrap">
        <img src="${getPosterSrc(a)}" alt="${a.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${createPosterFallback(
          'ANIMIU'
        )}'">
        <span class="card-badge badge-rating">Rating ${a.rating || '-'}</span>
        <span class="card-badge badge-status">${getAnimeStatus(a)}</span>
      </div>
      <div class="card-body">
        <p class="card-title">${a.title}</p>
        <p class="card-meta">${getEpisodeCount(a)} Episode</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderSkeleton(containerId, count = 4){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  for(let i = 0; i < count; i++){
    const sk = document.createElement('div');
    sk.className = 'skeleton-card';
    container.appendChild(sk);
  }
}

function getUniqueGenres() {
  const genres = new Set();
  animeList.forEach(a => {
    (a.genre || '')
      .split(',')
      .map(g => g.trim())
      .filter(Boolean)
      .forEach(g => genres.add(g));
  });
  return Array.from(genres).sort((a, b) => a.localeCompare(b));
}

function sortAnimeList(list, sortBy) {
  const result = [...list];
  if (sortBy === 'rating') {
    result.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
  } else if (sortBy === 'title') {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    result.sort((a, b) => a.id - b.id);
  }
  return result;
}

function applyHomeFilters(list) {
  const keyword = (qs('#searchInput')?.value || '').trim().toLowerCase();
  const selectedGenre = qs('#genreFilter')?.value || 'all';
  const selectedStatus = qs('#statusFilter')?.value || 'all';
  const selectedSort = qs('#sortFilter')?.value || 'default';

  const filtered = list.filter(a => {
    const matchKeyword = !keyword || a.title.toLowerCase().includes(keyword);
    const matchGenre =
      selectedGenre === 'all' || (a.genre || '').toLowerCase().includes(selectedGenre.toLowerCase());
    const status = getAnimeStatus(a).toLowerCase();
    const matchStatus = selectedStatus === 'all' || status === selectedStatus.toLowerCase();
    return matchKeyword && matchGenre && matchStatus;
  });

  return sortAnimeList(filtered, selectedSort);
}

function buildRecommendations(){
  const fav = load(KEY_FAV) || [];
  const history = load(KEY_HISTORY) || [];
  const source = fav.length ? fav : history;
  if(!source.length) return animeList.slice(4, 8);

  const pickedGenres = new Set();
  source.forEach(a => {
    (a.genre || '')
      .split(',')
      .map(g => g.trim().toLowerCase())
      .filter(Boolean)
      .forEach(g => pickedGenres.add(g));
  });

  const excludedIds = new Set(source.map(a => a.id));
  const reco = animeList.filter(a =>
    !excludedIds.has(a.id) &&
    (a.genre || '')
      .split(',')
      .map(g => g.trim().toLowerCase())
      .some(g => pickedGenres.has(g))
  );

  return reco.slice(0, 4);
}

function renderHeroSlide(anime){
  const hero = qs('.hero-banner');
  const title = qs('#heroTitle');
  const sub = qs('#heroSub');
  const kicker = qs('#heroKicker');
  if(!hero || !title || !sub || !kicker || !anime) return;

  kicker.textContent = 'Trending Sekarang';
  title.textContent = anime.title;
  sub.textContent = anime.desc || anime.tabs?.info || 'Anime pilihan minggu ini.';
  hero.style.backgroundImage = `linear-gradient(120deg, rgba(26, 9, 56, 0.88), rgba(52, 20, 96, 0.88)), url("${getPosterSrc(anime)}")`;
  hero.style.backgroundSize = 'cover';
  hero.style.backgroundPosition = 'center';
}

function startHeroRotation(){
  const hero = qs('.hero-banner');
  if(!hero) return;
  const slides = sortAnimeList([...animeList], 'rating').slice(0, 5);
  if(!slides.length) return;

  let idx = 0;
  renderHeroSlide(slides[idx]);
  if(heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    idx = (idx + 1) % slides.length;
    renderHeroSlide(slides[idx]);
  }, HERO_INTERVAL_MS);
}

function stopHeroRotation(){
  if(heroTimer){
    clearInterval(heroTimer);
    heroTimer = null;
  }
}

function renderHomeSections() {
  ['hotAnimes', 'popularAnimes', 'newReleases', 'topWeekly', 'continueWatching', 'recommendedForYou'].forEach(id => renderSkeleton(id));
  const filteredHot = applyHomeFilters(hotAnimes);
  const filteredPopular = applyHomeFilters(popularAnimes);
  const newReleases = [...animeList].slice(-8).reverse().slice(0, 4);
  const topWeekly = sortAnimeList([...animeList], 'rating').slice(0, 4);
  const continueWatching = (load(KEY_HISTORY) || [])
    .map(h => animeList.find(a => a.id === h.id))
    .filter(Boolean)
    .slice(0, 4);
  const recommendations = buildRecommendations();

  setTimeout(() => {
    renderAnimeList(filteredHot, 'hotAnimes');
    renderAnimeList(filteredPopular, 'popularAnimes');
    renderAnimeList(newReleases, 'newReleases');
    renderAnimeList(topWeekly, 'topWeekly');
    renderAnimeList(continueWatching, 'continueWatching');
    renderAnimeList(recommendations, 'recommendedForYou');
  }, 180);
}

function setupHomeControls() {
  const genreFilter = qs('#genreFilter');
  if (genreFilter && !genreFilter.dataset.ready) {
    const genres = getUniqueGenres();
    genreFilter.innerHTML = `<option value="all">Semua Genre</option>${genres
      .map(g => `<option value="${g}">${g}</option>`)
      .join('')}`;
    genreFilter.dataset.ready = '1';
  }

  ['#genreFilter', '#statusFilter', '#sortFilter'].forEach(sel => {
    const el = qs(sel);
    if (!el || el.dataset.bound) return;
    el.addEventListener('change', renderHomeSections);
    el.dataset.bound = '1';
  });
}

/* initial render home */
setupHomeControls();
renderHomeSections();
startHeroRotation();

/* ============================
   Navigation (SPA style)
   ============================ */
const navLinks = qsa('nav a');
const pages = {
  home: document.getElementById('homePage').outerHTML,
  jadwal: `<section class="jadwal-page" style="text-align:center">
            <h2>Jadwal Tayang</h2>
            <div class="hari-nav">
              <button class="hari-btn" data-day="senin">Senin</button>
              <button class="hari-btn" data-day="selasa">Selasa</button>
              <button class="hari-btn" data-day="rabu">Rabu</button>
              <button class="hari-btn" data-day="kamis">Kamis</button>
              <button class="hari-btn" data-day="jumat">Jumat</button>
              <button class="hari-btn" data-day="sabtu">Sabtu</button>
              <button class="hari-btn" data-day="minggu">Minggu</button>
            </div>
            <div id="jadwalList" class="anime-grid" style="margin-top:18px"></div>
          </section>`,
  folder: `<section><h2 style="text-align:center">FOLDER</h2>
            <div style="max-width:1000px;margin:12px auto">
              <div class="list-section">
                <h3>Anime Favorit</h3>
                <div id="favList"></div>
              </div>
              <div class="list-section">
                <h3>Anime Akan Ditonton (Watchlist)</h3>
                <div id="watchlist"></div>
              </div>
            </div>
          </section>`,
  profil: `<section class="profile-page">
            <img id="userPhoto" src="" alt="Foto Profil" class="profile-photo" />
            <h2 id="userName">Welcome, User!</h2>
            <p id="userEmail"><b>kalau mau anime nya ada video asli nya, request aja dengan dm ke IG ini </b><a href="https://www.instagram.com/mdhnr19">@mdhnr19</a></a></p>
            <div class="profile-buttons">
      <div class="profile-buttons">
    <button class="btn" id="changePhotoBtn">Ubah Foto Profil</button>
    <input type="file" id="profileFile" accept="image/*" style="display:none" />
    <button class="btn" id="toggleTheme">Ganti Tema</button>
    <button class="btn" id="contactCS">Customer Service</button>
  </div>
            <h3 style="margin-top:18px">Riwayat Anime</h3>
            <ul id="watchHistoryList" class="history-list"></ul>
          </section>`
};

navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    navLinks.forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
    const page = link.dataset.page;
    content.innerHTML = pages[page];
    content.classList.remove('page-enter');
    requestAnimationFrame(() => content.classList.add('page-enter'));

    // after page inserted to DOM, attach page-specific logic
    if(page==='home'){
      setupHomeControls();
      renderHomeSections();
      startHeroRotation();
    } 
    else if(page==='folder'){
      stopHeroRotation();
      renderFolder();
    } 
    else if(page==='profil'){
      stopHeroRotation();
      loadProfilePage();
      updateWatchHistory();
    } 
    else if(page==='jadwal'){
      stopHeroRotation();
      // attach hari button handlers and render today
      // give DOM a micro-tick to ensure elements exist
      setTimeout(()=>{
        qsa('.hari-btn').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            qsa('.hari-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            const day = btn.dataset.day;
            renderJadwal(day);
          });
        });
        // set active today and render
        const today = getToday();
        const btnToday = qs(`.hari-btn[data-day="${today}"]`);
        qsa('.hari-btn').forEach(b=>b.classList.remove('active'));
        if(btnToday) btnToday.classList.add('active');
        renderJadwal(today);
      }, 0);
    }
  });
});

/* ============================
   Global click: anime card opens detail
   ============================ */
document.body.addEventListener('click', e=>{
  const card = e.target.closest('.anime-card');
  if(card){
    const id = Number(card.dataset.id);
    const anime = animeList.find(x=>x.id===id);
    if(anime) showAnimeDetail(anime);
  }
});

/* ============================
   Show anime detail (tabs: INFO/EPISODE/SEASON)
   ============================ */
function showAnimeDetail(a){
  const favs = load('animiu_favorites') || [];
  const watch = load('animiu_watchlist') || [];
  const inFav = favs.some(x=>x.id===a.id);
  const inWatch = watch.some(x=>x.id===a.id);
  const history = load(KEY_HISTORY) || [];

  content.innerHTML = `
    <section class="anime-detail">
      <div class="anime-tabs" style="display:flex;justify-content:center;gap:10px;margin-bottom:12px">
        <button class="tab-btn" data-tab="info" class="active">INFO</button>
        <button class="tab-btn" data-tab="episodes">EPISODE</button>
        <button class="tab-btn" data-tab="season">SEASON</button>
      </div>

      <div class="tab-section" data-tab="info">
        <h2>${a.title}</h2>
        <img src="${getPosterSrc(a)}" alt="${a.title}" onerror="this.onerror=null;this.src='${createPosterFallback('ANIMIU')}'" />
        <div class="meta">Rating ${a.rating} | Genre ${a.genre}</div>
        <p>${a.tabs.info || a.desc}</p>
        <div style="margin-top:10px">
          <button class="btn" id="favBtn">${inFav ? 'Di Favorit' : 'Tambahkan ke Favorit'}</button>
          <button class="btn" id="watchBtn">${inWatch ? 'Sudah di List' : 'Masukan ke List'}</button>
        </div>
      </div>

      <div class="tab-section" data-tab="episodes" style="display:none">
        <h3>Daftar Episode</h3>
        <div class="episode-list" id="episodeList"></div>
      </div>

      <div class="tab-section" data-tab="season" style="display:none">
        <h3>Season</h3>
        <div class="season-grid" id="seasonList"></div>
      </div>
    </section>
  `;
  
 function openWatchPage(anime, ep) { 
  content.innerHTML = `
    <section class="watch-page" style="text-align:center">
      <h2>${anime.title} - Episode ${ep.ep || ep}</h2>

      <div class="video-container">
        <iframe 
          id="watchPlayer"
          src="${ep.url || anime.video}" 
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>
      </div>

      <div style="margin-top:10px">
        <button class="btn" id="backBtn">Kembali</button>
      </div>
    </section>
  `;

  qs('#backBtn').addEventListener('click', ()=> showAnimeDetail(anime));
  addToHistory(anime);

  // Tambahkan responsif fullscreen behavior
  setupVideoOrientation();
}

function setupVideoOrientation() {
  const container = document.querySelector('.video-container');

  function setLandscape(full) {
    if (full) {
      container.style.position = 'fixed';
      container.style.top = 0;
      container.style.left = 0;
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.zIndex = 9999;
      document.body.style.overflow = 'hidden';
    } else {
      container.style.position = 'relative';
      container.style.width = '100%';
      container.style.height = 'auto';
      container.style.zIndex = 'auto';
      document.body.style.overflow = 'auto';
    }
  }

  function updateOrientation() {
    // Jalankan efek hanya di HP/tablet (layar kecil)
    if (window.innerWidth <= 768) {
      if (screen.orientation.type.startsWith('landscape')) {
        setLandscape(true);
      } else {
        setLandscape(false);
      }
    } else {
      // Kalau di laptop/PC, pastikan normal saja
      setLandscape(false);
    }
  }

  // Deteksi awal & setiap kali rotasi
  updateOrientation();
  window.addEventListener('orientationchange', updateOrientation);
  window.addEventListener('resize', updateOrientation);
}

  // Tab handler
  const tabs = qsa('.tab-btn');
  const sections = qsa('.tab-section');
  
  function renderTab(name){
    sections.forEach(s => s.style.display = (s.dataset.tab === name ? 'block' : 'none'));
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  }

  tabs.forEach(btn=>{
    btn.addEventListener('click',()=> renderTab(btn.dataset.tab));
  });

  renderTab('info'); // default tab aktif

  // Populate episodes
const epContainer = qs('#episodeList');
epContainer.innerHTML = '';

if (Array.isArray(a.episodes)) {
  // ✅ Jika anime memiliki daftar episode dengan URL sendiri
  a.episodes.forEach(ep => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = `Episode ${ep.ep}`;
    btn.addEventListener('click', () => openWatchPage(a, ep));
    epContainer.appendChild(btn);
  });
} else {
  // 🔄 Fallback jika masih pakai format lama (satu URL saja)
  const totalEp = a.tabs.episodes || a.episodes || 12;
  for (let i = 1; i <= totalEp; i++) {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = `Episode ${i}`;
    btn.addEventListener('click', () => openWatchPage(a, { ep: i, url: a.video }));
    epContainer.appendChild(btn);
  }
}

  // Populate season list
const seasonContainer = qs('#seasonList');
if(seasonContainer){
  seasonContainer.innerHTML = '';
  (a.tabs.season || []).forEach(s=>{
    const el = document.createElement('div');
    el.className = 'season-card';
    const seasonAnime = animeList.find(x => x.title.toLowerCase() === s.title.toLowerCase());
    const seasonImgSrc = seasonAnime ? getPosterSrc(seasonAnime) : safeImagePath(s.img) || createPosterFallback(s.title);
    el.innerHTML = `<img src="${seasonImgSrc}" alt="${s.title}" title="${s.title}" onerror="this.onerror=null;this.src='${createPosterFallback(
      'ANIMIU'
    )}'" />
                    <div style="text-align:center;margin-top:6px;font-weight:700">${s.title}</div>`;
    
    // Tambahkan klik untuk membuka detail anime season tersebut
    const targetAnime = animeList.find(x => x.title.toLowerCase() === s.title.toLowerCase());
    if(targetAnime){
      el.style.cursor = 'pointer';
      el.addEventListener('click', ()=> showAnimeDetail(targetAnime));
    } else {
      el.addEventListener('click', ()=> alert('Season tidak ditemukan!'));
    }

    seasonContainer.appendChild(el);
  });
}

  // Favorite & Watchlist
  qs('#favBtn').addEventListener('click',()=>{
    const fav = load('animiu_favorites') || [];
    if(fav.some(x=>x.id===a.id)){
      save('animiu_favorites',fav.filter(x=>x.id!==a.id));
      alert('Dihapus dari favorit');
    }else{
      fav.push(a);
      save('animiu_favorites',fav);
      alert('Ditambahkan ke favorit');
    }
    showAnimeDetail(a);
  });

  qs('#watchBtn').addEventListener('click',()=>{
    const w = load('animiu_watchlist') || [];
    if(w.some(x=>x.id===a.id)){
      alert('Sudah ada di daftar');
    }else{
      w.push(a);
      save('animiu_watchlist',w);
      alert('Ditambahkan ke daftar tonton');
    }
  });
}

/* ============================
   Search
   ============================ */        
let searchDebounceTimer;
qs('#searchInput').addEventListener('input', () => {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    const kw = qs('#searchInput').value.trim().toLowerCase();
    if (kw.length > 0) {
      const results = animeList.filter(a => a.title.toLowerCase().includes(kw));
      if (!qs('#searchResults')) {
        const homeSection = qs('#homePage');
        const searchSection = document.createElement('div');
        searchSection.className = 'anime-section';
        searchSection.innerHTML = '<h2>HASIL PENCARIAN</h2><div class="anime-grid" id="searchResults"></div>';
        homeSection.insertBefore(searchSection, homeSection.firstChild);
      }
      renderAnimeList(results, 'searchResults');
      qs('#hotAnimes').parentElement.style.display = results.length > 0 ? 'none' : 'block';
      qs('#popularAnimes').parentElement.style.display = results.length > 0 ? 'none' : 'block';
      if (results.length === 0) {
        qs('#searchResults').innerHTML = `<div class="empty-state">Tidak ada anime ditemukan untuk "${kw}". Coba kata kunci lain.</div>`;
      }
    } else {
      const searchSection = qs('.anime-section:has(#searchResults)');
      if (searchSection) searchSection.remove();
      qs('#hotAnimes').parentElement.style.display = 'block';
      qs('#popularAnimes').parentElement.style.display = 'block';
      renderHomeSections();
    }
  }, 300);
});

/* ============================
   Favorites (localStorage)
   ============================ */
function getFavorites(){ return load(KEY_FAV) || []; }
function toggleFavorite(a){
  const fav = getFavorites();
  if(fav.some(x=>x.id===a.id)){
    const newFav = fav.filter(x=>x.id!==a.id);
    save(KEY_FAV,newFav);
    alert(`${a.title} dihapus dari favorit`);
  } else {
    fav.push(a);
    save(KEY_FAV,fav);
    alert(`${a.title} ditambahkan ke favorit`);
  }
  if(currentPage() === 'folder') renderFolder();
}

/* ============================
   Watchlist
   ============================ */
function getWatchlist(){ return load(KEY_WATCHLIST) || []; }
function addToWatchlist(a){
  const w = getWatchlist();
  if(w.some(x=>x.id===a.id)){
    alert('Anime sudah ada di Watchlist.');
    return;
  }
  w.push(a);
  save(KEY_WATCHLIST, w);
  alert(`${a.title} dimasukkan ke Watchlist`);
  if(currentPage() === 'folder') renderFolder();
}

/* ============================
   Folder rendering
   ============================ */
function renderFolder(){
  const favContainer = qs('#favList');
  const fav = getFavorites();
  favContainer.innerHTML = '';
  if(!fav.length){
    favContainer.innerHTML = `<p style="text-align:center">Belum ada anime favorit.</p>`;
  } else {
    fav.forEach(a=>{
      const el = document.createElement('div');
      el.className = 'list-item';
      el.innerHTML = `<img src="${a.img}" alt="${a.title}"><div class="title">${a.title}</div>
        <div style="display:flex;gap:6px">
          <button class="btn" data-action="open" data-id="${a.id}">Buka</button>
          <button class="btn" data-action="remove-fav" data-id="${a.id}">Hapus</button>
        </div>`;
      favContainer.appendChild(el);
    });
  }

  const wlContainer = qs('#watchlist');
  const wl = getWatchlist();
  wlContainer.innerHTML = '';
  if(!wl.length){
    wlContainer.innerHTML = `<p style="text-align:center">Belum ada anime di Watchlist.</p>`;
  } else {
    wl.forEach(a=>{
      const el = document.createElement('div');
      el.className = 'list-item';
      el.innerHTML = `<img src="${a.img}" alt="${a.title}"><div class="title">${a.title}</div>
        <div style="display:flex;gap:6px">
          <button class="btn" data-action="open" data-id="${a.id}">Buka</button>
          <button class="btn" data-action="remove-watch" data-id="${a.id}">Hapus</button>
        </div>`;
      wlContainer.appendChild(el);
    });
  }
}

/* delegated click for folder buttons */
document.body.addEventListener('click', e=>{
  const btn = e.target.closest('button[data-action]');
  if(!btn) return;
  const action = btn.dataset.action;
  const id = Number(btn.dataset.id);
  const anime = animeList.find(x=>x.id===id);
  if(action === 'open' && anime) showAnimeDetail(anime);
  if(action === 'remove-fav'){
    let f = getFavorites().filter(x=>x.id!==id); save(KEY_FAV,f); renderFolder();
  }
  if(action === 'remove-watch'){
    let w = getWatchlist().filter(x=>x.id!==id); save(KEY_WATCHLIST,w); renderFolder();
  }
});

/* ============================
   Watch history (last 5)
   ============================ */
function addToHistory(a) {
  let h = load(KEY_HISTORY) || [];
  // Hapus duplikat
  h = h.filter(x => x.id !== a.id);
  // Simpan data minimal: id, title, dan img agar bisa ditampilkan
  h.unshift({ id: a.id, title: a.title, img: a.img });
  // Batasi 5 item terakhir
  if (h.length > 5) h = h.slice(0, 5);
  save(KEY_HISTORY, h);

  // Update tampilan jika di halaman profil
  if (currentPage() === "profil") updateWatchHistory();
}

/* ============================
   Profile page
   ============================ */
function loadProfilePage(){
  const session = load(KEY_SESSION);
  const photo = localStorage.getItem(KEY_PHOTO);
  const userPhoto = qs('#userPhoto');
  if(userPhoto) userPhoto.src = photo || 'PP.jpg';
  if(session?.name) qs('#userName').textContent = `Welcome, ${session.name}`;
  if(session?.email) qs('#userEmail').innerHTML = `<b>${session.email}</b>`;

  qs('#toggleTheme').addEventListener('click',()=> toggleTheme());
  qs('#changePhotoBtn').addEventListener('click', ()=> qs('#profileFile').click());
  qs('#profileFile').addEventListener('change', handleProfileFile);
  qs('#contactCS').addEventListener('click', ()=> {
    window.open('mailto:support@animiumail.com?subject=Customer%20Service%20ANIMIU','_blank');
  });

  // tampilkan history ketika halaman profil dibuka
  updateWatchHistory();

  // aktifkan klik pada riwayat
  document.body.addEventListener('click', e => {
    const item = e.target.closest('.history-item');
    if (!item) return;
    const id = Number(item.dataset.id);
    const anime = animeList.find(x => x.id === id);
    if (anime) showAnimeDetail(anime);
  });
}

  function updateWatchHistory() {
  const history = load(KEY_HISTORY) || [];
  const list = document.getElementById("watchHistoryList");
  if (!list) return;

  list.innerHTML = history.length
    ? history.map(anime => `
        <li class="history-item" data-id="${anime.id}">
          <img src="${anime.img}" alt="${anime.title}" class="history-poster">
          <span>${anime.title}</span>
        </li>
      `).join('')
    : "<p style='text-align:center;opacity:0.7;'>Belum ada riwayat tontonan.</p>";
}

function handleProfileFile(e){
  const f = e.target.files && e.target.files[0];
  if(!f) return;
  const reader = new FileReader();
  reader.onload = function(evt){
    const data = evt.target.result;
    localStorage.setItem(KEY_PHOTO, data);
    const img = qs('#userPhoto');
    if(img) img.src = data;
    alert('Foto profil berhasil diubah!');
  };
  reader.readAsDataURL(f);
}

/* ============================
   Theme handling
   ============================ */
function applyThemeOnLoad(){
  const t = localStorage.getItem(KEY_THEME) || 'dark';
  document.body.dataset.theme = t;
}
function toggleTheme(){
  const themes = ['dark', 'light', 'sunset'];
  const current = document.body.dataset.theme || 'dark';
  const idx = themes.indexOf(current);
  const next = themes[(idx + 1) % themes.length];
  document.body.dataset.theme = next;
  localStorage.setItem(KEY_THEME, next);
  showNotif(`Tema aktif: ${next}`);
}
applyThemeOnLoad();
initAuthCTA();

/* ============================
   Helper: current page
   ============================ */
function currentPage(){
  const a = qsa('nav a').find(x=>x.classList.contains('active'));
  return a ? a.dataset.page : 'home';
}

/* ============================
   Jadwal render (manual)
   ============================ */
function renderJadwal(day){
  const container = document.querySelector('#jadwalList');
  if(!container) return;
  container.innerHTML = '';

  const names = jadwalAnime[day];
  if(!names || !names.length){
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center">Tidak ada jadwal anime hari ${day}.</p>`;
    return;
  }

  const filtered = animeList.filter(a =>
    names.some(n => n.toLowerCase() === a.title.toLowerCase())
  );

  container.style.opacity = 0;
  setTimeout(()=>{
    container.style.opacity = 1;
    container.innerHTML = '';
    if(filtered.length === 0){
      container.innerHTML = `<p style="grid-column:1/-1;text-align:center">Belum ada anime terdaftar di hari ${day}.</p>`;
      return;
    }
    filtered.forEach(a=>{
      const card = document.createElement('div');
      card.className = 'anime-card';
      card.dataset.id = a.id;
      card.innerHTML = `<img src="${getPosterSrc(a)}" alt="${a.title}" onerror="this.onerror=null;this.src='${createPosterFallback(
        'ANIMIU'
      )}'"><p>${a.title}</p>`;
      container.appendChild(card);
    });
  },150);
}

/* ============================
   On load: ensure profile photo default & initial handlers
   ============================ */
window.addEventListener('load', ()=>{
  // nothing heavy here - home already rendered above
  // if page initially jadwal active (unlikely), render
  const activeLink = document.querySelector('nav a.active');
  if(activeLink && activeLink.dataset.page === 'jadwal'){
    const today = getToday();
    renderJadwal(today);
    const btnToday = qs(`.hari-btn[data-day="${today}"]`);
    if(btnToday) {
      qsa('.hari-btn').forEach(b=>b.classList.remove('active'));
      btnToday.classList.add('active');
    }
  }
});

function showNotif(text) {
  const notif = document.createElement("div");
  notif.className = "notif";
  notif.textContent = text;
  document.body.appendChild(notif);

  // pakai setTimeout kecil biar browser render dulu gaya awal
  setTimeout(() => {
    notif.classList.add("show");
  }, 50);

  // tunggu 3.5 detik sebelum mulai fade out
  setTimeout(() => {
    notif.classList.remove("show");
    notif.classList.add("hide");
  }, 3500);

  // hapus dari DOM setelah animasi selesai
  setTimeout(() => {
    notif.remove();
  }, 4500);
}

// notif yang muncul nantinya :]
window.addEventListener("load", () => {
  showNotif("Selamat datang di ANIMIU~ ");
});