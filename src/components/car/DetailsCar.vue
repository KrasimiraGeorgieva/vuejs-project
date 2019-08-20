<template>
   <div class="listing-details">
        <div class="my-listing-details">
            <p id="auto-title">Audi a3 много запазено</p>
            <img src="https://i.imgur.com/drIOsYl.jpg">
            <div class="listing-props">
                <h2>Brand: Audi</h2>
                <h3>Model: a3</h3>
                <h3>Year: 1998</h3>
                <h3>Fuel: Gasoline</h3>
                <h3>Price: 2500$</h3>
            </div>
            <div class="listings-buttons">

                <a href="#" class="button-list">Edit</a>
                <a href="#" class="button-list">Delete</a>


            </div>
            <p id="description-title">Description:</p>
            <p id="description-para">Не съм навъртал на колата 100000км в никакъв случай. Като нова е</p>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#container>div.listing-details>div>img {
    height: 455px;
    width: 800px;
}

h3 {
    font-size: 20px;
}

.listings-buttons {
    width: 31%;
    margin: auto;
    margin-top: 34px;
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
    width: 39.8em;
    font-size: 20px;
    border: 2px solid black;
    padding-bottom: 100px;
    margin-bottom: 40px;
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
}

.my-listing img {
    height: 269px;
    width: 410px;
}

.listing-props {
    display: flex;
    height: 60px;
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
</style>