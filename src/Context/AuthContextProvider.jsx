import React, { createContext, useRef, useState } from "react";
import allData from "../db.json";

export const AuthContext = createContext();

export default function AuthContextPovider({ children }) {
  const [datas, setDatas] = useState(allData);
  const [prodName, setProdName] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const products = useRef(datas.products);
  const [cartData, setCartData] = useState([]);
  const [details, setDetails] = useState(datas.products[0]);
  const [finalData, setFinalData] = useState([]);
  // console.log(prodName);
  // console.log(details);
  console.log("finalData :" ,finalData)

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        products,
        datas,
        setDatas,
        prodName,
        setProdName,
        cartData,
        setCartData,
        details,
        setDetails,
        finalData,
        setFinalData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
