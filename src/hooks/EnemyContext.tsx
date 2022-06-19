import React, { createContext, useContext, useEffect, useState } from "react";
import env from "../env";
import axios from "axios";
import { EnemyList } from "./data";

interface EnemyState {
  list: Enemy[];
}

type EnemyContextProps = {
  state: EnemyState;
  getListEnemies: () => Promise<void>;
  getEnemy: (id: string) => Enemy | undefined;
};

interface ContextProviderProps {
  children: React.ReactNode;
}

const EnemyContext = createContext<EnemyContextProps | undefined>(undefined);

export const EnemyContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [list, setList] = useState<Enemy[] | []>([]);

  useEffect(() => {
    getListEnemies();
  }, []);

  const getListEnemies = async () => {
    const res = await axios.get(`${env.API_URL}/enemies`);
    // setList(res.data);
    setList(EnemyList);
  };

  const getEnemy = (id: string) => {
    try {
      const res = list.filter((e: any) => e.id === id);
      return res[0];
    } catch (e) {
      console.log("Can't get enemy, " + e);
    }
  };

  return (
    <EnemyContext.Provider
      value={{ state: { list }, getListEnemies, getEnemy }}
    >
      {children}
    </EnemyContext.Provider>
  );
};

export function useEnemies() {
  const context = useContext(EnemyContext);
  if (context === undefined) {
    throw new Error("Context must be used within a provider");
  }
  return context;
}
