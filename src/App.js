import React from 'react';
import styled from 'styled-components';

const DIVA = styled.div`
  width: 150px;
  height: 150px;
  background-color: yellow;
  border: 2px solid black; 
`;

const DIVB = styled(DIVA)`
  background-color: green; 
  border-width: 3px; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

function App() {
  return (
    <Container>
      <DIVA /> {/* Первый див */}
      <DIVB /> {/* Второй див */}
      <DIVA /> {/* Третий див */}
    </Container>
  );
}

export default App;
