import Link from 'next/link';


interface Props {
  id: string;
  name: string | null;
  age: number | null;
}

export default function UserCard({ id, name, age }: Props) {
  return (
    <div>
      <div>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
