
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Manubar from './Components/Manubar/Manubar';
import Test from './Components/Test/Test';

function App() {
  const count = () => {
    console.log('Hello paici tore');
  }
  return (
    <div className="App">
 

   <Manubar></Manubar>

{/* <h1>0</h1> */}
<Test count={count}></Test>

    </div>
  );
}

export default App;
