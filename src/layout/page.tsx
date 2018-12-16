import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./styles/normalise.css";

export default function pageLayout(WrappedComponent) {
	return function Page(props) {
		return (
			<React.Fragment>
				<Header />
				<WrappedComponent {...props} />
				<Footer />
			</React.Fragment>
		);
	};
}
