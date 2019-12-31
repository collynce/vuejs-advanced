<template>
    <div>
        <p>This is the landing auth page</p>
        <button @click="me">Click</button>
        <div>
            <!--            <router-link to="/auth/login">Login</router-link>-->
            <!--            <router-link to="/auth/signup">Sign Up</router-link>-->
            <ul>
                <li><a href="#login" @click="goTo('Login')">Login</a></li>
                <li><a href="#signup" @click="goTo('Signup')">Sign Up</a></li>
            </ul>
        </div>

        <div class="currentPage">
            <keep-alive>
                <component v-bind:is="currentPage">
                </component>
            </keep-alive>
        </div>
        <div class="spinner" v-if="showLoader">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
        <div class="modal" v-if="showModal" id="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <slot name="header">
                                Subscribe to our NewsLetter
                            </slot>
                        </div>

                        <div class="modal-body">
                            <input type="email" placeholder="Enter your email">
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="modal-default-button" @click="closeModal">
                                    OK
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
    import Login from './Login'
    import Signup from './Register'

    export default {
        name: "IndexAuth",
        data() {
            return {
                me: this.$root.showInfo,
                showModal: false,
                showLoader: true,
                currentPage: 'login'
            };
        },
        components: {
            Login,
            Signup
        },
        mounted() {
            this.promptExample()
        },
        created() {
            this.showLoaders()
        },
        destroyed() {

        },
        methods: {
            promptExample() {
                setTimeout(() => this.showModal = true, 5000);
            },
            closeModal() {
                this.showModal = false
            },
            showLoaders() {
                setTimeout(() => this.showLoader = false, 3000);
            },
            goTo(page) {
                this.currentPage = page;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-mask {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: inline-table;
        /*transition: opacity .3s ease-in-out;*/
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 500px;
        margin: 0 auto;
        padding: 100px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        animation-name: animatetop;
        animation-duration: 0.9s
    }

    .modal-header h3 {
        /*margin-top: 0;*/
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;

        input {
            padding: 10px;
            text-align: center;
            width: 100%;
            border-radius: 5px;
        }
    }

    .modal-default-button {
        float: right;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    @keyframes animatetop {
        from {
            top: -500px;
            opacity: 0
        }
        to {
            top: 0;
            opacity: 1
        }
    }

    .spinner {
        width: 40px;
        height: 40px;

        position: relative;
        margin: 100px auto;
    }

    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #333;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;

        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-bounce {
        0%, 100% {
            -webkit-transform: scale(0.0)
        }
        50% {
            -webkit-transform: scale(1.0)
        }
    }

    @keyframes sk-bounce {
        0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        }
        50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
    }
</style>
