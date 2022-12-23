<template>
  <div class="bg-blue banner" style="position: relative;">
    <div class="container">
      <Navbar />

      <div class="d-flex justify-content-between">
        <div style="margin-top: 130px; max-width: 410px;">
          <h1 class="rainbow-text" style="font-size: 64px;">{{ $t('team') }}</h1>
          <h2 style="font-weight: 500; font-size: 34px;">{{ $t('team_yelyel') }}</h2>
          <p class="text-dark" style="font-size: 17px;">{{ $t('team_desc') }}</p><a href="#teams"
            class="btn d-flex align-items-center"
            style="margin-top: 1.5rem; gap: 5px; position: relative; z-index: 4;">{{ $t('get_started') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
        <div class="animate-banner" style="max-width: 720px; position: relative; z-index: 2;"><img class="img-banner"
            :src="GlobeImage" alt="illustration" style="width: 100%; object-fit: cover;"></div>
      </div>
    </div>

    <div class="svg-white" style="position: absolute; bottom: -80px; left: 0px; right: 0px;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f6" fill-opacity="1"
          d="M0,192L40,192C80,192,160,192,240,176C320,160,400,128,480,106.7C560,85,640,75,720,106.7C800,139,880,213,960,229.3C1040,245,1120,203,1200,160C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
        </path>
      </svg>
    </div>
  </div>

  <Team />

  <VisionMission />

  <OurProject />

  <Footer />
</template>

<script setup>
import GlobeImage from './assets/globe.png';

import Navbar from './components/Navbar.vue';
import Team from './components/Team.vue';
import VisionMission from './components/VisionMission.vue';
import OurProject from './components/OurProject.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>

</style>
