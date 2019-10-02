import React from 'react'
import {ModalContainer, ModalStyled, ModalContent, IconCloseStyled} from './styling'

export const Modal = (props) => {
	const {modalActive, customClose, children, handleCloseClick} = props

	return (
		modalActive &&
		<ModalContainer>
			<ModalStyled {...props}>
				{!customClose && <IconCloseStyled onClick={handleCloseClick} />}
				<ModalContent>
					{children}
				</ModalContent>
			</ModalStyled>
		</ModalContainer>
	)
}