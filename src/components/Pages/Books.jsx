import { BookTemplate } from "../NonPages/BookTemplate";

export const Books = () => {
  return (
    <div className=" w-full bg-tet py-20 flex flex-col">
      <div className="w-10/12 h-full lg:w-4/6  mx-auto flex flex-col justify-between gap-8 text-primary">
        <div className=" flex items-center justify-between gap-8 mb-4">
          <p className="text-2xl text-nowrap">BOOK COLLECTION</p>
          <hr className=" w-full h-0.5 bg-primary" />
        </div>
        <BookTemplate
          price="3,000"
          cover="/book.jpg"
          link="#"
          description="'Above Measure' is a compelling tale that explores the extraordinary lengths we go to uncover purpose, navigate challenges, and embrace the unexpected twists of life. Through gripping storytelling, this book explores themes of resilience, ambition, and the delicate balance between sacrifice and fulfillment. 

With every turn of the page, readers are drawn into a world where the ordinary meets the extraordinary, leaving them inspired to reflect on their own journeys beyond limits."
        />
        <BookTemplate
          price="2,500"
          cover="/heart.jpg"
          link="#"
          description="'Heart of Steel' is an electrifying story of courage, determination, and the unyielding spirit to overcome life’s toughest battles. Set against a backdrop of trials and triumphs, this book explores the depths of human resilience and the power of unwavering resolve. 

Through vivid storytelling, it reveals the strength found in vulnerability and the beauty of forging unbreakable bonds. 'Heart of Steel' will captivate readers, inspiring them to find their own inner strength and face challenges with grit and grace."
        />
      </div>
    </div>
  );
};
