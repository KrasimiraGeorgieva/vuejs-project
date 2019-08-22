<template>
   <div id="register">
        <form @submit.prevent="onRegisterClick">
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <p>Username</p>
                <input type="text" placeholder="Enter Username" v-model="$v.username.$model" name="username" required>

                <p>Password</p>
                <input type="password" placeholder="Enter Password" v-model="$v.password.$model" name="password" required>

                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" v-model="$v.repeatPass.$model" name="repeatPass" required>
                <hr>

                <button type="submit" class="registerbtn" :disabled="$v.$error">Register</button>
            </div>
            <div class="container signin">
                <p>Already have an account?
                    <router-link :to="'/login'" tag="a">Sign in</router-link>.</p>
            </div>
        </form>
    </div>
</template>

<script>
import { authenticate } from '@/services/authServices'
import { required,minLength,maxLength,sameAs } from 'vuelidate/lib/validators'

export default {
    data(){
        return{
        username:'',
        password:'',
        repeatPass:'',
        }
    },
    mixins: [authenticate],
    validations:{
        username:{
            required,
            minLength: minLength(3),
            maxLength: maxLength(20)
        },
        password:{
            required,
            minLength: minLength(3),
            maxLength: maxLength(20)
        },
        repeatPass:{
            required,
            sameAsPassword: sameAs('password')
        },
    },
    methods: {
        onRegisterClick() {
            this.register(this.username, this.password)
            .then(userData => {
                    this.$root.$emit('logged-in', userData.authtoken);
                    this.$router.push('/home-logged');
                })
        }
    }
}
</script>

<style scoped>
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