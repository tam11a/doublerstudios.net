<template>
  <header
    class="flex flex-row items-center w-full justify-between gap-1 px-11 py-8 max-w-6xl mx-auto"
  >
    <div class="flex-1 flex flex-row items-center justify-start">
      <button class="uppercase font-serif font-semibold text-sm text-primary">MENU</button>
    </div>
    <router-link to="/"><img src="/favicon.svg" class="w-16" /></router-link>
    <div class="flex-1 flex flex-row items-center justify-end">
      <router-link to="/contact" class="uppercase font-serif font-semibold text-sm text-secondary"
        >Get in touch</router-link
      >
    </div>
  </header>
</template>
