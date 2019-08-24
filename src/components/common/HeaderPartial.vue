<template>
    <nav>
        <template v-if="isAuthenticated">
            <router-link
                    :to="'/home-logged'"
                    class="active"
                    tag="a"
                >
                Home
                </router-link>
            <router-link
                    :to="'/home-logged'"
                    tag="a"
                >
                All Listings
                </router-link>
            <router-link
                    :to="'/create'"
                    tag="a"
                >
                Create Listing
                </router-link>
            <div id="profile">
                <a>Welcome username</a>
                <a href="/logout" v-on:click.prevent="onLogoutClick">logout</a>
            </div>
        </template>
        
        <template v-else>
            <router-link
                    :to="'/'"
                    class="active"
                    tag="a"
                >
                Home
                </router-link>
        </template>
    </nav>
</template>

<script>
import { authenticate } from '@/services/authServices'

export default {
    data() {
        return {
        };
    },
    mixins: [authenticate],
    methods: {
        onLogoutClick() {
            this.logout().then(userData => {
                sessionStorage.clear()
                this.$root.$emit('logged-out', userData.authtoken);
                this.$router.push('/');
            })
        }
    }
}
</script>

<style scoped>
nav {
    width: 100%;
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