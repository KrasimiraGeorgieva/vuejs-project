<template>
   <div id="register">
        <form @submit.prevent="onRegisterClick">
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <br />
                <p>Username</p>
                <input type="text" placeholder="Enter Username" v-model="$v.formResponses.username.$model" name="username">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.username.required">This field is required</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.username.minLength">Field must have at least {{ $v.formResponses.username.$params.minLength.min }} characters.</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.username.maxLength">Field must not exceed {{ $v.formResponses.username.$params.maxLength.max }} characters.</span>
                </p>
                <br />
                <p>Password</p>
                <input type="password" placeholder="Enter Password" v-model="$v.formResponses.password.$model" name="password" required>
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.password.required">This field is required</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.password.minLength">Field must have at least {{ $v.formResponses.password.$params.minLength.min }} characters.</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.password.maxLength">Field must not exceed {{ $v.formResponses.password.$params.maxLength.max }} characters.</span>
                </p>
                <br />
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" v-model="$v.formResponses.repeatPass.$model" name="repeatPass" required>
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.repeatPass.required">This field is required</span><br />
                    <span class="error animated flipInY" v-if="!$v.formResponses.repeatPass.sameAsPassword">The passwords do not match.</span>
                </p>
                <br />
                <hr>

                <button type="submit" class="registerbtn submit" @click.prevent="onRegisterClick">Register</button>
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
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

export default {
    data(){
        return{
            uiState: "submit not clicked",
            errors: false,
            empty: true,

            formResponses: {
                username:'',
                password:'',
                repeatPass:'',
            }
        }
    },
    mixins: [authenticate],
    validations:{
        formResponses:{
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
        }
    },
    methods: {
        onRegisterClick() {
            this.formTouched = !this.$v.formResponses.$anyDirty;
            this.errors = this.$v.formResponses.$anyError;
            this.uiState = "submit clicked";
                if (this.errors === false && this.formTouched === false) {
                this.register(this.formResponses.username, this.formResponses.password)
                
                .then(userData => {
                    this.$root.$emit('logged-in', userData.authtoken);
                    this.$router.push('/home-logged');
                })

                this.uiState = "form submitted";
                }
        },
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
    margin: 5px 0px 22px;
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

.error {
  color: red;
  font-size: 12px;
}

</style>