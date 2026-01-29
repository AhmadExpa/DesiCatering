export interface SlideData {
  id: number;
  image: string;
  title: string;
  price: string;
  note: string;
}

export const sliderData: SlideData[] = [
  {
    id: 1,
    image: "/uploads/deals/deal1.jpg",
    title: "16\" Party Deal",
    price: "£24.99",
    note: "Contact us on WhatsApp to get exclusive offers. Online platform prices may vary. We offer our own delivery riders."
  },
  {
    id: 2,
    image: "/uploads/deals/deal2.jpg",
    title: "Family Pizza Deal",
    price: "£18.99",
    note: "Contact us on WhatsApp to get exclusive offers. Online platform prices may vary. We offer our own delivery riders."
  },
  {
    id: 3,
    image: "/uploads/deals/deal3.jpg",
    title: "Pizza & Chicken Combo",
    price: "£14.99",
    note: "Contact us on WhatsApp to get exclusive offers. Online platform prices may vary. We offer our own delivery riders."
  }
];
