import { useState } from "react";
import VerticalListCard from "./components/VerticalListCard";
import { categories } from "./constants";
import UploadFilesModal from "./components/UploadFilesModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative">
      {isModalOpen && <UploadFilesModal setIsModalOpen={setIsModalOpen} />}
      <div className="h-screen flex gap-10 bg-[#fff] px-7 py-10 overflow-scroll">
        {categories.map((category) => (
          <VerticalListCard
            key={category.text}
            category={category}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
    </section>
  );
};
export default App;
