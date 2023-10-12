export default async function User({ params }) {
  const response = await fetch(`https://www.melivecode.com/api/users/${params.userId}`)
  const res = await response.json()
  const user = res.user
  console.log(params);
  return (
    <>
      <div className='border w-full mt-2'>
        <p className="text-2xl font-semibold">user {user.id} details :</p>
        <div className="p-3">
          <img className="w-20" src={user.avatar} alt="" />
          <p>fname : {user.fname}</p>
          <p>lname : {user.lname}</p>
          <p>email : {user.email}</p>
          <p>username : {user.username}</p>
        </div>
      </div>
    </>
  )
}