import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import HeaderApp from '../../components/Header/HeaderApp'
import FooterApp from '../../components/Footer/FooterApp'
import BottomSubmitLeaveButton from '../../components/UI/Button/BottomSubmitLeaveButton'
import circle from '../../../assets/circle.png'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Leave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Type', 'Start Date', 'End Date', 'Dur','Status'],
            tableData: [['PL','14-02-18','16-02-18','2', 'X']]
        }
    }
    render() {
        const state = this.state;
        return(
            <View style = {{ backgroundColor: 'white', flex: 1}}>
                <HeaderApp />
                <Content>
                <View style ={{alignItems: 'center'}}>
                    <Text style = {{textAlign: 'center', marginTop: '5%', fontWeight: 'bold', fontSize: 20}}>You Have</Text>
                    <ImageBackground
                    source = {circle}
                    style = {{ marginTop: '5%', height: 138, width: 138, alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{fontSize: 48, color: 'blue', fontWeight: 'bold'}}>4.5</Text></ImageBackground>
                    <Text style = {{textAlign: 'center', marginTop: '5%', fontWeight: 'bold', fontSize: 20}}>Off Days</Text>
                </View>    
                <View style = {{padding: '5%'}}>
                    <Table borderStyle={{borderColor: '#C1C0B9'}}>
                        <Row data = {state.tableHead} style={styles.headTable} textStyle = {styles.headTextTable} />
                        <Rows data = {state.tableData} style = {styles.contentTable} textStyle = {styles.contentTextTable}/>
                    </Table>
                </View>
                </Content>
                <BottomSubmitLeaveButton />
                <FooterApp />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headTable: { height: 40, backgroundColor: '#537791'},
    headTextTable: { margin: 6, color: 'whitesmoke', textAlign: 'center' },
    contentTable: { backgroundColor: '#F7F6E7'},
    contentTextTable: {textAlign: 'center'}

})

export default Leave;