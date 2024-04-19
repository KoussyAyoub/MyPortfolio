// my age
export function getAge() {
  const birthYear = 2002;
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function getage() {
  const birthYear = 2002;
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

export const aboutMe = {
  title: "Let me introduce myself",
  details: [
    {
      id: 1,
      text: ` 
              I'm Ayoub Koussy a ${getage()} years old Data engineer student, from Agadir, Morocco 🇲🇦. 
            `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: ` 
              I am currently a Data Engineering Intern at Henceforth, and I am in my final year of studying 
              Artificial Intelligence Engineering at the National School of Computer Science and Systems Analysis 
              (ENSIAS in French).
            `,
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `
      I am an extremely friendly and approachable individual who enjoys collaborating with others to create 
      innovative projects in the fields of Data Engineering and Artificial Intelligence. My passion for Data 
      Engineering and AI extends across various domains, with a particular focus on Data Pipelines and Natural 
      Language Processing (NLP). I am driven by the desire to develop useful applications that have a positive 
      and meaningful impact on people's lives. I thrive in working with diverse teams, sharing knowledge, and 
      learning from each other to achieve our goals together.
           `,
      icon: "🎯",
    },
    {
      id: 4,
      text: `
              In my leisure time, I have a variety of interests that help me maintain a well-
              rounded life.
              I am an avid reader and enjoy diving into books to expand my knowledge and explore 
              new ideas.
              Art also plays an important role in my life, as I find it to be a great way to 
              express my creativity.
              Music is another passion of mine, and I enjoy playing the violin and piano, 
              which allows me to unwind and immerse myself in the beauty of sound. Additionally, 
              I believe in staying active and healthy, so I make it a point to hit the gym 
              regularly, keeping my body and mind in top shape.
            `,
      icon: "🐋",
    }
  ],
};
