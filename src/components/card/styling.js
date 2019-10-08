import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'

const Card = styled(motion.div)`
	font-family:arial;
	display: flex;
	flex-direction:column;
    align-items: center;
	flex: 0 1 calc(20% - 10px);
	border:1px solid #d2d8df;
	border-radius:5px;
    margin: 5px;
    box-sizing:border-box;
`

export const Header = styled.div`
	display: flex;
	flex-direction:column;
	padding:5px;
	border-radius:5px 5px 0 0;
	box-sizing:border-box;
    align-items: center;
    justify-content: center;
	width:100%;
	background:#f5f7fa;
	border-bottom:1px solid #d2d8df;
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:5px;
	width: 100%;
	background:#3e4754;
    box-sizing: border-box;
    border-radius:0 0 5px 5px;
`

export const Content = styled.div`
	display: flex;
	padding:5px;
	box-sizing:border-box;
    align-items: center;
    justify-content: center;
	width:100%;
`

export const CardStyled = (props) => {
	const {children} = props
	return (<Card whileHover={{ scale: 1.05 }} {...props}>{children}</Card>)
}