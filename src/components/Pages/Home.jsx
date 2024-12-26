import { About } from "../NonPages/About";
import { BookSection } from "../NonPages/BooksSection";

export const Home = () => {
  return (
    <div className="pt-20 flex flex-col gap-24">
      <About />
      <BookSection />
    </div>
  );
};
