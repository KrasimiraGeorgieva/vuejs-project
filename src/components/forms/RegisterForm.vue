<template>
   <div id="register">
        <form>
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>

                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>

                <button type="submit" class="registerbtn">Register</button>
            </div>
            <div class="container signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
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