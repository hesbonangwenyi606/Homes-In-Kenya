import React, { useState } from 'react';
import { Home, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';

// Reusable List Section
interface FooterListProps {
  title: string;
  items: string[];
}
const FooterList: React.FC<FooterListProps> = ({ title, items }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
          >
            <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Newsletter Form
const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-3">
      <div className="relative flex-1 md:w-80">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
      >
        {subscribed ? 'Subscribed!' : 'Subscribe'}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};

// Social Icons
const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

const Footer: React.FC = () => {
  const propertyTypes = ['Houses', 'Apartments', 'Land', 'Bungalows', 'Commercial', 'Villas'];
  const locations = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika'];
  const quickLinks = ['About Us', 'Our Agents', 'Blog', 'Careers', 'FAQs', 'Contact'];
  const resources = ['Mortgage Calculator', 'Property Guide', 'Market Insights', 'Legal Guide', 'Investment Tips', 'Moving Checklist'];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Get New Listings in Your Inbox</h3>
            <p className="text-emerald-100">Subscribe to receive the latest properties and market insights.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold">Kenya<span className="text-emerald-400">Homes</span></h2>
          </div>
          <p className="text-gray-400 mb-6 max-w-sm">
            Kenya's premier real estate platform. Find your dream home from thousands of verified listings across the country.
          </p>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-emerald-500" /> Westlands, Nairobi, Kenya</div>
            <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-500" /> +254 700 123 456</div>
            <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-500" /> info@kenyahomes.co.ke</div>
          </div>
          <div className="flex gap-4 mt-6">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Lists */}
        <FooterList title="Property Types" items={propertyTypes} />
        <FooterList title="Locations" items={locations} />
        <FooterList title="Quick Links" items={quickLinks} />
        <FooterList title="Resources" items={resources} />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2026 KenyaHomes. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
