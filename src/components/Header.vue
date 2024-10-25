<template>
  <header class="py-4">
    <div class="container mx-auto">
      <nav class="flex w-full items-center justify-between">
        <RouterLink to="/"
          ><img
            src="/logo.png"
            alt="Age of Empires: Units"
            class="h-[72px] bg-white rounded-lg"
        /></RouterLink>

        <ul class="flex gap-2">
          <RouterLink
            to="/"
            class="text-[#2f2a20] px-4 py-2 w-fit rounded-full"
            :class="{
              'bg-white font-semibold': $route.path === '/',
            }"
            >Home</RouterLink
          >
          <RouterLink
            to="/units"
            class="text-[#2f2a20] px-4 py-2 w-fit rounded-full"
            :class="{
              'bg-white font-semibold': $route.path === '/units',
            }"
            >Units</RouterLink
          >
        </ul>
      </nav>
    </div>
  </header>
</template>
