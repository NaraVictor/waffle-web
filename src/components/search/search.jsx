import searchIcon from "../../static/svg/icons/nav/search-blue.svg";
import React from "react";

class Search extends React.Component {
	constructor() {
		super();
		this.srch = React.createRef();
	}

	activateInput = () => {
		this.srch.current.focus();
	};

	search = (e) => {
		if (e.which === 13) {
			alert("the enter key is pressed.... search");
		}
	};

	render() {
		return (
			// <form action="">
			<div className="search" onClick={() => this.activateInput()}>
				<img
					src={searchIcon}
					alt=""
					className="search__icon"
					onClick={() => this.activateInput()}
				/>
				<input
					ref={this.srch}
					type="text"
					name="q"
					className="search__input"
					placeholder="search waffle"
					onClick={() => this.activateInput()}
					onKeyPress={(e) => this.search(e)}
				/>
			</div>
			// </form>
		);
	}
}

export { Search };
