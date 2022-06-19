import { Suspense } from "react";
import { LinearLoader } from "./Loader";
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LinearLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
