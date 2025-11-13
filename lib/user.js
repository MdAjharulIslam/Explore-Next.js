export default async function user(){

     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return(
        <div>

        </div>
    )
}