export type EmergencyType = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  relationship: string;
};

export type UserLocation = {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
};