<script setup>
import { ref } from 'vue';

const isVisible = ref(false)

// ฟังก์ชันเพื่อเลื่อนกลับไปที่ด้านบน
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ฟังก์ชันเพื่อตรวจสอบว่าเลื่อนลงมามากพอหรือไม่
function checkScrollPosition() {
  if (window.scrollY > 200) {
    isVisible.value = true; // แสดงปุ่มเมื่อเลื่อนลงมาถึง 200px
  } else {
    isVisible.value = false; // ซ่อนปุ่มเมื่ออยู่ด้านบนสุด
  }
}

// ตรวจสอบตำแหน่ง scroll เมื่อเลื่อนหน้าจอ
window.addEventListener('scroll', checkScrollPosition);

function scrollToTravelView(event) {
  event.preventDefault();  // Prevent default anchor behavior
  const travelView = document.getElementById("travel-view");
  if (travelView) {
    travelView.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <main>
    <!-- Navbar -->
    <div class="navbar text-white absolute top-0 left-0 w-full z-10 justify-between">
      <div class="flex">
        <a href="/">
          <img class="w-28 mr-2 " src="/src/assets/icons/Logo.png">
        </a>
        <a class="text-2xl font-bold bg-white bg-clip-text text-transparent drop-shadow-md">
          Live the Adventure
        </a>
      </div>
      <div>
        <ul class="menu menu-horizontal p-0 text-[16px] font-semibold gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <!-- Travel Link with Scroll Behavior -->
            <a href="#travel-view" @click="scrollToTravelView">Travel</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered input-ghost w-full max-w-xs text-black placeholder-white focus:placeholder-slate-400" />
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="User avatar" src="../assets/icons/h1.jpg" />
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
            <li><a>Profile</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Navbar -->

    <!-- Background Image -->
    <div class="relative">
      <slot></slot>
    </div>

    <!-- Travel View Section (Will be scrolled to) -->
    <div id="travel-view">
      <!-- Your Travel Content Here -->
    </div>

    <!-- Back to Top Button -->
    <button 
      v-if="isVisible" 
      @click="scrollToTop" 
      class="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg z-10 hover:bg-blue-600">
      ↑
    </button>

    <!-- Footer -->
    <footer class="footer footer-center bg-gradient-to-l from-[#07103E] shadow-lg text-white p-10">
      <aside>
        <img class="h-24" src="https://cdn.pixabay.com/photo/2019/05/21/19/44/camping-4219962_1280.png">
        <p class="font-bold text-xl">Travel in Changmai.</p>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
    <!-- /Footer -->
  </main>
</template>
