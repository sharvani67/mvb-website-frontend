import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SubmitResumeSection = () => {
  const navigate = useNavigate();

  const scrollToContactForm = () => {
    navigate('/contact');
    setTimeout(() => {
      const contactFormElement = document.getElementById('contact-form');
      if (contactFormElement) {
        contactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-pink-600 via-yellow-500 to-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6">
          Don't See a Role That Fits?
        </h2>

        <p className="text-white/90 mb-10 text-lg">
          We're always looking for talented professionals. Send us your
          resume and we'll get in touch when a suitable opportunity opens.
        </p>

        <button
          onClick={scrollToContactForm}
          className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105 font-medium cursor-pointer"
        >
          Submit Your Resume
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default SubmitResumeSection;