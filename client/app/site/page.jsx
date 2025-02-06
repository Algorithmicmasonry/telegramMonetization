"use client";

import HeroSection from "./_components/HeroSection";
import Perks from "./_components/Perks";
import HeroImage from "./_components/HeroImage";
import Steps from "./_components/Steps";
import UseCases from "./_components/UseCases";
import MeanToYou from "./_components/MeanToYou";
import Analytics from "./_components/Analytics";
import Pricing from "./_components/Pricing";
import PricingCalculator from "./_components/Pricing";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

import { useState, useEffect } from "react";
import { CircleArrowRightIcon } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-lg p-8 max-w-md w-full text-gray-900">
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
              FREE REPORT REVEALS
            </h2>
            <h2></h2>
            <p className="mb-4 text-center text-2xl font-semibold">
              How To Build A Forex & Crypto Coaching Trading Academy That
              Generates Up To <span className="text-green-500">₦125,000</span>{" "}
              In Profits{" "}
              <span className="underline text-red-500">Every Single Week</span>{" "}
              Using
              <span className="text-3xl font-extrabold text-orange-400 ml-2">
                &quot; The Digital RealEstate Model&quot;
              </span>
            </p>
            <form onSubmit={handleSubmit} className="bg-gray-100">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded text-gray-900 bg-gray-100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded  text-gray-900 bg-gray-100"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded  text-gray-900 bg-gray-100"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center bg-background text-foreground mb-[70px] py-6 px-8 rounded-lg flex items-center justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>
              click the button below to Receive your free report on whatsapp
            </p>
            <Button className="mt-[60px]">
              <Link
                href="https://wa.link/l1iqim"
                className="p-4 flex items-center justify-center font-semibold text-lg bg-green-600 rounded-lg text-white"
              >
                Give Me My FREE! Report on WA <CircleArrowRightIcon className="ml-2" />
              </Link>
            </Button>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-white py-4 px-6 rounded-md hover:text-gray-700 bg-black"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const SitePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const delay = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000); // Random delay between 5000ms and 10000ms
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (formData) => {
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <HeroSection />
      <HeroImage />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
      <Perks />
      <Steps />
      <UseCases />
      <MeanToYou />
      <Analytics />
      <PricingCalculator />
      <CTA />
      <Footer />
    </div>
    // Effortlessly collect monthly recurring payments from group members
    // Protect your paid groups on auto-pilot
    // Automatically kickout unpaid users
  );
};

export default SitePage;
