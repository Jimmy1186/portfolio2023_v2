import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import MainSide from "./components/layout/MainSide";
import "locomotive-scroll/dist/locomotive-scroll.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainSide>
      <Component {...pageProps} />
    </MainSide>
  );
};

export default MyApp;
