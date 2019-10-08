import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'
import {primary, primaryHover, secondary, secondaryHover, colorWhite} from "../../utils/styleguide/globals"

const capsuleType = (type, hover = false) => {
	switch (type) {
	case 'primary':
		return hover ? primaryHover : primary
	case 'secondary':
		return hover ? secondaryHover : secondary
	default:
		return hover ? primaryHover : primary
	}
}

const Capsule = styled(motion.button)`
	display: inline-flex;
    align-items: center;
    justify-content: center;
	border:0;
	line-height:10px;
	font-size:14px;
	color:${colorWhite};
	border-radius:4px;
	background:${props => capsuleType(props.type)};
	cursor:pointer;
	padding:${props => props.iconOnly ? '1px 3px' : '3px'};
	
	&:hover {
		background:${props => capsuleType(props.type, true)};
	}
	
	&:focus {
		outline:0;
	}
	
	svg {
		height:20px;
		fill:${colorWhite};
	}
`

export const CapsuleStyled = (props) => {
	const {children} = props
	return (<Capsule whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} {...props}>{children}</Capsule>)
}