/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Palmtree, 
  Mountain, 
  Sprout, 
  Droplets, 
  Home, 
  Wrench, 
  ClipboardCheck, 
  Wallet, 
  Users, 
  Clock, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  CheckCircle2,
  ChevronRight,
  Star,
  Menu,
  X
} from 'lucide-react';
import { SERVICES, PORTFOLIO, TESTIMONIALS, USPS, WORKFLOW, CONTACT_INFO } from './constants';

const IconMap: Record<string, any> = {
  Leaf, Palmtree, Mountain, Sprout, Droplets, Home, Wrench, ClipboardCheck, Wallet, Users, Clock
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPortfolio = activeFilter === 'all' 
    ? PORTFOLIO 
    : activeFilter === 'before-after'
      ? PORTFOLIO.filter(item => item.isBeforeAfter)
      : PORTFOLIO.filter(item => item.category === activeFilter);

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'minimalist', label: 'Minimalis' },
    { id: 'tropical', label: 'Tropis' },
    { id: 'vertical', label: 'Vertical' },
    { id: 'water', label: 'Kolam' },
    { id: 'before-after', label: 'Before-After' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className={`w-8 h-8 ${scrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>iTaman 99</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Beranda', 'Tentang', 'Layanan', 'Portfolio', 'Kontak'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`font-medium transition-colors ${scrolled ? 'text-earth hover:text-primary' : 'text-white/80 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Konsultasi Gratis
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-earth' : 'text-white'} /> : <Menu className={scrolled ? 'text-earth' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-6 px-6 flex flex-col gap-4"
            >
              {['Beranda', 'Tentang', 'Layanan', 'Portfolio', 'Kontak'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-earth hover:text-primary"
                >
                  {item}
                </a>
              ))}
              <a 
                href={CONTACT_INFO.whatsapp}
                className="bg-primary text-white text-center py-3 rounded-lg font-bold"
              >
                WhatsApp Kami
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://tse3.mm.bing.net/th/id/OIP.LkVL9cmUNduZf8n4nKl2ygHaEc?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Jasa Pembuatan Taman <br />
            <span className="text-primary-light italic">Profesional & Estetik</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90"
          >
            Desain, Pembuatan, dan Perawatan Taman Rumah & Komersial. <br className="hidden md:block" />
            Wujudkan hunian asri impian Anda bersama iTaman 99.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              Konsultasi Gratis via WhatsApp
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-2/3">
              <div className="relative">
                <img 
                  src="/img/taman3.jpg" 
                  alt="About iTaman 99" 
                  className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Tentang Kami</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-earth">Solusi Lengkap Landscape & Taman</h2>
              <p className="text-lg text-earth/70 mb-8 leading-relaxed">
                iTaman 99 adalah penyedia jasa landscape profesional yang berdedikasi untuk menciptakan ruang terbuka hijau yang estetik dan fungsional. Kami percaya bahwa taman bukan sekadar hiasan, melainkan investasi kenyamanan dan kesehatan bagi penghuninya.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  'Pengalaman Bertahun-tahun',
                  'Pengerjaan Profesional',
                  'Desain Custom & Unik',
                  'Layanan Maintenance Lengkap'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                    <span className="font-medium text-earth">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#layanan" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Lihat Layanan Kami <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Layanan Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth">Apa yang Kami Kerjakan?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md">
                      <Icon className="text-primary w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-earth">{service.title}</h3>
                    <p className="text-earth/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-8">Hasil Proyek Terbaik Kami</h2>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === cat.id 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-secondary text-earth/60 hover:bg-primary/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-2xl overflow-hidden aspect-video"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white/60 text-xs uppercase tracking-widest mb-1">{item.category}</span>
                    <h4 className="text-white text-xl font-bold">{item.title}</h4>
                    {item.isBeforeAfter && (
                      <span className="mt-2 inline-block bg-primary text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase">Before - After</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="text-center mt-16">
            <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-earth px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
              Lihat Lebih Banyak di Instagram
            </a>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {USPS.map((usp) => {
              const Icon = IconMap[usp.icon];
              return (
                <div key={usp.id} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-3xl mb-6 backdrop-blur-sm">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{usp.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Cara Kerja</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth">Proses Pengerjaan Kami</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {WORKFLOW.map((step) => (
                  <div key={step.id} className="text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative">
                      {step.id}
                      <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping-slow" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-earth">{step.title}</h3>
                    <p className="text-earth/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Testimoni</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth">Apa Kata Klien Kami?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi) => (
              <div key={testi.id} className="bg-secondary p-10 rounded-3xl relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-earth/80 mb-8 leading-relaxed">
                  "{testi.content}"
                </p>
                <div>
                  <h4 className="font-bold text-xl text-earth">{testi.name}</h4>
                  <p className="text-primary text-sm">{testi.location}</p>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-4xl font-serif opacity-30">"</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1920&auto=format&fit=crop" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/90" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Wujudkan Taman Impian Anda Sekarang</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/80">
            Jangan biarkan halaman rumah Anda kosong begitu saja. Konsultasikan desain taman terbaik yang sesuai dengan budget Anda.
          </p>
          <a 
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all transform hover:scale-105 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-earth text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <Leaf className="w-8 h-8 text-primary" />
                <span className="text-3xl font-serif font-bold">iTaman 99</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-8">
                Jasa landscape dan taman profesional yang melayani pembuatan berbagai jenis taman dengan kualitas terbaik dan harga kompetitif.
              </p>
              <div className="flex gap-4">
                <a href={CONTACT_INFO.instagram} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={CONTACT_INFO.whatsapp} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8">Layanan</h4>
              <ul className="space-y-4 text-white/60">
                {SERVICES.slice(0, 5).map(s => (
                  <li key={s.id}><a href="#layanan" className="hover:text-primary transition-colors">{s.title}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8">Navigasi</h4>
              <ul className="space-y-4 text-white/60">
                {['Beranda', 'Tentang', 'Layanan', 'Portfolio', 'Kontak'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8">Kontak Kami</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white/60">{CONTACT_INFO.location}</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white/60">+62 812 3456 7890</span>
                </li>
                <li className="flex gap-4">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white/60">WhatsApp: iTaman 99</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} iTaman 99. All rights reserved. Designed for Excellence.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Tanya Kami Sekarang
        </span>
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
