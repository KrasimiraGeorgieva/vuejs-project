<template>
    <nav>
        <a class="active" href="/">Home</a>
        <a href="#">All Listings</a>
        <a href="/my-listings">My Listings</a>
        <a href="/create">Create Listing</a>
        <div id="profile">
            <a>Welcome username</a>
            <a href="/logout">logout</a>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
nav {
    background-color: #333;
    overflow: hidden;
}

#profile {
    float: right;
}

/* Style the links inside the navigation bar */

nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */

nav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */

nav a.active {
    background-color: #4CAF50;
    color: white;
}
</style>