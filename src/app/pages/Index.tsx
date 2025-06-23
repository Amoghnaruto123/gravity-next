"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Toaster } from "@/app/components/ui/toaster";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/app/components/ui/sheet";

import VideoCarousel from "../components/VideoCarousel";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CompaniesSection from "../components/CompaniesSection";
import Footer from "../components/Footer";
import ProductsBentoSection from "../components/ProductsBentoSection";
import SolutionsBentoSection from "../components/SolutionsBentoSection";
import ServicesBentoSection from "../components/ServicesBentoSection";
import TestimonialsBentoSection from "../components/TestimonialsBentoSection";
import { DialogOverlay } from '@radix-ui/react-dialog';
import { CheckIcon, Phone, Mail } from 'lucide-react';
import { Z_VERSION_ERROR } from 'node:zlib';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm({
    defaultValues: {
      category: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      note: ""
    }
  });

  const onSubmit = async (data: any) => {
    const formData = {
      category: data.category,
      fullName: data.name,
      companyName: data.company,
      email: data.email,
      phoneNumber: data.phone,
      note: data.note,
    };

    console.log("Sending form data:", formData);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyPHLlRre0t2q4ml4nJpruWrI45TZNWyqDTKMSTuclO1jv2t4k7yxHoPqckA_KiC39-/exec",
        {
          method: "POST",
          mode: "no-cors", // ⚠️ Prevents CORS error but you won't get a readable response
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Show toast and close popup
      toast("Booking Confirmed!", {
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your call.",
      });

      setFormSubmitted(true);

      setTimeout(() => {
        setIsDialogOpen(false);
        form.reset();
        setFormSubmitted(false);
      }, 1500);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast("Submission Failed", {
        description: "Something went wrong. Please try again.",
      });
    }
  };

  const companies = [{
    name: "Company 1",
    logo: "/lovable-uploads/L1.png"
  }, {
    name: "Company 2",
    logo: "/lovable-uploads/L2.png"
  }, {
    name: "Company 3",
    logo: "/lovable-uploads/L3.png"
  }, {
    name: "Company 4",
    logo: "/lovable-uploads/L4.png"
  }, {
    name: "Company 5",
    logo: "/lovable-uploads/L5.png"
  }, {
    name: "Company 6",
    logo: "/lovable-uploads/L6.png"
  }, {
    name: "Company 7",
    logo: "/lovable-uploads/L7.png"
  }, {
    name: "Company 8",
    logo: "/lovable-uploads/L8.png"
  }, {
    name: "Company 9",
    logo: "/lovable-uploads/L9.png"
  }, {
    name: "Company 10",
    logo: "/lovable-uploads/L10.png"
  }, {
    name: "Company 11",
    logo: "/lovable-uploads/L11.png"
  }, {
    name: "Company 12",
    logo: "/lovable-uploads/L12.png"
  }];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation 
        isDialogOpen={isDialogOpen} 
        setIsDialogOpen={setIsDialogOpen} 
        form={form} 
        onSubmit={onSubmit} 
      />
      
      {/* Hero Section */}
      <HeroSection openBookCallDialog={() => setIsDialogOpen(true)} />

      {/* Get in touch section */}
      <section className="bg-gray-100 py-6">
        <div className="w-full">
          <div className="relative max-w-[1920px] mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-4 md:space-y-0">
              {/* Left Text Block - Extreme Left */}
              <div className="flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Get sales and product support</h3>
                <p className="text-sm md:text-base text-gray-600">Available 9:00 AM – 6:00 PM, Mon – Sat</p>
              </div>

              {/* Vertical Separator - Desktop Only */}
              <div className="hidden md:block w-px h-12 bg-gray-200 mx-8 self-center"></div>

              {/* Center Block */}
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-lg md:text-xl font-bold text-gray-800">1800 209 6070</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500 pl-7">Call us for inquiries or support</p>
              </div>

              {/* Vertical Separator - Desktop Only */}
              <div className="hidden md:block w-px h-12 bg-gray-200 mx-8 self-center"></div>

              {/* Email Buttons - Extreme Right */}
              <div className="w-full md:w-auto">
                <div className="flex flex-row gap-2 justify-start">
                  <Button variant="default" size="sm" className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    📩 Email Sales
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 md:flex-none bg-gray-700 hover:bg-gray-800 text-white text-sm">
                    🛠️ Email Support
                  </Button>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>For pricing and demos</span>
                  <span>For technical support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section with scrolling logos */}
      <CompaniesSection companies={companies} />
      
      {/* Products Bento Grid Section */}
      <ProductsBentoSection />
      
      {/* Solutions Bento Grid Section */}
      <SolutionsBentoSection />
      
      {/* Services Bento Grid Section */}
      <ServicesBentoSection />
      
      {/* Testimonials Section */}
      <TestimonialsBentoSection />
      
      {/* Footer */}
      <Footer />

      {/* Book a Call Dialog */}
      <Sheet open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xl p-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left side: Form */}
            <div className="w-full lg:w-1/3 p-8 bg-white overflow-y-auto border-r border-gray-200">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-2xl font-bold text-gray-900 mb-2">Book a CallBack</SheetTitle>
                <p className="text-gray-600">Get expert consultation for your IT infrastructure needs</p>
              </SheetHeader>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600">
                    Thank you for your interest. We'll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="infrastructure">Infrastructure Consultation</SelectItem>
                              <SelectItem value="power">Power Management</SelectItem>
                              <SelectItem value="auditing">Auditing Services</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your company name" 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email" 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Enter your phone number" 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="note"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Note</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your requirements..." 
                              {...field} 
                              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ease-in-out"
                    >
                      Schedule Consultation
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
