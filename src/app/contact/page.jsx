"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  reason: z.string().min(1, "Select a reason"),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatus("Sending...");
    try {
      const payload = {
        ...data,
        mobile: data.phone,
      };

      
  const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setStatus("");
        reset();
      } else {
        toast.error("Error sending message");
        setStatus("Error");
      }
    } catch {
      toast.error("Something went wrong");
      setStatus("Error");
    }
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-16 text-white md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-14 h-48 w-[72%] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <Toaster position="top-center" />

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 mx-auto w-full max-w-5xl space-y-8 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.03] p-6 shadow-[0_25px_100px_-45px_rgba(99,102,241,0.55)] backdrop-blur-xl md:p-9"
      >
        <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:pb-6">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter md:text-5xl">
            Contact <span className="text-indigo-500">Protocol</span>
          </h2>
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400">
            Quick brief for project inquiry and collaboration
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/30 p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Step 01</p>
            <p className="mt-1 text-sm text-neutral-100">Share your goal</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Step 02</p>
            <p className="mt-1 text-sm text-neutral-100">Receive confirmation</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Step 03</p>
            <p className="mt-1 text-sm text-neutral-100">Plan next action</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <div>
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400">
              <FaUser className="inline mr-1" /> Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-neutral-500 transition focus:border-indigo-400 focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-rose-300">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400">
              <FaEnvelope className="inline mr-1" /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-neutral-500 transition focus:border-indigo-400 focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-rose-300">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400">
              <FaPhone className="inline mr-1" /> Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone"
              {...register("phone")}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-neutral-500 transition focus:border-indigo-400 focus:outline-none"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-rose-300">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400">
              <MdOutlineSubject className="inline mr-1" /> Reason
            </label>
            <select
              {...register("reason")}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white transition focus:border-indigo-400 focus:outline-none"
            >
              <option value="">Select reason</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="General Question">General Question</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && (
              <p className="mt-1 text-sm text-rose-300">{errors.reason.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400">
              <FaRegCommentDots className="inline mr-1" /> Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message"
              {...register("message")}
              className="w-full resize-none rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-neutral-500 transition focus:border-indigo-400 focus:outline-none"
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-rose-300">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500">
            Secure form transmission
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-3 font-semibold text-white transition-all ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="relative z-10">{status || "Send Message"}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-indigo-300/20 opacity-0 transition hover:opacity-100" />
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
