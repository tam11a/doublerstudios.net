<script setup lang="ts"></script>

<template>
  <div class="relative min-h-[85vh]">
    <img
      src="/giphy.webp"
      draggable="false"
      class="absolute select-none top-1/2 -translate-y-1/2 -z-20 w-full max-w-3xl blur-lg left-1/2 -translate-x-1/2"
    />
    <img
      src="/name.svg"
      draggable="false"
      class="absolute top-[45%] -translate-y-1/2 select-none -z-10 w-[90vw] max-w-3xl left-1/2 -translate-x-1/2 shadow-black drop-shadow-lg"
    />
    <p
      class="absolute bottom-0 max-w-md text-xs tracking-widest p-3 font-semibold [&>span]:font-bold"
    >
      Unleashing Creativity with <span class="text-secondary">Video Editing</span>, <br />
      <span class="text-secondary">Motion Graphics</span> and
      <span class="text-primary">Savory Pizza Munching</span>, <br />
      All While Sipping Juicy Inspiration!
    </p>
  </div>
  <div class="py-7 my-[120px] grid grid-cols-2">
    <div>
      <h2 class="font-buda text-7xl">WHAT <span class="text-primary">WE DO</span></h2>
      <p class="text-sm text-faded tracking-widest font-semibold max-w-sm mt-2 pl-2">
        ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra
        maecenas accumsan lacus vel facilisis volutpat est.
      </p>
    </div>
    <div></div>
  </div>
</template>
