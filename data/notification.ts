export interface Notification {
  time: string;
  title: string;
  body: string;
  dateTag: string;
  image: string;
}

export const notifications: Notification[] = [
  {
    time: "08:45 AM",
    title: "Payment Received",
    body: "You just received ₦25,000 from Adewale.",
    dateTag: "Today",
    image: "https://picsum.photos/seed/payment/200/200",
  },
  {
    time: "07:15 AM",
    title: "System Update",
    body: "Your app has been updated to version 2.3.1 successfully.",
    dateTag: "Today",
    image: "https://picsum.photos/seed/update/200/200",
  },
  {
    time: "09:30 PM",
    title: "New Message",
    body: "Sarah sent you a new message: 'Can we meet tomorrow?'",
    dateTag: "Yesterday",
    image: "https://picsum.photos/seed/message/200/200",
  },
  {
    time: "06:10 PM",
    title: "Low Balance Alert",
    body: "Your wallet balance is below ₦500. Please top up.",
    dateTag: "Yesterday",
    image: "https://picsum.photos/seed/balance/200/200",
  },
  {
    time: "02:40 PM",
    title: "Promo Offer",
    body: "Get 15% cashback when you shop with your Enlance Card today.",
    dateTag: "Aug 30, 2025",
    image: "https://picsum.photos/seed/promo/200/200",
  },
  {
    time: "11:05 AM",
    title: "Friend Request",
    body: "John Doe wants to connect with you.",
    dateTag: "Aug 29, 2025",
    image: "https://picsum.photos/seed/friend/200/200",
  },
  {
    time: "10:25 AM",
    title: "Security Alert",
    body: "A new login was detected from Lagos, Nigeria.",
    dateTag: "Aug 29, 2025",
    image: "https://picsum.photos/seed/security/200/200",
  },
  {
    time: "03:50 PM",
    title: "Delivery Update",
    body: "Your package #459873 has been shipped.",
    dateTag: "Aug 28, 2025",
    image: "https://picsum.photos/seed/delivery/200/200",
  },
];