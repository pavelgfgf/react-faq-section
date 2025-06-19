export const FAQ_DATA = [
  { question: "Как работает фильтрация?", answer: "Вы можете выбрать категорию, чтобы увидеть соответствующие вопросы.", category: "Общие" },
  { question: "Можно ли добавлять свои вопросы?", answer: "Да, если вы администратор.", category: "Функциональность" },
  { question: "Как реализована 3D-графика?", answer: "С помощью react-three-fiber и drei.", category: "Технологии" },
  { question: "Где хранятся данные?", answer: "На стороне клиента или в backend через API.", category: "Технологии" },
  { question: "Как добавить новую категорию?", answer: "Категории можно добавлять в административной панели.", category: "Функциональность" },
  { question: "Какие библиотеки используются?", answer: "React, react-three-fiber, drei, framer-motion и Tailwind CSS.", category: "Технологии" },
  { question: "Можно ли переключать язык?", answer: "Да, поддерживается мультиязычность.", category: "Функциональность" },
];

export const categories = ["Все", ...new Set(FAQ_DATA.map((item) => item.category))];