import { useSession } from "next-auth/react";
import Head from "next/head";
const HomePage = () => {

  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <>
      {session?.user?.name && <h2 style={{textAlign:"center", marginBottom:"20px"}}>Hello, {session?.user?.name}</h2>}
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      </>
    </div>
  );
};

export default HomePage;
