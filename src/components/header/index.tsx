import styled from "styled-components";
import * as React from "react";

const Button = styled.button`
	color: hotpink;
	border: 1px solid hotpink;
	padding: 20px;
	font-family: Candara;
	border-radius: 5px;
`;

export default () => <Button>This is a hotpink button.</Button>;
