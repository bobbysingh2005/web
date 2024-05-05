<template>
    <header>
        <h1>[Your Name]'s Portfolio & Journey</h1>
    </header>
    <div class="container">
        <section>
            <h2>About Me</h2>
            <p>I am a versatile developer proficient in a myriad of technologies. With expertise in HTML, CSS,
                JavaScript, Node.js, Express.js, and various JavaScript frameworks, I've honed my craft in crafting
                intuitive and dynamic web experiences. Additionally, my knowledge extends to Python, particularly in the
                realm of AI and deep learning—a field I'm eager to delve deeper into for personal and professional
                growth.</p>
        </section>
        <section>
            <h2>My Goals</h2>
            <ol>
                <li><strong>Mastery in AI:</strong> My ultimate goal is to become proficient in AI and deep learning. I
                    envision leveraging these skills to develop intelligent systems that positively impact society.</li>
                <li><strong>Innovative Web Solutions:</strong> I aim to continue pushing the boundaries of web
                    development, exploring new frameworks and technologies to create innovative digital experiences.
                </li>
                <li><strong>Community Engagement:</strong> I'm committed to sharing knowledge, collaborating with fellow
                    developers, and fostering a supportive community where learning and growth flourish.</li>
            </ol>
        </section>
        <section>
            <h2>Portfolio Showcase</h2>
            <p>Explore my portfolio section to witness firsthand the projects and endeavors that define my journey. From
                dynamic web applications powered by Node.js and Express.js to experiments in AI and machine learning
                using Python, each project reflects my passion for technology and innovation.</p>
        </section>
        <section>
            <h2>Insights & Resources</h2>
            <p>Dive into my blog section for insightful articles, tutorials, and resources on web development, AI, and
                beyond. Whether you're a beginner seeking guidance or a seasoned developer craving new perspectives,
                you'll find valuable content to fuel your learning journey.</p>
        </section>
        <section>
            <h2>Connect & Collaborate</h2>
            <p>Let's connect! Whether you're interested in collaborating on a project, seeking advice, or simply want to
                chat tech, I'm just a click away. Reach out via the contact form or connect with me on social media—I
                look forward to engaging with you!</p>
        </section>
    </div>
    <footer>
        <p>Stay updated: <a href="#">Subscribe to newsletter</a> | Connect with me on <a href="#">Twitter</a> | <a
                href="#">LinkedIn</a></p>
        <p>Thank you for visiting my digital abode. Here's to a future filled with innovation, collaboration, and
            boundless possibilities!</p>
    </footer>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
    console.log('ready')
})
</script>

<style>
/* Add your CSS styles here */
/* This is just a basic example, feel free to customize */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f3f3f3;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header,
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

section {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
}

h1,
h2 {
    color: #333;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>