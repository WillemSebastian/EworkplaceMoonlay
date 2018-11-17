import React, { Component } from 'react'
import { View } from 'react-native'
import HeaderApp from '../../components/Header/HeaderApp'
import FooterApp from '../../components/Footer/FooterApp'
import { Container, Content, List, ListItem, CheckBox, Body, Text } from 'native-base'
import Metrix from '../../components/Utility/Metrix'

class Notifications extends Component {
    render() {
        return(
            <View style={{backgroundColor: 'white', flex: 1}}>
                <HeaderApp />
                <Content>
                <List>
                    <ListItem style = {{backgroundColor: '#f9f9f9'}}>
                    <Text style={{fontWeight: 'bold'}}>Your Leave Request is Approved</Text>
                    </ListItem>
                    <ListItem>
                    <Text>Lorem Ipsum Dolor Sit Amet</Text>
                    </ListItem>
                    <ListItem>
                    <Text>Lorem Ipsum Dolor Sit Amet</Text>
                    </ListItem>
                    <ListItem>
                    <Text>Lorem Ipsum Dolor Sit Amet</Text>
                    </ListItem>
                </List>
                </Content>  
                <FooterApp />
            </View>
        )
    }
}

export default Notifications;