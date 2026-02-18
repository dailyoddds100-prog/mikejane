
import React, { useState } from 'react';
import { Upload, Send, CheckCircle2 } from 'lucide-react';
import { JOB_OPENINGS } from '../constants';

const Careers: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-navy py-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">Join Our Team</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">We are always looking for passionate educators and professionals to shape the future of our students.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
        {/* Listings */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl font-serif text-navy">Current Openings</h2>
          {JOB_OPENINGS.map((job) => (
            <div key={job.id} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all border-l-8 border-l-blue-600">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-navy">{job.title}</h3>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{job.type}</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">{job.department} Department</p>
              <p className="text-gray-600 mb-6">{job.description}</p>
              <button 
                onClick={() => setFormData({ ...formData, position: job.title })}
                className="text-blue-600 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                Apply Now <Send size={14} />
              </button>
            </div>
          ))}
          
          <div className="p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <h4 className="font-bold text-navy mb-2">Can't find a suitable role?</h4>
              <p className="text-sm text-gray-500">Send your CV to careers@mikejane-ikorodu.edu.ng for general consideration.</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 sticky top-28">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-serif text-navy mb-4">Application Received</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">Thank you for your interest. Our HR team will review your CV and contact you if you meet the requirements for the position.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-navy text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Apply for another role
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif text-navy mb-8">Submit Your Application</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                        placeholder="+234..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position Applying For</label>
                      <select 
                        required
                        value={formData.position}
                        onChange={e => setFormData({...formData, position: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Select a position</option>
                        {JOB_OPENINGS.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                        <option value="Other">Other (General)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload CV (PDF/DOC)</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-600 transition-colors cursor-pointer group relative">
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" required />
                      <Upload size={32} className="mx-auto text-gray-400 mb-2 group-hover:text-blue-600 transition-colors" />
                      <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-navy hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2">
                    Submit Application <Send size={20} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
