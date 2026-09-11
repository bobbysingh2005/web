<template>
  <section class="nvda-journey" aria-labelledby="journey-title">
    <div class="container">
      <h1 id="journey-title">Bobby Singh – Finding Light Through NVDA</h1>

      <article>
        <h2>Losing my sight</h2>
        <p>
          In 2016, I was working as a UI/UX developer at a company, fully immersed in design and technology. Life changed suddenly when I was involved in a serious motorbike accident.
        </p>
        <p>
          I lost my memory for a time, and during recovery, I had a severe reaction to life-saving medication. The condition was called <strong>Stevens-Johnson Syndrome (SJS)</strong>—a rare but life-threatening illness.
        </p>
        <p>
          Over time, my vision began to fade, and eventually, I lost sight in both eyes.
        </p>
        <p>
          One thing that helped me stay grounded was <strong>meditation</strong>, a daily habit I’d practiced for years. It gave me calm, clarity, and mental strength.
        </p>
        <p>
          After my final eye surgery, the doctor told me:
          <em>“There’s no way to recover your eyesight—but there are other ways to live your life.”</em>
        </p>
      </article>

      <article>
        <h2>Finding NVDA</h2>
        <p>
          I started with the <strong>Orca screen reader on Ubuntu</strong>, then in 2018 I discovered <strong>NVDA</strong>—and that changed everything.
        </p>
        <p>
          At first, NVDA was just a screen reader. But I was surprised by how much it could do. I learned all of NVDA’s tools, followed each update closely, and used it to <strong>improve my development skills</strong>, reduce time spent exploring, and boost productivity.
        </p>
        <p>
          NVDA gave me wings to fly again. Its support for Microsoft Windows was essential. I tried other screen readers, but they were costly and complex. NVDA empowered me to go from “zero to hero.”
        </p>
      </article>

      <article>
        <h2>Where I am today</h2>
        <p>
          Today, I continue improving my skills and proving that <strong>blind people can learn, build, and lead</strong>. If you’ve lost your vision, don’t give up. There’s a path forward—and NVDA can help light the way.
        </p>
        <p class="signature">
          <router-link to="/">- Bobby Singh</router-link>
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.nvda-journey {
  padding: 3rem 0;
  color: var(--text);
}

h1 {
  font-size: 1.9rem;
  color: var(--navy);
  margin-bottom: 2rem;
}

article {
  max-width: 46rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(15, 27, 45, 0.07);
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 1.3rem;
  color: var(--navy);
  font-weight: 700;
}

p {
  line-height: 1.8;
  font-size: 1.05rem;
  color: var(--text-soft);
}

.signature {
  margin-top: 1.5rem;
  font-weight: 600;
  text-align: right;
}

.signature a {
  color: var(--accent);
}
</style>