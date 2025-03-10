import styled from "styled-components";

const Container = styled.div`
	width: 200px;
	border: 2px solid brown;
	padding: 10px;
	text-align: center;
`;

const Button1 = styled.button`
	color: orangered;
	font-weight: bold;
`;

const Button2 = styled.button`
	font-style: italic;
	color: brown;
`;

function App() {
	return (
		<Container>
			<Button1>btn1</Button1>
			<Button2>btn2</Button2>
		</Container>
	);
}

export default App;