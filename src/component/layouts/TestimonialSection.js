import React, { useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="page-section py-10 bg-gradient-to-r from-pink-200 to-blue-100 font-space-grotesk">
      <div className="container mx-auto px-4 md:px-6 bg-white rounded-xl shadow-md py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Niềm tin của khách hàng là minh chứng cho chất lượng dịch vụ của
            chúng tôi.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />

          <div className="flex justify-center mt-3 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-pink-500" : "bg-pink-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
