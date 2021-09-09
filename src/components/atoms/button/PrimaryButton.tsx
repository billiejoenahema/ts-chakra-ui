import { VFC, memo, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}

const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props

  return (
    <Button bg="teal"
      color="white"
      disabled={disabled || loading}
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      onClick={onClick}>
      {children}
    </Button>
  )
})

export default PrimaryButton
