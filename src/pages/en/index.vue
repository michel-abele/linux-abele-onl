<template>
    <main class="mt-2">
        <div class="container">

            <section class="px-4 py-5 my-5 text-center">
                <h1>Welcome to my private website!</h1>
                <p>This site primarily serves as a personal testing ground and knowledge repository that is publicly accessible at all times. It is mainly intended for friends, family, colleagues, and myself. Of course, all other visitors are warmly invited to take a look around.</p>
                <p>Please note that this knowledge base does not claim to be complete or constantly up to date. Content is added or removed based on my current needs - and this may also happen without prior notice.</p>
                <p>The core of this website is the Vue.js framework. Within this platform, I test various functions of the framework, which means that occasionally content may appear that at first glance does not seem to fit into a knowledge base or does not work perfectly.</p>
                <p>In short, this website serves both to learn and test Vue.js, and as a repository for knowledge about various Linux distributions.</p>
            </section>

        </div>
    </main>
</template>

<script>
export default {
    name: 'en',
    mounted() {
        document.title = 'Startpage - linux.abele.onl';
    }
}
</script>