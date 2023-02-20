import Head from "next/head";

const PrivateHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content="Sdasdasdasdasd" />
    </Head>
  );
};

export default PrivateHead;

PrivateHead.defaultProps = {
  title: "Stefan Traicu",
};
