<template>
    <div class="max-w-md mx-auto mt-8 p-6 bg-gray-400 rounded-md shadow-md">
      <h2 class="text-2xl text-white mb-4 font-semibold">Check Account</h2>
      <form @submit.prevent="statusCheck">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-white">Email:</label>
          <input type="email" id="email" v-model="email" required class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Check Status
        </button>
      </form>
  
      <div v-if="status !== null" class="mt-4">
        <h3 class="text-lg font-semibold ">Registering Status:</h3>
        <p class="mt-2 font-bold">{{ status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        status: null,
      };
    },
    methods: {
      async statusCheck() {
        try {
          const apiUrl = `http://localhost:3100/api/data?email=${this.email}`;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (response.ok) {
            const responseData = await response.json();
            console.log("API Response:", responseData);
  
            if (responseData.docs && responseData.docs.length > 0) {
              const userDocument = responseData.docs.find(
                (doc) => doc.email === this.email
              );
  
              if (userDocument) {
                this.status = userDocument.status;
              } else {
                console.error("Error: Email not found in the API response.");
              }
            } else {
              console.error("Error: No documents found in the API response.");
            }
          } else {
            console.error(
              "Failed to fetch status. Status code:",
              response.status
            );
          }
        } catch (error) {
          console.error("Error:", error);
        }
      },
    },
  };
  </script>
  