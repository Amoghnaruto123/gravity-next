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
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import CompaniesSection from "../components/CompaniesSection";
import Footer from "../components/Footer";
import { DialogOverlay } from '@radix-ui/react-dialog';
import { CheckIcon, Phone, Mail } from 'lucide-react';

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
      {/* Banner */}
      <Banner />
      
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
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Get sales and product support:</h3>
              <p className="text-gray-600">Available 9:00 AM - 6:00 PM, Mon - Sat</p>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-orange-500 mr-2" />
              <span className="text-2xl font-bold">1800 209 6070</span>
            </div>
            
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Get in touch
            </Button>
          </div>
        </div>
      </section>
      
      {/* Companies Section with scrolling logos */}
      <CompaniesSection companies={companies} />
      
      {/* Technology infrastructure section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology infrastructure solutions from edge to cloud</h2>
          <div className="flex justify-center gap-4 mb-8">
            <span className="text-orange-500 font-medium border-r pr-4 border-gray-300">Offerings</span>
            <span className="text-gray-600">Industries</span>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

      {/* Book a Call Dialog */}
      <Sheet open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xl p-0 overflow-hidden">
          <div className="flex h-full">
            {/* Left side: Form */}
            <div className="w-full p-8 bg-white overflow-y-auto">
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
