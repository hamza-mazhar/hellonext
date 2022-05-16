import type { GetServerSideProps, NextPage } from "next";
import styles from "../styles/Home.module.css";

type Data = {
  name: String;
};

const Home: NextPage<Data> = ({ name }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{name}</h1>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch("http://localhost:3000/api/hello");
  const data: Data = await result.json();
  return {
    props: {
      name: data.name,
    },
  };
};

export default Home;
