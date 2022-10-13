import { useRouter } from 'next/router';
import React from 'react'

const Index = () => {
    const router=useRouter();
  console.log({router});

  const Navigator=() => {
    router.push({
        pathname:'/clients/[id]/[projectid]',
        query:{id:'ben',projectid:'villgags'}
    })
  }

  return (
    <div>
        <h2>Single Client specific client</h2>
        <button onClick={Navigator}>Navigate</button>
    </div>
  )
}

export default Index