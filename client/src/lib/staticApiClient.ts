// Static API client for GitHub Pages deployment
import { staticDoctors, staticBlogPosts, staticAppointments, staticContactMessages } from './staticData';
import type { Doctor, BlogPost, Appointment, ContactMessage, InsertAppointment, InsertContactMessage } from '@shared/schema';

// Simulate API delay
const delay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms));

export const staticApiClient = {
  // Doctors
  async getDoctors(): Promise<Doctor[]> {
    await delay();
    return staticDoctors;
  },

  async getDoctorsByDepartment(department: string): Promise<Doctor[]> {
    await delay();
    return staticDoctors.filter(doctor => doctor.department === department);
  },

  async getDoctor(id: number): Promise<Doctor | null> {
    await delay();
    return staticDoctors.find(doctor => doctor.id === id) || null;
  },

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    await delay();
    return staticBlogPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  },

  async getBlogPost(id: number): Promise<BlogPost | null> {
    await delay();
    return staticBlogPosts.find(post => post.id === id) || null;
  },

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    await delay();
    return staticBlogPosts.filter(post => post.category === category);
  },

  // Appointments
  async getAppointments(): Promise<Appointment[]> {
    await delay();
    return staticAppointments;
  },

  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    await delay();
    const newAppointment: Appointment = {
      id: staticAppointments.length + 1,
      ...appointment,
      status: 'pending'
    };
    staticAppointments.push(newAppointment);
    return newAppointment;
  },

  // Contact Messages
  async getContactMessages(): Promise<ContactMessage[]> {
    await delay();
    return staticContactMessages;
  },

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    await delay();
    const newMessage: ContactMessage = {
      id: staticContactMessages.length + 1,
      ...message,
      createdAt: new Date()
    };
    staticContactMessages.push(newMessage);
    return newMessage;
  }
};

// Environment detection
export const isStaticBuild = () => {
  return import.meta.env.VITE_STATIC_BUILD === 'true';
};