// Static API client for GitHub Pages deployment
import { staticDoctors, staticBlogPosts, staticAppointments, staticContactMessages } from './staticData';
import type { Doctor, BlogPost, Appointment, ContactMessage, InsertAppointment, InsertContactMessage } from '@shared/schema';

// Copy arrays to avoid mutations
let doctorsData = [...staticDoctors];
let blogData = [...staticBlogPosts]; 
let appointmentsData = [...staticAppointments];
let contactData = [...staticContactMessages];

// Simulate API delay
const delay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms));

export const staticApiClient = {
  // Doctors
  async getDoctors(): Promise<Doctor[]> {
    await delay();
    return doctorsData;
  },

  async getDoctorsByDepartment(department: string): Promise<Doctor[]> {
    await delay();
    return doctorsData.filter(doctor => doctor.department === department);
  },

  async getDoctor(id: number): Promise<Doctor | null> {
    await delay();
    return doctorsData.find(doctor => doctor.id === id) || null;
  },

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    await delay();
    return blogData.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  },

  async getBlogPost(id: number): Promise<BlogPost | null> {
    await delay();
    return blogData.find(post => post.id === id) || null;
  },

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    await delay();
    return blogData.filter(post => post.category === category);
  },

  // Appointments
  async getAppointments(): Promise<Appointment[]> {
    await delay();
    return appointmentsData;
  },

  async createAppointment(appointment: InsertAppointment): Promise<any> {
    await delay();
    const newAppointment = {
      id: appointmentsData.length + 1,
      ...appointment,
      doctorId: appointment.doctorId || null,
      message: appointment.message || null,
      status: 'pending',
      createdAt: new Date()
    };
    appointmentsData.push(newAppointment as any);
    return newAppointment;
  },

  // Contact Messages
  async getContactMessages(): Promise<ContactMessage[]> {
    await delay();
    return contactData;
  },

  async createContactMessage(message: InsertContactMessage): Promise<any> {
    await delay();
    const newMessage = {
      id: contactData.length + 1,
      ...message,
      phone: message.phone || null,
      createdAt: new Date()
    };
    contactData.push(newMessage as any);
    return newMessage;
  }
};

// Environment detection
export const isStaticBuild = () => {
  return import.meta.env.VITE_STATIC_BUILD === 'true';
};