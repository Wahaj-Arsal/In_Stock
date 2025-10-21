import React, { useState } from "react";
import logo from "../../assets/logo/InStock-Logo.svg"; //using svg to adjust to viewport.
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	const [link, setLink] = useState("");

	console.log(window.location.href);
	return (
		<header className="header__main">
			<div className="header__flex">
				<Link to="/">
					<img className="header__logo" src={logo} alt="the instock logo" />
				</Link>
				<div className="header__button-flex">
					<Link to="/warehouse">
						<button
							onClick={() => setLink("warehouse")}
							className={
								link === "warehouse"
									? "header__button-active"
									: "header__button"
							}>
							warehouses
						</button>
					</Link>
					<Link to="/inventory">
						<button
							onClick={() => setLink("inventory")}
							className={
								link === "inventory"
									? "header__button-active"
									: "header__button"
							}>
							inventories
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
