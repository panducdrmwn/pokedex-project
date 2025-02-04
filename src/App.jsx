import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import { useState } from "react";


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <>
      <Navbar onSearch={setSearchTerm}/>
      <QueryClientProvider client={client}>
        <Home searchTerm={searchTerm}/>
      </QueryClientProvider>
    </>
  )
}

export default App
