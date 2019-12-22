import React, { FunctionComponent } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "./context/auth";

// interface IPrivateRouteProps extends RouteProps {
//   // component: new (props: any) => React.Component;
//   component: any;
//   // any other props that come into the component
// }

// function PrivateRoute({ component: Component, ...rest }: IPrivateRouteProps) {
//   const isAuthenticated = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/" />
//         )
//       }
//     />
//   );
// }

interface IPrivateRouteProps extends RouteProps {
  path: string;
  exact: boolean;
}

const PrivateRoute: FunctionComponent<IPrivateRouteProps> = (props) => {
  const isAuthenticated = useAuth();

  return (
    <Route path={props.path} exact={props.exact}>
      {isAuthenticated ? props.children : <Redirect to="/" />}
    </Route>
  )
}

export default PrivateRoute;