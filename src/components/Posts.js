import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'
import ItemList from './itemsList'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'

export default class Posts extends Component {
  constructor(props) {
      super(props);
      this.state = {
          items: []
      }
  }

  // dataSource = [];
  componentWillMount() {
    // firebase data
    firebase.database().ref('items').on('value', (snapshot) => {
      let data = snapshot.val()
      for(let i in data) {
          this.state.items.push(data[i]);
      }
      this.setState({items: this.state.items});
      console.log(this.state.items);
    })
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.inputcontainer}>
       <ItemList items={this.state.items}/>
       </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    marginTop:60,
    flex:1
  },
  text: {
    fontSize: 20
  },
  inputcontainer: {
  }
})
