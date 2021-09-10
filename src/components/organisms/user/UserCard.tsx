import { VFC, memo, ReactNode } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

type Props = {
  imageUrl: string
  userName: string
  fullName: string
}

const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props

  return (
    <Box
      bg="white"
      borderRadius="8px"
      h="256px"
      p={4}
      shadow="md"
      w="256px"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          alt={userName}
          borderRadius="full"
          boxSize="160px"
          m="auto"
          src={imageUrl}
        />
        <Text fontSize="lg" fontWeight="bold" >{userName}</Text>
        <Text fontSize="sm" color="gray" >{fullName}</Text>
      </Stack>
    </Box>
  )
})

export default UserCard
