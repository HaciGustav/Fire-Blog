import './App.css';
import GlobalStyle from './GlobalStyle';
import AppRouter from './router/AppRouter';

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
