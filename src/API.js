import React, { Component } from 'react';

const URL = 'https://www.partesa.it/horecapp-api/v1/';
let items = [];

class API extends Component  {

  loadData(params) {

    fetch( URL + params )
      .then( response => response.json() )
      .then(  data => {

        // Add data to contacts array.
        items.push( ...data );
        console.log("products",items);

        return items;
        //this.setState({ data: items, isLoading: false })

      });


}



}

export default API;
