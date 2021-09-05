import { ChakraProvider, Button } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  )
}

export default App
