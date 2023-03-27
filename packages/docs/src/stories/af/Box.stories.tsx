import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@acordo-fechado/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <text>Teste</text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  parameters: {
    docs: {
      description: {
        story: 'Instruções',
      },
    },
  },
}
