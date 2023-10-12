import Link from "next/link"
import Pagination from "./pagination"
export default async function User() {
  let perPage = 5
 
  
  const response = await fetch(`https://www.melivecode.com/api/users?page=1&per_page=${perPage}`)
  const res = await response.json()
  const users = await res.data
  return (
    <>

      <div className='border w-full mt-2'>
        <div className="flex justify-between items-center bg-slate-600 p-3">

          <div className="flex justify-center items-center w-1/3">
            
            <Link className="bg-blue-500 rounded-full w-6 flex justify-center items-center m-1" href="/user">1</Link>
            <Link className="bg-blue-500 rounded-full w-6 flex justify-center items-center m-1" href="/user/page2">2</Link>
            <Link className="bg-blue-500 rounded-full w-6 flex justify-center items-center m-1" href="/user/page3">3</Link>
            
        </div>

          <p className="w-1/3 text-3xl flex items-center justify-center">user page</p>
         <Pagination></Pagination>
        </div>

        <div className="flex justify-center flex-wrap">
          {users.map((user) => (
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full" key={user.id}>
              <Link href={`/user/${user.id}`} className="border m-1 flex flex-col items-center justify-center">
                <img className="w-20" src={user.avatar} alt="" />
                <p>{user.fname}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}