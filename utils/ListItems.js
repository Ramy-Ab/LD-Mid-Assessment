import {
  CreditCard,
  DollarSign,
  Eye,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  Share2,
  ShoppingCart,
  Target,
  Truck,
} from "react-feather";
import {
  Brush,
  FormatListBulleted,
  Language,
  PersonOutline,
} from "@mui/icons-material";
import { routes } from "./constants/routes";
import { Badge } from "@mui/material";

export const listeItems = [
  {
    type: "item",
    url: routes.dashboard,
    icon: <Home size={20} />,
    text: "Dashboard",
  },
  {
    type: "item",
    url: routes.catalogue,
    icon: <ShoppingCart size={20} />,
    text: "Catalogue",
  },
  {
    type: "item",
    url: routes.orders,
    icon: <FormatListBulleted sx={{ fontSize: 20 }} />,
    text: "Orders",
    badge: (
      <Badge
        badgeContent={4}
        color="success"
        style={{ color: "white !important", marginRight: "1rem" }}
      />
    ),
  },
  {
    type: "item",
    url: routes.customers,
    icon: <PersonOutline sx={{ fontSize: 20 }} />,
    text: "Customers",
  },
  {
    type: "collapse",
    icon: <Target size={20} />,
    text: "Marketing",
    children: [
      { text: "Discount codes", url: routes.discount_codes },
      { text: "Exit intent", url: routes.exit_intent },
      { text: "Checkout Features" },
      { text: "Post-purchase " },
      { text: "Cart abandonment" },
      { text: "Timer checkout" },
      { text: "Sell on Social" },
      { text: "Special Offer" },
      { text: "Seasonal Offer" },
    ],
  },
  {
    type: "item",
    url: routes.delivery_options,
    icon: <Truck size={20} />,
    text: "Delivery options",
  },
  {
    type: "item",
    url: routes.payment_options,
    icon: <DollarSign size={20} />,
    text: "Payment Options",
  },
  {
    type: "item",
    url: routes.store_design,
    icon: <Brush sx={{ fontSize: 20 }} />,
    text: "Store Design",
  },
  {
    type: "item",
    url: routes.subscriptions,
    icon: <CreditCard size={20} />,
    text: "Subscriptons",
  },
  {
    type: "item",
    url: routes.integrations,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.28246 1.75691C6.815 1.90825 6.36121 2.10106 5.92664 2.33298L4.46348 1.32793L1.31855 4.51549L2.32652 6.03571C2.09551 6.49618 1.90617 6.97669 1.76121 7.47068L-5.14436e-07 8.23107L-3.59695e-07 11.7711L1.81371 12.543C1.9593 13.0029 2.14367 13.4504 2.36445 13.8799L1.30762 15.4669L4.44617 18.6608L6.02133 17.5836C6.41879 17.7911 6.83227 17.9659 7.25687 18.1062L7.58695 20L10.1536 20C12.7837 20 15.2563 18.9598 17.1161 17.0711C18.9758 15.1823 20 12.6711 20 10C20 7.32889 18.9758 4.81767 17.1161 2.92893C15.2563 1.04019 12.7837 -5.58792e-07 10.1536 -4.43828e-07L7.58625 -3.31605e-07L7.28246 1.75691ZM8.28367 17.1681L7.92707 17.0681C7.35219 16.9068 6.79766 16.6726 6.27894 16.3718L5.96289 16.1885L4.59309 17.1253L2.81988 15.3207L3.74187 13.9363L3.55766 13.6135C3.25672 13.0862 3.02144 12.5231 2.85836 11.9397L2.78129 11.6641L1.17211 10.9793L1.17211 9.01856L2.74434 8.33977L2.81695 8.05648C2.97441 7.44204 3.21101 6.8491 3.52016 6.2941L3.69855 5.97378L2.83059 4.66477L4.60738 2.86391L5.87308 3.73332L6.19148 3.5446C6.74262 3.21798 7.3341 2.96686 7.94953 2.79821L8.30957 2.69951L8.57051 1.19039L9.67422 1.19039L9.67422 4.49216C6.82582 4.60856 4.54379 6.99787 4.54379 9.91871C4.54379 12.8396 6.82582 15.2289 9.67422 15.3453L9.67422 18.8096L8.56984 18.8096L8.28367 17.1681ZM10.8463 18.7817L10.8463 15.3052C11.9569 15.2647 13.032 15.1272 14.0341 14.9005L14.0341 17.8837C13.0463 18.3864 11.9679 18.6923 10.8463 18.7817ZM9.67418 14.154C7.4723 14.0387 5.71586 12.1831 5.71586 9.91875C5.71586 7.65436 7.4723 5.79879 9.67418 5.68343L9.67418 14.154ZM10.8463 14.114L10.8463 10.5952L14.0341 10.5952L14.0341 13.6793C13.0449 13.9227 11.9676 14.0708 10.8463 14.114ZM15.2063 10.5952L18.7281 10.5952C18.46 11.4026 17.6586 12.1854 16.4387 12.8075C16.0559 13.0027 15.6433 13.1776 15.2063 13.3315L15.2063 10.5952ZM18.7281 9.4048L15.2062 9.4048L15.2062 6.66848C15.6432 6.8224 16.0559 6.9972 16.4386 7.19242C17.6585 7.81456 18.4599 8.5974 18.7281 9.4048ZM14.0342 9.4048L10.8463 9.4048L10.8463 5.88591C11.9676 5.92915 13.045 6.07725 14.0342 6.32063L14.0342 9.4048ZM10.8463 4.6948L10.8463 1.21832C11.9678 1.30774 13.0462 1.61353 14.0341 2.11633L14.0341 5.09664C13.0484 4.87424 11.9762 4.73535 10.8463 4.6948ZM15.2063 17.1626L15.2063 14.5837C15.8359 14.3841 16.426 14.146 16.9646 13.8713C17.472 13.6126 17.9197 13.3283 18.3054 13.0234C17.878 14.2144 17.1961 15.3063 16.2872 16.2293C15.9489 16.573 15.5871 16.8842 15.2063 17.1626ZM16.2872 3.77069C17.1971 4.69476 17.8796 5.78816 18.3069 6.98073C17.503 6.3413 16.4455 5.80593 15.2062 5.4131L15.2062 2.83745C15.5871 3.11582 15.9489 3.42701 16.2872 3.77069Z"
          fill="#103B66"
        />
      </svg>
    ),
    text: "Integrations",
  },
  { type: "item", url: routes.settings, icon: <Settings />, text: "Settings" },
  { type: "item", url: routes.logout, icon: <LogOut />, text: "Log out" },
];

export const listeItems2 = [
  {
    type: "item",
    url: routes.customer_support,
    icon: <HelpCircle size={20} />,
    text: "Customer Support",
  },
  {
    type: "item",
    url: routes.share_shop,
    icon: <Share2 size={20} />,
    text: "Share your shop",
  },
  {
    type: "item",
    url: routes.view_shop,
    icon: <Eye size={20} />,
    text: "View your shop",
  },
];
