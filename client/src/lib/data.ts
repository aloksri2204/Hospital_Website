// Utility functions and shared data for the application

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'pediatrics':
      return 'bg-blue-100 text-blue-600';
    case 'gynecology':
      return 'bg-pink-100 text-pink-600';
    case 'nutrition':
      return 'bg-green-100 text-green-600';
    case 'general':
      return 'bg-gray-100 text-gray-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export const getDepartmentIcon = (department: string): string => {
  switch (department.toLowerCase()) {
    case 'pediatrics':
      return 'fas fa-baby';
    case 'gynecology':
      return 'fas fa-female';
    case 'emergency':
      return 'fas fa-ambulance';
    case 'administration':
      return 'fas fa-building';
    default:
      return 'fas fa-stethoscope';
  }
};

export const phoneNumbers = {
  main: '+1 (555) 123-4567',
  emergency: '+1 (555) 911-CARE',
  pediatrics: '+1 (555) 123-KIDS',
  gynecology: '+1 (555) 123-WOMEN',
  billing: '+1 (555) 123-BILL'
};

export const emailAddresses = {
  main: 'info@careplushospital.com',
  appointments: 'appointments@careplushospital.com',
  billing: 'billing@careplushospital.com',
  records: 'records@careplushospital.com',
  admin: 'admin@careplushospital.com'
};

export const hospitalAddress = {
  street: '1234 Healthcare Drive',
  city: 'Medical City',
  state: 'MC',
  zip: '12345',
  fullAddress: '1234 Healthcare Drive, Medical City, MC 12345'
};

export const operatingHours = {
  weekdays: '8:00 AM - 8:00 PM',
  saturday: '9:00 AM - 5:00 PM', 
  sunday: '10:00 AM - 4:00 PM',
  emergency: '24/7'
};

// Common validation patterns
export const validationPatterns = {
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z\s]{2,50}$/
};

// Status mappings
export const appointmentStatusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
  completed: 'bg-blue-100 text-blue-800'
};

export const appointmentStatusIcons = {
  pending: 'fas fa-clock',
  confirmed: 'fas fa-check-circle',
  cancelled: 'fas fa-times-circle',
  completed: 'fas fa-check'
};

// Helper function to truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Helper function to generate initials from name
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

// Navigation menu items
export const navigationItems = [
  { name: 'Home', href: '/', icon: 'fas fa-home' },
  { name: 'About Us', href: '/about', icon: 'fas fa-info-circle' },
  { name: 'Services', href: '/services', icon: 'fas fa-stethoscope' },
  { name: 'Our Doctors', href: '/doctors', icon: 'fas fa-user-md' },
  { name: 'Health Resources', href: '/blog', icon: 'fas fa-newspaper' },
  { name: 'Contact', href: '/contact', icon: 'fas fa-phone' }
];

// Social media links
export const socialMediaLinks = [
  { name: 'Facebook', href: '#', icon: 'fab fa-facebook' },
  { name: 'Twitter', href: '#', icon: 'fab fa-twitter' },
  { name: 'Instagram', href: '#', icon: 'fab fa-instagram' },
  { name: 'LinkedIn', href: '#', icon: 'fab fa-linkedin' }
];
