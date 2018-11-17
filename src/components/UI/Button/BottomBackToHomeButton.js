import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Metrix from '../../Utility/Metrix'
import { withNavigation }  from 'react-navigation'
import * as Animatable from 'react-native-animatable';

class BottomBackToHomeButton extends Component {

    _navigationToPage = () => {
        this.props.navigation.navigate('Dashboard')   
    }

    render(){
        return(
            <Animatable.View animation = "bounceInUp">
                <TouchableOpacity
                    style = {{ 
                        marginTop: '35%',
                        marginLeft: Metrix.screenWidth * 0.1,
                        marginRight: Metrix.screenWidth * 0.1,
                        height: 50, 
                        borderRadius: 100, 
                        borderWidth: 1, 
                        borderColor: '#1d5ea5',
                        width: Metrix.screenWidth* 0.8, 
                        alignItems: 'center', 
                        backgroundColor: '#white',
                        }} 
                    onPress = {this._navigationToPage}
                    >
                    <Text style = {{color: '#1d5fa7', fontSize: 18, fontWeight: 'bold', paddingTop: 12}} >
                        Back To Home
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        )
    }
}

export default withNavigation(BottomBackToHomeButton)