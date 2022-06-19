import React from "react";
import { useEnemies } from "../hooks/EnemyContext";
import Wrapper from "./wrapper";

interface EnemyCardP {
  list: Enemy[];
}

const EnemyCard = ({ list }: EnemyCardP) => {
  if (!list) return null;
  return (
    <>
      {list.map((v: Enemy) => (
        <>
          <img src={v.img} alt={v.name} />
          <p>{v.bio}</p>
        </>
      ))}
    </>
  );
};

const Home = () => {
  const {
    state: { list },
  } = useEnemies();

  return (
    <>
      <Wrapper>
        <EnemyCard list={list} />
      </Wrapper>
    </>
  );
};

export default Home;
