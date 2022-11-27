import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from 'react';

const Home: NextPage = () => {
  const address = useAddress();
  const contractAddress = "0xDdae4c04770c109140525AdA2460f14c71884f40";
  const [input, setInput] = useState("");
  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "getTodo");

  console.log(data);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      {/*<main className={styles.main}>*/}
      {/*  <h1 className={styles.title}>*/}
      {/*    Welcome to <a href="http://thirdweb.com/">thirdweb</a>!*/}
      {/*  </h1>*/}

      {/*  <p className={styles.description}>*/}
      {/*    Get started by configuring your desired network in{" "}*/}
      {/*    <code className={styles.code}>pages/_app.tsx</code>, then modify the{" "}*/}
      {/*    <code className={styles.code}>pages/index.tsx</code> file!*/}
      {/*  </p>*/}

      {/*  <div className={styles.connect}>*/}
      {/*    <ConnectWallet />*/}
      {/*  </div>*/}

      {/*  <div className={styles.grid}>*/}
      {/*    <a href="https://portal.thirdweb.com/" className={styles.card}>*/}
      {/*      <h2>Portal &rarr;</h2>*/}
      {/*      <p>*/}
      {/*        Guides, references and resources that will help you build with*/}
      {/*        thirdweb.*/}
      {/*      </p>*/}
      {/*    </a>*/}

      {/*    <a href="https://thirdweb.com/dashboard" className={styles.card}>*/}
      {/*      <h2>Dashboard &rarr;</h2>*/}
      {/*      <p>*/}
      {/*        Deploy, configure and manage your smart contracts from the*/}
      {/*        dashboard.*/}
      {/*      </p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://portal.thirdweb.com/templates"*/}
      {/*      className={styles.card}*/}
      {/*    >*/}
      {/*      <h2>Templates &rarr;</h2>*/}
      {/*      <p>*/}
      {/*        Discover and clone template projects showcasing thirdweb features.*/}
      {/*      </p>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</main>*/}
      <div>
        {address ? (
          <div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter todo"
            />

            <Web3Button
              contractAddress={contractAddress}
              action={(contract) => contract.call("setTodo", input)}
            >
              Set Todo
            </Web3Button>
          </div>
        ) : (
          <ConnectWallet  />
        )}
        {isLoading ? (
          "Loading..."
        ) : (
          <ul>
            {data?.map((item: string, index: number) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      </main>
    </div>
  );
};

export default Home;
function useContractData(contract: any, arg1: string): { data: any; isLoading: any; } {
    throw new Error("Function not implemented.");
}

