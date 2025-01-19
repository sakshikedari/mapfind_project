import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useProfileStore } from '../store/profileStore';
import type { Profile } from '../types/profile';

export function AddProfileDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { addProfile } = useProfileStore();
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    description: '',
    street: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    interests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProfile: Profile = {
      id: crypto.randomUUID(),
      name: formData.name,
      photo: formData.photo,
      description: formData.description,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        coordinates: [-122.4194, 37.7749], 
      },
      contact: {
        email: formData.email,
        phone: formData.phone,
      },
      interests: formData.interests.split(',').map(i => i.trim()),
    };
    addProfile(newProfile);
    setIsOpen(false);
    setFormData({
      name: '',
      photo: '',
      description: '',
      street: '',
      city: '',
      state: '',
      email: '',
      phone: '',
      interests: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Add New Profile</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interests (comma-separated)
                </label>
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Design, Technology, Art"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}