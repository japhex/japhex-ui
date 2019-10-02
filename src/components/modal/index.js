import React, {useState, useEffect} from 'react'
import {ModalContainer, ModalStyled, IconCloseStyled} from './styling'

export const Modal = (props) => {
	const {modalActive, children, handleCloseClick} = props

	return (
		modalActive &&
		<ModalContainer>
			<ModalStyled {...props}>
				<IconCloseStyled onClick={handleCloseClick} />
				{children}
			</ModalStyled>
		</ModalContainer>
	)
}