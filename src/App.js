import './App.css';
import Layout from './components/layout';
import ProductContainer from './components/ourProduct/porductContainer';

function App() {


  return (
    <div className="App">
      <Layout> 
       {/* <Background/>
      <Silder /> */}
      <ProductContainer/>
      {/* <SellingForm/> */}
      </Layout>
    </div>
  );
}

export default App;
