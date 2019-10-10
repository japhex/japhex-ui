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
				<p>Are you sure you want to delete this gig?</p>
				<div>
					<Button inline>
						Delete
					</Button>
					<Button type='secondary' inline>
						Cancel
					</Button>
				</div>
			</Modal>
		</div>
	)
}

Sections.story = {
	name: 'With sections'
}