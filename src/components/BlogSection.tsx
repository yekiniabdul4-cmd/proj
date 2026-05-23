import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BLOGS } from "../data";
import { BlogPost } from "../types";
import { Calendar, User, BookOpen, Clock, ArrowRight, X } from "lucide-react";

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 bg-zinc-950/40 relative" id="blog-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/[0.04]">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
              📰 Premium Insights
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Thoughts On Conversions <br />
              <span className="silver-gradient-text">& Strategic Digital Design.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              We analyze consumer psychology, search algorithms, loading velocities, and digital frameworks to keep your brand commanding luxury fees.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((post) => (
            <div 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="glass-panel group cursor-pointer overflow-hidden rounded-xl flex flex-col justify-between border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              id={`blog-card-${post.id}`}
            >
              {/* Image thumbnail header */}
              <div className="relative aspect-16/10 overflow-hidden bg-zinc-900 border-b border-white/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 rounded-sm bg-cyan-950/85 border border-cyan-500/20 backdrop-blur-md px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-cyan-300 font-bold">
                  {post.category}
                </span>
              </div>

              {/* Main content block */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-4 font-mono text-[9px] text-[#cbd5e1]/50 uppercase font-semibold">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3 text-cyan-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-cyan-400" />
                    <span>{post.minRead} Min Read</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-450 transition-colors tracking-wide leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Action row footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between border-t border-white/[0.04] pt-4">
                <div className="flex items-center space-x-1 text-xs text-cyan-400 font-bold tracking-wide uppercase group-hover:text-cyan-300 transition-colors">
                  <span>View Full Insight</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ELITE POPUP ARTICLE MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-cyan-500/25 bg-[#050505] p-6 sm:p-10 shadow-2xl scrollbar-thin"
              id="blog-modal-container"
            >
              {/* Close Button controller */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/10 bg-cyan-950/20 text-cyan-450 hover:text-white transition-all outline-none cursor-pointer"
                id="close-blog-modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="space-y-8">
                {/* Meta block */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-955/40 border border-cyan-500/20 px-2.5 py-1 rounded-sm">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight mt-2.5 block">
                    {selectedPost.title}
                  </h3>
                  <div className="flex items-center space-x-5 font-mono text-[10px] text-zinc-400 uppercase font-bold pt-2">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="h-3.5 w-3.5 text-cyan-500" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="h-3.5 w-3.5 text-cyan-500" />
                      <span>{selectedPost.minRead} Min Read</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <User className="h-3.5 w-3.5 text-cyan-500" />
                      <span>Hamido Teck</span>
                    </div>
                  </div>
                </div>

                {/* Cover Image */}
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-cyan-500/10">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Essay body Content */}
                <div className="prose prose-invert max-w-none text-zinc-350 text-xs sm:text-sm leading-relaxed space-y-6 pt-4 border-t border-cyan-500/10 font-light" id="blog-content">
                  {selectedPost.content.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Author footer */}
                <div className="flex items-center space-x-4 border-t border-cyan-500/10 pt-8">
                  <div className="h-10 w-10 rounded-full border border-cyan-500/25 bg-cyan-950 flex items-center justify-center font-display font-black text-xs text-cyan-400">HT</div>
                  <div>
                    <h5 className="font-display text-xs font-bold text-white tracking-wide">Hamido Teck Studio</h5>
                    <p className="font-sans text-[11px] text-zinc-400 font-light mt-0.5">Custom SaaS, reservation channels & elegant portfolios developer.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
