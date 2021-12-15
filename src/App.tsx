import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { ProductProvider } from './containers';
import { SingleProduct } from './views/Product';
import { ProductList } from './views/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Web store application</h1>

      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
