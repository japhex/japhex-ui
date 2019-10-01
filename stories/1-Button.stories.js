import React from 'react'
import { Button } from '../src/components/button'
import IconAdd from '../src/utils/icons/icon-add.svg'

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
export const Primary = () => <Button primary='hsl(262, 43%, 51%)' primaryHover='hsl(261, 47%, 58%)'>Primary</Button>

Primary.story = {
	name: 'With primary colour'
}