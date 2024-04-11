// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';

function Home() {
  return <h1>Home 222</h1>;
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/orders" element={<OrderList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
