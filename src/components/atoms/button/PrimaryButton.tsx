import { VFC, memo, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props

  return (
    <Button bg="teal" color="white" _hover={{ opacity: 0.8 }} >
      {children}
    </Button>
  )
})

export default PrimaryButton
