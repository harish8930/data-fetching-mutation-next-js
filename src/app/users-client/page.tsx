"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UserClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed To Fetch Userss");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading .....</p>;
  }

  if (error) {
    return <p>Something Went Wrong...</p>;
  }
  return (
    <>
      <ul className="space-y-4">
        {users.map((data) => (
          <li
            key={data.id}
            className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 shadow-sm"
          >
            <div>
              <span className="font-semibold">User ID:</span> {data.id}
            </div>
            <div>
              <span className="font-semibold">Username:</span> {data.username}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {data.email}
            </div>
            <div>
              <span className="font-semibold">Phone:</span> {data.phone}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
