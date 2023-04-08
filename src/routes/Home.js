import Categories from "../components/Categories";
import styled from "styled-components";
import Todos from "../components/Todos";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
`;

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <Container>
      <Categories categories={categories} />
      <Todos categories={categories} />
    </Container>
  );
}

export default Home;
