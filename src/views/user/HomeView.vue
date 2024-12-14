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
      <div class="hero min-h-screen ">
        <img class="w-full"
          src="https://img.freepik.com/free-photo/oldfashioned-tent-woods-call-wild_157027-4522.jpg?t=st=1734064794~exp=1734068394~hmac=bcda3d8551a9a45b3fb67b19b260f78b23b122e6dd412d56298a6d1f5a1df1ff&w=1380" />
        <div class="hero-overlay bg-opacity-30"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-md">
            <div
              class="mb-2 text-5xl font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent h-16">
              Live the Adventure
            </div>
            <p class="inverted-pyramid">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <button @click="scrollToTravelView" class="btn btn-primary mt-4">
              Get Started
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
