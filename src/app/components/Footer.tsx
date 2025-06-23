import React from 'react';
import { Phone, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F3F6FB] text-gray-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/8c79cb12-2bc2-4bcd-95a4-8e82d3f4035f.png" alt="Gravity India Technologies" className="h-10 w-auto" />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Powering Fortune 500 companies with mission-critical infrastructure solutions since 1995. Providing data center design, power management and cooling solutions across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 text-base mb-4" style={{ fontFamily: 'Microsoft JhengHei' }}>Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Data Center Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Power & UPS Systems</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Cooling Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Renewable Energy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Managed Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 text-base mb-4" style={{ fontFamily: 'Microsoft JhengHei' }}>Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Leadership</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">News & Press</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 text-base mb-4" style={{ fontFamily: 'Microsoft JhengHei' }}>Support</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">24/7 Monitoring</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Technical Support</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">Training</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors font-medium">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 text-base mb-4" style={{ fontFamily: 'Microsoft JhengHei' }}>Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-600 font-medium">+91 9886710105</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-600 font-medium">marcom@gravityindia.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 Gravity India Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 