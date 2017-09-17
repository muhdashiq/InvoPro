import React, { Component } from 'react'
import {View, Text,ScrollView} from 'react-native'
import axios from 'axios'
import ItemDetails from './ItemDetail'
import ItemCard from './ItemCard'
import Header from './common/Header'

const DATA_URL = 'https://rallycoding.herokuapp.com/api/music_albums';

export default class ItemList extends Component {
    state =  {
        items: [],
        message: 'Loading items...',
    };

    componentWillMount(){
      axios.get(DATA_URL)
          .then(response => {
              let items = [
                  {
                      id: 1,
                      name: 'Jonson and Jonson',
                      size: {
                          height:12,
                          width:12
                      },
                      category: 'Bathroom',
                      type: 'Ceramic',
                      color: 'Grey',
                      warehouse: 'Thazhepalam',
                      units: 2,
                  },
                  {
                      id: 2,
                      name: 'Somany Ceramics',
                      size: {
                          height:6,
                          width:6
                      },
                      category: 'Wall',
                      type: 'Digital',
                      color: 'Blue',
                      warehouse: 'Marbleland Bay I',
                      units: 98,
                  },
                  {
                      id: 3,
                      name: 'Rak',
                      size: {
                          height:48,
                          width:48
                      },
                      category: 'floor',
                      type: 'Ceramic',
                      color: 'Creem',
                      warehouse: 'Thazhepalam',
                      units: 44,
                  },
                  {
                      id: 4,
                      name: 'Jonson and Jonson',
                      size: {
                          height:12,
                          width:12
                      },
                      category: 'Floor',
                      type: 'Ceramic',
                      color: 'White',
                      warehouse: 'Thazhepalam',
                      units: 22,
                  },
                  {
                      id: 5,
                      name: 'Jonson and Jonson',
                      size: {
                          height:24,
                          width:12
                      },
                      category: 'Wall',
                      type: 'Ceramic',
                      color: 'Digital',
                      warehouse: 'Marbleland Bay II',
                      units: 208,
                  },
                  {
                      id: 6,
                      name: 'H & R Johnson',
                      size: {
                          height:12,
                          width:12
                      },
                      category: 'Wall',
                      type: 'Metalic',
                      color: 'Black',
                      warehouse: 'Thazhepalam',
                      units: 199,
                  },
                  {
                      id: 7,
                      name: 'Somany',
                      size: {
                          height:6,
                          width:6
                      },
                      category: 'Wall',
                      type: 'Ceramic',
                      color: 'white',
                      warehouse: 'Thazhepalam',
                      units: 500,
                  },
                  {
                      id: 8,
                      name: 'Arihant',
                      size: {
                          height:12,
                          width:12
                      },
                      category: 'Bathroom',
                      type: 'Ceramic',
                      color: 'Grey',
                      warehouse: 'Marbleland Bay I',
                      units: 132,
                  },
                  {
                      id: 9,
                      name: 'Jonson and Jonson',
                      size: {
                          height:12,
                          width:12
                      },
                      category: 'Wall',
                      type: 'Ceramic',
                      color: 'Grey',
                      warehouse: 'Thazhepalam',
                      units: 122,
                  },
                  {
                      id: 10,
                      name: 'Jonson and Jonson',
                      size: {
                          height:12,
                          width:12
                      },
                      category: 'Floor',
                      type: 'Ceramic',
                      color: 'Grey',
                      warehouse: 'Thazhepalam',
                      units: 122,
                  },
                  {
                      id: 11,
                      name: 'Disha',
                      size: {
                          height:24,
                          width:24
                      },
                      category: 'Floor',
                      type: 'Ceramic',
                      color: 'Blue',
                      warehouse: 'Thazhepalam',
                      units: 122,
                  },
                  {
                      id: 12,
                      name: 'Shine',
                      size: {
                          height:12,
                          width:12
                      },
                      category: 'Bathroom',
                      type: 'Ceramic',
                      color: 'Green',
                      warehouse: 'Thazhepalam',
                      units: 0,
                  },
                  {
                      id: 13,
                      name: 'Jindal',
                      size: {
                          height:72,
                          width:24
                      },
                      category: 'Bathroom',
                      type: 'Wall',
                      color: 'White',
                      warehouse: 'Thazhepalam',
                      units: 1000,
                  },
              ];
              return this.setState({items: items, message: 'Data loaded'})
          })
          .catch( error => this.setState({message: error}));

    }

    renderItems() {
        return this.state.items.map(item => <ItemCard key={item.id} item={item}/>);
    }
    render () {
        console.log(this.state);
      return(
          <View>
              <Header headerText="Items"/>
              <ScrollView>
                  <View style = {{padding:5, paddingBottom: 100}}>
                      {this.renderItems() || "Loading..."}
                  </View>
              </ScrollView>
          </View>
      );
    }
};