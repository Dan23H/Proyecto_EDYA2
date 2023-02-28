import './App.css';
import { Login, SignIn, Mensajes } from './pages';
import { Notificaciones, Principal, Buscador} from './componentes';

function App() {
  return (
    <>
      <Login />
      <SignIn />
      <Mensajes />
      <Notificaciones />
      <Principal />
      <Buscador />
    </>
  );
}

export default App;
