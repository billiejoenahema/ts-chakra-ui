import { VFC, memo, useState, useEffect, ChangeEvent } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react'
import { User } from '../../../types/api/user'
import PrimaryButton from '../../atoms/button/PrimaryButton'

type Props = {
  isOpen: boolean
  onClose: () => void
  user: User | null
  isAdmin?: boolean
}

const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin = false } = props
  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setUserName(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onClickUpdate = () => alert('更新ボタンがおされました！')
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4} mx={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={userName} onChange={onChangeUserName} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})

export default UserDetailModal
