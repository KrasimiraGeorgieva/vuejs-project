<template>
   <div id="login">
        <form @submit.prevent="onLoginClick">
            <div class="container">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>

                <p>Username</p>
                <input type="text" v-model="username" placeholder="Enter Username" name="username">

                <p>Password</p>
                <input type="password" v-model="password" placeholder="Enter Password" name="password"><br />
                <input type="submit" class="registerbtn" value="Login">
            </div>

            <div class="container signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.</p>
            </div>
        </form>
    </div>
</template>

<script>
import { authenticate } from '@/services/authServices'
export default {
    data() {
        return {
            username:'',
            password:''
        };
    },
    mixins: [authenticate],
    methods: {
        onLoginClick() {
            this.login(this.username, this.password)
                .then(userData => {
                    this.$root.$emit('logged-in', userData.authtoken);
                    this.$router.push('/home-logged');
                })
        }
    }
}
</script>

<style>
/* Add padding to containers */

.container {
    background-color: white;
    padding: 16px;
    text-align: center;
}

/* Full-width input fields */

input[type=text], input[type=number], input[type=password] {
    width: 50%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type=text]:focus, input[type=number]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
}

/* Overwrite default styles of hr */

hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* Set a style for the submit/register button */

.registerbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 50%;
    opacity: 0.9;
}

.registerbtn:hover {
    opacity: 1;
}

/* Add a blue text color to links */

a {
    color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */

.signin {
    background-color: #f1f1f1;
    text-align: center;
}
</style>