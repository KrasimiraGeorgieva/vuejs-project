<template>
   <div class="listing-details">
        <div class="my-listing-details">
            <p id="auto-title">{{car.title}}</p>
            <img :src="car.imageUrl">
            <br />
            <div class="listing-props">
                <h2>Brand: {{car.brand}}</h2>
                <h3>Model: {{car.model}}</h3>
                <h3>Year: {{car.year}}</h3>
                <h3>Fuel: {{car.fuel}}</h3>
                <h3>Price: {{car.price}}$</h3>
            </div>
            <div class="listings-buttons" v-if="username == car.seller">
                <router-link
                    :to="'/edit/'+ car._id"
                    tag="a"
                    class="button-list"
                >
                Edit
                </router-link>
                
                <router-link
                    :to="'/delete/'+ car._id"
                    tag="a"
                    class="button-list"
                >
                Delete
                </router-link>

            </div>
            <p id="description-title">Description:</p>
            <p id="description-para">{{car.description}}</p>
            <p class="space"></p>

        </div>
    </div>
</template>

<script>
import { carService } from '@/services/carServices'
import { authenticate } from '@/services/authServices'

export default {
    mixins: [carService],
    created(){
        this.getById();
    }
}
</script>

<style scoped>

div.listing-details>div>img {
    height: 455px;
    width: 800px;
    text-align: center;
    display: block;
    margin: 0 auto
}

h3 {
    font-size: 20px;
}

.listings-buttons {
    width: 31%;
    margin: auto;
    margin-top: 34px;
    text-align: center;
}

.button-list {
    background-color: #4CAF50;
    border: none;
    color: white;
    margin: 10px 8px;
    padding: 11px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
#description-para {
    /* width: 39.8em; */
    width: 50%;
    font-size: 20px;
    border: 2px solid black;
    padding-bottom: 100px;
    margin-bottom: 40px;
    text-align: center;
    margin: 0 auto;
}

.car-listings {
    background-color: white;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    width: 94%;
    margin: auto;
}
.my-listing {
    height: 500px;
    width: 400px;
    padding: 20px 30px 0 30px;
    margin: auto;
    border: 2px solid black;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-bottom: 30px;
    text-align: center;
}

.my-listing img {
    height: 269px;
    width: 410px;
    text-align: center;
}

.listing-props {
    justify-content: center;
    display: flex;
    height: 60px;
    text-align: center;
}

h3 {
    padding: 0 10px 0 30px;
}

.my-listing-details>p#description-title {
    font-size: 39px;
    text-align: center;
    padding: 30px 0 5px 0;
    font-weight: bold;
}

#auto-title {
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    margin: 20px 0 20px 0;
}

.space {
    margin-top: 50px
}
</style>