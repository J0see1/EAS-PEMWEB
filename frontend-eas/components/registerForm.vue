<template>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register Your Data
            </h1>
            <form @submit.prevent="registerAcc" class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input v-model="name" type="text" name="name" id="name" ref="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joko Susanto" required>
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input v-model="email" type="email" name="email" id="email" ref="email" placeholder="joko@mail.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div>
                <label for="school" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your School</label>
                <input v-model="sekolah" type="text" name="school" id="school" ref="school" placeholder="SMAN 5 Kayangan" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div class="flex items-start">
              </div>
              <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register now</button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <NuxtLink to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</NuxtLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        sekolah: ''
      };
    },
    methods: {
      async registerAcc() {
        try {
          const response = await axios.post('http://localhost:3100/api/data', {
            namaPanjang: this.name,
            email: this.email,
            asalSekolah: this.sekolah,
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (response.data) {
            alert('Registration Complete');
            // Optionally, reset form fields after successful registration
            this.name = '';
            this.email = '';
            this.sekolah = '';
          }
        } catch (error) {
          console.error(error);
          alert('Error occurred while registering data');
        }
      }
    }
  }
  </script>
  