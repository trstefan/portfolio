import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head title={`ST | ${pageProps.title}`}></Head>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;
