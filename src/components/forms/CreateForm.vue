<template>
   <div id="create-listing">
        <form>
            <div class="container">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>

                <p>Title</p>
                <input type="text" placeholder="Enter Title" name="title">

                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">

                <p>Car Fuel Type</p>
                <input type="text" placeholder="Enter Car Fuel Type" name="fuelType">

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">

                <hr>
                <button type="submit" class="registerbtn">Create Listing</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
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