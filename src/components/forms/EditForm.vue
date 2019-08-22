<template>
   <div id="edit-listing">
        <form @submit.prevent="onEditClick">

            <div class="container">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
                <input type="hidden" name="carId" v-model="car._id" />

                <p>Title</p>
                <input type="text" placeholder="Enter Title" name="title" v-model="car.title">

                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" v-model="car.description">

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" v-model="car.brand">

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" v-model="car.model">

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" v-model="car.year">

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" v-model="car.imageUrl">

                <p>Car Fuel Type</p>
                <input type="text" placeholder="Enter Car Fuel Type" name="fuelType" v-model="car.fuel">

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" v-model="car.price">

                <hr>
                <button type="submit" class="registerbtn">Edit Listing</button>
            </div>
            <br />
        </form>
    </div>
</template>

<script>
import { carService } from '@/services/carServices'
import { authenticate } from '@/services/authServices'

export default {
    data(){
        return{
            title:'',
            description:'',
            brand:'',
            year:'',
            model:'',
            imageUrl:'',
            fuel:'',
            price:'',
            seller:''
        }
    },
    mixins: [carService],
    created(){
        this.getById();
    },
    methods: {
        onEditClick() {
            
            this.edit(this._id, this.title, this.description, this.brand, this.year, this.model, this.imageUrl, this.fuel, this.price, this.seller)
            .then(userData => {
                //console.log("edit")
                    this.$root.$emit('updated', userData.authtoken,userData)
                    // this._id, this.title, this.description, this.brand, this.year, this.model, this.imageUrl, this.fuel, this.price, this.seller = sessionStorage.getItem('username') );
                    this.$router.push('/home-logged')
                })
        }
    }
}
</script>

<style scoped>
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