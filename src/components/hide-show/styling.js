import * as React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion'

const MoreText = styled(motion.div)`
	display: ${props => props.inline ? 'inline-flex' : 'flex'};
    align-items: center;
`

export const MoreTextStyled = (props) => {
	const {children} = props
	return (<MoreText {...props}>{children}</MoreText>)
}