<template>
    <div id="app">
        <header class="sticky-top p-3 border-bottom border-2 border-warning">

                <div class="d-flex flex-wrap justify-content-between">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
                        <img :src="tuxSmall" alt="Tux" class="me-1" width="32" height="32">
                        <span class="fs-4">Linux {{ languageVars.titlePart }}</span>
                    </a>

                    <ul class="nav nav-underline col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle px-2 text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{{ languageVars.distributions }}</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" :href="`/${languageZone}/debian`">Debian</a></li>
                            </ul>
                        </li>
                        <li><a :href="`/${languageZone}/${languageVars.packages}`" class="nav-link px-2 text-black">{{ languageVars.packages }}</a></li>
                        <li><a :href="`/${languageZone}/${languageVars.imprint}`" class="nav-link px-2 text-black">{{ languageVars.imprint }}</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle px-2 text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Languages</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#" @click="event => changeLanguage(event, 'de')">Deutsch</a></li>
                                <li><a class="dropdown-item" href="#" @click="event => changeLanguage(event, 'en')">English</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
        </header>

        <router-view></router-view>


    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { languageVariables } from './utils/languageVariables.js';
import tuxSmall from './assets/img/tux-small.png';


export default {
    name: 'App',
    setup() {
        const router = useRouter();

        //const currentLanguage = ref(router.path.substring(1, 3))
        var currentLanguage = ref('de')

        if (router.currentRoute.value.fullPath.length > 1) {
            currentLanguage = ref(router.currentRoute.value.fullPath.substring(1, 3));
        }

        function changeLanguage(event, lang) {
            event.preventDefault();
            currentLanguage.value = lang;
            router.push(`/${lang}`);
        }

        const languageVars = computed(() => languageVariables[currentLanguage.value]);
        const languageZone = computed(() => currentLanguage.value);

        return { languageZone, languageVars, changeLanguage };
    },
    data() {
        return {
            tuxSmall
        };
    }
};
</script>
