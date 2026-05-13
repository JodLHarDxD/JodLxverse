<template>
  <div class="page-about">

    <!-- §32 — Hero -->
    <section class="about-hero" data-theme="light">
      <h1 class="type-dh1">ABOUT</h1>
    </section>

    <!-- §32 — Content -->
    <section class="about-content" data-theme="light">
      <article class="about-article">

        <div class="chapter">
          <DotCaption class="type-caption4">I · ORIGIN</DotCaption>
          <h2 class="type-h0">INTELLIGENCE AS ARCHITECTURE.</h2>
          <div class="type-body2">
            <p>
              JodLxVerse began at the intersection of two questions: what does it mean to
              build a mind, and what does it mean to build a world? These are not separate
              questions. They never were.
            </p>
            <p>
              Every framework developed here — SCA, KDA, AGA, WPA, COHERENCE — is a lens
              for understanding how intelligence operates across scales: from the neuron
              to the civilization, from the decision to the destiny.
            </p>
          </div>
        </div>

        <div class="chapter">
          <DotCaption class="type-caption4">II · FRAMEWORKS</DotCaption>
          <h2 class="type-h0">THE ARCHITECTURE OF REASONING.</h2>
          <div class="type-body2">
            <p>
              The frameworks built under JodLxVerse are tools for thinking — not theories
              to be believed, but lenses to be applied. SCA maps structural causation.
              KDA traces the arc of knowledge through decision. COHERENCE measures the
              internal consistency of any system under pressure.
            </p>
          </div>
        </div>

        <div class="chapter">
          <DotCaption class="type-caption4">III · PROJECTS</DotCaption>
          <h2 class="type-h0">ACTIVE EXPERIMENTS.</h2>
          <div class="type-body2">
            <p>
              VoxDub. TreadX. MediaStrip. Each project is a live experiment in applied
              intelligence architecture. Each one asks a different version of the same
              question: what happens when you build something that thinks?
            </p>
          </div>
        </div>

      </article>
    </section>

    <!-- §32 CTA -->
    <section class="about-cta" data-theme="dark">
      <h2 class="type-h0">CONNECT.</h2>
      <div class="social-cta">
        <BtnMain href="#">TWITTER</BtnMain>
        <BtnMain href="#">DISCORD</BtnMain>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({ title: 'About — JodLxVerse' })
</script>

<style scoped>
.about-hero {
  background: #FAF9F5;
  padding: calc(var(--menu-top) + 4rem) var(--grid-side-margin) 4rem var(--menu-left);
}

.about-content {
  background: #FAF9F5;
  padding: 4rem var(--grid-side-margin) 8rem var(--menu-left);
}

.about-article {
  max-width: 80rem;
}

.chapter {
  border-top: 1px solid var(--line-dark);
  padding-top: 4rem;
  margin-bottom: 6rem;
}

.chapter > :deep(.dot-caption) { margin-bottom: 2rem; }
.chapter .type-h0 { margin-bottom: 3rem; }

.type-body2 p + p { margin-top: 1.5em; }

.about-cta {
  background: #0d0d0d;
  padding: 8rem var(--grid-side-margin) 8rem var(--menu-left);
}

.about-cta .type-h0 { margin-bottom: 4rem; }

.social-cta {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 767px) {
  .about-hero   { padding: calc(var(--menu-top) + 2rem) 2rem 2rem; }
  .about-content { padding: 3rem 2rem 4rem; }
  .about-cta    { padding: 6rem 2rem; }
}
</style>
