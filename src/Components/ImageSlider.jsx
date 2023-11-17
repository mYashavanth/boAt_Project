import { useContext, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import styles from "./ImageSlider.module.css";
import { AuthContext } from "../Context/AuthContextProvider";

export default function ImageSlider() {
  const { datas } = useContext(AuthContext);
  const [page, setPage] = useState(0);

  function handleAddPage() {
    if (page > datas.sliderImages.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  }
  function handleRemovePage() {
    if (page <= 0) {
      setPage(5);
    } else {
      setPage(page - 1);
    }
  }

  if (page > datas.sliderImages.length - 1) {
    setPage(0);
  }
  useEffect(() => {
    let interval = setInterval(() => {
      setPage((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  //   console.log(datas.sliderImages);
  //   console.log(page);

  return (
    <>
      <Box>
        <div>
          <img src={datas.sliderImages[page]} alt="" width={"100%"} />
        </div>
        <div>
          <button className={styles.leftBtn} onClick={handleRemovePage}>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/arrow_homepage.svg?v=1685355827"
              alt=""
            />
          </button>
        </div>
        <div>
          <button className={styles.rightBtn} onClick={handleAddPage}>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/arrow_homepage.svg?v=1685355827"
              alt=""
            />
          </button>
        </div>
      </Box>
    </>
  );
}
