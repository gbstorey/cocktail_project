import { ChakraProvider } from "@chakra-ui/react";
import {RouterProvider} from "react-router-dom";
import router from "../src/lib/router/Routings"
import { theme } from "lib/styles/theme";

const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router}/>
  </ChakraProvider>
);

export default App;

