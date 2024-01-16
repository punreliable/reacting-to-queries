import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { QueryClient, QueryClientProvider, useQuery, useMutation } from '@tanstack/react-query'

const queryClient = new QueryClient()

const getTodos = async () => {

  let output = true
  return output
}

// const query = useQuery({
//   queryKey: ['todos'],
//   queryFn: getTodos
// })

// const postTodo = async () => {
//   let output = true
//   return output
// }

// const mutation = useMutation({
//   mutationFn: postTodo,
//   onSuccess: () => {
//     console.log(queryClient)
//   },
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
