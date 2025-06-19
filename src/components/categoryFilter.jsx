import { Button } from "./ui/button";
import { categories } from "../data/faqData";

export const CategoryFilter = ({ category, setCategory }) => (
  <div className="flex gap-2 flex-wrap mb-6">
    {categories.map((cat) => (
      <Button
        key={cat}
        variant={cat === category ? "default" : "outline"}
        onClick={() => setCategory(cat)}
        className="rounded-full"
      >
        {cat}
      </Button>
    ))}
  </div>
);