

 function Users({users}) {
  return (<>
    <div>users</div>
        {
            users.map(user =>{
                return (
                    <div key={user.id}>{user.name}
                    <p>{user.phone}</p>
                    </div>
                    
                )
            })
        }
    </>
  )
}
export default Users

 export async function getStaticProps() {
 const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
   console.log(data);
    return {
        props:{
            users:data,
        }
    }
 }