<script setup></script>

<template>
  <section class="py-4">
    <div class="container mx-auto">
      <div class="relative rounded-xl">
        <img
          src="/home-banner.jpg"
          alt="Age of Empires: Background"
          class="w-full h-full rounded-lg opacity-90 brightness-50"
        />

        <div
          class="md:absolute top-0 left-0 h-full w-full flex flex-col justify-center md:p-8 mt-4 md:mt-0"
        >
          <div
            class="flex flex-col justify-center gap-6 max-w-[600px] bg-[#2f2a20] md:bg-[#0006] p-8 rounded-lg"
          >
            <h1 class="font-semibold text-[36px] md:text-[48px] text-white">
              Welcome to <br />
              Age of Empires: Units
            </h1>

            <p class="text-white max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa qui
              quia voluptatum laborum dolorum! Velit tempore, officia,
              accusantium porro quisquam explicabo blanditiis numquam eveniet
              dolores ex quam atque vitae distinctio.
            </p>

            <RouterLink
              to="/units"
              class="bg-white text-[#2f2a20] font-semibold px-4 py-2 w-fit rounded-lg"
              >Go to Units</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
