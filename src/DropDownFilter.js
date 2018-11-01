import React, { Component } from 'react';

// import API from './API';
const URL = 'https://www.partesa.it/horecapp-api/v1/';


class DropDownFilter extends Component {


  constructor(props) {
  super(props);

  this.state = {
    data : []
  }
  }


  loadData(params) {
    let items = [];

    fetch( URL + params )
      .then( response => response.json() )
      .then(  data => {

        // Add data to contacts array.
        items.push( ...data );
        console.log(this.props.type,items);

        this.setState({ data: items, isLoading: false })

      });

}



  componentDidMount() {
    this.loadData('categorie?tipo=' + this.props.type);
  }


  handleChange = (event) => {

    //console.log(event.target.value);

    const eventProps = {
      type :this.props.type,
      value : event.target.value,
    }

    this.props.onDropDownFilterChange(eventProps);
    }







  render() {

    const filters = this.state.data;

    return (
      <div className="DropDownFilter">

        <select onChange={this.handleChange}>
          <option  value="" >Filtra per {this.props.type}</option>
        {filters && filters.map( (item,index) =>

          <option key={index} value={item.nome_it} >

          {item.nome_it}

          </option>

        )
        }

        </select>


      </div>
    );
  }
}

export default DropDownFilter;
