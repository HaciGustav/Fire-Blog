import './App.css';
import GlobalStyle from './GlobalStyle';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <AppRouter />
            <ToastContainer />
            <GlobalStyle />
        </>
    );
}

export default App;
