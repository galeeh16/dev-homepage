<template>
  <div class="d-flex justify-content-between">
    <a href="/" style="text-decoration: none;">
      <h3 class="d-flex align-items-center" style="gap: 8px; font-size: 24px; color: rgb(10, 32, 112);">
        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
          <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
            d="M9.18824 3.74722C9.18824 3.33438 8.84724 3 8.42724 3H8.42624L6.79724 3.00098C4.60624 3.00294 2.82324 4.75331 2.82324 6.90279V8.76201C2.82324 9.17386 3.16424 9.50923 3.58424 9.50923C4.00424 9.50923 4.34624 9.17386 4.34624 8.76201V6.90279C4.34624 5.57604 5.44624 4.4964 6.79824 4.49444L8.42724 4.49345C8.84824 4.49345 9.18824 4.15907 9.18824 3.74722ZM17.1931 3.00029H15.6001C15.1801 3.00029 14.8391 3.33468 14.8391 3.74751C14.8391 4.15936 15.1801 4.49277 15.6001 4.49277H17.1931C18.5501 4.49277 19.6541 5.57535 19.6541 6.90603V8.7623C19.6541 9.17415 19.9951 9.50952 20.4151 9.50952C20.8361 9.50952 21.1761 9.17415 21.1761 8.7623V6.90603C21.1761 4.75165 19.3901 3.00029 17.1931 3.00029ZM9.23804 6.74266H14.762C15.367 6.74266 15.948 6.98094 16.371 7.40554C16.797 7.83407 17.033 8.40968 17.032 9.00883V10.2542C17.027 10.4003 16.908 10.5189 16.759 10.5229H7.23904C7.09104 10.518 6.97204 10.3993 6.96904 10.2542V9.00883C6.95804 7.76837 7.97404 6.75541 9.23804 6.74266Z"
            fill="currentColor"></path>
          <path
            d="M22.239 12.0413H1.762C1.342 12.0413 1 12.3756 1 12.7885C1 13.2003 1.342 13.5337 1.762 13.5337H2.823V17.0972C2.823 19.2467 4.607 20.9971 6.798 20.999L8.427 21C8.848 21 9.188 20.6656 9.189 20.2528C9.189 19.841 8.848 19.5066 8.428 19.5066L6.8 19.5056C5.447 19.5036 4.346 18.424 4.346 17.0972V13.5337H6.969V14.5251C6.959 15.7656 7.974 16.7795 9.238 16.7913H14.762C16.027 16.7795 17.042 15.7656 17.032 14.5251V13.5337H19.655V17.0933C19.655 18.425 18.551 19.5066 17.194 19.5066H15.601C15.18 19.5066 14.839 19.841 14.839 20.2528C14.839 20.6656 15.18 21 15.601 21H17.194C19.39 21 21.177 19.2487 21.177 17.0933V13.5337H22.239C22.659 13.5337 23 13.2003 23 12.7885C23 12.3756 22.659 12.0413 22.239 12.0413Z"
            fill="currentColor"></path>
        </svg> {{ $t('team') }}
      </h3>
    </a>
    <div class="dropdown" @click="showDropdownValue = !showDropdownValue">

      <div class="d-flex align-items-center text-dark" style="gap: 5px; justify-content: space-between;">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path class="st0" d="M2,16c0.1,0,8-5,9-7c0.6-1.3,1-5,1-5h3H1h7V1"></path>
            <line class="st0" x1="4" y1="8" x2="12" y2="16"></line>
            <polygon class="st0" points="15,19 21,19 23,23 18,11 13,23 "></polygon>
          </svg>
        </div>
        <div class="" style="font-weight: 600; font-size: 18px; text-transform: uppercase;">
          {{ lang }}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="dropdown-content" :class="{ 'd-block': showDropdownValue }">
        <template v-for="la in languages" :key="la.id">
          <div style="display: flex; padding: 12px 16px; gap: 8px;" v-if="lang !== la.code"
            @click="setLang(`${la.code}`)">
            <div class="d-flex align-items-center" style="gap: 8px;" v-html="la.icon">
            </div>
            <span style="text-transform: uppercase;">{{ la.code }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { i18n } from '../i18n';

const languages = [
  {
    id: 1,
    code: 'id',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-id" viewBox="0 0 640 480">
            <path fill="#e70011" d="M0 0h640v240H0Z"></path>
            <path fill="#f4f5f6" d="M0 240h640v240H0Z"></path>
          </svg>`
  },
  {
    id: 2,
    code: 'en',
    icon: `<svg xmlns=" http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-gb" viewBox="0 0 640 480">
            <path fill="#012169" d="M0 0h640v480H0z"></path>
            <path fill="#FFF"
              d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"></path>
            <path fill="#C8102E"
              d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z">
            </path>
            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"></path>
            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"></path>
          </svg>`
  },
  {
    id: 3,
    code: 'de', // Germany
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-de" viewBox="0 0 640 480">
            <path fill="#ffce00" d="M0 320h640v160H0z" />
            <path d="M0 0h640v160H0z" />
            <path fill="#d00" d="M0 160h640v160H0z" />
          </svg>`
  },
  {
    id: 4,
    code: 'jp', // Japan 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-jp" viewBox="0 0 640 480">
            <defs>
              <clipPath id="a">
                <path fill-opacity=".7" d="M-88 32h640v480H-88z" />
              </clipPath>
            </defs>
            <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="translate(88 -32)">
              <path fill="#fff" d="M-128 32h720v480h-720z" />
              <circle cx="523.1" cy="344.1" r="194.9" fill="#bc002d" transform="translate(-168.4 8.6) scale(.76554)" />
            </g>
          </svg>`
  },
  {
    id: 5,
    code: 'kr',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icons-kr" viewBox="0 0 640 480">
            <defs>
              <clipPath id="a">
                <path fill-opacity=".7" d="M-95.8-.4h682.7v512H-95.8z"/>
              </clipPath>
            </defs>
            <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(89.8 .4) scale(.9375)">
              <path fill="#fff" d="M-95.8-.4H587v512H-95.8Z"/>
              <g transform="rotate(-56.3 361.6 -101.3) scale(10.66667)">
                <g id="c">
                  <path id="b" d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"/>
                  <use xlink:href="#b" width="100%" height="100%" y="44"/>
                </g>
                <path stroke="#fff" d="M0 17v10"/>
                <path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z"/>
                <path fill="#0047a0" d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"/>
                <circle cy="-6" r="6" fill="#cd2e3a"/>
              </g>
              <g transform="rotate(-123.7 191.2 62.2) scale(10.66667)">
                <use xlink:href="#c" width="100%" height="100%"/>
                <path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3"/>
              </g>
            </g>
          </svg>`
  },
  {
    id: 6,
    code: 'th', // Thailand
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-th" viewBox="0 0 640 480">
            <g fill-rule="evenodd">
              <path fill="#f4f5f8" d="M0 0h640v480H0z" />
              <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
              <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
            </g>
          </svg>`
  },
];

let lang = ref(localStorage.getItem('lang') || 'en');
let showDropdownValue = ref(false);

i18n.global.locale = lang.value;

function setLang(l) {
  localStorage.setItem('lang', l);
  i18n.global.locale = l
  lang.value = l;
}
</script>

<style scoped>
.d-block {
  display: block;
}
</style>