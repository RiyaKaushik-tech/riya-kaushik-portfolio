"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ContactForm({ onSubmit, isSubmitting, submitStatus }) {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = async (data) => {
    const isSuccess = await onSubmit(data);
    if (isSuccess) {
      reset();
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 shadow-[0_20px_80px_-40px_rgba(99,102,241,0.45)] backdrop-blur-sm md:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-400">Contact Form</p>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-emerald-300">
          Available
        </span>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className="space-y-4 md:space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
            01 // Name
          </label>
          <input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-base font-light text-white placeholder:text-neutral-600 transition-colors focus:border-indigo-400 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
            02 // Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-base font-light text-white placeholder:text-neutral-600 transition-colors focus:border-indigo-400 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
            03 // Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Tell me about your project"
            rows={4}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-base font-light text-white placeholder:text-neutral-600 transition-colors focus:border-indigo-400 focus:outline-none"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ x: 8 }}
          disabled={isSubmitting}
          className="group flex items-center gap-3 pt-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="bg-clip-text text-xl font-light uppercase italic tracking-tight text-transparent md:text-2xl" style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary-olive), #ffffff, var(--color-primary-olive))' }}>
            {isSubmitting ? "Sending..." : "Submit"}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/50 bg-indigo-500/10 text-indigo-200 transition-all duration-500 group-hover:bg-white group-hover:text-black">
            <FaArrowRight className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
          </span>
        </motion.button>

        {submitStatus?.message ? (
          <p
            className={`text-sm ${
              submitStatus.type === "success" ? "text-emerald-300" : "text-rose-300"
            }`}
          >
            {submitStatus.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
