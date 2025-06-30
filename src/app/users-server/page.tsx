type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function userServer() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
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
