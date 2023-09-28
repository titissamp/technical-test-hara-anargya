<template>
  <div class="flex py-4 px-4 ml-auto grid grid-cols-3 gap-4">
    <div class="bg-white text-black shadow rounded-lg">
      <div class="grid grid-cols-2 gap-2 px-4 pt-4 pb-1">
        <div><span class="text-l">Pending</span></div>
        <div><svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-6 h-6 flex float-right">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg></div>
      </div>
      <div class="text-2xl px-4 pb-8">2.480,30</div>
      <div class="grid grid-cols-2 gap-2 px-4 py-3 rounded-bl-lg" style="background-color: #EFEFEF;">
        <div>
          <span><svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="green" 
          class="w-6 h-6 float-left pr-2">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg></span>
          <span class="text-sm text-green-400">2,15 %</span>
          <span class="pl-3 text-sm ">Last Month</span>
        </div>
        <div>
          <a class="text-grey float-right pr-4">View More</a>
        </div>
      </div>
    </div>
    <div class="bg-white text-black shadow rounded-lg">
      <div class="grid grid-cols-2 gap-2 px-4 pt-4 pb-1">
        <div><span class="text-l">Paid</span></div>
        <div><svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-6 h-6 flex float-right">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg></div>
      </div>
      <div class="text-2xl px-4 pb-8">84.310</div>
      <div class="grid grid-cols-2 gap-2 px-4 py-3 shadow rounded-bl-lg" style="background-color: #EFEFEF;">
        <div>
          <span><svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="red" 
            class="w-6 h-6 float-left pr-2">
              <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
            </svg></span>
          <span class="text-sm text-red-400">2,15 %</span>
          <span class="pl-3 text-sm ">Last Month</span>
        </div>
        <div>
          <a class="text-grey float-right pr-4">View More</a>
        </div>
      </div>
    </div>
    <div class="bg-white text-black shadow rounded-lg">
      <div class="grid grid-cols-2 gap-2 px-4 pt-4 pb-1">
        <div><span class="text-l">Rejected</span></div>
        <div><svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-6 h-6 flex float-right">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg></div>
      </div>
      <div class="text-2xl px-4 pb-8">12.155</div>
      <div class="grid grid-cols-2 gap-2 px-4 py-3 rounded-bl-lg" style="background-color: #EFEFEF;">
        <div>
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="green" 
          class="w-6 h-6 float-left pr-2 colour-green">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span class="text-sm text-green-400">2,15 %</span>
          <span class="pl-3 text-sm ">Last Month</span>
        </div>
        <div>
          <a class="text-grey float-right pr-4">View More</a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex py-4 px-4 ml-auto">
    <div class="w-full shadow">
      <h1 class="w-max text-2xl font-semibold text-black py-4 px-4">User List</h1>
      <table class="w-full border-collapse border border-gray-300 px-4">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-2 py-2 text-black">ID</th>
          <th class="border border-gray-300 px-2 py-2 text-black">User</th>
          <th class="border border-gray-300 px-2 py-2 text-black">Date of Birth</th>
          <th class="border border-gray-300 px-2 py-2 text-black">Email</th>
          <th class="border border-gray-300 px-2 py-2 text-black w-fit h-fit">Job</th>
          <th class="border border-gray-300 px-2 py-2 text-black w-fit h-fit">Country</th>
          <th class="border border-gray-300 px-2 py-2 text-black">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersData" :key="user.id" class="text-center">
          <td class="border border-gray-300 px-2 py-2 text-black">{{ user.id }}</td>
          <td class="border border-gray-300 px-2 py-2 text-black flex items-center h-max">
            <img :src="user.profile_picture" alt="User" class="w-8 h-8 rounded-full mr-2">
            {{ user.name }}
          </td>
          <td class="border border-gray-300 px-2 py-2 text-black">{{ user.date_of_birth }}</td>
          <td class="border border-gray-300 px-2 py-2 text-black">{{ user.email }}</td>
          <td class="border border-gray-300 px-2 py-2 text-black w-fit h-fit">{{ user.job }}</td>
          <td class="border border-gray-300 px-2 py-2 text-black w-fit h-fit">{{ user.country }}</td>
          <td class="border border-gray-300 px-2 py-2 text-blackspace-x-2 flex">
            <div >
            <button style="margin-right: 2%;" @click="selectUser(user)" class="w-fit h-fit bg-blue-500 text-white px-1 py-1 rounded ">Select</button>
            <button @click="showDetail(user.id)" class=" w-fit h-fit bg-green-500 text-white px-1 py-1 rounded">View Detail</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Section Pop Up Detail -->
    <div v-if="ViewDetail" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 w-96">
        <div class="float-right">
            <button @click="closeDetail" class="text-gray-500 hover:text-red-500 ">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="red" 
            class="w-6 h-6">
              <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          </div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <img :src="selectedUser.profile_picture" class="w-12 h-12 rounded-full mr-2" alt="Profile">
            <div>
              <h2 class="text-xl font-semibold text-black">{{ selectedUser.name }}</h2>
              <p class="text-black"> {{ selectedUser.email }}</p>
              <p class="text-black"> {{ selectedUser.phone }}</p>
            </div>
          </div>
          
          </div>
          
        </div>
    </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name:'Contenthome',
    data() {
      return {
        usersData: [],
        ViewDetail : false,
        selectedUser: []
      };
    },  
    mounted() {
      this.fetchDataFromAPI(); // Panggil metode untuk mengambil data saat komponen dimuat
    },  
    methods: {
      showDetail(userId) {
        this.ViewDetail = !this.ViewDetail
        this.selectedUser = this.usersData.find((user) => user.id === userId);
      },
      closeDetail() {
        this.ViewDetail = !this.ViewDetail
        this.selectedUser = {};
      },
      selectUser(user) {
        // Implement logic for selecting a user
      },
      viewDetails(user) {
        // Implement logic for viewing user details
      },
      // Fetct data dari API
      async fetchDataFromAPI() {
        try {
          const response = await axios.get('https://api.slingacademy.com/v1/sample-data/users'); // Ganti URL dengan URL API yang sesuai
          this.usersData = response.data['users']; // Mengisi data users dengan respons dari API
          console.log(this.users)
          const mappedUser = this.usersData.map((item) => ({
            id : item.id,
            name : item.first_name + ' ' + item.last_name,
            profile_picture: item.profile_picture,
            date_of_birth: item.date_of_birth,
            email: item.email,
            job: item.job,
            country: item.country,
            phone: item.phone
          }))
          console.log(mappedUser)
          this.usersData = mappedUser
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },

    },
  };
</script>

<style>
</style>