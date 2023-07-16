import { Header } from 'components';
import { Button } from '@mui/joy';

export function App() {
  return (
    <div>
      <Header
        title="Welcome to Header!"
        subtitle="This is the Header component"
        action={
          <div>
            <Button variant="outlined" color="neutral">
              Submit
            </Button>
            <Button variant="solid" color="primary">
              Go
            </Button>
          </div>
        }
      />
    </div>
  );
}

export default App;
