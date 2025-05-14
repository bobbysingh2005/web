<template>
    <div>
        <h2>{{ title }} <i class="fas fa-laptop-code" aria-hidden="true"></i></h2>
        <p>{{ description }}</p>
        <button @click="toggleVisibility">{{ isVisible ? 'Hide Details' : 'Show Details' }}</button>
        <transition name="fade">
            <div v-if="isVisible">
                <h3>Responsibilities</h3>
                <p>{{ responsibilities }}</p>
                <h3>Work Experience</h3>
                <p><strong>Years of Experience:</strong> {{ experience }}</p>
                <ul>
                    <li>{{ workExperience }}</li>
                </ul>
                <h3>This is My Hobby Project: Repositories</h3>
                <p>Note: Whenever I find spare time, I work on these repositories. Thus, they are unpublished and incomplete projects due to the limited time I have available to dedicate to them.</p>
                <ul>
                    <li><a href="#">EduApp</a> - Management software for educational institutions.</li>
                    <li><a href="#">ShreeChatApp</a> - Simple chat application for local PC use.</li>
                    <li><a href="#">ShreeEyeApp</a> - Artificial Intelligence app for assisting blind people.</li>
                    <li><a href="#">ShreeEyesApp - Web</a> - Web-based activity tracker for ShreeEyeApp.</li>
                </ul>
                <h3>Connect with Me</h3>
                <p>LinkedIn: <a :href="linkedinURL" aria-label="LinkedIn Profile"><i class="fab fa-linkedin"
                            aria-hidden="true"></i> {{ linkedin }}</a></p>
                <p>Skype: <i class="fab fa-skype" aria-hidden="true"></i> {{ skype }}</p>
                <p>
                <strong>
                Accessibility Experience:</strong> 
                <a href="/NVDAJurny">
                NVDA Screen Reader ({{startYear}} years)
                </a>
                </p>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const title = ref('Bobby Singh');
const description = ref('Passionate technologist with over 25 years of experience, possessing a strong dedication to continuous learning and innovation.');
const isVisible = ref(false);
const responsibilities = ref('Responsible for creating, maintaining, and coaching HTML, CSS, and JavaScript to our team members to enhance team performance. Collaborated with Business Analysts, Team Leads, and Back End Developers to ensure smooth project execution.');
const experience = ref(25);
const workExperience = ref('I have been continuously seeking to acquire new concepts and knowledge to adapt to the company\'s requirements and grow as a team. Regularly updating my knowledge and skills to stay abreast of industry advancements.');
const linkedin = ref('bobby-singh-41685022');
const skype = ref('bobbysingh20051');
const linkedinURL = `https://www.linkedin.com/in/${linkedin.value}/`;

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};
const startYear = computed(()=>{
const currentYear = new Date().getFullYear();
return (currentYear - 2019)
});//end
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>