"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Loader2, User, Mail, MessageSquare } from "lucide-react";
import GsapButton from "@/components/ui/GsapButton";

export default function ConnectWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    setTimeout(() => {
      setFormState("success");
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      msg: "",
    });
    setFormState("idle");
  };

  return (
    <section
      id="connect"
      className="relative w-full bg-white text-zinc-950 px-0 sm:px-6 lg:px-8 overflow-hidden font-sans"
    >
      {/* Anchor for any #contact links across the site */}
      <span id="contact" className="absolute -top-24 pointer-events-none" />

      {/* Outer Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Form Content */}
          <div className="px-5 sm:px-10 lg:px-16 py-10 sm:py-14 md:py-20 flex flex-col justify-center">
            <div className="w-full max-w-xl mx-auto lg:mx-0">
              {/* Section Header */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
                  Connect with Us
                </h2>
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-normal">
                  Send us a message and our team will get back to you shortly.
                </p>
              </div>

              {formState === "success" ? (
                <div className="py-8 sm:py-10 text-center bg-zinc-50 border border-zinc-200 p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. We have received your message and will reply to <span className="font-semibold text-zinc-900">{formData.email}</span> soon.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <GsapButton
                      type="button"
                      onClick={handleReset}
                      variant="primary"
                      className="px-6 h-11 text-xs font-semibold tracking-wider uppercase hover:!bg-[#3A46CA] hover:!border-[#3A46CA] transition-colors duration-200"
                    >
                      <span>Send Another Message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </GsapButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full pl-5 pr-4 py-3 bg-white border border-zinc-200 focus:border-[#3A46CA] focus:ring-1 focus:ring-[#3A46CA] text-base md:text-sm text-zinc-950 placeholder:text-zinc-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full pl-5 pr-4 py-3 bg-white border border-zinc-200 focus:border-[#3A46CA] focus:ring-1 focus:ring-[#3A46CA] text-base md:text-sm text-zinc-950 placeholder:text-zinc-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                    
                      <textarea
                        required
                        rows={4}
                        value={formData.msg}
                        onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                        placeholder="Your Message..."
                        className="w-full pl-5 pr-4 py-3 bg-white border border-zinc-200 focus:border-[#3A46CA] focus:ring-1 focus:ring-[#3A46CA] text-base md:text-sm text-zinc-950 placeholder:text-zinc-400 outline-none transition-colors resize-y"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <GsapButton
                      type="submit"
                      disabled={formState === "submitting"}
                      variant="primary"
                      className="w-full h-12 text-sm font-semibold tracking-wide hover:!bg-[#3A46CA] hover:!border-[#3A46CA] transition-colors duration-200"
                    >
                      <span>{formState === "submitting" ? "Sending Message..." : "Send Message"}</span>
                      {formState === "submitting" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </GsapButton>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Visual Image */}
          <div className="relative w-full border-t lg:border-t-0 lg:border-l border-zinc-200 bg-zinc-100 overflow-hidden min-h-[340px] sm:min-h-[440px] lg:min-h-full">
            <Image
              src="/contact/connect.jpg"
              alt="Connect with Deplysoft"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
