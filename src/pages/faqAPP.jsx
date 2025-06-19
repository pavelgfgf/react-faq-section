import { useState } from "react";
import { FAQ_DATA } from "../data/faqData";
import { FAQHeader } from "../components/faqHeader";
import { CategoryFilter } from "../components/categoryFilter";
import { FAQ3DPanel } from "../components/faqPanel";
import { FAQList } from "../components/faqlist";
import { Footer } from "../components/Footer";

export default function FAQApp() {
  const [category, setCategory] = useState("Все");

  const filteredFAQs =
    category === "Все"
      ? FAQ_DATA
      : FAQ_DATA.filter((faq) => faq.category === category);

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto flex flex-col">
      <FAQHeader />
      <CategoryFilter category={category} setCategory={setCategory} />
      <FAQ3DPanel>
        <FAQList data={filteredFAQs} />
      </FAQ3DPanel>
      <Footer />
    </div>
  );
}