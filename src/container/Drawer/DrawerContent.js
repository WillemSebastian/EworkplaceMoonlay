import React, { Component } from 'react'
import { BackHandler, SafeAreaView, Text, View, Image } from 'react-native'
import { Container, Content, Grid } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation'

class DrawerContent extends Component { 

    _menu = () => {
        const menu = [
            {IconMenu: 'Dashboard', TextMenu: 'Dashboard'},
            {IconMenu: 'Checkin', TextMenu: 'Checkin'},
            {IconMenu: 'Worksheet', TextMenu: 'Worksheet'},
            {IconMenu: 'Leave', TextMenu: 'Leave'},
            {IconMenu: 'Assign Project', TextMenu: 'AssignProject'},
            {IconMenu: 'Setting', TextMenu: 'Setting'},
            {IconMenu: 'Logout', TextMenu: 'Logout'}
        ]
    }

    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return false
        })
    }
    
    render() {
        return(
            <SafeAreaView style = {{ flex: 1 }}>
                <Container>
                    <Grid style = {{backgroundColor: 'white'}}>
                        <View style={{flex: 1}}>
                            <View style = {{height: 120, alignItems:'center', justifyContent: 'center', backgroundColor: '#015D90'}}>
                                <Image
                                    style = {{height: 60, width: 60, marginTop: 20, borderRadius: 30, borderColor: 'white', borderWidth: 1}}
                                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWHzYOvkcUXJV5JAcFMNeIWyDE_0I7A2v_t9YoDOhNrLf_O7CUg'}}
                                />
                                <View style ={{ padding: 10}}>
                                    <Text style = {{color: 'white'}}>Willem</Text>
                                </View>
                            </View>
                            <View style = {{padding: 15, flexDirection: 'row'}} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                                <Icon 
                                name = 'home' 
                                size = {Icon.size || 20}
                                color = 'black'
                                />
                                <Text style ={{marginLeft: 10}}>Dashboard</Text>
                            </View>
                            <View style = {{padding: 15, flexDirection: 'row'}} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                                <Icon 
                                name = 'home' 
                                size = {Icon.size || 20}
                                color = 'black'
                                />
                                <Text style ={{marginLeft: 10}}>CheckIn</Text>
                            </View>
                            <View style = {{padding: 15, flexDirection: 'row'}} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                                <Icon 
                                name = 'home' 
                                size = {Icon.size || 20}
                                color = 'black'
                                />
                                <Text style ={{marginLeft: 10}}>Leave</Text>
                            </View>
                            <View style = {{padding: 15, flexDirection: 'row'}} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                                <Icon 
                                name = 'home' 
                                size = {Icon.size || 20}
                                color = 'black'
                                />
                                <Text style ={{marginLeft: 10}}>Assign Project</Text>
                            </View>
                            <View style = {{padding: 15, flexDirection: 'row'}} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                                <Icon 
                                name = 'home' 
                                size = {Icon.size || 20}
                                color = 'black'
                                />
                                <Text style ={{marginLeft: 10}}>Setting</Text>
                            </View>
                            <View style = {{padding: 15, flexDirection: 'row'}} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                                <Icon 
                                name = 'home' 
                                size = {Icon.size || 20}
                                color = 'black'
                                />
                                <Text style ={{marginLeft: 10}}>Log out</Text>
                            </View>
                        </View>
                    </Grid> 
                </Container>
            </SafeAreaView>
        )
    }
}

export default withNavigation(DrawerContent)