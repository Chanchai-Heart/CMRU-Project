<script setup>
import UserLayout from '../../layout/UserLayout.vue';
import TravelView from './TravelView.vue';
import CampView from './CampView.vue';
import AboutView from './AboutView.vue';

function scrollToTravelView() {
  const travelView = document.getElementById("travel-view");
  if (travelView) {
    travelView.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <main>
    <UserLayout>
      <!-- Hero section -->
      <div class="hero relative min-h-screen flex items-center justify-center bg-black">
        <!-- Background Image -->
        <img class="absolute inset-0 w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/oldfashioned-tent-woods-call-wild_157027-4522.jpg?t=st=1734064794~exp=1734068394~hmac=bcda3d8551a9a45b3fb67b19b260f78b23b122e6dd412d56298a6d1f5a1df1ff&w=1380"
          alt="Adventure background" />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>

        <!-- Content -->
        <div class="hero-content text-center text-neutral-content px-4 sm:px-6 md:px-8 lg:px-12">
          <div class="max-w-4xl">
            <!-- Title -->
            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent mb-4">
              Live the Adventure
            </h1>

            <!-- Description -->
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed sm:leading-7 mb-6">
              ยินดีต้อนรับสู่เว็บไซต์ของเรา! แหล่งรวมข้อมูลที่ดีที่สุดสำหรับการแนะนำสถานที่ท่องเที่ยว
              และจุดกางเต็นท์ในเชียงใหม่และพื้นที่ใกล้เคียง...
            </p>

            <!-- Button -->
            <button @click="scrollToTravelView"
              class="overflow-hidden w-32 p-2 h-12 bg-[#4E5034] text-white border-none rounded-lg text-xl font-bold cursor-pointer relative z-10 group">
              Get Started
              <span
                class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
              <span
                class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
              <span
                class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
              <span
                class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Let's
                go!</span>
            </button>

          </div>
        </div>
      </div>

      <!-- / Hero section -->

      <!-- Travel View Section -->
      <div id="travel-view">
        <TravelView></TravelView>
      </div>

      <!-- Camping View Section -->
      <div id="camp-view">
        <CampView></CampView>
      </div>

      <!-- About View Section -->
      <div id="about-view">
        <AboutView></AboutView>
      </div>

    </UserLayout>
  </main>
</template>
