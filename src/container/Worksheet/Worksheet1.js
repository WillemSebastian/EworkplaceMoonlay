import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import add from '../../../assets/add.png'
import HeaderApp from '../../components/Header/HeaderApp'
import FooterApp from '../../components/Footer/FooterApp'
import { Content, Accordion, Container, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import Metrix from '../../components/Utility/Metrix'
import BottomSubmitButton from '../../components/UI/Button/BottomSubmitButton'
import { withNavigation }  from 'react-navigation'

const dataArray = [
    { title: "Today", content: "-"},
    { title: "Thu, Sep 13/2018", content: ["1", "2", "3"] },
    { title: "Thu, Sep 13/2018", content: "Project B"}
]

class Worksheet1 extends Component {
    
    _renderContent(content) {
        return(
            <Text 
            style = {{backgroundColor: 'white', padding: 10, fontStyle: 'italic'}}>
            {content}
            </Text>
        );
    }

    render() {
        return(
            <Container>
                <HeaderApp />
                <Content>
                    <View style = {{padding: '5%', backgroundColor: 'white', alignItems: 'center'}}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Worksheet2')}>
                            <Image 
                            style = {{marginTop: 20}}
                            source = {add}
                            
                            />
                        </TouchableOpacity>
                        <Text style = {{marginTop: 20}}>Add Your Work</Text>
                    </View>
                    <View style = {{ marginTop: 50, marginBottom: 30}}>
                        <Button onPress = {() => this.props.navigation.navigate('Success', {SuccessText: 'Download Sukses'})} bordered style = {{ marginLeft: Metrix.screenWidth * 0.65, padding: 10, borderRadius: 30 }}>
                            <Text style = {{color: 'blue'}}>Download Data</Text>
                        </Button>
                    </View>
                    <Accordion 
                    dataArray={dataArray}
                    headerStyle = {{ backgroundColor: '#1d5fa7', color: 'white', height: 50, opacity: 0.2}}
                    contentStyle = {{ backgroundColor: 'white'}}
                    expanded={0}/>
                    <BottomSubmitButton/>
                </Content>
                <FooterApp />
            </Container>
        )
    }
}

export default withNavigation(Worksheet1);