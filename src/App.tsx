import { motion } from "motion/react";
import { 
  Search, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Share2, 
  Languages, 
  Box, 
  Layers, 
  Zap, 
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-on-surface">PACKLINK</div>
          
          <div className="hidden md:flex items-center gap-x-8">
            <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1 transition-all">Solutions</a>
            <a href="#" className="text-secondary font-medium hover:text-on-surface transition-all">Systems</a>
            <a href="#" className="text-secondary font-medium hover:text-on-surface transition-all">Structural Engineering</a>
            <a href="#" className="text-secondary font-medium hover:text-on-surface transition-all">Methodology</a>
            <a href="#" className="text-secondary font-medium hover:text-on-surface transition-all">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-low rounded-lg px-4 py-2">
              <Search className="text-secondary w-4 h-4" />
              <input 
                type="text" 
                placeholder="Technical Specs..." 
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-32 placeholder:text-neutral-400"
              />
            </div>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-bold tracking-tight hover:bg-primary-container transition-all active:scale-95">
              Get Quote
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-neutral-200 p-6 flex flex-col gap-4"
          >
            <a href="#" className="text-primary font-bold">Solutions</a>
            <a href="#" className="text-secondary font-medium">Systems</a>
            <a href="#" className="text-secondary font-medium">Structural Engineering</a>
            <a href="#" className="text-secondary font-medium">Methodology</a>
            <a href="#" className="text-secondary font-medium">Contact</a>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 blueprint-grid opacity-40"></div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 bg-primary/5 text-primary rounded-sm border-l-2 border-primary mb-6">
                <span className="text-xs font-black tracking-widest uppercase">Precision Material Handling</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-8">
                PRECISION <br /> <span className="text-primary">CONVEYANCE.</span>
              </h1>
              <p className="text-xl text-secondary mb-10 max-w-lg leading-relaxed font-medium">
                Optimizing structural flow through automated modular systems designed to eliminate human error and atmospheric stress.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-md font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
                  Explore Systems
                </button>
                <button className="bg-surface-container-highest text-on-surface px-10 py-5 rounded-md font-bold text-lg hover:bg-surface-container-high transition-all">
                  Download Catalog
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAQaQdlG6k0ZVMGW2LCPsqWhCd3H8yaJFVZjvKAcBslt2Go_L3v-O-4IEFGBWmxMrA4mz-fWOh-npKMisxCpNZn1i-993jB_mV247EisSvgjFsfLq30euf60KUELB7k_eO8u68C89K9w-rjSB5AM_xMqFy3sLIj_sd37bRUk7wCcGuPS8QoDBlJstnLcMd0_gb_M8OAskFwR4oAmdBUUpMaZEyo_Yrz9wmmgulbQJaX-m28bHoPUjNairsmaIgTDLO_QCxqN2Bi5bo" 
                  alt="High-Tech Conveyor Module" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 shadow-xl border-b-4 border-primary max-w-[280px]">
                <p className="text-3xl font-black text-on-surface mb-1">0% Drift</p>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Modular Alignment Accuracy</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-12 text-center">Our Methodology</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: "01",
                  title: "The Challenge",
                  desc: "Identifying mechanical stress points and bottlenecks in existing material handling workflows that lead to product degradation.",
                  border: "border-neutral-300"
                },
                {
                  id: "02",
                  title: "The Solution",
                  desc: "Engineering bespoke modular conveyor links and structural packaging systems that mitigate human error and environmental variables.",
                  border: "border-primary"
                },
                {
                  id: "03",
                  title: "The Outcome",
                  desc: "A seamless, high-reliability structural flow that preserves material integrity while maximizing throughput efficiency.",
                  border: "border-on-surface"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`bg-surface p-10 rounded-xl shadow-sm border-t-4 ${item.border}`}
                >
                  <span className="text-primary font-black text-4xl block mb-4">{item.id}</span>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "PET", sub: "Advanced Material Handling" },
                  { label: "Bio-M", sub: "Sustainable Solutions" },
                  { label: "99.9%", sub: "Operational Reliability" },
                  { label: "45", sub: "Handling Patents" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-surface-container-low border-b-2 border-primary-container"
                  >
                    <span className="block text-4xl font-black text-primary mb-2">{stat.label}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">{stat.sub}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-8 leading-tight uppercase">
                Advancing <span className="text-primary">Structural</span> Packaging Flow.
              </h2>
              <p className="text-lg text-secondary mb-8 leading-relaxed">
                Packlink leads the industry in Structural Packaging Engineering. We specialize in the transit of delicate materials, including PET and advanced biomaterials, utilizing modular transport systems that reduce mechanical stress during every phase of the logistics cycle.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-bold hover:gap-4 transition-all group">
                OUR ENGINEERING STANDARDS
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 flex justify-between items-end">
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-4">Material Handling Ecosystem</h2>
                <h3 className="text-5xl font-black text-on-surface tracking-tighter">Specialized Systems.</h3>
              </div>
              <button className="hidden md:block bg-on-surface text-surface px-8 py-3 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all">
                Full Inventory
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
              {/* Large Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-surface-container-lowest rounded-xl min-h-[400px]"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQA3vYN5V__wEC6WhPQ6B0kmCsM6fFr3yER4Pvhbwu9pRl2RQTOb4Sud24BJ8FU96Rwmh0aSVkkFDtZNQ1A73P-T6D2jo7QmdxEQtxC8L3YWn0NvMuVyQEpzXKOVeQeqzlitrALwMEvIo20iD3CN5ovOsxjtFN7Uq8QawLmlGAjbw0cK6Y1qBeGMiINLgXe-X_aLMjpEA_lt8R6b0upzGlmU0LqIiZVEcJOJI8n5zcpLkBHx0msAAx6BAmYFX2jaWmdCUznsiD0dfP" 
                  alt="Vacuum Systems" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">Series V-500</span>
                  <h4 className="text-3xl font-black text-surface mb-4">Precision Vacuum Systems</h4>
                  <p className="text-white/70 max-w-sm mb-6">High-speed material stabilization for ultra-lightweight and delicate structural components.</p>
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-md font-bold text-sm hover:bg-primary-container transition-all">
                    Technical Specs
                  </button>
                </div>
              </motion.div>

              {/* Medium Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 md:row-span-1 group relative overflow-hidden bg-surface-container-lowest rounded-xl min-h-[200px]"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8nxYTeQbmq8zt9viqsXrgMS0_fdDi0qrJc5zxXKyXRheF3-V1rE1sFiR7zMO-b_AzVY30g6Xq1SIJ6kyPdxszSIa4pZ8rADYT2XTpUiu4p71DTfD3Jll2PABhQcJIzRRbOTVcby-EppnTikFoKCuzdoAJXDaSoQYVux_QIJlOgd2jaBWGCpEz7vf3sRm1p4BQu_l-VYb4IB5RiTUduLzP5nVwcA2G5JsFZRcUxg16_JhsQtApmrV6QVPJPxwj_303ISeKiYE-do5Y" 
                  alt="Magnetic Conveyance" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-xl font-black text-surface">Magnetic Slide Conveyance</h4>
                </div>
              </motion.div>

              {/* Small Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-surface-container-lowest rounded-xl min-h-[200px]"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeaXnUMRnT1nODmPS3GwtIJRy331krPPAJmSeqxq1NWIKcKH8OHZn7CXym8MHbtbGYMip4aumysd327Zkelz6406cTmLTAXeKXbffcSMyYrobPS1fp5m1T-2YoxpURMsBRVqVlTYFDrc9YgTWJGlaNQe2MniK4FRMWTOQOsjhz6VugyDEnU0g9JZOw0ubCpXAvxwJKD8I5NjhDVvKA7YWTGHymeaU4f-igjbNt7gN1MEb7fQTxGH7mdRV7mGKzw_e1CX6G9ny0t7e5" 
                  alt="Sanitary Washdown" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-lg font-black text-surface">Sanitary Washdown (Food/Pharma)</h4>
                </div>
              </motion.div>

              {/* Small Card 2 (Text Based) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-surface-container-lowest border-b-4 border-primary rounded-xl min-h-[200px]"
              >
                <div className="p-8 h-full flex flex-col justify-center">
                  <Layers className="text-primary w-10 h-10 mb-4" />
                  <h4 className="text-xl font-black text-on-surface mb-2">Automated Modular Links</h4>
                  <p className="text-sm text-secondary">Scalable transit paths designed for zero-error facility integration.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xs text-center lg:text-left shrink-0">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-secondary mb-2">Operational Partners</h2>
                <p className="text-on-surface font-bold text-xl">Powering high-volume sorting & transport environments.</p>
              </div>
              
              <div className="relative w-full lg:flex-1 overflow-hidden group/belt">
                {/* Conveyor Belt Visual */}
                <div className="absolute bottom-4 left-0 right-0 h-8 bg-surface-container-highest rounded-full border-b-4 border-neutral-400 shadow-inner overflow-hidden z-0">
                  <motion.div 
                    className="flex items-center h-full gap-8 px-4 will-change-transform"
                    animate={{ x: [-38, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(50)].map((_, i) => (
                      <div key={i} className="w-1.5 h-4 bg-neutral-400/50 rounded-full shrink-0" />
                    ))}
                  </motion.div>
                </div>

                <div className="flex py-16 relative z-10">
                  <motion.div 
                    className="flex gap-16 shrink-0 will-change-transform"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ 
                      duration: 25, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex gap-16">
                        {["AUTOTECH", "GLOBEX", "SOLARIS", "VORTEX", "OMEGA-7"].map((brand, idx) => (
                          <div key={idx} className="relative">
                            {/* Industrial Box */}
                            <motion.div 
                              whileHover={{ y: -5 }}
                              className="w-48 h-32 bg-surface-container-lowest border-2 border-surface-container-highest shadow-xl rounded-sm flex flex-col justify-between p-5 relative group/box hover:border-primary transition-all duration-300"
                            >
                              {/* Tape/Seal Detail */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-full bg-surface-container-low/30 z-0"></div>
                              
                              <div className="relative z-10 flex justify-between items-start">
                                <div className="w-10 h-10 bg-primary/5 rounded-xs flex items-center justify-center border border-primary/10">
                                  <Box className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col items-end">
                                  <div className="text-[7px] font-mono text-secondary opacity-40 uppercase tracking-tighter">Batch ID</div>
                                  <div className="text-[9px] font-mono text-on-surface font-bold">PK-{1000 + idx + (i * 5)}</div>
                                </div>
                              </div>
                              
                              <div className="relative z-10">
                                <div className="text-base font-black tracking-tighter text-on-surface uppercase leading-none">{brand}</div>
                                <div className="flex items-center gap-2 mt-2">
                                  <div className="h-1 w-8 bg-primary rounded-full"></div>
                                  <div className="text-[9px] font-black text-primary tracking-[0.2em] uppercase">Structural Flow</div>
                                </div>
                              </div>

                              {/* Shipping Label Mockup */}
                              <div className="absolute top-12 right-4 w-8 h-10 bg-surface-container-low/40 rounded-xs border border-surface-container-highest flex flex-col gap-1 p-1">
                                <div className="h-1 w-full bg-secondary/20"></div>
                                <div className="h-1 w-2/3 bg-secondary/20"></div>
                                <div className="mt-auto h-2 w-full bg-secondary/10"></div>
                              </div>
                            </motion.div>
                            
                            {/* Dynamic Shadow on the belt */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-3 bg-black/10 blur-lg rounded-full opacity-50 group-hover/box:opacity-80 transition-opacity"></div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Side Guards of the Conveyor */}
                <div className="absolute bottom-4 left-0 w-4 h-8 bg-neutral-500 rounded-l-full z-20 border-r border-neutral-600"></div>
                <div className="absolute bottom-4 right-0 w-4 h-8 bg-neutral-500 rounded-r-full z-20 border-l border-neutral-600"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-inverse-surface rounded-2xl overflow-hidden grid lg:grid-cols-5 shadow-2xl">
              <div className="lg:col-span-2 p-12 lg:p-16 flex flex-col justify-between bg-primary relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl font-black text-surface mb-6 tracking-tighter uppercase">Initiate <br /> System Flow.</h2>
                  <p className="text-white/70 text-lg mb-12">Connect with our conveyance leads to discuss system architecture and human-error mitigation.</p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MapPin className="text-surface w-5 h-5" />
                      <span className="text-white/90 text-sm font-medium">102 Precision Blvd, Industrial Park, OH 44101</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-surface w-5 h-5" />
                      <span className="text-white/90 text-sm font-medium">engineering@packlink.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-surface w-5 h-5" />
                      <span className="text-white/90 text-sm font-medium">+1 (800) PACK-LINK</span>
                    </div>
                  </div>
                </div>
                {/* Decorative Icon */}
                <div className="absolute -bottom-20 -right-20 opacity-10">
                  <Box className="w-[300px] h-[300px] text-surface" />
                </div>
              </div>
              <div className="lg:col-span-3 p-12 lg:p-16 bg-surface-container-lowest">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-secondary">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-secondary">Corporate Email</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-secondary">System Requirement</label>
                    <select className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 transition-all">
                      <option>Vacuum Conveyance</option>
                      <option>Magnetic Systems</option>
                      <option>Sanitary Food/Pharma Systems</option>
                      <option>Modular Sorting Architecture</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-secondary">Flow Details</label>
                    <textarea 
                      placeholder="Describe your material handling requirements..." 
                      rows={4} 
                      className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-5 rounded-md font-black tracking-widest uppercase hover:bg-primary-container transition-all active:scale-95">
                    Submit System Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-2xl font-black tracking-tighter text-on-surface">PACKLINK</div>
              <div className="text-xs uppercase tracking-widest text-secondary">
                © 2024 PACKLINK ENGINEERING. PRECISION CONVEYANCE.
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {["Privacy Policy", "Terms of Service", "ISO Compliance", "Conveyor Support"].map((link) => (
                <a key={link} href="#" className="text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-6">
              <Share2 className="text-secondary hover:text-primary transition-colors cursor-pointer w-5 h-5" />
              <Languages className="text-secondary hover:text-primary transition-colors cursor-pointer w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
