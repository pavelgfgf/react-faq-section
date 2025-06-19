import { FAQItem } from "./faqItem";

export const FAQList = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {data.map((faq, index) => (
      <FAQItem key={index} question={faq.question} answer={faq.answer} />
    ))}
  </div>
);