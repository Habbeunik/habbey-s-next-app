import * as React from "react";
import Head from "next/head";

interface metaProps {
	title?: string;
	description?: string;
	keywords?: string;
	children?: Element;
}

export default function Meta(props: metaProps) {
	const { title, description, keywords, children } = props;
	return (
		<div>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				{children}
			</Head>
			<p>Hello world!</p>
		</div>
	);
}
