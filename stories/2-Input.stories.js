import React from 'react'
import { Input } from '../src/components/input'
import IconSearch from '../src/utils/icons/icon-search.svg'

export default {
  title: 'Input',
}

export const Base = () => <Input />

// With Icon
export const Icon = () => <Input icon={<IconSearch />} />

Icon.story = {
  name: 'With icon'
}