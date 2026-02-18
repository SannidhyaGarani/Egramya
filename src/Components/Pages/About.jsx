import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, GraduationCap, Sprout, TrendingUp, Users } from "lucide-react";

// --- Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const stagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

// --- Sub-Components ---

const StatBox = ({ label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 0.6 }}
        className="flex flex-col p-5 bg-white border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl"
    >
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-1">{label}</span>
        <span className="font-serif text-2xl text-stone-800">{value}</span>
    </motion.div>
);

const ModuleCard = ({ number, icon: Icon, title, description, items, image }) => (
    <motion.div
        variants={fadeInUp}
        className="group relative bg-white rounded-[2rem] p-2 border border-stone-100 shadow-sm hover:shadow-[0_20px_50px_rgba(14,167,113,0.1)] transition-all duration-500 overflow-hidden"
    >
        <div className="flex flex-col lg:flex-row h-full">
            {/* Image Section - Compact Left */}
            <div className="relative lg:w-1/3 h-64 lg:h-auto overflow-hidden rounded-[1.5rem]">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={image} alt="Module" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0ea771] shadow-sm">
                    MODULE 0{number}
                </div>
            </div>

            {/* Content Section - Right */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#0ea771]/10 rounded-lg text-[#0ea771]">
                        <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-stone-900">{title}</h3>
                </div>

                <p className="text-stone-500 mb-6 leading-relaxed text-sm lg:text-base">{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-stone-700 text-sm">
                            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#0ea771] opacity-60 shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const AboutProgram = () => {
    return (
        <div className="min-h-screen bg-[#F9F8F6] font-sans selection:bg-[#0ea771]/20">

            {/* ================= 1. COMPACT BREADCRUMB HEADER ================= */}
            <header className="relative h-[45vh] min-h-[400px] overflow-hidden mt-25">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce"
                        className="w-full h-full object-cover"
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-[#F9F8F6]" />
                </div>

                <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 text-white/80 text-xs font-medium tracking-widest uppercase mb-6"
                    >
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <ChevronRight size={12} />
                        <a href="/programs" className="hover:text-white transition-colors">Programs</a>
                        <ChevronRight size={12} />
                        <span className="text-white border-b border-[#0ea771]">Village Dairy Counsellor</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-5xl lg:text-7xl text-white leading-tight"
                    >
                        Developing <span className="italic text-[#0ea771]">Self-Sustainable</span><br />
                        Dairy Leaders
                    </motion.h1>
                </div>
            </header>

            {/* ================= 2. ARCHITECTURAL HERO (Compact & Dense) ================= */}
            <section className="relative -mt-10 z-10 px-6 max-w-7xl mx-auto mb-24">

                <div className="grid lg:grid-cols-12 gap-6 items-start">

                    {/* Left: Main Content Card */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                        className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-stone-200/50 border border-stone-100"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea771]/10 text-[#0ea771] text-xs font-bold tracking-wider uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#0ea771] animate-pulse"></span>
                            Professional Training Program
                        </div>
                        <h2 className="text-xl lg:text-2xl text-stone-600 leading-relaxed font-light mb-8">
                            A comprehensive <strong className="text-stone-900 font-medium">12-week professional journey</strong> designed to create technically skilled, financially independent Village Dairy Counsellors who serve as advisors and entrepreneurs.
                        </h2>

                        {/* Stats Grid integrated into card */}
                        <div className="grid grid-cols-3 gap-4 border-t border-stone-100 pt-8">
                            <div>
                                <div className="text-3xl font-serif text-stone-900 mb-1">12</div>
                                <div className="text-[10px] uppercase tracking-wider text-stone-500">Weeks Duration</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif text-stone-900 mb-1">6</div>
                                <div className="text-[10px] uppercase tracking-wider text-stone-500">Days / Week</div>
                            </div>
                            <div>
                                <div className="text-3xl font-serif text-stone-900 mb-1">450+</div>
                                <div className="text-[10px] uppercase tracking-wider text-stone-500">Hours Training</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Visual & Details */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-lg"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
                                className="w-full h-full object-cover"
                                alt="Students"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <p className="text-white/90 text-sm font-medium">Empowering rural youth through dairy science.</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <StatBox label="Daily Format" value="4-5 Hrs" delay={0.4} />
                            <StatBox label="Mode" value="Offline" delay={0.5} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= 3. MODULES (Compact List Layout) ================= */}
            <section className="relative max-w-7xl mx-auto px-6 pb-24">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-6"
                >
                    <div>
                        <span className="text-[#0ea771] font-bold tracking-widest text-xs uppercase mb-2 block">Curriculum</span>
                        <h2 className="font-serif text-4xl text-stone-900">Program Modules</h2>
                    </div>
                    <p className="text-stone-500 text-sm max-w-xs mt-4 md:mt-0">
                        Structured learning path moving from basics to business mastery.
                    </p>
                </motion.div>

                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="space-y-6">
                    <ModuleCard
                        number="1"
                        icon={Sprout}
                        title="Dairy Farming Basics"
                        description="Foundation module focused on animal management, nutrition, breeding, disease prevention, and clean milk production."
                        items={[
                            "Animal husbandry & breed management",
                            "Nutrition & feed cost optimization",
                            "Breeding, genetics & reproductive health",
                            "Disease prevention & milk hygiene"
                        ]}
                        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
                    />

                    <ModuleCard
                        number="2"
                        icon={TrendingUp}
                        title="Business & Enterprise"
                        description="Transforms dairy farming into a profitable enterprise and enables VDCs to build self-sustaining income streams."
                        items={[
                            "Financial management & record keeping",
                            "Marketing, sales & value addition",
                            "Cooperative & FPO management",
                            "Dairy entrepreneurship & quality control"
                        ]}
                        image="https://images.unsplash.com/photo-1628352081506-83c43123ed6d"
                    />

                    <ModuleCard
                        number="3"
                        icon={Users}
                        title="Community & Practice"
                        description="Develops VDCs as rural change agents through communication training, extension methods, and real-world village attachment."
                        items={[
                            "Rural development & social mobilization",
                            "Extension methods & communication skills",
                            "Field internship & village attachment",
                            "Conflict resolution & leadership"
                        ]}
                        image="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                    />
                </motion.div>
            </section>

            {/* ================= 4. CERTIFICATION & IMPACT (Premium Dark Footer) ================= */}
            <section className="bg-stone-900 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea771]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#0ea771] p-2 rounded-lg">
                                    <GraduationCap className="text-white" size={24} />
                                </div>
                                <span className="text-[#0ea771] font-bold tracking-widest text-xs uppercase">Certification</span>
                            </div>

                            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
                                Impact & <br /> <span className="text-stone-400">Career Trajectory</span>
                            </h2>
                            <p className="text-stone-400 text-lg leading-relaxed mb-8">
                                Graduates don't just get a certificate; they gain a sustainable livelihood supporting 100–150 dairy households, ensuring long-term community development.
                            </p>

                            <button className="group flex items-center gap-2 px-8 py-4 bg-[#0ea771] text-white rounded-full font-medium hover:bg-[#0b8a5c] transition-colors">
                                Apply for Program
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Weekly practical evaluations",
                                "Final field project certified",
                                "Support 150+ households",
                                "Sustainable advisory income",
                                "Role in rural development",
                                "Lifetime expert network"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-[#0ea771]/50 transition-colors"
                                >
                                    <div className="w-2 h-2 rounded-full bg-[#0ea771] mb-3" />
                                    <p className="text-stone-300 text-sm font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutProgram;