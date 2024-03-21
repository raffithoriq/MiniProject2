// toggel responsive
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");

  const toggleNav = () => {
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  };

  burger.addEventListener("click", toggleNav);

  navSlide();
};

// CLEAR
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
// AND CLEAR

// alret contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman form standar

    // Mengambil nilai dari input nama, email, dan pesan
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="Message"]').value;

    // Membuat pesan yang berisi isi formulir
    const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Menampilkan isi formulir dalam alert
    alert(alertMessage);

    // Reset form setelah ditampilkan alert
    form.reset();
  });
});
// and alret contact

// dark-mode
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Memeriksa apakah mode gelap atau terang yang saat ini diaktifkan
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Mengatur mode berdasarkan preferensi pengguna
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // Menambahkan event listener untuk mengubah mode saat tombol switch ditekan
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Fungsi untuk mengaktifkan mode gelap
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    // Mengubah warna teks menjadi putih saat mode gelap diaktifkan
    document.querySelectorAll(".text-dark").forEach(function (element) {
      element.classList.add("text-light");
    });
    localStorage.setItem("darkMode", true);
  }

  // Fungsi untuk menonaktifkan mode gelap
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    // Mengubah warna teks kembali menjadi hitam saat mode gelap dinonaktifkan
    document.querySelectorAll(".text-dark").forEach(function (element) {
      element.classList.remove("text-light");
    });
    localStorage.setItem("darkMode", false);
  }
});
// and dark-mode
