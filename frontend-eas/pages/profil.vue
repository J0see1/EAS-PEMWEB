<template>
    <!-- Your existing template code -->
    <section class="bg-gray-50 dark:bg-gray-900">
      <!-- ... -->
  
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <!-- ... -->
  
        <div>
          <!-- Displaying fetched data -->
          <h2 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            User Information
          </h2>
          <div class="flex flex-col space-y-2">
            <p><strong>Name:</strong> {{ name }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>School:</strong> {{ sekolah }}</p>
            <p><strong>Status:</strong> {{ status }}</p>
          </div>
        </div>
  
        <!-- Your existing form -->
        <form @submit.prevent="registerAcc" class="space-y-4 md:space-y-6" action="#">
          <!-- ... -->
        </form>
      </div>
    </section>
  </template>
  

<script>

import axios from 'axios';

export default {
  // ...other code remains unchanged

  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3100/api/data');

        if (response.data) {
          // Assign fetched data to variables for use in your component
          this.name = response.data.namaPanjang;
          this.email = response.data.email;
          this.sekolah = response.data.asalSekolah;
          this.status = response.data.status;
        }
      } catch (error) {
        console.error(error);
        alert('Error occurred while fetching data');
      }
    }
  },

  mounted() {
    // Fetch data when the component is mounted or whenever needed
    this.fetchData();
  }
};


</script>
