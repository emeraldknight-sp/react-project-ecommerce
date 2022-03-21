import { GlobalStyle } from './styles/global';
import { Toaster } from 'react-hot-toast';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false}/>
      <Routes />
    </>
  );
}

export default App;
