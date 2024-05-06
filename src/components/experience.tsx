import React, { useState } from "react";

function Experience() {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpansion = (cardIndex) => {
    if (expandedCards.includes(cardIndex)) {
      setExpandedCards(expandedCards.filter((index) => index !== cardIndex));
    } else {
      setExpandedCards([...expandedCards, cardIndex]);
    }
  };

  const cardData = [
    {
      imgSrc: "./img/Gaotek.jpeg",
      title: "GaoTek Inc.",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",

      text: [
        "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
        "Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time",
        "Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.",
      ],
    },
    {
      imgSrc: "./img/Gaotek.jpeg",
      title: "GaoTek Inc.",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",

      text: [
        "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
        "Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time",
        "Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.",
      ],
    },
    {
      imgSrc: "./img/Gaotek.jpeg",
      title: "GaoTek Inc.",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",

      text: [
        "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
        "Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time",
        "Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.",
      ],
    },
    {
      imgSrc: "./img/Gaotek.jpeg",
      title: "GaoTek Inc.",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",

      text: [
        "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
        "Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time",
        "Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.",
      ],
    },
    {
      imgSrc: "./img/Gaotek.jpeg",
      title: "GaoTek Inc.",
      position: "Software Developer Intern",
      date: "Jan 2023 - Present",

      text: [
        "Collaborated with the team to design and develop software features, ensuring adherence to coding standards.",
        "Assisted in optimizing database queries and implementing efficient business logic to enhance system efficiency and reduce response time",
        "Assisted in implementing and maintaining backend systems, utilizing technologies such as Spring Boot and RESTful APIs.",
      ],
    },
    // Add more card objects to the array as needed
  ];

  const renderCards = () => {
    return cardData.map((card, index) => {
      const isExpanded = expandedCards.includes(index);

      return (
        <div key={index} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={card.imgSrc}
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                {card.date}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {card.title}
              </h1>
              <p className="leading-relaxed mb-3">{card.position}</p>
              <div className="mb-3">
                <p
                  className={`leading-relaxed mb-3 ${
                    isExpanded ? "block" : "hidden"
                  }`}
                >
                  {card.text.map((item, i) => (
                    <span key={i}>
                      {item}
                      <br />
                    </span>
                  ))}
                </p>
                <button
                  onClick={() => toggleExpansion(index)}
                  className="text-indigo-500 inline-flex items-center"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">{renderCards()}</div>
      </div>
    </section>
  );
}

export default Experience;
