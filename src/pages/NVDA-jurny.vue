<template>
  <section class="nvda-journey" aria-labelledby="journey-title">
    <h1 id="journey-title">Bobby Singh – Finding Light Through NVDA</h1>
    <article>
      <p>
        In 2016, I was working as a UI/UX developer at a company, fully immersed in design and technology. Life changed suddenly when I was involved in a serious motorbike accident...
      </p>
      <p>
        I lost my memory for a time, and during recovery, I had a severe reaction to life-saving medication. The condition was called <strong>Stevens-Johnson Syndrome (SJS)</strong>—a rare but life-threatening illness.
      </p>
      <p>
        Over time, my vision began to fade, and eventually, I lost sight in both eyes...
      </p>
      <p>
        One thing that helped me stay grounded was <strong>meditation</strong>, a daily habit I’d practiced for years. It gave me calm, clarity, and mental strength.
      </p>
      <p>
        After my final eye surgery, the doctor told me: <em>“There’s no way to recover your eyesight—but there are other ways to live your life.”</em>
      </p>
      <p>
        I started with the <strong>Orca screen reader on Ubuntu</strong>, then in 2018 I discovered <strong>NVDA</strong>—and that changed everything.
      </p>
      <p>
        At first, NVDA was just a screen reader. But I was surprised by how much it could do. I learned all of NVDA’s tools, followed each update closely, and used it to <strong>improve my development skills</strong>, reduce time spent exploring, and boost productivity.
      </p>
      <p>
        NVDA gave me wings to fly again. Its support for Microsoft Windows was essential. I tried other screen readers, but they were costly and complex. NVDA empowered me to go from “zero to hero.”
      </p>
      <p>
        Today, I continue improving my skills and proving that <strong>blind people can learn, build, and lead</strong>. If you’ve lost your vision, don’t give up. There’s a path forward—and NVDA can help light the way.
      </p>
      <p class="signature">
        <router-link to="/" > - Bobby Singh</router-link>
      </p>
    </article>
  </section>
</template>

<script setup>
// Composition API # No script logic needed for now
</script>

<style scoped>
.nvda-journey {
  max-width: 800px;
  margin: auto;
  padding: 1.5rem;
  line-height: 1.75;
  font-size: 1.1rem;
  color: #222;
  background-color: #f9f9f9;
  border-radius: 10px;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

p {
  margin-bottom: 1rem;
}

.signature {
  margin-top: 2rem;
  font-weight: bold;
  text-align: right;
}
</style>
