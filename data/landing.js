import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  ReceiptText,
  Banknote,
  Lightbulb,
  Wallet,
  UserPlus,
  ListChecks,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "45+",
    label: "Active Users",
  },
  {
    value: "₹35K+",
    label: "Transactions Tracked",
  },
  {
    value: "96.3%",
    label: "Uptime",
  },
  {
    value: "4.3/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Spending Insights",
    description:
      "Track your expenses and discover patterns with the help of AI-driven analytics.",
  },
  {
    icon: <ReceiptText className="h-8 w-8 text-green-600" />,
    title: "AI Receipt Scanner",
    description:
      "Upload receipts and let our AI extract and categorize the key details for you.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "Budget Planner",
    description:
      "Set monthly budgets for different categories and get smart suggestions.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-green-600" />,
    title: "Account Tracker",
    description:
      "Manually add or sync account balances to get a full view of your finances.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-green-600" />,
    title: "Basic Currency Support",
    description:
      "Supports INR and USD with approximate real-time conversion using public APIs.",
  },
  {
    icon: <Zap className="h-8 w-8 text-green-600" />,
    title: "Smart Suggestions",
    description:
      "Get personalized tips and alerts based on your recent spending behavior.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <UserPlus className="h-8 w-8 text-green-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <ListChecks className="h-8 w-8 text-green-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-green-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Ananya Rao",
    role: "ECE Student, RVCE Bangalore",
    image: "https://randomuser.me/api/portraits/women/84.jpg",
    quote:
      "Monity helped me keep track of my daily expenses. I love how simple and intuitive it is to use alongside my hectic schedule.",
  },
  {
    name: "Rahul Nair",
    role: "CSE Student, UVCE Bangalore",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    quote:
      "Managing food, travel, and college event budgets used to be messy. Monity AI categorization and insights have made a big difference for me.",
  },
  {
    name: "Divya Ramesh",
    role: "MBBS Student, JSS Medical College, Mysore",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote:
      "Between clinical rotations and exam prep, I barely had time to manage expenses. Monity takes care of it all—it's like a financial assistant in my pocket.",
  },
];
