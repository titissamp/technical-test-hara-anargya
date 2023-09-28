<template>
    <aside class="relative min-h-full flex-1 w-fit fixed float-left">
        <div class="bg-white-800 text-black h-screen w-64 p-4 shadow"> 
            <h1 class="text-2xl font-extrabold pb-6 px-2">heylink.</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/" class="
                            flex 
                            py-2 
                            px-2 
                            hover:bg-blue-200 
                            hover:text-black 
                            rounded-md
                            space-x-2"> 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="w-6 h-6 ">
                                <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li><a href="/overview" class="
                        flex 
                        py-2 
                        px-2 
                        hover:bg-blue-200 
                        hover:text-black 
                        rounded-md
                        space-x-2">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="w-6 h-6">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>
                        <span>Overview</span>
                    </a>
                </li>
                </ul>
            </nav>
        </div>        
    </aside>
</template>

<script>
  export default {
    name:'Sidebar'
  };
</script>

<style>
</style>


<!-- <template>
    <aside class="w-64 bg-gray-800 text-white min-h-screen">
      <div class="p-4">
        <h2 class="text-xl font-semibold">Sidebar</h2>
        <ul class="mt-4">
          <li class="mb-2"><router-link to="/">Beranda</router-link></li>
          <li class="mb-2"><router-link to="/about">Tentang</router-link></li>
          <li class="mb-2"><router-link to="/contact">Kontak</router-link></li> -->
          <!-- Tambahkan rute lain jika diperlukan -->
        <!-- </ul>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus untuk komponen sidebar di sini jika diperlukan */
  </style> -->