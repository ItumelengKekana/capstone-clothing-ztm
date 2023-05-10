import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import './navigation.styles.scss'

function Navigation() {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="nav-container" to={"/"}>
					<CrwnLogo />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to={"/shop"}>SHOP</Link>
					<Link className="nav-link" to={"/auth"}>SIGN IN</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}

export default Navigation;
