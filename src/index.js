import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';

export default class App extends Component {

  state = {
    isModalVisible: true,
    title: 'Neato Robotics Botvac D80 Bagless Self-Charging Robot Vacuum Black 945-0179 - Best Buy',
    price: 387.99,
    url: 'http://www.bestbuy.com/site/neato-robotics-botvac-d80-bagless-self-charging-robot-vacuum-ebony-arctic-white/8839065.p?skuId=8839065',
    imgsrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8839/8839065_sd.jpg;maxHeight=200;maxWidth=300',
    width: 213,
    height: 200,
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render () {
    return (            
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.modalImage}>
              <Image style={{width: this.state.width, height: this.state.height}} resizeMode={Image.resizeMode.cover} source={{uri: this.state.imgsrc}} />
            </View>
            <Text style={{marginBottom: 16}}>{this.state.title}</Text>

            <View style={styles.modalRow}>
              <Text style={{marginRight: 8}}>Price</Text>
              <Text style={{fontWeight: 'bold'}}>{this.state.price}</Text>
            </View>
            <View style={styles.modalRow}>
              <Text>Alert me when price is lower than</Text>
              <TextInput style={styles.modalInput} keyboardType={'numeric'}/>
            </View>
            <View style={styles.modalRow}>

              <TouchableOpacity onPress={this._hideModal}>
                <View style={[styles.modalButton, {marginRight: 8}]}>
                  <Text>Confirm</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this._hideModal}>
                <View style={styles.modalButton}>
                  <Text>Cancel</Text>
                </View>
              </TouchableOpacity>

            </View>

          </View>
        </Modal>
      </View>  
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,

  },
  modalImage: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 8
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 10
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
  },
  modalButton: {
    backgroundColor: 'lightblue',
    padding: 18,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalInput: {
    flex: 1, 
    marginLeft: 8, 
    height: 40, 
    paddingLeft: 8,
    borderColor: 'transparent', 
    backgroundColor: '#f3f3f3', 
    borderWidth: 1, 
    borderRadius: 2
  },
});


AppRegistry.registerComponent('rnmodal', () => App);
