import { Link, NavLink } from "react-router-dom";
import useBreadcrumbs  from "use-react-router-breadcrumbs"
import { routes } from "../../routers/routes";

export const Breadcrumbs = () => {

    const breadcrumbs = useBreadcrumbs(routes)

    return (
        <>
        {breadcrumbs.map(({ match, breadcrumb }) => (
			<Link 
				key={match.pathname} 
				to={{
					pathname: match.pathname,
					search: match.params.categoryID ?
						`category=${match.params.categoryID}` : ''
				}}
			>
				{breadcrumb}
			</Link> 
        ))}
      </>
    )
};