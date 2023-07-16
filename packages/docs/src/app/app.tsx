import { Header } from 'components';
import { Button } from '@mui/joy';

export function App() {
  return (
    <div>
      <Header
        title="Welcome to Joy+"
        subtitle="This is the header component"
        action={
          <Button variant="solid" color="primary">
            Go
          </Button>
        }
      />
    </div>
  );
}

export default App;
