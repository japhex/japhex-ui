import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'
import {colorInputBorder, colorInputFocusBorder, colorInputBg} from "../../utils/styleguide/globals"

const Input = styled(motion.input)`
	display: inline-flex;
	background-color: ${colorInputBg};
	border: 1px solid ${colorInputBorder};
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0) 0px 2px 6px 0px;
	color: hsl(0, 0%, 10%);
	font-size: 14px;
	font-weight: 400;
	height: 35px;
	line-height: 20px;
	padding:0 15px;
	transition-duration: 0.25s;
	transition-property: border;
	transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
	user-select: text;
	width:100%;
	-webkit-box-direction: normal;
	box-sizing:border-box;
	
	&:focus {
		outline:0;
		border:1px solid ${colorInputFocusBorder};
	}
`

export const InputStyled = (props) => <Input {...props} />