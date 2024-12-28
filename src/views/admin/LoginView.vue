<script setup>
</script>

<template>
  <div
    class="h-screen flex items-center"
    style="
      background-image: url('https://img.freepik.com/free-photo/oldfashioned-tent-woods-call-wild_157027-4522.jpg?t=st=1734064794~exp=1734068394~hmac=bcda3d8551a9a45b3fb67b19b260f78b23b122e6dd412d56298a6d1f5a1df1ff&w=1380');
      background-size: cover;
      background-position: center;
    "
  >
    <div class="flex-1 max-w-xl mx-auto shadow-xl rounded-lg p-8 bg-white">
      <div class="flex flex-col items-center space-y-8">
        <h1 class="text-2xl font-bold mt-8">Login</h1>
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
          <input type="text" class="grow" placeholder="Email" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <input type="password" class="grow" placeholder="Password" />
        </label>
        <button class="btn btn-primary w-1/3">Login</button>
      </div>
    </div>
  </div>
</template>



