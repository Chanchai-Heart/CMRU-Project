<script setup>
import { ref, onMounted } from "vue";

// ตัวแปรจัดการแสดงผล Navbar
const isLoggedIn = ref(false);
const isHidden = ref(false);
const lastScrollPosition = ref(0);
const hasBackground = ref(false);

onMounted(() => {
  if (localStorage.getItem("isLoggedIn")) {
    isLoggedIn.value = true;
  }
})
const login = () => {
  isLoggedIn.value = true;
  localStorage.setItem("isLoggedIn", true);
}
const logout = () => {
  isLoggedIn.value = false;
  localStorage.removeItem("isLoggedIn");
}

// ตรวจสอบการเลื่อนหน้าจอ
function handleScroll() {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollPosition.value && currentScroll > 50) {
    isHidden.value = true; // ซ่อน Navbar เมื่อเลื่อนลง
  } else {
    isHidden.value = false; // แสดง Navbar เมื่อเลื่อนขึ้น
  }

  lastScrollPosition.value = currentScroll;

  // เพิ่ม background เมื่อถึง Travel Section
  const travelSection = document.getElementById("travel-view");
  if (travelSection) {
    const travelTop = travelSection.offsetTop;
    hasBackground.value = currentScroll >= travelTop - 50; // เพิ่ม background เมื่อถึง Travel Section
  }
}

// เพิ่ม event listener สำหรับ scroll
window.addEventListener("scroll", handleScroll);

// ตัวแปรสำหรับควบคุมการแสดงผลเมนู Hamburger
const isMenuOpen = ref(false);

// ฟังก์ชันเพื่อเลื่อนกลับไปที่ด้านบน
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ฟังก์ชันเพื่อตรวจสอบว่าเลื่อนลงมามากพอหรือไม่
const isVisible = ref(false);
function checkScrollPosition() {
  isVisible.value = window.scrollY > 200;
}
window.addEventListener("scroll", checkScrollPosition);

// ฟังก์ชันสำหรับเลื่อนหน้าไปยัง Section ที่ต้องการ
function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute("href");
  if (targetId && targetId.startsWith("#")) {
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// ฟังก์ชันเปิด/ปิดเมนู Hamburger
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("Hamburger Menu Toggled:", isMenuOpen.value);
}
</script>

<template>
  <main>
    <!-- Navbar -->
    <nav
      class="navbar fixed top-0 left-0 w-full z-10 px-4 sm:px-6 lg:px-12 transition-transform duration-300"
      :class="{
        '-translate-y-full': isHidden,
        'bg-[#2D2D2D] text-white': hasBackground,
        'text-white': !hasBackground,
      }"
    >
      <!-- Logo and Title -->
      <div class="flex items-center">
        <a href="/">
          <img
            class="w-20 sm:w-28 mr-2"
            src="/src/assets/icons/Logo.png"
            alt="Logo"
          />
        </a>
        <span
          class="text-xl sm:text-2xl font-bold bg-white bg-clip-text text-transparent drop-shadow-md"
        >
          Live the Adventure
        </span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex ml-auto">
        <ul
          class="menu menu-horizontal p-0 text-sm sm:text-base lg:text-lg font-semibold gap-6 lg:gap-8"
        >
          <li><a href="/">Home</a></li>
          <li><a href="#travel-view" @click="scrollToSection">Travel</a></li>
          <li><a href="#camp-view" @click="scrollToSection">Camping</a></li>
          <li><a href="#about-view" @click="scrollToSection">About</a></li>
          <li><a href="#contact-view" @click="scrollToSection">Contact</a></li>
          <li @click="login" v-if="!isLoggedIn"><a class="btn btn-primary rounded-3xl">Login</a></li>
          <!-- profile -->
          <div v-else class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img src="/src/assets/icons/h1.jpg" />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li><a>Profile</a></li>
              <li @click="logout"><a>Logout</a></li>
            </ul>
          </div>
        </ul>
      </div>

      <!-- Hamburger Menu -->
      <div class="lg:hidden flex items-center ml-auto">
        <button class="btn btn-ghost btn-circle" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          v-if="isMenuOpen"
          class="absolute top-16 right-4 bg-white text-black rounded shadow-lg p-4"
        >
          <ul class="flex flex-col space-y-2">
            <li><a href="/" @click="toggleMenu">Home</a></li>
            <li>
              <a
                href="#travel-view"
                @click="
                  scrollToSection;
                  toggleMenu;
                "
                >Travel</a
              >
            </li>
            <li>
              <a
                href="#camp-view"
                @click="
                  scrollToSection;
                  toggleMenu;
                "
                >Camping</a
              >
            </li>
            <li>
              <a
                href="#about-view"
                @click="
                  scrollToSection;
                  toggleMenu;
                "
                >About</a
              >
            </li>
            <li>
              <a
                href="#contact-view"
                @click="
                  scrollToSection;
                  toggleMenu;
                "
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- /Navbar -->

    <!-- Background Image -->
    <div class="relative">
      <slot></slot>
    </div>

    <!-- Travel View Section (Will be scrolled to) -->
    <div id="travel-view">
      <!-- Your Travel Content Here -->
    </div>

    <!-- About View Section (Will be scrolled to) -->
    <div id="about-view">
      <!-- Your About Content Here -->
    </div>

    <!-- Back to Top Button -->
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="btn glass bg-[#4E5034] fixed bottom-10 right-10 p-3 rounded-full shadow-lg z-10 hover:bg-[#4D4730] animate-bounce"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-up-to-line"
      >
        <path d="M5 3h14" />
        <path d="m18 13-6-6-6 6" />
        <path d="M12 7v14" />
      </svg>
    </button>

    <div id="contact-view">
      <!-- Footer -->
      <footer
        class="footer text-neutral-content p-10 bg-[#2D2D2D] flex flex-wrap gap-8 lg:justify-around justify-start"
      >
        <aside class="w-full lg:w-auto justify-center">
          <img
            class="w-36 mx-auto lg:mx-0"
            src="/src/assets/icons/Logo.png"
            alt="ACME Logo"
          />
          <p class="text-center lg:text-left">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav class="w-full lg:w-auto">
          <!-- Contact -->
          <div class="flex flex-col">
            <p class="text-xl font-bold mb-4 lg:text-left">Contact</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="flex gap-4 items-center">
                <svg
                  class="w-6 h-6 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  />
                </svg>
                <div>
                  <p class="text-lg">Phone</p>
                  <p>095-686-7594</p>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <svg
                  class="w-6 h-6 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
                  />
                </svg>
                <div>
                  <p class="text-lg">Email</p>
                  <p>heart245522cj@gmial.com</p>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <svg
                  class="w-6 h-6 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
                <div>
                  <p class="text-lg">Address</p>
                  <p>Chang Mai</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <!-- Social Media -->
        <div class="w-full lg:w-auto">
          <p class="text-xl font-bold mb-4 text-center lg:text-left">
            Social Media
          </p>
          <div class="flex justify-center lg:justify-start gap-4">
            <a
              href="https://www.facebook.com/chanchai.janhom.7?locale=th_TH"
              target="_blank"
            >
              <svg
                class="w-10 h-10 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                />
              </svg>
            </a>
            <a href="https://github.com/Chanchai-Heart" target="_blank">
              <svg
                class="w-10 h-10 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chanchai-janhom-26409a322/"
              target="_blank"
            >
              <svg
                class="w-10 h-10 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <!-- /Footer -->
    </div>
  </main>
</template>

<style>
/* เมื่อ hover ให้ Navbar แสดงอีกครั้ง */
.navbar:hover {
  transform: translateY(0) !important;
}

/* Default transition */
.navbar {
  transition: transform 0.3s ease-in-out;
}
</style>