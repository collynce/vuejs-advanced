<template>
    <div>
        <div class="navbar" >
            <ul v-once>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li>
                    <router-link to="/auth">Sign In</router-link>
                </li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",

        // beforeCreate() {
        //     alert('Before the creation of the Vue instance')
        // },
        // created() {
        //     alert('Vue instance has been initialized')
        // },
        // mounted() {
        //     this.mountedFunction()
        // },
        // destroyed() {
        //     this.destroyFunction()
        //
        // },
        methods:{
            // mountedFunction(){
            //     alert('Vue instance has been mounted')
            // },
            // destroyFunction(){
            //     alert('sdsdsds')
            // }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        background: #42b983;
        color: aliceblue;
        padding: 15px;

        li {
            list-style: none;
            display: inline;
            padding: 10px;

            a {
                text-decoration: none;
                color: inherit;

                &.router-link-exact-active {
                    color: brown;
                }

            }

            &:hover {
                background: dodgerblue;
                /*padding: 10px 2px;*/
            }

        }
    }
</style>
