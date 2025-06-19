// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const FAQItem = ({ question, answer }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="p-4"
  >
    <Card className="rounded-2xl shadow-lg">
      <CardContent>
        <h3 className="font-semibold text-lg mb-2">{question}</h3>
        <p className="text-gray-700">{answer}</p>
      </CardContent>
    </Card>
  </motion.div>
);