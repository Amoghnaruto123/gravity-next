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
// import ProductsBentoSection from "../components/ProductsBentoSection";
// import SolutionsBentoSection from "../components/SolutionsBentoSection";
// import ServicesBentoSection from "../components/ServicesBentoSection";
// import TestimonialsBentoSection from "../components/TestimonialsBentoSection";
import { DialogOverlay } from '@radix-ui/react-dialog';
import { CheckIcon, Phone, Mail } from 'lucide-react';
import { Z_VERSION_ERROR } from 'node:zlib';
import { MovingBorderButton } from "../components/ui/moving-border-button";
import { HorizontalScrollSection } from "@/app/components/HorizontalScrollSection";
import ResourcesSection from "@/app/components/ResourcesSection";
import { productsData, servicesData, solutionsData, resourcesData } from "@/app/data/sectionData";

// Flag to control which sections are visible
const SHOW_MINIMAL_SECTIONS = true;

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
    name: "Company 6",
    logo: "/lovable-uploads/L6.png"
  }, {
    name: "Company 7",
    logo: "/lovable-uploads/L7.png"
  }, {
    name: "Company 10",
    logo: "/lovable-uploads/L10.png"
  },];

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
      {!SHOW_MINIMAL_SECTIONS && (
        <section className="bg-gray-100 py-6">
          <div className="w-full">
            <div className="px-12">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                {/* Left Text Block */}
                <div className="flex-shrink-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1.5">Get sales and product support</h3>
                  <p className="text-base text-gray-600">Available 9:00 AM – 6:00 PM, Mon – Sat</p>
                </div>

                {/* Phone Block - Sales */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-base text-gray-600 mb-0.5">Sales</p>
                    <span className="text-2xl font-bold text-gray-800">1800 209 6070</span>
                  </div>
                </div>

                {/* Phone Block - Support */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-base text-gray-600 mb-0.5">Support</p>
                    <span className="text-2xl font-bold text-gray-800">1800 209 8070</span>
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="hidden md:block w-px h-16 bg-gray-300 mx-6"></div>

                {/* Email Buttons */}
                <div className="flex flex-col flex-center md:flex-row gap-6">
                  <div className="flex items-center gap-4">
                    <button className="bg-blue-50 p-5 rounded-full hover:bg-blue-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </button>
                    <span className="text-xl font-semibold text-gray-900">Contact Sales</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="bg-blue-50 p-5 rounded-full hover:bg-blue-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </button>
                    <span className="text-xl font-semibold text-gray-900">Contact Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Companies Section with scrolling logos */}
      <CompaniesSection companies={companies} />
      
      {/* Products Section */}
      {!SHOW_MINIMAL_SECTIONS && (
        <HorizontalScrollSection
          title="Products"
          subtitle="Innovative solutions designed to scale with your business needs"
          items={productsData}
        />
      )}
      
      {/* Services Section */}
      {!SHOW_MINIMAL_SECTIONS && (
        <HorizontalScrollSection
          title="Services"
          subtitle="Expert consulting and support to maximize your potential"
          items={servicesData}
        />
      )}
      
      {/* Solutions Section */}
      {!SHOW_MINIMAL_SECTIONS && (
        <HorizontalScrollSection
          title="Solutions"
          subtitle="Comprehensive packages tailored to your industry requirements"
          items={solutionsData}
        />
      )}
      
      {/* Resources Section */}
      {!SHOW_MINIMAL_SECTIONS && <ResourcesSection />}
      
      {/* Footer */}
      <Footer />

      {/* Book a Call Dialog */}
      <Sheet open={isDialogOpen} onOpenChange={(open) => {
        // If closing, trigger the state change immediately
        if (!open) {
          setIsDialogOpen(false);
        } else {
          setIsDialogOpen(true);
        }
      }}>
        <SheetContent side="right" className="w-full sm:max-w-xl p-0 overflow-hidden bg-white transition-all ease-in-out">
          <div className="flex flex-col lg:flex-row h-full bg-white">
            {/* Left side: Form */}
            <div className="w-full lg:w-full p-8 bg-white overflow-y-auto">
              <SheetHeader className="text-center sm:text-left mb-6">
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
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium leading-none">Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm">
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
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium leading-none">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
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
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium leading-none">Company Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your company name" 
                              {...field} 
                              className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
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
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium leading-none">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email" 
                              {...field} 
                              className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
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
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium leading-none">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Enter your phone number" 
                              {...field} 
                              className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
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
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium leading-none">Note</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your requirements..." 
                              {...field} 
                              className="flex min-h-[80px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-10 px-4 w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 ease-in-out"
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
