import React, { Component } from 'react';

// import API from './API';



class FornitoriGrid extends Component {


  constructor(props) {
  super(props);

  }











  render() {

    const fornitori = this.props.data;

    return (
      <div className="FornitoriGrid">
        FornitoriGrid


        <ul className="flex-container">
        {fornitori && fornitori.map( (item,index) =>


          <li key={index} >
          <a href={item.slug} >
          <img src="https://horecapp.it/immagini/fornitori-vini/0kirsbrkyue.jpg"  alt="" />

          <div>{item.nome_it}</div>
          <div>{item.regione_nome} {item.tipologia}</div>
          </a>
          </li>

        )
        }

        </ul>


      </div>
    );
  }
}

export default FornitoriGrid;
