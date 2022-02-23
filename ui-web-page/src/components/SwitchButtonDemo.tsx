import React from 'react'
import Demo from 'app/usage/Demo'
import Stack from 'app/usage/Stack'
import { Switch, SwitchButton } from 'minions-lib'
import CodeHighlight from 'app/usage/CodeHighlight'

const SwitchButtonDemo = () => {
  const [value, setValue] = React.useState<Array<string | number> | string | number>([])
  const handleSetValue = (value: Array<string | number> | string | number): void => {
    setValue(value)
  }
  console.log(value)
  return (
    <Demo>
      <Stack>
        <SwitchButton multiple={false} onChange={handleSetValue} values={value}>
          <Switch value="btn1">Button 1</Switch>
          <Switch value="btn2">Button 2</Switch>
        </SwitchButton>
      </Stack>
    </Demo>
  )
}

export default SwitchButtonDemo
