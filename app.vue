<template>
  <div id="app-root">
    <a href="#main-content" class="skip-link">SKIP TO CONTENT</a>
    <ThePreloader />
    <TheFrame />
    <TheMenu />
    <TheConsole />
    <main id="main-content">
      <NuxtPage />
    </main>
    <TheFooter />
    <ErrorOverlays />
  </div>
</template>
