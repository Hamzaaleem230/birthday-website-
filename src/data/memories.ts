export interface Memory {
  id: string;
  title: string;
  caption: string;
  category: string;
  imagePath?: string;
}

export const memories: Memory[] = [
  {
    id: "1",
    title: "Random Adventures",
    caption: "Har mode par ek nayi kahani. Just us being us.",
    category: "Outings",
    imagePath: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Two Wheels, Countless Stories",
    caption: "Cycling through the city, one pedal at a time.",
    category: "Cycling",
    imagePath: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "The Food Stops",
    caption: "Khaane pe toh compromise nahi hota, Abdul!",
    category: "Food",
    imagePath: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Game Time",
    caption: "Competitive edge, eternal friendship.",
    category: "Gaming",
    imagePath: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "The TikTok Archives",
    caption: "Proof that we have zero shame.",
    category: "TikTok",
    imagePath: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Antakshari Nights",
    caption: "Sur aur taal ka rishta, aur humari bakwaas.",
    category: "Music",
    imagePath: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
  },
];
