"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaPhone, FaRegCommentDots, FaUser } from "react-icons/fa";
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
    <section className="relative overflow-hidden px-6 py-14 md:py-16" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      <div className="pointer-events-none absolute left-1/2 top-10 h-36 w-[60%] -translate-x-1/2 rounded-full blur-[80px]" style={{ background: 'var(--color-glow-green)' }} />

      <Toaster position="top-center" />

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 mx-auto w-full max-w-5xl space-y-5 rounded-md p-4 md:p-5"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <div className="flex flex-col gap-2 border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="text-3xl font-black uppercase italic tracking-tight md:text-4xl">
            Contact <span style={{ color: 'var(--color-primary-olive)' }}>Protocol</span>
          </h2>
          <p className="text-[11px] font-mono uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
            Quick brief for project inquiry and collaboration
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-sm p-2.5" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Step 01</p>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-primary)' }}>Share your goal</p>
          </div>
          <div className="rounded-sm p-2.5" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Step 02</p>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-primary)' }}>Receive confirmation</p>
          </div>
          <div className="rounded-sm p-2.5" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Step 03</p>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-primary)' }}>Plan next action</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-mono uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
              <FaUser className="inline mr-1 text-[10px]" /> Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full rounded-sm px-3 py-2 text-sm transition duration-300 focus:outline-none"
              style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-primary)' }}
            />
            {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-mono uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
              <FaEnvelope className="inline mr-1 text-[10px]" /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full rounded-sm px-3 py-2 text-sm transition duration-300 focus:outline-none"
              style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-primary)' }}
            />
            {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-mono uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
              <FaPhone className="inline mr-1 text-[10px]" /> Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone"
              {...register("phone")}
              className="w-full rounded-sm px-3 py-2 text-sm transition duration-300 focus:outline-none"
              style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-primary)' }}
            />
            {errors.phone && <p className="mt-1 text-xs text-rose-300">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-mono uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
              <MdOutlineSubject className="inline mr-1 text-[10px]" /> Reason
            </label>
            <select
              {...register("reason")}
              className="w-full rounded-sm px-3 py-2 text-sm transition duration-300 focus:outline-none"
              style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-primary)' }}
            >
              <option value="">Select reason</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="General Question">General Question</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && <p className="mt-1 text-xs text-rose-300">{errors.reason.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-[11px] font-mono uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>
              <FaRegCommentDots className="inline mr-1 text-[10px]" /> Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message"
              {...register("message")}
              className="w-full resize-none rounded-sm px-3 py-2 text-sm transition duration-300 focus:outline-none"
              style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-primary)' }}
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message.message}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t pt-3" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-[10px] font-mono uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>Secure form transmission</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            type="submit"
            disabled={isSubmitting}
            className={`rounded-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black transition-all duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{ backgroundColor: isSubmitting ? 'rgba(122, 157, 40, 0.5)' : 'var(--color-primary-olive)' }}
            onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = 'var(--color-primary-olive-light)')}
            onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = 'var(--color-primary-olive)')}
          >
            {status || "Send Message"}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
