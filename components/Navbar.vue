<template>
  <div>
    <nav class="container flex flex-col lg:flex-row items-center px-4 py-6">
      <div class="flex flex-col lg:flex-row items-center">
        <ul class="flex ml-0 lg:ml-16 space-x-8 mt-6 lg:mt-0">
          <li><a href="#" class="hover:text-blue-400">About</a></li>
          <li><a href="#" class="hover:text-blue-400">Picture</a></li>
          <li><a href="#" class="hover:text-blue-400">Contact Me</a></li>
        </ul>
      </div>
    </nav>
    <div class="py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-blue-500 uppercase tracking-wide font-semibold">
          Popular Games
        </h2>
        <div
          class="popular-games text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-12 border-b border-gray-800 pb-16"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
