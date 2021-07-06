import styled from 'styled-components/native';

export const ViewMain = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60%;
  margin-left: 40px;
  margin-right: 40px;
`;

const TextInputDefault = styled.TextInput`
  border: 2px solid #888;
  border-radius: 10px;

  width: 100%;
  height: 45px;

  font-size: 20px;

  padding-left: 5px;
  padding-right: 5px;

  margin-bottom: 5px;

  &:active {
    border-color: #2296f3;
  }
`;

export const TextInputTitle = styled(TextInputDefault)``;

export const TextInputBody = styled(TextInputDefault)``;

export const PickerUser = styled.Picker`
  border: 2px solid black;
  border-radius: 10px;

  width: 100%;

  font-size: 20px;
`;
