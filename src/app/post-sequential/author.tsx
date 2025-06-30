type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: Author = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written By :{""}
      <span>{author.name}</span>
    </div>
  );
}
