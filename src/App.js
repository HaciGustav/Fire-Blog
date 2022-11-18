import GlobalStyle from './GlobalStyle';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <AppRouter />
            <ToastContainer />
            <GlobalStyle />
        </AuthProvider>
    );
}

export default App;
