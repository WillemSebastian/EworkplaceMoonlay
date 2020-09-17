import React, { Component } from "react";
import { View, Text } from "react-native";
import HeaderApp from "../../components/Header/HeaderApp";
import { Form, Item, Icon, Input } from "native-base";
import BottomStartButton from "../../components/UI/Button/BottomStartButton";
import { Picker } from "@react-native-community/picker";

class Worksheet2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      value: undefined,
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <HeaderApp />
        <View style={{ padding: "5%", backgroundColor: "white" }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "blue",
                fontSize: 36,
                fontWeight: "bold",
                marginBottom: "10%",
              }}
            >
              {" "}
              00: 00: 00{" "}
            </Text>
          </View>
          <Form>
            <Text>Project</Text>
            <Item>
              {/* <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker> */}
            </Item>
            <Text>Task</Text>
            <Item last>
              <Input placeholder="Add Your Task"></Input>
            </Item>
          </Form>
          <BottomStartButton />
        </View>
      </View>
    );
  }
}

export default Worksheet2;
