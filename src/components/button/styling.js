import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'
import {primary, primaryHover, secondary, secondaryHover, colorWhite} from "../../utils/styleguide/globals"

const buttonType = (type, hover = false) => {
	switch (type) {
	case 'primary':
		return hover ? primaryHover : primary
	case 'secondary':
		return hover ? secondaryHover : secondary
	default:
		return hover ? primaryHover : primary
	}
}

const Button = styled(motion.button)`
	display: ${props => props.inline ? 'inline-flex' : 'flex'};
    align-items: center;
    justify-content: center;
	border:0;
	line-height:10px;
	font-size:14px;
	color:${colorWhite};
	border-radius:4px;
	background:${props => buttonType(props.type)};
	cursor:pointer;
	padding:0 0 0 16px;
	
	&:hover {
		background:${props => buttonType(props.type, true)};
	}
	
	&:focus {
		outline:0;
	}
	
	span {
		padding:13px 16px 13px 0;
	}
	
	svg {
		height:20px;
		margin-right:5px;
		fill:${colorWhite};
	}
`

export const ButtonStyled = (props) => {
	const {children} = props
	return (<Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} {...props}>{children}</Button>)
}