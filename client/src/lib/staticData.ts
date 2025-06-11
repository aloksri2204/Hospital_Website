// Static data for GitHub Pages deployment
import vaccinationGuideImg from "@/assets/blog/vaccination-guide.svg";
import menopauseGuideImg from "@/assets/blog/menopause-guide.svg";
import childhoodIllnessesImg from "@/assets/blog/childhood-illnesses.svg";
import pregnancyGuideImg from "@/assets/blog/pregnancy-guide.svg";
import prenatalCareImg from "@/assets/blog/prenatal-care.svg";
import childhoodAllergiesImg from "@/assets/blog/childhood-allergies.svg";
import drSarahJohnsonImg from "@/assets/doctors/dr-sarah-johnson.svg";
import drMichaelChenImg from "@/assets/doctors/dr-michael-chen.svg";
import drEmilyRodriguezImg from "@/assets/doctors/dr-emily-rodriguez.svg";
import drMariaGarciaImg from "@/assets/doctors/dr-maria-garcia.svg";
import drLisaThompsonImg from "@/assets/doctors/dr-lisa-thompson.svg";
export const staticDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Chief of Medicine",
    department: "pediatrics",
    qualifications: "MD, FAAP, Board Certified Pediatrician",
    experience: 15,
    image: drSarahJohnsonImg,
    rating: 5,
    availability: "Monday-Friday 9AM-5PM",
    specialties: ["General Pediatrics", "Developmental Medicine", "Preventive Care"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Gynecologist",
    department: "gynecology",
    qualifications: "MD, FACOG, Board Certified Gynecologist",
    experience: 12,
    image: drMichaelChenImg,
    rating: 5,
    availability: "Tuesday-Saturday 8AM-6PM",
    specialties: ["Women's Health", "Reproductive Medicine", "Minimally Invasive Surgery"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    department: "pediatrics",
    qualifications: "MD, FAAP, Pediatric Emergency Medicine",
    experience: 8,
    image: drEmilyRodriguezImg,
    rating: 5,
    availability: "Monday-Wednesday 10AM-4PM",
    specialties: ["Pediatric Emergency", "Child Development", "Vaccination"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Senior Gynecologist",
    department: "gynecology",
    qualifications: "MD, FACOG, Maternal-Fetal Medicine",
    experience: 20,
    image: drMariaGarciaImg,
    rating: 5,
    availability: "Thursday-Saturday 9AM-3PM",
    specialties: ["High-Risk Pregnancy", "Prenatal Care", "Genetic Counseling"]
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Pediatric Specialist",
    department: "pediatrics",
    qualifications: "MD, FAAP, Pediatric Neurology",
    experience: 10,
    image: drLisaThompsonImg,
    rating: 4,
    availability: "Monday-Friday 11AM-3PM",
    specialties: ["Pediatric Neurology", "Developmental Disorders", "ADHD Management"]
  }
];

export const staticBlogPosts = [
  {
    id: 1,
    title: "Complete Guide to Child Vaccination Schedule",
    excerpt: "Understanding the importance of timely vaccinations for your child's health and development.",
    content: "Understanding the importance of timely vaccinations for your child's health and development. This comprehensive guide covers all essential vaccines from birth to adolescence.",
    category: "pediatrics",
    image: vaccinationGuideImg,
    authorId: 3,
    publishedAt: new Date("2024-01-15")
  },
  {
    id: 2,
    title: "Women's Health: Preventive Care Guidelines",
    excerpt: "Essential preventive care measures for women's health throughout different life stages.",
    content: "Learn about essential preventive care measures for women's health, including regular screenings, reproductive health, and wellness strategies for different life stages.",
    category: "gynecology",
    image: menopauseGuideImg,
    authorId: 2,
    publishedAt: new Date("2024-01-10")
  },
  {
    id: 3,
    title: "Child Development Milestones",
    excerpt: "Important developmental milestones to watch for in your child's growth.",
    content: "A comprehensive guide to child development milestones from infancy through adolescence, including physical, cognitive, and emotional development markers.",
    category: "pediatrics",
    image: childhoodIllnessesImg,
    authorId: 1,
    publishedAt: new Date("2024-01-05")
  },
  {
    id: 4,
    title: "Prenatal Care Essentials",
    excerpt: "Everything you need to know about prenatal care for a healthy pregnancy.",
    content: "Essential information about prenatal care, including nutrition, exercise, regular check-ups, and preparing for delivery to ensure a healthy pregnancy.",
    category: "gynecology",
    image: prenatalCareImg,
    authorId: 4,
    publishedAt: new Date("2023-12-28")
  },
  {
    id: 5,
    title: "Managing Childhood Allergies",
    excerpt: "Identifying and managing common childhood allergies and food sensitivities.",
    content: "A detailed guide to identifying, managing, and treating common childhood allergies, including food allergies, environmental triggers, and emergency care.",
    category: "pediatrics",
    image: childhoodAllergiesImg,
    authorId: 5,
    publishedAt: new Date("2023-12-20")
  }
];

export const staticAppointments = [
  {
    id: 1,
    fullName: "John Smith",
    email: "john.smith@email.com",
    phone: "+1-555-1234",
    department: "pediatrics",
    doctorId: 1,
    preferredDate: "2024-02-15",
    message: "Annual checkup for my child",
    status: "confirmed",
    createdAt: new Date("2024-02-10")
  },
  {
    id: 2,
    fullName: "Mary Johnson",
    email: "mary.johnson@email.com",
    phone: "+1-555-5678",
    department: "gynecology",
    doctorId: 2,
    preferredDate: "2024-02-16",
    message: "Follow-up consultation",
    status: "pending",
    createdAt: new Date("2024-02-11")
  }
];

export const staticContactMessages = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Brown",
    email: "alice.brown@email.com",
    phone: "+1-555-9876",
    subject: "Insurance inquiry",
    message: "I would like to know if you accept my insurance plan.",
    createdAt: new Date("2024-01-20")
  }
];