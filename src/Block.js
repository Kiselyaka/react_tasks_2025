import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: ${(props) => (props.warn ? 'red' : 'white')}; 
  background-color: ${(props) => (props.warn ? 'yellow' : '#007bff')};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc; 
    cursor: not-allowed; 
  }
`;

const Input = styled.input`
  background: ${(props) => (props.first ? 'yellow' : 'green')};
  margin: 5px;
  font-size: 18px;
`;

function Block() {
  return (
    <Container>
      <Input first />
      <Input placeholder="name" type="text" />
      <Input type="password" />
      <Button disabled>Кнопка 1</Button> {/* Первая кнопка заблокирована */}
      <Button warn>Кнопка 2</Button> {/* Вторая кнопка с пропсом warn */}
      <Button type="reset">Кнопка 3</Button> {/* Третья кнопка с типом reset */}
    </Container>
  );
}

export default Block;