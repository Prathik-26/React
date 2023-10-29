import { ChakraProvider } from "@chakra-ui/react";
import P1 from "./pages/P1";
import P3 from "./pages/P3";
import P2 from "./pages/P2";

function App() {
  return(
    <ChakraProvider>
      <P1></P1>
      {/* <P2></P2> */}
      {/* <P3></P3> */}
    </ChakraProvider>
  )
}
export default App;