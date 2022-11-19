import { createContext, useContext } from 'react';
import { getAllArticles } from '../helpers/firebase';

const dataContext = createContext();

const DataProvider = ({ children }) => {
    const dashboardArticles = getAllArticles();
    return (
        <dataContext.Provider value={{ dashboardArticles }}>
            {children}
        </dataContext.Provider>
    );
};
export const useDataContext = () => {
    return useContext(dataContext);
};
export default DataProvider;
