import { styles } from "./styles";

function App() {
	return (
		<div style = {{
			width: '200px',
			border: '2px solid brown',
			padding: '10px',
			textAlign: 'center' }}>
			<button style={{
				color: 'orangered',
				fontWeight: 'bold' }}>
				text
			</button>
			<button style = {{
				fontStyle: 'brown',
				color: 'brown' }}>
				text
			</button>
		</div>
	);
}

export default App;