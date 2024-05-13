<template>
    <div id="app">





    <select @change="changeLanguage($event)">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <!-- Weitere Sprachoptionen hinzufügen -->
    </select>
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'App',
    setup() {
        const router = useRouter();

        function changeLanguage(event) {
            const selectedLanguage = event.target.value;
            router.push(`/${selectedLanguage}`);
        }

        return { changeLanguage };
    },
};
</script>
