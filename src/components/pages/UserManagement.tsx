/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import { VFC, memo, useEffect, useCallback } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers'
import UserCard from '../organisms/user/UserCard'
import UserDetailModal from '../organisms/user/UserDetailModal'
import { useSelectUser } from '../../hooks/useSelectUser'

const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, loading, users } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()

  useEffect(() => getUsers(), [])

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  }, [users, onSelectUser, onOpen])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  )
})

export default UserManagement

