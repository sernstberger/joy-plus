import Flow from './flow';
import { Route, Routes } from 'react-router-dom';

import { Header, Layout } from 'components';
import { Button } from '@mui/joy';
import Home from './home';

export function App() {
  return (
    <Layout orientation="vertical">
      <Header
        title="hello"
        subtitle="Things can go here"
        action={<Button>cool</Button>}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/*" element={<Flow />} />
      </Routes>

      {/* <Home /> */}
    </Layout>
  );
}

export default App;
