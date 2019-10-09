import React from 'react'
import { Button, IconAdd } from './../build/index'

export default {
  title: 'Button',
}

const testFN = () => {
	console.log('test')
}

export const Base = () => <Button onClick={testFN}>Hello Button</Button>

// With Icon
export const Icon = () => <Button onClick={testFN} icon={<IconAdd />}>Add</Button>

Icon.story = {
  name: 'With icon'
}

// With primary colour
export const Primary = () => <Button type='secondary'>Primary</Button>

Primary.story = {
	name: 'Secondary'
}

// Inline
export const Inline = () => <div><Button inline>Primary</Button><Button inline type='secondary'>Primary</Button></div>

Inline.story = {
	name: 'Inline'
}