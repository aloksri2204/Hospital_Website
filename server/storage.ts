import { 
  users, 
  doctors, 
  appointments, 
  blogPosts, 
  contactMessages,
  type User, 
  type InsertUser,
  type Doctor,
  type InsertDoctor,
  type Appointment,
  type InsertAppointment,
  type BlogPost,
  type InsertBlogPost,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Doctors
  getAllDoctors(): Promise<Doctor[]>;
  getDoctorsByDepartment(department: string): Promise<Doctor[]>;
  getDoctor(id: number): Promise<Doctor | undefined>;
  createDoctor(doctor: InsertDoctor): Promise<Doctor>;
  
  // Appointments
  getAllAppointments(): Promise<Appointment[]>;
  getAppointment(id: number): Promise<Appointment | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined>;
  
  // Blog Posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Contact Messages
  getAllContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private doctors: Map<number, Doctor>;
  private appointments: Map<number, Appointment>;
  private blogPosts: Map<number, BlogPost>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentDoctorId: number;
  private currentAppointmentId: number;
  private currentBlogPostId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.doctors = new Map();
    this.appointments = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentDoctorId = 1;
    this.currentAppointmentId = 1;
    this.currentBlogPostId = 1;
    this.currentContactMessageId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed doctors
    const doctorsData: InsertDoctor[] = [
      {
        name: "Dr. Sarah Johnson",
        specialty: "Chief Pediatrician",
        department: "pediatrics",
        qualifications: "MD, FAAP",
        experience: 15,
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        rating: 5,
        availability: "Available Today",
        specialties: ["General Pediatrics", "NICU"]
      },
      {
        name: "Dr. Maria Rodriguez",
        specialty: "Senior Gynecologist",
        department: "gynecology",
        qualifications: "MD, FACOG",
        experience: 18,
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        rating: 5,
        availability: "Available Tomorrow",
        specialties: ["Prenatal Care", "Surgery"]
      },
      {
        name: "Dr. Michael Chen",
        specialty: "Pediatric Surgeon",
        department: "pediatrics",
        qualifications: "MD, FACS",
        experience: 12,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        rating: 5,
        availability: "Available This Week",
        specialties: ["Pediatric Surgery", "Laparoscopy"]
      },
      {
        name: "Dr. Emily Thompson",
        specialty: "Fertility Specialist",
        department: "gynecology",
        qualifications: "MD, REI",
        experience: 14,
        image: "https://images.unsplash.com/photo-1594824388047-1414cd7c5d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        rating: 5,
        availability: "Available Today",
        specialties: ["Fertility", "IVF"]
      },
      {
        name: "Dr. James Wilson",
        specialty: "Neonatologist",
        department: "pediatrics",
        qualifications: "MD, NNP",
        experience: 20,
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        rating: 5,
        availability: "Available Monday",
        specialties: ["NICU", "Premature Care"]
      },
      {
        name: "Dr. Lisa Park",
        specialty: "Maternal-Fetal Medicine",
        department: "gynecology",
        qualifications: "MD, MMS",
        experience: 16,
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        rating: 5,
        availability: "Available Today",
        specialties: ["High-Risk Pregnancy", "Prenatal Diagnosis"]
      }
    ];

    doctorsData.forEach(doctor => this.createDoctor(doctor));

    // Seed blog posts
    const blogPostsData: InsertBlogPost[] = [
      {
        title: "Complete Guide to Child Vaccination Schedule",
        excerpt: "Everything parents need to know about keeping their children protected with proper immunizations...",
        content: "Comprehensive content about child vaccination schedules, importance, and safety measures.",
        category: "Pediatrics",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        authorId: 1
      },
      {
        title: "The Importance of Regular Prenatal Care",
        excerpt: "Learn about the essential checkups and tests during pregnancy for healthy mother and baby...",
        content: "Detailed information about prenatal care, screening tests, and what to expect during pregnancy.",
        category: "Gynecology",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        authorId: 2
      },
      {
        title: "Healthy Eating Habits for Growing Children",
        excerpt: "Expert tips on creating nutritious meal plans that support your child's growth and development...",
        content: "Nutritional guidelines for children, meal planning tips, and addressing picky eating habits.",
        category: "Nutrition",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        authorId: 1
      },
      {
        title: "Understanding Menopause: A Complete Guide",
        excerpt: "Navigate the changes of menopause with expert guidance and support...",
        content: "Comprehensive guide to understanding menopause symptoms, treatments, and lifestyle changes.",
        category: "Gynecology",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        authorId: 2
      },
      {
        title: "Common Childhood Illnesses and When to Seek Help",
        excerpt: "Recognizing symptoms and knowing when to contact your pediatrician...",
        content: "Guide to common childhood illnesses, symptoms to watch for, and emergency situations.",
        category: "Pediatrics",
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        authorId: 3
      },
      {
        title: "Preparing for Your First Pregnancy",
        excerpt: "Essential steps for expecting mothers to ensure a healthy pregnancy journey...",
        content: "Preconception planning, early pregnancy care, and preparing for parenthood.",
        category: "Gynecology",
        image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        authorId: 4
      }
    ];

    blogPostsData.forEach(post => this.createBlogPost(post));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Doctor methods
  async getAllDoctors(): Promise<Doctor[]> {
    return Array.from(this.doctors.values());
  }

  async getDoctorsByDepartment(department: string): Promise<Doctor[]> {
    return Array.from(this.doctors.values()).filter(doctor => doctor.department === department);
  }

  async getDoctor(id: number): Promise<Doctor | undefined> {
    return this.doctors.get(id);
  }

  async createDoctor(insertDoctor: InsertDoctor): Promise<Doctor> {
    const id = this.currentDoctorId++;
    const doctor: Doctor = { ...insertDoctor, id };
    this.doctors.set(id, doctor);
    return doctor;
  }

  // Appointment methods
  async getAllAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getAppointment(id: number): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = { 
      ...insertAppointment, 
      id, 
      status: "pending",
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (appointment) {
      const updatedAppointment = { ...appointment, status };
      this.appointments.set(id, updatedAppointment);
      return updatedAppointment;
    }
    return undefined;
  }

  // Blog post methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(post => post.category === category);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id, 
      publishedAt: new Date()
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  // Contact message methods
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(insertContactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const contactMessage: ContactMessage = { 
      ...insertContactMessage, 
      id, 
      createdAt: new Date()
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
