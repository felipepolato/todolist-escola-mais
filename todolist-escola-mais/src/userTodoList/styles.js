import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #808185;
  color: #000;
  padding-bottom: 30px;
`;

export const ContainerTwo = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 250px;
  margin-top: 20px;
  background: #ff8c00;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  #homeBtn{
      text-decoration: none;
      margin-bottom: 12px;
      border: 2px solid black;
      border-radius: 4px;
      width: 100px;
      padding: 4px;
      align-self: center;
      text-align: center;
      color: black;
      font-weight: bold;
      }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

export const Checkbox = styled.input`
  margin-right: 12px;
`;

export const Line = styled.div`
  margin: 10px;
`;

export const DivCheckbox = styled.div`
  dipaly: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  margin-right: 15px;
  font-weight: bold;
`;
