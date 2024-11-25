import React from 'react';
import { Phone, Mail, Trash2, UserCircle } from 'lucide-react';
import type { Contact } from '../../types';

type ContactListProps = {
  contacts: Contact[];
  onDelete: (id: string) => void;
};

export default function ContactList({ contacts, onDelete }: ContactListProps) {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-start justify-between"
        >
          <div className="flex items-start space-x-4">
            <UserCircle className="w-10 h-10 text-gray-400" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">{contact.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{contact.relationship}</p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{contact.email}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDelete(contact.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Delete contact"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}