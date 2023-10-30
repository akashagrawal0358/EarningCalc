import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {

    const [ updateYoutubeData, setUpdateYoutubeData] = useState({ views: 0, likes: 0, comments: 0 });

    
    // helps in updating context data 
    const updateData = (newdata)=>{

        setUpdateYoutubeData(newdata);
        console.log(newdata);
    }


    return (
        <DataContext.Provider value={{ updateYoutubeData, updateData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
