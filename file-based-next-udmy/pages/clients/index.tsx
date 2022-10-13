import Link from "next/link"
import { useRouter } from "next/router"

const Index = () => {

  const {query}=useRouter();

  const clients=[
    {id:'max',name:'Max Tenisen'},
    {id:'Ben',name:'Ben 11'},
    {id:'Gwen',name:'Gwen 11'},
  ]
  return (
    <div>
      <ul>
        {
          clients.map(({id,name},index)=>( <li key={index}><Link href={{
            pathname:'/clients/[id]',
            query:{id}
          }}>{name}</Link></li>))
        }
       
      </ul>
    </div>
  )
}

export default Index