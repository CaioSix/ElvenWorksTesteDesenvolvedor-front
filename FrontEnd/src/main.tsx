import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react';


const clerk_key = import.meta.env.VITE_CLERK_KEY;

console.log(clerk_key)

if(!clerk_key){
  throw new Error("CHave nao foi encontrada!")
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ClerkProvider publishableKey={clerk_key}>
        <App />
      </ClerkProvider>
    </StrictMode>,
)
