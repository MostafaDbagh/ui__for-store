import './App.css';
import Layout from './components/layout';
import ProductContainer from './components/ourProduct/porductContainer';
import Background from './components/background/bg';
import Silder from './components/slider/slider';
import SellingForm from './components/sellingFrom/sellFrom';
import Stopwatch from './components/stopWatch/stopWatch';
function App() {


  return (
    <div className="App">
      {/* <Layout> */}
      {/* <Background/> */}
      <Silder />
      {/* <ProductContainer/>
      <SellingForm/>
      </Layout> */}
    </div>
  );
}

export default App;
