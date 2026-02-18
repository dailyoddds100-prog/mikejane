
import React, { useState } from 'react';
import { X, Lock, Download, AlertCircle } from 'lucide-react';
import { YEARBOOK_VALID_ID } from '../constants';

interface YearBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const YearBookModal: React.FC<YearBookModalProps> = ({ isOpen, onClose }) => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId.trim() === YEARBOOK_VALID_ID) {
      setError('');
      setIsSuccess(true);
      // Simulate file download
      setTimeout(() => {
        alert("Yearbook download starting...");
      }, 500);
    } else {
      setError('Invalid ID Number. Please contact the school administration.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all">
        <div className="bg-navy p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Lock size={24} className="text-yellow-400" />
            <h3 className="text-xl font-semibold">Protected Download</h3>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8">
          {!isSuccess ? (
            <>
              <p className="text-gray-600 mb-6">
                Access to the school digital Year Book is restricted to current students and alumni. Please enter your Student ID to continue.
              </p>
              <form onSubmit={handleValidate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student ID Number</label>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="e.g., SB2024-GRAD"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                  />
                </div>
                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Verify & Access
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Access Granted!</h4>
              <p className="text-gray-600 mb-6">Your download should start automatically.</p>
              <button
                onClick={onClose}
                className="text-navy font-semibold hover:underline"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YearBookModal;
