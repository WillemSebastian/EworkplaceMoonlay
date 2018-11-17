import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Metrix from '../../Utility/Metrix'
import { withNavigation }  from 'react-navigation'

class BottomStartButton extends Component {
    
    _navigationToPage = () => {
        this.props.navigation.navigate('Success')   
    }

    render(){
        return(
            <TouchableOpacity
                style = {{ 
                    marginLeft: Metrix.screenWidth * 0.1,
                    marginRight: Metrix.screenWidth * 0.1,
                    height: 50, 
                    borderRadius: 100, 
                    width: Metrix.screenWidth* 0.8, 
                    position: 'absolute', 
                    top: 0.7 * Metrix.screenHeight, 
                    alignItems: 'center', 
                    backgroundColor: '#1d5fa7',
                    }}
                onPress = {this._navigationToPage}
                >
                <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold', paddingTop: 12}} >
                    Start
                </Text>
            </TouchableOpacity>
        )
    }
}


export default withNavigation(BottomStartButton)