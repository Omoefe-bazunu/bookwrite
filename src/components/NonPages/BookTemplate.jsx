export const BookTemplate = ({ price, description, cover, link }) => {
  return (
    <div className="w-full h-fit flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
      <div
        className="w-full lg:w-96 h-[650px] lg:h-96 flex shadow-md relative flex-grow"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-sec text-sm font-bold absolute -bottom-4 -right-4 flex flex-col items-center justify-center">
          <p>NGN</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 px-4 lg:px-0">
        <p className="text-xl font-semibold">About the Book</p>
        <p className="whitespace-pre-wrap text-sm lg:text-base">
          {description}
        </p>
        <div className="mt-auto flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-8">
          <a
            href={link}
            className="text-nowrap px-8 py-1 font-medium bg-sec text-primary rounded-full"
          >
            Get this Book
          </a>
          <hr className="w-full sm:w-auto sm:flex-grow h-0.5 bg-primary" />
        </div>
      </div>
    </div>
  );
};
