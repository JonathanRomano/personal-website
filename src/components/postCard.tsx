import Image from "next/image";

interface CardProps {
  post: {
    title: string;
    img: string;
    description: string;
  };
}

const PostCard = ({ post }: CardProps) => {
  return (
    <div className="px-4 pb-10 pt-4 w-full flex">
      <div className="relative w-1/2 aspect-square overflow-hidden">
        <Image
          className="transition-transform duration-300 hover:scale-105"
          src={post.img}
          alt="test"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="w-1/2 flex flex-col pl-6">
        <h1 className="pt-6 text-white font-bold uppercase text-1xl">
          {post.title}
        </h1>
        <p className="text-secondary pt-4 text-justify">{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
