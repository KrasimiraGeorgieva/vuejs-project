<template>
   <div id="create-listing">
        <form @submit.prevent="onCreateClick">
            <div class="container">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>

                <p>Title</p>
                <input type="text" placeholder="Enter Title" v-model="$v.formResponses.title.$model" name="title">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.title.minLength">Field must have at least {{ $v.formResponses.title.$params.minLength.min }} characters.</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.title.maxLength">Field must not exceed {{ $v.formResponses.title.$params.maxLength.max }} characters.</span>
                </p>

                <p>Description</p>
                <input type="text" placeholder="Enter Description" v-model="$v.formResponses.description.$model" name="description">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.description.minLength">Field must have at least {{ $v.formResponses.description.$params.minLength.min }} characters.</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.description.maxLength">Field must not exceed {{ $v.formResponses.description.$params.maxLength.max }} characters.</span>
                </p>

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" v-model="$v.formResponses.brand.$model" name="brand">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.brand.required">This field is required</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.brand.minLength">Field must have at least {{ $v.formResponses.brand.$params.minLength.min }} characters.</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.brand.maxLength">Field must not exceed {{ $v.formResponses.brand.$params.maxLength.max }} characters.</span>
                </p>

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" v-model="$v.formResponses.model.$model"  name="model">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.model.required">This field is required</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.model.minLength">Field must have at least {{ $v.formResponses.model.$params.minLength.min }} characters.</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.model.maxLength">Field must not exceed {{ $v.formResponses.model.$params.maxLength.max }} characters.</span>
                </p>

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" v-model="$v.formResponses.year.$model" name="year">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.year.numeric">Field must be positive number.</span><br />
                    <span class="error animated flipInY" v-if="!$v.formResponses.year.between">Field must be between {{$v.formResponses.price.$params.$min}} an {{$v.formResponses.price.$params.$max}}.</span>
                </p>

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" v-model="$v.formResponses.imageUrl"  name="imageUrl">

                <p>Car Fuel Type</p>
                <input type="text" placeholder="Enter Car Fuel Type" v-model="$v.formResponses.fuel.$model" name="fuelType">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.fuel.required">This field is required</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.fuel.minLength">Field must have at least {{ $v.formResponses.fuel.$params.minLength.min }} characters.</span>
                    <span class="error animated flipInY" v-if="!$v.formResponses.fuel.maxLength">Field must not exceed {{ $v.formResponses.fuel.$params.maxLength.max }} characters.</span>
                </p>

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" v-model.number="$v.formResponses.price.$model">
                <p v-if="errors" class="error">
                    <span class="error animated flipInY" v-if="!$v.formResponses.price.numeric">Field must be positive number.</span><br />
                    <span class="error animated flipInY" v-if="!$v.formResponses.price.between">Field must be between 1 and 5000000000.</span>
                </p>
                <hr>
                <button type="submit" class="registerbtn submit" @click.prevent="onCreateClick">Create Listing</button>
            </div>
        </form>
    </div>
</template>

<script>
import { carService } from '@/services/carServices'
import { required, minLength, maxLength, between, numeric, min, max} from 'vuelidate/lib/validators'

export default {
    data(){
        return {
            uiState: "submit not clicked",
            errors: false,
            empty: true,

            formResponses: {
                title: this.title, 
                description: this.description, 
                brand: this.brand, 
                year: this.year, 
                model: this.model, 
                imageUrl: this.imageUrl, 
                fuel:this.fuel, 
                price: this.price, 
                seller: sessionStorage.getItem('username')
            }
        }
    },
    mixins: [carService],
    validations:{
        formResponses:{
            title:{
                minLength: minLength(5),
                maxLength: maxLength(33)
            },
            description:{
                minLength: minLength(30),
                maxLength: maxLength(450)
            },
            brand:{
                required,
                minLength: minLength(4),
                maxLength: maxLength(11)
            },
            model:{
                required,
                minLength: minLength(4),
                maxLength: maxLength(11)
            },
            year:{
                numeric,
                between: between(1900,2019)
            },
            fuel: {
                required,
                minLength: minLength(1),
                maxLength: maxLength(11)
            },
            price: {
                numeric,
                between: between(1,5000000000)
            }
        } 
    },
    methods: {
        onCreateClick() {
            this.formTouched = !this.$v.formResponses.$anyDirty;
            this.errors = this.$v.formResponses.$anyError;
            this.uiState = "submit clicked";

            if (this.errors === false && this.formTouched === false) {
                
                this.create({
                title: this.formResponses.title, 
                description: this.formResponses.description, 
                brand: this.formResponses.brand, 
                year: this.formResponses.year, 
                model: this.formResponses.model, 
                imageUrl: this.imageUrl, 
                fuel:this.formResponses.fuel, 
                price: this.formResponses.price, 
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

                this.uiState = "form submitted";
            }
        },
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


.error {
  color: red;
  font-size: 12px;
}

</style>