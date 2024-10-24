<template>
  <header class="bg-white">
    <div class="container mx-auto">
      <nav class="flex w-full items-center justify-between">
        <RouterLink to="/"
          ><img src="/logo.png" alt="Age of Empires: Units" class="h-[72px]"
        /></RouterLink>

        <ul class="flex gap-4">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/units">Units</RouterLink>
        </ul>
      </nav>
    </div>
  </header>
</template>
