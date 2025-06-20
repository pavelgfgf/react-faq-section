// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const FAQItem = ({ id, question, answer, onDelete }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <Card className="rounded-2xl shadow-xl min-h-[240px] h-full flex flex-col justify-between">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-gray-800">{question}</h3>
          <p className="text-gray-600">{answer}</p>
        </div>
        <button
          onClick={() => onDelete(id)}
          className="mt-4 self-start text-red-500 hover:underline"
        >
          Удалить
        </button>
      </CardContent>
    </Card>
  </motion.div>
);