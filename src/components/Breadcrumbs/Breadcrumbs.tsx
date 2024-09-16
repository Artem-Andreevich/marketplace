import { NavLink } from "react-router-dom";
import useBreadcrumbs  from "use-react-router-breadcrumbs"
import { routes } from "../../routers/routes";

export const Breadcrumbs = () => {

    const breadcrumbs = useBreadcrumbs(routes)
    console.log(breadcrumbs)
    return (
        <>
        {breadcrumbs.map(({ match, breadcrumb }) => (
            // console.log(breadcrumb)
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}
          </NavLink>
        ))}
      </>
    )
};