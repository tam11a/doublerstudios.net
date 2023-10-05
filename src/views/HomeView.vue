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
</template>
