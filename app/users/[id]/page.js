export default async function page({params}){
    const {id} = await params
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json();
    
    return(
<div>
    <h1>{user.email}</h1>
    <p>{user.name}</p>
</div>
    )
}