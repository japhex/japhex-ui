import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'
import {colorInputBorder, colorInputFocusBorder, colorInputBg} from "../../utils/styleguide/globals"

const Input = styled(motion.input)`
	background-color: ${colorInputBg};
	border: 1px solid ${colorInputBorder};
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0) 0px 2px 6px 0px;
	color: hsl(0, 0%, 10%);
	display: flex;
	font-size: 14px;
	font-weight: 400;
	height: 42px;
	line-height: 20px;
	padding:0 15px;
	margin-bottom: 10px;
	transition-duration: 0.25s;
	transition-property: border;
	transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
	user-select: text;
	width:200px;
	-webkit-box-direction: normal;
	
	&:focus {
		outline:0;
		border:1px solid ${colorInputFocusBorder};
	}
`

export const InputStyled = (props) => <Input {...props} />