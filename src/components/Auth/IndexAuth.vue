<template>
    <div>
        <div>
            <router-link to="/auth/login">Login</router-link>
            <router-link to="/auth/signup">Sign Up</router-link>
        </div>
        <p>This is the landing auth page</p>
        <button @click="me">Click</button>
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: "IndexAuth",
        data() {
            return {
                me: this.$root.showInfo
            };
        }
    }
</script>

<style scoped>

</style>
