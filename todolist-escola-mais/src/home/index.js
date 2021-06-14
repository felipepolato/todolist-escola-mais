import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { fetchUsers } from "../api/api";

/////styled//////
import {
  Container,
  ContainerTwo,
  Text,
  Checkbox,
  Line,
  DivCheckbox,
} from "./styled";

function Home() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => setUsersList(users));
  }, []);

  console.log("array", usersList);

  return (
      <center>
    <Container>
      <ContainerTwo>
        {usersList.map((item) => {
          return (
            <Text key={item.id}>
              <Link class='userName' to={`/todos/${item.id}`}>{item.name}</Link>
            </Text>
          );
        })}
        </ContainerTwo>
    </Container>
      </center>
  );
}

export default Home;
