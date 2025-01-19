import React from 'react';
import { MapPin, Mail, Phone, ChevronRight, Trash2 } from 'lucide-react';
import { useProfileStore } from '../store/profileStore';
import type { Profile } from '../types/profile';

interface ProfileCardProps {
  profile: Profile;
  onShowSummary: () => void;
}

export function ProfileCard({ profile, onShowSummary }: ProfileCardProps) {
  const { deleteProfile } = useProfileStore();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] relative group">
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm('Are you sure you want to delete this profile?')) {
            deleteProfile(profile.id);
          }
        }}
        className="absolute top-2 right-2 p-1.5 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
      >
        <Trash2 className="w-4 h-4" />
      </button>
      
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{profile.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{profile.description}</p>
        
        <div className="space-y-1 mb-3">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{profile.address.city}, {profile.address.state}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Mail className="w-3 h-3 mr-1" />
            <span className="truncate">{profile.contact.email}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Phone className="w-3 h-3 mr-1" />
            <span>{profile.contact.phone}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs"
            >
              {interest}
            </span>
          ))}
        </div>

        <button
          onClick={onShowSummary}
          className="w-full flex items-center justify-center gap-1 bg-blue-600 text-white py-1.5 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          View Summary
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}