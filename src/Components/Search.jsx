import { ChevronDownIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Link } from "react-router-dom";

export default function Search() {
  const { datas } = useContext(AuthContext);
  const [categories, setCategories] = useState({});
  const [count, setCount] = useState(0);
  const catArr = [];
  const [flag, setFlag] = useState(false);
  const { prodName, setProdName } = useContext(AuthContext);

  for (let a in categories) {
    catArr.push(a);
  }
  useEffect(() => {
    let interval = setInterval(() => {
      if (count < catArr.length - 1) {
        setCount((prev) => {
          return prev + 1;
        });
      } else {
        setCount(() => {
          return 0;
        });
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [count,flag]);

  function handleClick() {
    setFlag(false);
    
  }
  function handleInputBar() {
    setFlag(true);
  }
  function handleChange(e) {
      setProdName(e.target.value);
  }
  useEffect(() => {
    datas.products.map((ele) => {
      setCategories((prev) => {
        return { ...prev, [ele.category]: ele.category };
      });
    });
  }, []);
  // console.log(categories);
  // console.log(datas.products);
  // console.log(Date.now(),Math.random())
  // console.log(prodName);
  return (
    <>
      <Link to={"/products"}>
        <InputGroup w={"100%"}>
          <InputLeftElement pointerEvents="none" borderRadius={"20px"}>
            <SearchIcon color="black" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder={"Search" + "  " + catArr[count]}
            borderRadius={"20px"}
            backgroundColor={"#F4F5F7"}
            color={"black"}
            border={"none"}
            fontSize={"16px"}
            fontWeight={"bold"}
            onClick={handleInputBar}
            onChange={handleChange}
            value={prodName}
          />

          {flag && (
            <InputRightElement borderRadius={"20px"}>
              <CloseIcon
                padding={"6px"}
                onClick={handleClick}
                color="black"
                backgroundColor={"white"}
                w={6}
                h={6}
                borderRadius={"10px"}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </Link>
    </>
  );
}
