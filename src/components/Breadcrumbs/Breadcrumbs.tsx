import { Link } from "react-router-dom";
import { routes } from "../../routers/routes";
import useBreadcrumbs  from "use-react-router-breadcrumbs"


export const Breadcrumbs = () => {

    const breadcrumbs = useBreadcrumbs(routes)

    return (
		<div className="breadcrumb">
			<div className="container"> 
				<ul className="breadcrumb__list"> 
					{breadcrumbs.map(({ match, breadcrumb }) => (
						<li className="breadcrumb__item" key={match.pathname}>
							<Link 
								className="page__menu-link"
								to={{
									pathname: match.pathname,
									search: match.params.categoryID ?
										`category=${match.params.categoryID}` : ''
								}}
							>
								{breadcrumb}
							</Link> 
						</li>
					))}
				</ul>
				{breadcrumbs.map(({breadcrumb}, index) => (
					index === breadcrumbs.length - 1 ?
						<h1 className="page__title" key={index}>
							{breadcrumb}
						</h1> : null
				))}
			</div>
		</div>
    )
};