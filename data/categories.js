export const defaultCategories = [
  // Income Categories
  {
    id: "freelance",
    name: "Freelance",
    type: "INCOME",
    color: "#5AC9DE", // Luxe Cyan
    icon: "Laptop",
  },
  {
    id: "investments",
    name: "Investments",
    type: "INCOME",
    color: "#8884D8", // Luxe Indigo
    icon: "TrendingUp",
  },
  {
    id: "stocks",
    name: "Stocks",
    type: "INCOME",
    color: "#A881E6", // Soft Purple Luxe
    icon: "BarChart2",
  },
  {
    id: "mutual-funds",
    name: "Mutual Funds",
    type: "INCOME",
    color: "#64B6AC", // Cool Teal Luxe
    icon: "PieChart",
  },
  {
    id: "salary",
    name: "Salary",
    type: "INCOME",
    color: "#7DCFB6", // Mint Luxe
    icon: "Repeat",
  },
  {
    id: "allowance",
    name: "Allowance",
    type: "INCOME",
    color: "#F3B664", // Luxe Orange
    icon: "Wallet",
  },
  {
    id: "other-income",
    name: "Other Income",
    type: "INCOME",
    color: "#A4ACB5", // Luxe Slate
    icon: "Plus",
  },

  // Expense Categories
  {
    id: "hostel",
    name: "Hostel & Rent",
    type: "EXPENSE",
    color: "#D96C6C",
    icon: "Home",
    subcategories: ["Rent", "Hostel", "PG", "Maintenance"],
  },
  {
    id: "canteen",
    name: "Canteen",
    type: "EXPENSE",
    color: "#E37691",
    icon: "UtensilsCrossed",
  },
  {
    id: "groceries",
    name: "Groceries",
    type: "EXPENSE",
    color: "#AACD77",
    icon: "Shopping",
  },
  {
    id: "transportation",
    name: "Transportation",
    type: "EXPENSE",
    color: "#EA9262",
    icon: "Car",
    subcategories: ["Fuel", "Public Transport", "Parking"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    type: "EXPENSE",
    color: "#57B6A3",
    icon: "HeartPulse",
    subcategories: ["Medical", "Pharmacy", "Insurance"],
  },
  {
    id: "fitness",
    name: "Fitness",
    type: "EXPENSE",
    color: "#A4ACB5",
    icon: "Dumbbell",
    subcategories: ["Gym", "Sports", "Yoga"],
  },
  {
    id: "food",
    name: "Food",
    type: "EXPENSE",
    color: "#E37691",
    icon: "Pizza",
  },
  {
    id: "shopping",
    name: "Shopping",
    type: "EXPENSE",
    color: "#D181A8",
    icon: "ShoppingBag",
    subcategories: ["Clothing", "Accessories", "Gadgets"],
  },
  {
    id: "education",
    name: "Education",
    type: "EXPENSE",
    color: "#8884D8",
    icon: "GraduationCap",
    subcategories: ["Books", "Courses", "Stationery"],
  },
  {
    id: "personal",
    name: "Personal Care",
    type: "EXPENSE",
    color: "#E49DD9",
    icon: "Smile",
    subcategories: ["Salon", "Skincare", "Toiletries"],
  },
  {
    id: "smoking",
    name: "Chai Sutta 🚬",
    type: "EXPENSE",
    color: "#A0522D",
    icon: "Flame",
  },
  {
    id: "gifts",
    name: "Gifts & Donations",
    type: "EXPENSE",
    color: "#DEA5C3",
    icon: "Gift",
  },
  {
    id: "bills",
    name: "Bills & Fees",
    type: "EXPENSE",
    color: "#EC99AD",
    icon: "Receipt",
    subcategories: ["Fines", "Service Charges", "Late Fees"],
  },
  {
    id: "other-expense",
    name: "Other Expenses",
    type: "EXPENSE",
    color: "#C3CBD4",
    icon: "MoreHorizontal",
  },
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {});
