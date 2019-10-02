import * as React from "react";
import styled from 'styled-components';
import IconClose from './../../utils/icons/icon-close.svg'
import { motion } from 'framer-motion'
import {colorWhite, colorGrey, colorDropShadow, colorModalBg} from "../../utils/styleguide/globals"


export const ModalContainer = styled.div`
	display: flex;
	background:${colorModalBg};
	align-items: center;
	justify-content: center;
	position: absolute;
	top:0;
	left:0;
	width:100vw;
	height:100vh;
	font-family:arial;
`

const Modal = styled(motion.div)`
	display: flex;
	flex-direction:column;
	width:30vw;
	height:60vh;
	background:${colorWhite};
	border-radius: 3px 3px 5px 5px;
	box-shadow:${colorDropShadow} 0px 1px 4px;
`

const IconCloseBase = styled(IconClose)`
	fill:#000;
	width:30px;
	height:30px;
	cursor:pointer;
	margin-left:auto;
`

export const ModalContent = styled.div`
	padding:0 15px 15px 15px;
`

export const ModalHeader = styled.header`
	display: flex;
	padding:5px 5px 0;
`

export const ModalTitle = styled.div`
	margin:10px;
	border-bottom:1px solid ${colorGrey};
	font-weight:bold;
	width:100%;
`

export const ModalStyled = (props) => <Modal {...props} />
export const IconCloseStyled = (props) => <IconCloseBase {...props} />