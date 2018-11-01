import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import API from './API';

import FornitoriGrid from './FornitoriGrid';
import DropDownFilter from './DropDownFilter';

const URL = 'https://www.partesa.it/horecapp-api/v1/';


class App extends Component {

  constructor(props,API) {
  super(props);

  this.state = {
    data : [],

  }



}


componentDidMount() {
  this.loadData('cantine');


  console.log("filteredData",this.state.filteredData);
}


loadData(params) {
  let items = [];

  fetch( URL + params )
    .then( response => response.json() )
    .then(  data => {

      // Add data to contacts array.
      items.push( ...data );
      console.log("fornitori",items);

      this.setState({ data: items, filteredData: items, isLoading: false })

    });

}



  onDropDownFilterChange = (item) => {
    console.log("parent",item);

    if (item.value.length == 0) {
      this.setState({ filteredData : this.state.data});
      return; }

    let data = this.state.data;

    // if (item.type=='regioni_vini') {
    //   data = data.filter( dataItem => { return dataItem.regione_nome === item.value } )
    // }
    //
    // if (item.type=='tipologie_vini') {
    //   data = data.filter( dataItem => { return dataItem.tipologia === item.value } )
    // }

    let filteredData = data.filter( dataItem => { return (dataItem.regione_nome === item.value) || (dataItem.tipologia === item.value) } )


    console.log(filteredData);
    this.setState({ filteredData : filteredData});

  }







  render() {
    return (
      <div className="App">

      <div className="row">
        <div className="col-md-4"><DropDownFilter type="regioni_vini" onDropDownFilterChange={this.onDropDownFilterChange} /></div>
        <div className="col-md-4"><DropDownFilter type="tipologie_vini" onDropDownFilterChange={this.onDropDownFilterChange} /></div>
        <div className="col-md-4">.col-md-4</div>
      </div>



      <FornitoriGrid data={this.state.filteredData}/>



      </div>
    );
  }
}

export default App;
