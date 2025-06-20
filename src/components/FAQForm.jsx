import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../components/ui/select";

const FAQForm = ({ onAdd, categories }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState(categories.find(c => c !== "Все") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    onAdd({ question, answer, category });
    setQuestion("");
    setAnswer("");
    setCategory(categories.find(c => c !== "Все") || "");
  };

  return (
    <Card className="p-4 mb-8 shadow-lg rounded-2xl">
      <CardContent>
        <h2 className="font-bold text-xl mb-4">Добавить новый вопрос</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Введите вопрос"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <Textarea
            placeholder="Введите ответ"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full" />
            <SelectContent>
              {categories
                .filter((cat) => cat !== "Все")
                .map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full rounded-full">
            Добавить
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FAQForm;