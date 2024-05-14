interface CardProps {
  cardDictionary: {
    title: string;
    description: string;
    icon: React.ReactNode;
    bgColor: string;
  };
}

const Card = ({ cardDictionary }: CardProps) => {
  return (
    <div className="bg-neutral w-full h-full p-10">
      <div className="flex items-center gap-4">
        <div
          className={`rounded-md aspect-square p-2`}
          style={{ backgroundColor: cardDictionary.bgColor }}
        >
          {cardDictionary.icon}
        </div>

        <h1 className="text-white text-2xl font-bold">
          {cardDictionary.title}
        </h1>
      </div>
      <p className="text-secondary mt-4">{cardDictionary.description}</p>
    </div>
  );
};

export default Card;
