import React from 'react'
import { Portal } from 'react-portal';
import {ModalContainer, ModalStyled, ModalHeader, ModalContent, ModalTitle, IconCloseStyled} from './styling'

export const Modal = (props) => {
	const {modalActive, title, customClose, children, handleCloseClick} = props

	return (
		modalActive &&
		<Portal>
			<ModalContainer>
				<ModalStyled {...props}>
					<ModalHeader>
						{title && <ModalTitle>{title}</ModalTitle>}
						{!customClose && <IconCloseStyled onClick={handleCloseClick} />}
					</ModalHeader>
					<ModalContent>
						{children}
					</ModalContent>
				</ModalStyled>
			</ModalContainer>
		</Portal>
	)
}