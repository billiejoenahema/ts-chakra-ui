import { Wrap, WrapItem } from '@chakra-ui/react'
import { VFC, memo } from 'react'
import UserCard from '../organisms/user/UserCard'

const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }} >
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="ユーザーネーム"
          fullName="フルネーム"
        />
      </WrapItem>

    </Wrap>
  )
})

export default UserManagement
