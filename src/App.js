import { styles } from "./styles";

function App() {

	//для div:
	const wd1 = '200px';
	const br1 = '2px solid brown';
	const pd1 = '10px';
	const ta1 = 'center';

	//для первого p:
	const co1 = 'orangered';
	const fw1 = 'bold';

	//для второго p:
	const fs1 = 'italic';
	const co2 = 'brown';
	
	//для третьего p:
	const bco1 = 'orange';
	const co3 = 'white';

	return (
		<div style = {{
			width: wd1,
			border: br1,
			padding: pd1,
			textAlign: ta1 }}>
			<button style = {{ color: co1, fontWeight: fw1 }}>
				text
			</button>
			<button style = {{ fontStyle: fs1, color: co2 }}>
				text
			</button>
		</div>
	);
}

export default App;