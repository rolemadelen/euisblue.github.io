<template>
  <div>
    <h2> {{ title }}</h2>

    <div id="wrapper">
      <div class="countryInfo">
        <div v-if="country === null">
          {{ readData() }}
        </div>
        <div v-else>
          <img v-bind:src="country.flag">
          <span>Name</span>: {{ country.name }} <br>
          <span>Native Name</span>: {{ country.nativeName }} <br>
          <span>Capital</span>: {{ (country.capital === '') ? 'N/A' : country.capital }} <br>
          <span>Population</span>: {{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}  <br>
          <span> Region</span>: {{ (country.region === '') ? 'N/A' : country.region }} <br>
          <span> Sub-region</span>: {{ (country.subregion === '') ? 'N/A' : country.subregion }} <br>
          <span>Currency</span>: {{ (country.currencies)[0].name }} ({{(country.currencies)[0].code}}, {{ (country.currencies)[0].symbol }})
        </div>
      </div>

      <hr style="clear: both;">

      <div class="countryList">
        <div v-for="r in region">
          <h2 v-if="r===''">Unknown</h2>
          <h2 v-else> {{ r }}</h2>
          <span v-for="c in countries" v-if="c.region === r">
            <a href="#"><button @click="findCountry(c.name)"> {{c.name}} </button></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from './json/countries';

export default {
  data() {
    return{
      title: "Countries Directiory",
      country: null,
      countries: json,
      region: [
      ],
    }
  }, 
  methods: {
    findCountry: function(name) {
      this.country = this.countries.find(e => e.name === name)
    },
    readData: function() {
      this.countries.forEach(e => {
        //alert(this.region.find(r => (r === e.region)) === undefined);
        if(this.region.includes(e.region)){ 

        } else { 
          this.region.push(e.region);
        }
      })
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&display=swap');

* {
  font-family: 'Baloo 2', cursive;
}

body {
  background-color: #dddddd;
}

img {
  width: 450px;
  height: 280px;
  float: left;
}

hr {
  clear: both;
}

div.countryInfo span {
  font-weight: bold;
  margin: 5px 0 0 15px;
  display: inline-block;
  width: 100px;
}

div.countryInfo span:nth-child(2) {
  margin-top: 25px;
}


#wrapper {
  display: flex;
  flex-direction: column;
}

#wrapper .countryInfo {
}

#wrapper .countryList {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 10px 0 0 10px;
  padding: 0;
}

/* https://www.csswand.dev/ */
button {
  color: #1c1c1c;
  background-color: #e4e4e4;
  border: 1px solid #969696;
  border-radius: 4px;
  padding: 0 10px;
  margin: 2px;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease-in-out;
}
button:hover {
  border-radius: 40%;
  border-color: #2299ff;
}
</style>
