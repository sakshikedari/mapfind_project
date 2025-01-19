import { create } from 'zustand';
import type { Profile } from '../types/profile';

interface ProfileState {
  profiles: Profile[];
  selectedProfile: Profile | null;
  searchQuery: string;
  setProfiles: (profiles: Profile[]) => void;
  setSelectedProfile: (profile: Profile | null) => void;
  setSearchQuery: (query: string) => void;
  addProfile: (profile: Profile) => void;
  updateProfile: (id: string, profile: Profile) => void;
  deleteProfile: (id: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profiles: [
    {
      id: '1',
      name: 'Sarah Johnson',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      description: 'UX Designer with a passion for creating intuitive digital experiences',
      address: {
        street: '123 Innovation Ave',
        city: 'San Francisco',
        state: 'CA',
        coordinates: [-122.4194, 37.7749],
      },
      contact: {
        email: 'sarah.j@example.com',
        phone: '(555) 123-4567',
      },
      interests: ['Design', 'Technology', 'Art'],
    },
    {
      id: '2',
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      description: 'Full-stack developer specializing in cloud architecture',
      address: {
        street: '456 Tech Boulevard',
        city: 'Seattle',
        state: 'WA',
        coordinates: [-122.3321, 47.6062],
      },
      contact: {
        email: 'michael.c@example.com',
        phone: '(555) 234-5678',
      },
      interests: ['Programming', 'Cloud Computing', 'AI'],
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      description: 'Product Manager driving innovation in fintech',
      address: {
        street: '789 Finance Row',
        city: 'New York',
        state: 'NY',
        coordinates: [-74.0060, 40.7128],
      },
      contact: {
        email: 'emily.r@example.com',
        phone: '(555) 345-6789',
      },
      interests: ['Fintech', 'Strategy', 'Leadership'],
    },
    {
      id: '4',
      name: 'David Kim',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      description: 'Data Scientist exploring machine learning applications',
      address: {
        street: '321 Analytics Ave',
        city: 'Boston',
        state: 'MA',
        coordinates: [-71.0589, 42.3601],
      },
      contact: {
        email: 'david.k@example.com',
        phone: '(555) 456-7890',
      },
      interests: ['Data Science', 'Machine Learning', 'Statistics'],
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      description: 'Cybersecurity expert protecting digital assets',
      address: {
        street: '567 Security Street',
        city: 'Austin',
        state: 'TX',
        coordinates: [-97.7431, 30.2672],
      },
      contact: {
        email: 'lisa.t@example.com',
        phone: '(555) 567-8901',
      },
      interests: ['Cybersecurity', 'Network Security', 'Ethical Hacking'],
    },
    {
      id: '6',
      name: 'James Wilson',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      description: 'DevOps Engineer streamlining deployment processes',
      address: {
        street: '890 Pipeline Road',
        city: 'Portland',
        state: 'OR',
        coordinates: [-122.6784, 45.5155],
      },
      contact: {
        email: 'james.w@example.com',
        phone: '(555) 678-9012',
      },
      interests: ['DevOps', 'Automation', 'Container Technology'],
    }
  ],
  selectedProfile: null,
  searchQuery: '',
  setProfiles: (profiles) => set({ profiles }),
  setSelectedProfile: (profile) => set({ selectedProfile: profile }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  addProfile: (profile) => set((state) => ({ 
    profiles: [...state.profiles, profile] 
  })),
  updateProfile: (id, updatedProfile) => set((state) => ({
    profiles: state.profiles.map((profile) => 
      profile.id === id ? updatedProfile : profile
    ),
  })),
  deleteProfile: (id) => set((state) => ({
    profiles: state.profiles.filter((profile) => profile.id !== id),
  })),
}));