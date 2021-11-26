import Link from "next/link";
import Image from "next/image";
import useAuth from "data/hook/useAuth";

interface AvatarProps {
  className?: string;
}

export default function Avatar(props: AvatarProps) {
  const { user } = useAuth();
  return (
    <Link href="/profile" passHref>
      <img
        src={user?.imageUrl ?? "/vercel.svg"}
        alt="User avatar"
        className={`
          h-10 w-10 rounded-full cursor-pointer
          ${props.className}
        `}
      />
    </Link>
  );
}
