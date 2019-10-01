import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'

const Input = styled(motion.input)`
	background-color: rgb(41, 41, 41);
	border: 1px solid rgb(41, 41, 41);
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0) 0px 2px 6px 0px;
	color: rgb(204, 204, 204);
	display: flex;
	font-size: 14px;
	font-weight: 400;
	height: 42px;
	line-height: 20px;
	padding:0 15px;
	margin-bottom: 10px;
	transition-duration: 0.25s;
	transition-property: border, boxShadow, backgroundColor;
	transition-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1);
	user-select: text;
	width:200px;
	-webkit-box-direction: normal;
	
	&:focus {
		outline:0;
		background-color: rgb(0, 0, 0);
		border: 1px solid rgb(40, 69, 122);
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`

export const InputStyled = (props) => <Input {...props} />