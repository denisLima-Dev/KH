import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #00acc1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 80%;
  min-height: 600px;
  min-width: 100px;
  background-color: #fff;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  elevation: 3;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const UpperContent = styled.View`
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  padding: 10px;
`;

export const TextContent = styled.Text`
  font-size: 12px;
  color: #999;
  align-self: flex-start;
  padding: 10px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 80%;
  border-radius: 5px;
  background-color: #00acc1;
  margin: 20px;
  padding: 10px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  elevation: 3;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const TextResult = styled.Text`
  font-size: 26px;
  color: #5c6bc0;
  font-weight: bold;
  padding: 10px;
`;

export const TextFoot = styled.Text`
  font-size: 10px;
  color: #999;
  align-self: flex-start;
  padding: 5px;
`;

export const Input = styled.TextInput`
  text-align: center;
  font-size: 18px;
  width: 90%;
`;

export const GenderBox = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const GenderButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-width: 1px;
  border-radius: 50px;
  padding: 5px;
  margin: 3px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  elevation: 3;
`;
