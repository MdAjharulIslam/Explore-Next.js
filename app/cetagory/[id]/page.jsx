import { posts } from "../../search/post.js";

const Page = async({ params }) => {
  const { id } = await params; 

  const fetchData = posts.filter((post) =>
    post.category.toLowerCase().includes(id.toLowerCase())
  );

  return (
    <div>
        {id}
        <br /><br />
      {fetchData.map((post) => (
        <div key={post.id}>
          <li>{post.title}</li>
          <li>{post.category}</li>
        </div>
      ))}
    </div>
  );
};

export default Page;
