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
  color: white;
  background-color: #007bff; 
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed; 
  }
`;

function Block() {
  return (
    <Container>
      <Button disabled>Кнопка 1</Button> {/* Первая кнопка заблокирована */}
      <Button>Кнопка 2</Button>
      <Button type="reset">Кнопка 3</Button> {/* Третья кнопка с типом reset */}
    </Container>
  );
}

export default Block;