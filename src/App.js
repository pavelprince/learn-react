import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // when we use export default at the bottom line
import { Welcome } from './components/Welcome'; // when we use export 
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';

function App() {
  return (
    <div className="App">
      <ParentComponents/>
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Greet/> */}
      {/* <Greet name="passValue"/> */}
      {/* <Welcome/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
