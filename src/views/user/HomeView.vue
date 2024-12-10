<script setup>
import UserLayout from '../../layout/UserLayout.vue'
import TravelView from './TravelView.vue';

</script>

<template>
  <main>
    <UserLayout>
      <!-- Hero section -->
      <div class="container mx-auto">
        <div class="hero min-h-screen">
          <img class="w-full"
            src="https://images.unsplash.com/photo-1526491109672-74740652b963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <div class="hero-overlay bg-opacity-10"></div>
          <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
              <div
                class="mb-2 text-5xl font-bold bg-gradient-to-r from-[#07103E] via-[#4F77AC] to-[#07103E] bg-clip-text text-transparent h-16">
                Travel in Changmai</div>
              <p>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- / Hero section -->

      <TravelView></TravelView>
    </UserLayout>
  </main>
</template>