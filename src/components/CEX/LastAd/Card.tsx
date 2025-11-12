const Card = ({ children, content }) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="self-end">{children}</div>
      <div className="text-black">{content}</div>
    </div>
  );
};

export default Card;
