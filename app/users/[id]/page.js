export default async function page(params){
    const {id} = params
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json();
    console.log(user)
    return(
<div>
    <h1>{user.email}</h1>
    <p>{user.name}</p>
</div>
    )
}