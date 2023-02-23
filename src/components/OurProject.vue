<template>
  <section id="our-project" class="text-light"
    style="margin-top: 0px; margin-bottom: 0px; background-color: rgb(31, 41, 55); padding-top: 100px; padding-bottom: 50px;">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2 class="text-center h2-text">{{ $t('our_project') }}</h2>
      </div>
      <p class="text-center">{{ $t('our_project_desc') }}</p>

      <div style="position: relative; margin-top: 50px;">
        <input type="text" id="myInput" class="input" v-model="search" :placeholder="`${$t('search')}...`"
          spellcheck="false" autocomplete="off" />
        <div style="position: absolute; top: 11px; left: 14px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" color="#9495a4"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <table class="table" id="myTable" style="margin-top: 1rem;">
        <thead>
          <tr>
            <th class="" style="width: 60px;">No</th>
            <th class="" style="width: 50%;">{{ $t('name') }}</th>
            <th class="">{{ $t('type') }}</th>
            <th class="">URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(application, key) in applicationFilter" :key="application.id">
            <td class="text-center" style="width: 60px;">{{ key + 1 }}</td>
            <td style="width: 50%;">{{ application.name }}</td>
            <td>{{ application.type }}</td>
            <td>
              <a :href="application.url" target="_blank" :title="`${$t('go_to')} ${application.name}`">{{
                $t('open_app')
              }} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-link-45deg" viewBox="0 0 16 16">
                  <path
                    d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z">
                  </path>
                  <path
                    d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z">
                  </path>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const applications = ref([
  {
    id: 1,
    name: 'API CBS WEB',
    type: 'BE',
    url: 'http://10.30.8.40:6100'
  },
  {
    id: 2,
    name: 'API CBS INVENTORY',
    type: 'BE',
    url: 'http://10.30.8.40:6900'
  },
  {
    id: 3,
    name: 'API CBS LENDING',
    type: 'BE',
    url: 'http://10.30.8.40:6800'
  },
  {
    id: 4,
    name: 'API CBS SYARIAH',
    type: 'BE',
    url: 'http://10.30.8.40:6200'
  },
  {
    id: 5,
    name: 'API MERCHANT KOPNUSPOS',
    type: 'BE',
    url: 'http://10.30.8.40:6600'
  },
  {
    id: 6,
    name: 'BE KPT WEB',
    type: 'BE',
    url: 'http://10.30.8.40:6130'
  },
  {
    id: 7,
    name: 'CBS WEB',
    type: 'FE',
    url: 'http://10.30.8.40:5000'
  },
  {
    id: 8,
    name: 'CBS SYARIAH WEB',
    type: 'FE',
    url: 'http://10.30.8.40:5100'
  },
  {
    id: 9,
    name: 'CMS DASHBOARD',
    type: 'FE & BE',
    url: 'http://10.30.8.40:7100'
  },
  {
    id: 10,
    name: 'FE KOPNUSPOSTASPEN',
    type: 'FE',
    url: 'http://10.30.8.40:9900'
  },
  {
    id: 11,
    name: 'FE KPT WEB',
    type: 'FE',
    url: 'http://10.30.8.40:9800'
  },
  {
    id: 12,
    name: 'MERCHANT BO',
    type: 'FE',
    url: 'http://10.30.8.40:7300'
  },
  {
    id: 13,
    name: 'MERCHANT KOPNUSPOS',
    type: 'FE',
    url: 'http://10.30.8.40:7400'
  },
  {
    id: 14,
    name: 'MIS',
    type: 'FE & BE',
    url: 'http://10.30.8.40:7070'
  },
  {
    id: 15,
    name: 'MONITORING PAYMENT',
    type: 'FE & BE',
    url: 'http://10.30.8.40:7700'
  },
  {
    id: 16,
    name: 'MONITORING POPULASI PENSIUN',
    type: 'FE & BE',
    url: 'http://10.30.8.40:9370'
  },
  {
    id: 17,
    name: 'MONITORING RAKERNAS',
    type: 'FE & BE',
    url: 'http://10.30.8.40:7900'
  },
  {
    id: 18,
    name: 'SERVICE BCA DIGITAL',
    type: 'BE',
    url: 'http://10.30.8.40:6170'
  },
  {
    id: 19,
    name: 'SERVICE BO OREN',
    type: 'BE',
    url: 'http://10.30.8.40:6210'
  },
  {
    id: 20,
    name: 'SERVICE CRUD TBLMASTER',
    type: 'BE',
    url: 'http://10.30.8.40:6180'
  },
  {
    id: 21,
    name: 'SERVICE H2H',
    type: 'BE',
    url: 'http://10.30.8.40:6110'
  },
  {
    id: 22,
    name: 'SERVICE HBHT',
    type: 'BE',
    url: 'http://10.30.8.40:6160'
  },
  {
    id: 23,
    name: 'SERVICE KPT AUTH',
    type: 'BE',
    url: 'http://10.30.8.40:6120'
  },
  {
    id: 24,
    name: 'SERVICE KTP',
    type: 'BE',
    url: 'http://10.30.8.40:9988'
  },
  {
    id: 25,
    name: 'SERVICE MESSAGING',
    type: 'BE',
    url: 'http://10.30.8.40:6500'
  },
  {
    id: 26,
    name: 'SERVICE REPORTING JASPER',
    type: 'BE',
    url: 'http://10.30.8.40:6060'
  },
  {
    id: 27,
    name: 'SERVICE REPORTING WEB',
    type: 'BE',
    url: 'http://10.30.8.40:6700'
  },
  {
    id: 28,
    name: 'SERVICE TRANSACTION',
    type: 'BE',
    url: 'http://10.30.8.40:6190'
  },
  {
    id: 29,
    name: 'TOOLS CETAKAN KREDIT',
    type: 'FE & BE',
    url: 'http://10.30.8.40:7200'
  },
  {
    id: 30,
    name: 'TOOLS',
    type: 'FE & BE',
    url: 'http://10.30.8.40:7000'
  },
  {
    id: 31,
    name: 'Service Web Auth',
    type: 'BE',
    url: 'http://10.30.8.30/service_web_auth/public'
  },
  {
    id: 32,
    name: 'Auth Efilling',
    type: 'BE',
    url: 'http://10.30.8.50:6140/'
  },
  {
    id: 33,
    name: 'Auth Efilling',
    type: 'BE',
    url: 'http://10.30.8.50:6140/'
  },
  {
    id: 34,
    name: 'FE HADIAH KOPNUS',
    type: 'FE',
    url: 'http://10.30.8.40:3100/'
  },
  {
    id: 35,
    name: 'BE HADIAH KOPNUS',
    type: 'BE',
    url: 'http://10.30.8.40:6240/'
  },
  {
    id: 36,
    name: 'API CBS Funding',
    type: 'BE',
    url: 'http://10.30.8.40:6220/'
  },
  {
    id: 37,
    name: 'API CBS Tabungan',
    type: 'BE',
    url: 'http://10.30.8.40:6230/'
  },
  {
    id: 38,
    name: 'API CBS Lending Syariah',
    type: 'BE',
    url: 'http://10.30.8.40:6250/'
  },
  {
    id: 39,
    name: 'Service ABP',
    type: 'BE',
    url: 'http://10.30.8.40:6260/'
  },
]);

const search = ref('');

const applicationFilter = computed(() => {
  if (search.value === '' || search.value === null) {
    return applications.value
  }
  return applications.value.filter(app => {
    return app.name.toLowerCase().includes(search.value) || app.type.toLowerCase().includes(search.value);
  })
})

</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table tr td {
  padding: 10px 14px
}

.table tr td a {
  color: #ea499a !important;
}

.table tr th {
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  background-color: #2a333f;
  border: none;
  border: none !important;
}

.table tbody tr:hover {
  background-color: #1c2530
}

.table tbody {
  display: block;
  width: 100%;
  overflow-y: auto;
  max-height: 500px
}

.table tbody tr:not(:last-child) {
  border-bottom: 1px solid #2c3340
}

.table thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

/* Scrollbar Firefox */
.table tbody {
  scrollbar-width: 12px;
  scrollbar-color: #48444e;
}

/* Scrollbar Chrome */
.table tbody::-webkit-scrollbar {
  width: 8px;
  height: 6px;
}

.table tbody::-webkit-scrollbar-track {
  background: #48444e;
}

.table tbody::-webkit-scrollbar-thumb {
  background: #f769df75;
  border-radius: 10px;
}

.input {
  display: inline-flex;
  max-width: 450px;
  width: 100%;
  background: #1a212a;
  outline: none !important;
  border-radius: 6px;
  border: 1px solid #1a212a;
  font-size: 1rem;
  padding: 8px 1rem 8px 2.3rem;
  font-family: Poppins, sans-serif;
  color: #babecf;
}

.input::placeholder {
  color: #606270;
}

.input:focus,
.input:active {
  border: 1px solid #fa58cc;
  background: #222b36;
  box-shadow: 0 0 0 .2rem #fd0de92c;
}
</style>