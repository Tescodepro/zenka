if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
if (process.env.NODE_ENV !== 'development') {
  console.error = () => { };
}
import { LazyMotion, domAnimation } from "framer-motion";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  );
}

export default MyApp;
