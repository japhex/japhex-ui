import React, {useState} from 'react'
import { Modal } from '../src/components/modal'
import {Button} from "../src/components/button"

export default {
  title: 'Modal',
}

export const Base = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenModal = () => {
		setIsOpen(true)
	}

	const handleCloseModal = () => {
		setIsOpen(false)
	}

	return (
		<div>
			<Button onClick={handleOpenModal}>
				Launch modal
			</Button>
			<Modal modalActive={isOpen} handleCloseClick={handleCloseModal}>
				This is a modal
			</Modal>
		</div>
	)
}

// With Sections
export const Sections = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenModal = () => {
		setIsOpen(true)
	}

	const handleCloseModal = () => {
		setIsOpen(false)
	}

	return (
		<div>
			<Button onClick={handleOpenModal}>
				Launch modal
			</Button>
			<Modal modalActive={isOpen} handleCloseClick={handleCloseModal} title={'Modal title'}>
				This is a modal
			</Modal>
		</div>
	)
}

Sections.story = {
	name: 'With sections'
}