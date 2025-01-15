'use client';

import { useEffect, useState } from 'react';
import { databases } from '@/lib/config'; // Update the import path based on your project structure

interface EmailDocument {
  $id: string;
  email: string;
}

export default function Page() {
  const [emails, setEmails] = useState<EmailDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setIsLoading(true);
        const response = await databases.listDocuments("67878cc30030ca9ec3ae", "67878ccf001b4de2e4d6",);
        setEmails(response.documents.map(doc => ({
          $id: doc.$id,
          email: doc.email
        })));
      } catch (err) {
        console.error('Error fetching emails:', err);
        setError('Failed to fetch emails.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (isLoading) {
    return <div className='p-4 mt-24 px-16' >Loading emails...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 mt-24 px-16">
      <h1 className="text-xl font-bold mb-4">Email List</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((doc) => (
            <tr key={doc.$id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{doc.$id}</td>
              <td className="border border-gray-300 px-4 py-2">{doc.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
