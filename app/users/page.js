import Link from "next/link";

export default async function page(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return(
        <div>
            {users.map((user)=>{
                
                   return <ul key={user.id}>
                   <Link href={`/users/${user.id}`}>{user.name}</Link> </ul>
                
            })}
        </div>
    )
}