import { createContext, useContext, useState } from "react";

const MyContext = createContext();


// provider component bana lo or children pass karo
const MyContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const value = {
        count,
        setCount
    }


    return (
  <MyContext.Provider value={value}>
    {children}
  </MyContext.Provider>
    )
};

// provider LEVEL LOGIC
//ek khud ka function banao jisme useContext hook use ho khud ka hook or waha return kara do context ko
const UseMyContext = () => {
  return useContext(MyContext);
};




export { MyContextProvider, UseMyContext };
