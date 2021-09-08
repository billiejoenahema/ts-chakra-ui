import { VFC, memo } from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex } from '@chakra-ui/react'

type Props = {
  onClose: () => void
  isOpen: boolean
}

const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props

  return (
    <Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100" >
              <Button w="100%" >TOP</Button>
              <Button w="100%" >ユーザー一覧</Button>
              <Button w="100%" >設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>

  )
})

export default MenuDrawer
