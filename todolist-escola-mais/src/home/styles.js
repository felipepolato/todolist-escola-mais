import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #808185;
  color: #fff;
  display: flex;
  align-item: center;
  justify-content: center;
`;

export const ContainerTwo = styled.div`
  width: 60%;
  height: 100vh;
  background: #ff8c00;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  .userName {
    text-decoration: none;
    color: #000;
  }
`;

export const Checkbox = styled.input`
  margin-left: 200px;
  height: 50px;
  align-items: baseline;
`;
