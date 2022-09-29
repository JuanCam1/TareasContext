import TareaState from './context/TareaState';
import Panel from './components/Panel';

function App() {
  return (
    <TareaState>
      <Panel />
    </TareaState>
  );
}

export default App;
