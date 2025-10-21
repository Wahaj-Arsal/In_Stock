import React from "react";
import "./Searchbar.scss";

const Searchbar = () => {
	return (
		<>
			<form action="search" className="searchbar">
				<label className="searchbar__label" htmlFor="searchbar"></label>
				<input
					type="search"
					className="searchbar__input"
					placeholder="Search..."
				/>
				<button className="searchbar__button"></button>
			</form>
		</>
	);
};

export default Searchbar;
