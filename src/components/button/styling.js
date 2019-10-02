import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'
import {primary, primaryHover, colorWhite} from "../../utils/styleguide/globals"

const Button = styled(motion.button)`
	display: flex;
    align-items: center;
    justify-content: center;
	border:0;
	line-height:10px;
	font-size:14px;
	color:${colorWhite};
	border-radius:4px;
	background:${props => props.primary ? props.primary : primary};
	cursor:pointer;
	padding:0 0 0 16px;
	
	&:hover {
		background:${props => props.primaryHover ? props.primaryHover : primaryHover};
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
	return (<Button whileHover={{ scale: 1.05 }} {...props}>{children}</Button>)
}