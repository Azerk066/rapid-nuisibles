import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Zap,
  MapPin,
  ShieldCheck,
  FileText,
  Star,
  Trophy,
  Users,
  Clock3,
  ArrowRight,
  Bug,
  Mouse,
  Flame,
  CheckCircle2,
  Award,
  Menu,
} from 'lucide-react';

// À remplacer par ton vrai numéro.
const PHONE = '06 52 64 30 49';

// Format WhatsApp : 33 + numéro sans le 0.
const WHATSAPP = '33652643049';

// Ton logo officiel Rapid’Nuisibles.
// Pour l’hébergement final, mets ce fichier dans /public/logo-rapid-nuisibles.png
// puis remplace le src par : /logo-rapid-nuisibles.png
const LOGO = '/mnt/data/Logo_rapid_nuisibles.png';

// Les cartes de services reprennent l’esprit du visuel : image sombre + titre blanc + accent orange.
const services = [
  {
    title: 'Frelons & guêpes',
    text: 'Destruction de nids',
    icon: <span className="text-4xl">🐝</span>,
    image: 'linear-gradient(135deg, rgba(249,115,22,.35), rgba(0,0,0,.85))',
  },
  {
    title: 'Dératisation',
    text: 'Rats, souris, mulots',
    icon: <span className="text-4xl">🐀</span>,
    image: 'linear-gradient(135deg, rgba(120,80,45,.45), rgba(0,0,0,.85))',
  },
  {
    title: 'Désinsectisation',
    text: 'Cafards, blattes, puces',
    icon: <span className="text-4xl">🪳</span>,
    image: 'linear-gradient(135deg, rgba(249,115,22,.25), rgba(0,0,0,.85))',
  },
  {
    title: 'Fourmis',
    text: 'Traitement spécialisé',
    icon: <span className="text-4xl">🐜</span>,
    image: 'linear-gradient(135deg, rgba(90,65,35,.5), rgba(0,0,0,.85))',
  },
  {
    title: 'Dépigeonnisation',
    text: 'Anti-pigeons & volatiles',
    icon: <span className="text-4xl">🕊️</span>,
    image: 'linear-gradient(135deg, rgba(80,90,95,.45), rgba(0,0,0,.85))',
  },
];

const trustItems = [
  { icon: <Zap className="h-9 w-9" />, title: 'Intervention 7j/7', text: '24h/24 si urgence' },
  { icon: <MapPin className="h-9 w-9" />, title: 'Tout le 06', text: 'Déplacement rapide' },
  { icon: <Award className="h-9 w-9" />, title: 'Expert certifié', text: 'Produits professionnels' },
  { icon: <ShieldCheck className="h-9 w-9" />, title: 'Sécurité garantie', text: 'Résultats durables' },
  { icon: <FileText className="h-9 w-9" />, title: 'Devis gratuit', text: 'Sans engagement' },
];

const navItems = ['Accueil', 'Nos services', 'Zones d’intervention', 'À propos', 'Avis clients', 'Contact'];

// Petite icône personnalisée pour garder l’esprit “traitement ciblé”.
function CrosshairIcon() {
  return (
    <div className="relative h-10 w-10 rounded-full border-2 border-orange-500">
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-orange-500" />
      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-orange-500" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500" />
    </div>
  );
}

// Bouton principal réutilisable pour les appels et WhatsApp.
function CTAButton({ children, href, variant = 'orange' }) {
  const common = 'inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-black uppercase tracking-wide transition-all duration-300';
  const styles =
    variant === 'orange'
      ? 'bg-orange-500 text-white shadow-[0_0_35px_rgba(249,115,22,.35)] hover:bg-orange-400 hover:scale-[1.02]'
      : 'border border-white/15 bg-white/[0.06] text-white hover:border-orange-500/60 hover:bg-white/[0.1]';

  return (
    <a href={href} className={`${common} ${styles}`}>
      {children}
    </a>
  );
}

export default function RapidNuisiblesPremiumSite() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-orange-500 selection:text-black">
      {/* Fond global : halos orange + dégradé noir pour un rendu premium sombre. */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,.20),transparent_30%),radial-gradient(circle_at_20%_0%,rgba(249,115,22,.12),transparent_24%),linear-gradient(180deg,#050505,#000)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-40 [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]" />
      </div>

      {/* Top bar très fine : annonce l’urgence et renforce le positionnement 24h/24. */}
      <div className="relative z-50 border-b border-orange-500/40 bg-orange-950/40 py-2 text-center text-xs font-black uppercase tracking-wide text-orange-400">
        <Zap className="mr-2 inline h-4 w-4 fill-orange-400" />
        Intervention rapide 7j/7 - 24h/24 dans toutes les Alpes-Maritimes (06)
      </div>

      {/* Navigation principale. */}
      <header className="relative z-50 border-b border-orange-500/20 bg-black/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 py-5 lg:px-24">
          <a href="#" className="flex items-center">
            <img src={LOGO} alt="Rapid Nuisibles" className="h-16 w-auto object-contain md:h-20" />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-black uppercase tracking-wide text-white/90 xl:flex">
            {navItems.map((item, index) => (
              <a key={item} href={`#${index === 0 ? 'accueil' : item.toLowerCase().replaceAll(' ', '-').replaceAll('’', '-')}`} className={index === 0 ? 'text-orange-500' : 'hover:text-orange-500'}>
                {item}
              </a>
            ))}
          </nav>

          <a href={`tel:${PHONE.replaceAll(' ', '')}`} className="hidden shrink-0 items-center gap-3 whitespace-nowrap rounded-xl border border-orange-500 px-5 py-3 text-base font-black text-white transition hover:bg-orange-500/10 md:flex">
            <Phone className="h-5 w-5 fill-orange-500 text-orange-500" />
            {PHONE}
          </a>

          <button className="rounded-xl border border-white/10 p-3 xl:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* HERO : reproduction du style de l’image, avec gros logo officiel + CTA immédiats. */}
      <section id="accueil" className="relative z-10 px-6 py-12 lg:px-24 lg:py-16">
        <div className="mx-auto grid max-w-[1700px] items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-orange-500/30 bg-black/50 px-4 py-3 text-sm font-black uppercase text-white shadow-[0_0_30px_rgba(249,115,22,.12)]">
              <ShieldCheck className="h-4 w-4 text-orange-500" />
              Expert anti-nuisibles dans le 06
            </div>

            <h1 className="max-w-4xl text-5xl font-black italic leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
              Intervention rapide <span className="block text-orange-500">7j/7 dans le 06</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/90 md:text-2xl">
              Frelons, guêpes, rats, cafards, fourmis et tous nuisibles. Votre sécurité, <span className="font-black text-orange-500">notre priorité.</span>
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={`tel:${PHONE.replaceAll(' ', '')}`}>
                <Phone className="h-6 w-6" />
                <span>
                  <span className="block text-xs">Appeler maintenant</span>
                  <span className="block whitespace-nowrap text-lg md:text-xl">{PHONE}</span>
                </span>
              </CTAButton>

              <CTAButton href={`https://wa.me/${WHATSAPP}`} variant="dark">
                <MessageCircle className="h-7 w-7" />
                <span>
                  <span className="block text-base">WhatsApp</span>
                  <span className="block text-xs font-medium normal-case text-white/60">Réponse immédiate</span>
                </span>
              </CTAButton>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-orange-500/20 bg-black/30 p-8 shadow-[0_0_90px_rgba(249,115,22,.16)]">
            {/* Fausse image “macro insecte” en CSS pour éviter les dépendances externes. */}
            <div className="absolute right-[-160px] top-0 h-full w-[55%] bg-[radial-gradient(circle_at_center,rgba(249,115,22,.55),transparent_12%),radial-gradient(circle_at_60%_45%,rgba(255,255,255,.30),transparent_10%),linear-gradient(135deg,rgba(249,115,22,.25),transparent_55%)] blur-[1px]" />
            <div className="absolute right-16 top-24 hidden h-80 w-80 rounded-full border-[18px] border-orange-500/30 bg-black/40 blur-[2px] lg:block" />

            {/* Gros logo officiel au centre/droite : c’est bien TON logo qui devient l’élément visuel principal. */}
            <div className="relative z-10 flex h-full min-h-[460px] items-center justify-center">
              <img src={LOGO} alt="Logo Rapid Nuisibles" className="w-full max-w-4xl object-contain drop-shadow-[0_0_45px_rgba(249,115,22,.35)]" />
            </div>
          </motion.div>
        </div>

        {/* Bandeau de garanties sous le hero. */}
        <div className="mx-auto mt-8 grid max-w-[1700px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl md:grid-cols-5">
          {trustItems.map((item, index) => (
            <div key={item.title} className={`flex items-center gap-5 p-7 ${index !== trustItems.length - 1 ? 'border-b border-white/10 md:border-b-0 md:border-r' : ''} border-white/10`}>
              <div className="text-orange-500">{item.icon}</div>
              <div>
                <h3 className="font-black uppercase tracking-wide text-white">{item.title}</h3>
                <p className="mt-1 text-xs leading-snug text-white/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contenu principal : services + zone d’intervention, comme sur la maquette. */}
      <section id="nos-services" className="relative z-10 px-6 pb-10 lg:px-24">
        <div className="mx-auto grid max-w-[1700px] gap-12 xl:grid-cols-[1.25fr_.85fr]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">Nos services</h2>
                <div className="mt-2 h-1 w-12 bg-orange-500" />
              </div>
              <a href="#contact" className="hidden items-center gap-2 text-sm font-black uppercase text-orange-500 hover:text-orange-400 md:flex">
                Voir tous nos services <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative h-48 overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-xl transition hover:-translate-y-2 hover:border-orange-500/50"
                >
                  <div className="absolute inset-0" style={{ background: service.image }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute left-4 top-4 grid h-16 w-16 place-items-center rounded-xl border border-orange-500/30 bg-black/55 text-orange-500 backdrop-blur">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-[11px] font-black uppercase leading-tight tracking-tight text-white sm:text-xs">{service.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-white/70">{service.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="zones-d-intervention" className="border-white/10 xl:border-l xl:pl-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">Zone d’intervention</h2>
            <div className="mt-2 h-1 w-12 bg-orange-500" />

            <div className="mt-6 grid gap-6 md:grid-cols-[.9fr_1.1fr] xl:grid-cols-1 2xl:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-56 overflow-hidden rounded-xl border border-white/10 bg-zinc-950 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,.45),transparent_45%)]" />
                <div className="relative grid h-full place-items-center">
                  <div className="relative h-44 w-64 rounded-[45%_55%_45%_55%] bg-orange-500 shadow-[0_0_45px_rgba(249,115,22,.4)]">
                    <MapPin className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-black uppercase leading-tight text-white">
                  Toutes les villes <span className="block text-orange-500">des Alpes-Maritimes (06)</span>
                </h3>
                <p className="mt-5 leading-7 text-white/75">
                  Nice, Cannes, Antibes, Grasse, Cagnes-sur-Mer, Menton, Saint-Laurent-du-Var et toutes les communes environnantes.
                </p>
                <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl border border-orange-500 px-6 py-4 text-sm font-black uppercase text-orange-500 transition hover:bg-orange-500 hover:text-black">
                  Voir toutes les zones <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau Google / preuve sociale. */}
      <section id="avis-clients" className="relative z-10 px-6 pb-10 lg:px-24">
        <div className="mx-auto grid max-w-[1700px] overflow-hidden rounded-xl border border-orange-500/25 bg-white/[0.04] backdrop-blur-xl md:grid-cols-4">
          <div className="flex items-center gap-5 border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-2xl font-black text-black">G</div>
            <div>
              <div className="flex text-orange-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-1 font-black">5.0</p>
              <p className="text-sm text-white/60">Basé sur 120+ avis Google</p>
            </div>
          </div>

          <div className="flex items-center gap-5 border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <Trophy className="h-10 w-10 text-orange-500" />
            <div><p className="font-black uppercase">Plus de 10 ans</p><p className="text-sm text-white/60">d’expérience</p></div>
          </div>

          <div className="flex items-center gap-5 border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <Users className="h-10 w-10 text-orange-500" />
            <div><p className="font-black uppercase">100% de clients</p><p className="text-sm text-white/60">satisfaits</p></div>
          </div>

          <div className="flex items-center gap-5 p-7">
            <Clock3 className="h-10 w-10 text-orange-500" />
            <div><p className="font-black uppercase">Intervention</p><p className="text-sm text-white/60">ultra rapide</p></div>
          </div>
        </div>
      </section>

      {/* CTA final orange, très visible sur mobile et desktop. */}
      <section id="contact" className="relative z-10 px-6 pb-16 lg:px-24">
        <div className="mx-auto grid max-w-[1700px] items-center gap-6 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 p-8 text-white shadow-[0_0_60px_rgba(249,115,22,.25)] lg:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-5">
            <Phone className="hidden h-14 w-14 md:block" />
            <div>
              <h2 className="text-2xl font-black uppercase md:text-3xl">Besoin d’une intervention rapide ?</h2>
              <p className="mt-1 text-white/90">Appelez maintenant ou envoyez un WhatsApp, nous intervenons dans l’heure selon disponibilité.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${PHONE.replaceAll(' ', '')}`} className="inline-flex items-center justify-center gap-3 rounded-xl bg-black px-8 py-4 font-black text-white transition hover:scale-[1.02]">
              <Phone className="h-5 w-5 text-orange-500" /> {PHONE}
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-black text-white transition hover:scale-[1.02]">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
