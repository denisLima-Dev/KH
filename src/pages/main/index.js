import React, { useState, useEffect } from "react";
import { ScrollView, Text, TextInput, View, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Foundation";

import {
  Container,
  Content,
  UpperContent,
  TextTitle,
  TextContent,
  ConfirmButton,
  ButtonText,
  TextResult,
  TextFoot,
  Input,
  GenderBox,
  GenderButton,
} from "./style";

let renderCont = 0;

export default function index() {
  const [weight, setWeight] = useState(0);
  const [waterVolume, setWaterVolume] = useState(0);
  const [gender, setGender] = useState("Male");
  const [name, setName] = useState("");
  const [multiplier, setMultiplier] = useState(0.045);

  useEffect(() => {
    setWaterVolume(+(weight * multiplier * 1000).toFixed(2));
  }, [weight]);

  useEffect(() => {
    setWaterVolume(+(weight * multiplier * 1000).toFixed(2));
  }, [multiplier]);

  function onSubmit() {
    let data = {};

    data["Name"] = name;
    data["Weight"] = weight;
    data["WaterVolume"] = waterVolume !== 0 ? waterVolume : 3000;
    data["Gender"] = gender;

    console.log(data);
  }

  renderCont++;
  return (
    <Container>
      <Content>
        <UpperContent>
          <TextTitle>Let us know a little more about You</TextTitle>
          <TextContent>Name</TextContent>
          <Input
            onChangeText={(e) => {
              setName(e);
            }}
            placeholder="Nome"
            autoCapitalize="words"
          />
          <TextContent>Gender</TextContent>
          <GenderBox>
            <GenderButton
              style={
                gender === "Male"
                  ? { backgroundColor: "#FFF", borderColor: "#5C6BC0" }
                  : { backgroundColor: "#5C6BC0", borderColor: "#FFF" }
              }
              onPress={() => {
                setGender("Male");
                setMultiplier(0.045);
              }}
            >
              <View>
                <Icon
                  name="male-symbol"
                  size={20}
                  color={gender === "Male" ? "#999" : "#FFF"}
                />
              </View>
            </GenderButton>
            <GenderButton
              style={
                gender === "Female"
                  ? { backgroundColor: "#FFF", borderColor: "#5C6BC0" }
                  : { backgroundColor: "#5C6BC0", borderColor: "#FFF" }
              }
              onPress={() => {
                setGender("Female");
                setMultiplier(0.04);
              }}
            >
              <View>
                <Icon
                  name="female-symbol"
                  size={20}
                  color={gender === "Female" ? "#999" : "#FFF"}
                />
              </View>
            </GenderButton>
          </GenderBox>
          <TextContent>Weight</TextContent>
          <Input
            onChangeText={(e) => {
              setWeight(e);
            }}
            placeholder="Peso"
            keyboardType="numeric"
            returnKeyType="done"
          />
        </UpperContent>
        <TextContent>Suggested amount of water * :</TextContent>
        <TextResult>{waterVolume} ml</TextResult>
        <ConfirmButton
          onPress={() => {
            onSubmit();
          }}
        >
          <ButtonText>Confirm</ButtonText>
        </ConfirmButton>
        <TextFoot>*It can be changed latter/{renderCont} </TextFoot>
      </Content>
    </Container>
  );
}
