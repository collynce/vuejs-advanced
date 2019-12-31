<template>
    <div>
        <div class="login">
            <h4>Sign Up</h4>
            <form action="">
                <input type="email" ref="email" placeholder="Enter your email">
                <input type="password" placeholder="Enter password">
                <input type="password" placeholder="Confirm password">
            </form>
            <button>Sign Up</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
    }
</script>

<style lang="scss" scoped>
    .login{
        background: #42b983;
        padding: 50px;
        text-align: center;
        border-radius: 5px;

    form{
        display: grid;
        grid-gap: 10px;
        text-align: center;
    input {
        margin: 0 100px;
        text-align: center;
        padding: 8px;
        border-radius: 5px;
        border: aquamarine 1px solid;
    }
    }
    button{
        padding: 8px 25px;
        margin: 20px 0 0 0;
        border-radius: 5px;
        background: inherit;
        border: aquamarine 1px solid;
    &:hover{
         background: dodgerblue;
         cursor: pointer;
         transition: all .4s ease-in-out;
         border: dodgerblue 1px solid;
     }
    }
    }

</style>
