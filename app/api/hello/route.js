// app/api/hello/route.js
import { NextResponse } from "next/server";
import { useState } from "react";

export async function GET(req) {
     const {proq}= req.json();
    const product = {
        name:"apple", 
        price:255,
        isStock:true
    }
  return NextResponse.json({ msg: "Hello from App Router API!", success:true , product});
}

// practice fetching data
const MyComponent = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();
      setUsers(data);

      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>...</div>;
};
