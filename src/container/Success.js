import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Metrix from '../components/Utility/Metrix'
import BottomBackToHomeButton from '../components/UI/Button/BottomBackToHomeButton'
import * as Animatable from 'react-native-animatable';

class Success extends Component {   

    render() {

        const AnimatableBackToHomeButton = Animatable.createAnimatableComponent(BottomBackToHomeButton)

        return(
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Animatable.View animation="bounceInDown" style = {{padding: '5%', backgroundColor: 'white',}}>
                    <View style = {{alignItems: 'center'}}>
                    <Icon 
                    size={Icon.size || 90}
                    style={{color: 'darkblue', marginTop: Metrix.screenHeight* 0.4}}
                    active name='thumbs-o-up'
                    onPress = {() => this.props.navigation.navigate('Menu')}
                    />
                    <Text style = {{textAlign: 'center', fontSize: 24, color: 'black'}}>{this.props.navigation.getParam('SuccessText')}</Text>
                    </View>
                </Animatable.View>
                <BottomBackToHomeButton />
            </View>
        )
    }
}

export default Success;