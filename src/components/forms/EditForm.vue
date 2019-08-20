<template>
   <div id="edit-listing">
        <form>

            <div class="container">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
                <input type="hidden" name="carId" value="" />

                <p>Title</p>
                <input type="text" placeholder="Enter Title" name="title" value="">

                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" value="">

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" value="">

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" value="">

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" value="">

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" value="">

                <p>Car Fuel Type</p>
                <input type="text" placeholder="Enter Car Fuel Type" name="fuelType" value="">

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" value="">

                <hr>
                <button type="submit" class="registerbtn">Edit Listing</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
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