import styled from 'styled-components/native';

export const ViewMain = styled.View`
  display: flex;
  margin: 10px;
`;

export const ViewPost = styled.View`
  padding: 5px;
  border: 2px solid #1767a5;
  border-radius: 5px;

  margin-bottom: 10px;
`;

export const TextUser = styled.Text`
  color: #1767a5;
  font-size: 21px;

  border: 1px solid black;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;

  margin-bottom: 2px;
`;

export const TextTitle = styled.Text`
  font-size: 20px;

  border: 1px solid black;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;

  margin-bottom: 2px;
`;

export const TextBody = styled.Text`
  font-size: 25px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 100px;
  height: 35px;

  border-radius: 20px;

  background-color: #2296f3;

  margin-left: 35%;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const TextDelete = styled.Text`
  color: white;
  font-size: 19px;
`;
