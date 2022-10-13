import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {
    const {query}=useRouter();
    console.log({query})
  return (
    <h1>Dynamic Catch All Routes Path</h1>
  )
}

export default Index