import { FAQItem } from "./faqItem";

export const FAQList = ({ data, onDelete }) => (
  <div className="w-full max-w-2xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    {data.map((faq) => (
      <FAQItem
        key={faq.id}
        id={faq.id}
        question={faq.question}
        answer={faq.answer}
        onDelete={onDelete}
      />
    ))}
  </div>
);