// src/hooks/useCardData.js
import Image1 from "../Images/greek salad.jpg";
import Image2 from "../Images/Bruschetta.jpg"; // Reemplaza con tus imágenes
import Image3 from "../Images/lemon dessert.jpg"; // Reemplaza con tus imágenes

export function useCardData() {
  const cards = [
    {
      id: 1,
      title: "Greek Salad",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: Image1,
      buttonText: "Order a delivery",
    },
    {
      id: 2,
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: Image2,
      buttonText: "Order a delivery",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: Image3,
      buttonText: "Order a delivery",
    },
  ];

  return { cards };
}
