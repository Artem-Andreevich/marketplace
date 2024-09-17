import { NavLink } from "react-router-dom";
import useBreadcrumbs  from "use-react-router-breadcrumbs"
import { routes } from "../../routers/routes";

export const Breadcrumbs = () => {

    const breadcrumbs = useBreadcrumbs(routes)
    console.log(breadcrumbs)
    return (
        <>
        {breadcrumbs.map(({ match, breadcrumb }) => (
			<NavLink key={match.pathname} to={match.pathname}>
				{breadcrumb}
			</NavLink>
			// !match.route?.props ? 
			// 	<NavLink key={match.pathname} to={match.pathname}>
			// 		{breadcrumb}
			// 	</NavLink> : 
			// 	<NavLink key={match.pathname} to={{pathname: match.pathname, search: `123`}}>
			// 		{breadcrumb}
			// 	</NavLink>

			// <NavLink 
			// 	key={match.pathname} 
			// 	to={{
			// 		pathname: match.pathname,
			// 		search: match.route?.props ?
			// 			`${match.route.props.props}` : ''
			// 	}}
			// >
			// 	{breadcrumb}
			// </NavLink> 
        ))}
      </>
    )
};