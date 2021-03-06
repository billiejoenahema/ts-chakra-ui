import { VFC, memo } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

type Props = {
  id: number
  imageUrl: string
  userName: string
  fullName: string
  onClick: (id: number) => void
}

const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props

  return (
    <Box
      w="256px"
      h="256px"
      p={4}
      bg="white"
      borderRadius="8px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
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
