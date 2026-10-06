import React from "react"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  business: string
  text: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    name: "Eesha Khan",
    role: "Restaurant Owner",
    business: "Food & Hospitality",
    text: "Hulm POS has completely transformed how I run my restaurant. The FBR integration makes tax reporting so much easier, and managing orders and inventory is a breeze. Plus, it’s affordable! Honestly, it’s the best POS software in Pakistan for restaurants.",
    stars: 5
  },
  {
    name: "Aqsa Khalid",
    role: "Bakery Owner",
    business: "Bakery & Confectionery",
    text: "Hulm POS has made running my bakery so much smoother. With FBR integration, tracking orders and inventory is effortless, and it keeps everything affordable. It’s definitely the best POS software in Pakistan for bakeries.",
    stars: 5
  },
  {
    name: "Mustafa Hasnain",
    role: "Supermarket / Mart Owner",
    business: "Grocery & Mart",
    text: "As a mart owner, I needed a POS with FBR integration and tried HULM POS’s free demo. It’s user-friendly, automates FBR invoices, and manages inventory seamlessly. The real-time reporting and affordable pricing make it a great choice for small businesses.",
    stars: 5
  },
  {
    name: "Jawad Hussain",
    role: "Retail Store Owner",
    business: "Retail Shop",
    text: "Hulm Solutions POS is an excellent choice for retail shops in Pakistan. It’s user-friendly, reliable, and perfectly suited for managing inventory and sales. Highly recommended for retail business owners!",
    stars: 5
  },
  {
    name: "Zohaib Khalid",
    role: "Retail Store Manager",
    business: "Retail Chain",
    text: "We've been using this POS software for a few months and it's been a game changer for our retail store. It's simple, fast, and makes managing sales and inventory much easier. Support is responsive and helpful.",
    stars: 5
  },
  {
    name: "Meesum Shaikh",
    role: "Fleet & Logistics Owner",
    business: "Logistics & Transport",
    text: "I was unable to manage fleet logistics properly until HULM Solutions came to rescue my business with their logistics and inventory suite! Highly recommended!",
    stars: 5
  }
]

export function IndustriesTestimonials() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-zinc-200 group-hover:text-[#25a18e]/30 transition-colors" />
            </div>
            <p className="text-zinc-600 text-sm sm:text-[14.5px] leading-relaxed mb-6 italic">
              &ldquo;{t.text}&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-[#0F2A26] text-sm sm:text-base">
                {t.name}
              </h4>
              <p className="text-xs text-zinc-500 font-medium">
                {t.role} • <span className="text-[#25a18e]">{t.business}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
