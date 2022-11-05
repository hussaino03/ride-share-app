import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateDriverRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }));

  return auth && !auth?.user.isDriver ? <Route {...rest} /> : <Redirect to="/passenger" />;
};

export default PrivateDriverRoute;