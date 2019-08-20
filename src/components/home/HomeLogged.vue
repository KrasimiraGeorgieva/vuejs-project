<template>
   <div id="car-listings">
        <h1>Car Listings</h1>

        <div id="listings">

            <div class="listing">
                <p>Audi a3 много запазено</p>
                <img src="https://i.imgur.com/drIOsYl.jpg">
                <h2>Brand: Audi</h2>
                <div class="info">
                    <div id="data-info">
                        <h3>Seller: kunio</h3>
                        <h3>Fuel: Gasoline</h3>
                        <h3>Year: 1998</h3>
                        <h3>Price: 2500 $</h3>
                    </div>
                    <div id="data-buttons">
                        <ul>
                            <li class="action">
                                <a href="#" class="button-carDetails">Details</a>
                            </li>
                            <li class="action">
                                <a href="#" class="button-carDetails">edit</a>
                            </li>
                            <li class="action">
                                <a href="#" class="button-carDetails">delete</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            <p class="no-cars">No cars in database.</p>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#listings {
    width: 86%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
}

.listing {
    padding-top: 30px;
    padding-left: 50px;
    height: 440px;
    width: 350px;
    margin: auto;
    margin: 15px;
    margin-bottom: 50px;
    border-radius: 8px;
    border: 2px solid black;
}

.listing>img {
    height: 200px;
    width: 300px;
}

.listing>p {
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
}

.no-cars {
    margin: auto;
    font-size: 70px;
}

#listings>div>div {
    display: flex;
    flex-direction: row;
    width: 100%;
}

#data-info {
    margin-top: 25px;
    width: 13em;
    margin-left: -30px;
}

#data-buttons>ul>li {
    text-transform: capitalize;
    padding-top: 5px;
}

#data-buttons>ul {
    list-style-type: none;
}

.button-carDetails {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px;
    width: 100px;
    margin: 2px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>