import Layout from "../components/Layout";
import YouTube from "react-youtube";

const Videos = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Layout className="flex flex-col  items-center justify-center text-5xl ">
      <div className="mt-4 mb-12 font-bold text-white tracking-widest uppercase">
        Videos
      </div>
      <YouTube videoId="az-ILjdFCe8" opts={opts} />
    </Layout>
  );
};

export default Videos;
