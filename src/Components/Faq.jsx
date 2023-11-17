import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Button, Heading } from "@chakra-ui/react";

export default function Faq() {
  const { datas } = useContext(AuthContext);
  const [open, setOpen] = useState([]);

  const toggleOpen = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <>
    <Heading letterSpacing={"2px"} textAlign={"center"} size={"2xl"} fontFamily={"arial"}>FAQs</Heading>
      {datas.faq.map((data, index) => (
        <div
          key={index}
          style={{
            width: "80%",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#F7F9FA",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <article
            onClick={() => toggleOpen(index)}
            className="question"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1 style={{ color: open === index ? "#E36F70" : "#868789", cursor:"pointer" }}>
              <b>{data?.question}</b>
            </h1>
            <Button
              color={"#AAAFB3"}
              fontSize={"30px"}
              p={0}
              backgroundColor={"#F7F9FA"}
              _hover={{backgroundColor:"#F7F9FA"}}
            >
              {open === index ? "-" : "+"}
            </Button>
          </article>

          {open === index && (
            <article className="answer">
              <p style={{ color: "#868789" }}>{data?.answer}</p>
            </article>
          )}
        </div>
      ))}
    </>
  );
}
