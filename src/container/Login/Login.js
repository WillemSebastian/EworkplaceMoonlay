import React, { Component } from 'react';
import { ImageBackground, TextInput, StyleSheet, Text, KeyboardAvoidingView, View } from 'react-native';
import { Input, Button, Item, Form, Content, Container, Label } from 'native-base';
import Metrix from '../../components/Utility/Metrix';
import login from '../../../assets/login.png';
import * as Animatable from 'react-native-animatable';

class Login extends Component {

    state = {
        username : 'Username',
        password : 'Password',
        login: 'false',
    }
    
    loginEventHandler = () => { 
        if (this.state.username == 'React' && this.state.password == 'Native'){
            this.setState({login: true});
            this.props.navigation.navigate('Dashboard');
        }
        else{
            this.setState({login: 'Login Failed'});
            alert(this.state.login);
        }
    };
    
    render() {
        
        return(
          
            <ImageBackground source = {login} style={styles.backgroundContainer} >
                <View style = {{justifyContent: 'space-between', flex: 1}}>
                    <View style= {{alignItems: 'center', marginTop: '30%'}}>
                        <Animatable.Text animation  = "pulse" iterationCount='infinite' direction = "alternate" style ={{fontSize: 20, color: 'white'}}>moonlaytechnologies</Animatable.Text>
                    </View>
                    <View style = {styles.centerView}>
                        <Item floatingLabel>
                        <Label style = {{ color: 'white' }}>Email</Label>
                        <Input
                        style = {{ color: 'white' }}
                        onChangeText = {(text) => this.setState({username: text})}
                        />
                        </Item>
                        <View style = {{marginTop: 30}}>
                            <Item floatingLabel>
                            <Label style = {{ color: 'white' }}>Password</Label>
                            <Input secureTextEntry={true}
                            style = {{ color: 'white' }}
                            onChangeText = {(text) => this.setState({password: text})}
                            />
                            </Item>
                        </View>
                        <Text style = {{textAlign: 'right', marginTop: 20, color: '#ffffff' }}>Forgot Password?</Text>
                    </View> 
                    <View>
                        <Button 
                            style = {{width: Metrix.screenWidth, backgroundColor: '#1d5fa7' }}
                            onPress={this.loginEventHandler}>
                            <Text style ={{ color: 'white', marginLeft: '45%', fontSize: 18 }}>LOG IN</Text>
                        </Button>
                    </View>
                </View> 
            </ImageBackground>
        )
    }
}   

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
    },

    centerView: {
        padding: '5%',
    },

})

export default Login;