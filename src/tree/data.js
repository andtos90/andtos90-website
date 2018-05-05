import profileImg from "../images/profile.jpg";
import educationImg from "../images/education.jpg";

export default {
  name: "Me",
  img: profileImg,
  isExpanded: true,
  children: [
    {
      name: "Education",
      img: educationImg,
      children: [
        { name: "A1" },
        { name: "A2" },
        { name: "A3" },
        {
          name: "C",
          children: [
            {
              name: "C1"
            },
            {
              name: "D",
              children: [
                {
                  name: "D1"
                },
                {
                  name: "D2"
                },
                {
                  name: "D3"
                }
              ]
            }
          ]
        }
      ]
    },
    { name: "Work" },
    { name: "Teaching" },
    {
      name: "Free time",
      children: [{ name: "B1" }, { name: "B2" }, { name: "B3" }]
    }
  ]
};
