<template>
   <div id="main">
        <div id="welcome-container">
            <h1 class="animated zoomIn">Welcome To Car Tube</h1>
            <img class="animated bounceInRight" src="@/assets/finance-car.png" alt="carIntro">
            <h2 class="animated zoomIn">Login or register to check out our listings or to make one</h2>
            <div id="button-div">
                <router-link :to="'/login'" tag="a" class="button">Login</router-link>
                <router-link :to="'/register'" tag="a" class="button">Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#main {
    background-color: white;
    height: 100%;
    font-family: 'Lato', sans-serif;
}

h1 {
    text-align: center;
    margin-top: 30px;
    font-size: 50px;
}

h2 {
    text-align: center;
}

.button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px;
}

#welcome-container {
    width: 50%;
    margin: auto;
}

#welcome-container>img {
    margin-top: 20px;
    height: 100%;
    width: 100%;
}

#button-div {
    padding-top: 10px;
    width: 37%;
    margin: auto;
}

img {
    animation-delay: 1s;
}
</style>