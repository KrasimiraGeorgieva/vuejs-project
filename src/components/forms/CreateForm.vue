<template>
   <div id="create-listing">
        <form @submit.prevent="onCreateClick">
            <div class="container">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>

                <p>Title</p>
                <input type="text" placeholder="Enter Title" v-model="title" name="title">
                                <!-- v-model="$v.title.$model" -->
                <p>Description</p>
                <input type="text" placeholder="Enter Description" v-model="description" name="description">
<!-- v-model="$v.description.$model" -->
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" v-model="brand" name="brand">
<!-- v-model="$v.brand.$model" -->
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" v-model="model"  name="model">
<!-- v-model="$v.model.$model" -->
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" v-model="year" name="year">
<!-- v-model="$v.year.$model" -->
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" v-model="imageUrl"  name="imageUrl">
<!-- v-model="$v.imageUrl.$model" -->
                <p>Car Fuel Type</p>
                <input type="text" placeholder="Enter Car Fuel Type" v-model="fuel" name="fuelType">
<!-- v-model="$v.fuel.$model" -->
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" v-model.number="price">

                <hr>
                <button type="submit" class="registerbtn">Create Listing</button>
            </div>
        </form>
    </div>
</template>

<script>
import { carService } from '@/services/carServices'
import { required, minLength, maxLength, between} from 'vuelidate/lib/validators'

export default {
    data(){
        return {
        title: '', 
        description: this.description, 
        brand: this.brand, 
        year: this.year, 
        model: this.model, 
        imageUrl: this.imageUrl, 
        fuel:this.fuel, 
        price: this.price, 
        seller: sessionStorage.getItem('username')
        }
    },
    mixins: [carService],
    // validations:{
    //     title:{
    //         minLength: minLength(5),
    //         maxLength: maxLength(33)
    //     },
    //     description:{
    //         minLength: minLength(30),
    //         maxLength: maxLength(450)
    //     },
    //     brand:{
    //         required,
    //         between: between(1, 11)
    //     },
    //     model:{
    //         required,
    //         minLength: minLength(4),
    //         between: between(1, 11)
    //     },
    //     fuel: {
    //         required,
    //         between:between(1, 11)
    //     }
    // },
    methods: {
        onCreateClick() {
            this.create({
                title: this.title, 
                description: this.description, 
                brand: this.brand, 
                year: this.year, 
                model: this.model, 
                imageUrl: this.imageUrl, 
                fuel:this.fuel, 
                price: this.price, 
                seller: sessionStorage.getItem('username')})
                    .then(carData => {
                this.$root.$emit('create', {
                    title: this.title, 
                    description: this.description, 
                    brand: this.brand, 
                    year: this.year, 
                    model: this.model, 
                    imageUrl: this.imageUrl, 
                    fuel:this.fuel, 
                    price: this.price, 
                    seller: sessionStorage.getItem('username')})
                    
                this.$router.push('/home-logged')
            })
        }
    },
}
</script>

<style scoped>

.container {
    background-color: white;
    padding: 16px;
    text-align: center;
}
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
hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}
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

</style>