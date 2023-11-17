import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Link } from "react-router-dom";

export default function CategoryMenu() {
  const { datas, prodName, setProdName } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState({});
  const arr = [];
  // console.log(datas)
  useEffect(() => {
    datas.products.map((ele) => {
      setCategories((prev) => {
        return {
          ...prev,
          [ele.category]: { img: ele.img, category: ele.category, id: ele.id },
        };
      });
    });
  }, []);
  for (let a in categories) {
    arr.push(categories[a]);
  }

  // console.log(categories);
  // console.log(arr);
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        _hover={{
          textDecoration: "underline",
          fontWeight: "bold",
        }}
        aria-label="Courses"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        height={"100%"}
      >
        Categories <ChevronDownIcon />
      </MenuButton>
      <MenuList
        mt={-2}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        display={"grid"}
        gridTemplateColumns={"repeat(5,250px)"}
        gap={2}
      >
        {arr.map((ele) => (
          <Link to={'/products'} key={ele.id}>
            <MenuItem
              _hover={{
                color: "gray",
              }}
              backgroundColor={"white"}
              
              onClick={() => setProdName(ele.category)}
            >
              <img
                src={ele.img}
                alt=""
                width={"60px"}
                style={{ borderRadius: "50%", marginRight: "8px" }}
              />
              <p style={{ fontSize: "13px" }}>{ele.category}</p>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
}
