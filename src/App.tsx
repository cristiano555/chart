import Container from '@mui/material/Container';
import ChartSection from 'views/ChartSection';

function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '0 20px',
        width: '100%',
      }}
    >
      <ChartSection />
    </Container>
  );
}

export default App;
