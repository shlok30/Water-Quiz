import { v4 as uuid } from "uuid";

export const quizzes = [
    {
      _id: uuid(),
      title: "SpiderMan Quiz",
      totalScore: 15,
      mcqs: [
        {
          _id: uuid(),
          question: "What was Spiderman's uncle's name?",
          options: ["Ben", "Rick", "Tony", "Steve"],
          answer: "Ben",
        },
        {
          _id: uuid(),
          question: "Who is Spiderman's love interest in the TASM movies",
          options: ["Rina", "MJ", "Gwen", "Sussane"],
          answer: "Gwen",
        },
        {
          _id: uuid(),
          question: "What is Spiderman's real name?",
          options: ["Peter Parker", "Tony Stark", "Mr Roy", "Jonathan"],
          answer: "Peter Parker",
        },
      ],
      catergoryName: "Marvel",
    },
    {
      _id: uuid(),
      title: "Ironman Quiz",
      totalScore: 15,
      mcqs: [
        {
          _id: uuid(),
          question: "Who is the Ironman",
          options: ["Tony Bark", "Tony Stark", "Loki", "Steve Rogers"],
          answer: "Tony Stark",
        },
        {
          _id: uuid(),
          question: "Who was the actor playing Ironman",
          options: ["Tobey Maguire", "Andrew Garfield", "Tom Holland", "Robert Downey Jr."],
          answer: "Tobey Maguire",
        },
        {
          _id: uuid(),
          question: "What Ironman's body guard's name?",
          options: ["Johnny", "Rocky", "Happy", "Lovely"],
          answer: "Happy",
        },
      ],
      catergoryName: "Marvel",
    },
    {
      _id: uuid(),
      title: "Batman Quiz",
      totalScore: 15,
      mcqs: [
        {
          _id: uuid(),
          question: "What is Batman's real name",
          options: ["Ip Man", "Bruce Windu", "Mace Windu", "Bruce Wayne"],
          answer: "Ip Man",
        },
        {
          _id: uuid(),
          question: "Which Martial Art did Bruce Wayne Learn first?",
          options: ["Wing Chun", "Southern Shaolin", "RAT", "Muay Thai"],
          answer: "Wing Chun",
        },
        {
          _id: uuid(),
          question: "Who is Batman's Buttler?",
          options: ["Mr.Patel", "Alfred", "Jacky", "John"],
          answer: "Alfred",
        },
      ],
      catergoryName: "DC",
    },
    {
        _id: uuid(),
        title: "Superman Quiz",
        totalScore: 15,
        mcqs: [
          {
            _id: uuid(),
            question: "What is Superman's real name?",
            options: ["Ip Man", "Clark Kent", "Mac Miller", "Bruce Wayne"],
            answer: "Clark Kent",
          },
          {
            _id: uuid(),
            question: "Which company does Superman work for?",
            options: ["Daily Bugle", "Daily Masala", "RAT", "Daily Planet"],
            answer: "Daily Planet",
          },
          {
            _id: uuid(),
            question: "What is Superman's mother's name?",
            options: ["Susan", "Betty", "Martha", "Wendy"],
            answer: "Martha",
          },
        ],
        catergoryName: "DC",
      }
    
  ]