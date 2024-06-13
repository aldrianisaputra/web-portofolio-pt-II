
//js untuk text supaya memantul
const bouncy = document.querySelector(".bouncy");

bouncy.addEventListener("mouseenter", toggleRubberBand);

function toggleRubberBand(e){
  bouncy.classList.add("bouncing");
  bouncy.addEventListener("animationend", ()=>{
    bouncy.classList.remove("bouncing");
  });
}

// scroll
// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
    // mengambil isi href
    var tujuan = $(this).attr('href');

    // menangkap elemen yang di klik
    var elemenTujuan = $(tujuan);

    // jquery akan menjalankan animasi scroll ketika link di klik
    // - 70 fungsi nya agar ketika di scroll tidak terlalu keatas
    // 1500 fungsinya untuk mengatur delay waktu scroll
    // easeInOutExpo jenis animasi scroll yang digunakan
    $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 70 
    }, 3500, 'easeInOutExpo');

    // mencegah terjadinya event bawaan href
    // agar tidak terjadi reload ketika menjalankan perintah javascript nya
    e.preventDefault();
});
