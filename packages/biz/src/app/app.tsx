import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import Home from './home';
import Quote from './Quote';

export function App() {
  return (
    <Layout orientation="vertical">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote/*" element={<Quote />} />
      </Routes>
    </Layout>
  );
}

export default App;
