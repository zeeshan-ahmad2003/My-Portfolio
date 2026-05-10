import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { 
  Terminal, 
  Cpu, 
  GraduationCap, 
  Code2, 
  BrainCircuit, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ChevronDown,
  ExternalLink,
  ChevronRight,
  Copy,
  Check
} from "lucide-react";
import { 
  SiCplusplus, 
  SiPython, 
  SiHtml5, 
  SiMysql, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiGooglecolab 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-primary font-bold text-xl glow-text tracking-tighter">ZA_</div>
        <div className="hidden md:flex space-x-6 text-sm font-mono text-muted-foreground">
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">/about</button>
          <button onClick={() => scrollTo("education")} className="hover:text-primary transition-colors">/education</button>
          <button onClick={() => scrollTo("skills")} className="hover:text-primary transition-colors">/skills</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-primary transition-colors">/projects</button>
          <button onClick={() => scrollTo("certifications")} className="hover:text-primary transition-colors">/certifications</button>
          <button onClick={() => scrollTo("contact")} className="text-primary hover:text-primary/80 transition-colors">/contact</button>
        </div>
      </div>
    </nav>
  );
}

function SectionHeading({ title, icon: Icon }: { title: string, icon: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-10"
    >
      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-primary glow-border">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-3xl font-bold font-mono text-foreground tracking-tight">
        <span className="text-primary mr-2">&gt;</span>{title}
      </h2>
    </motion.div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30" style={{ background: "transparent" }}>
      <AnimatedBackground />
      <NavBar />
      
      <main className="max-w-5xl mx-auto px-6 pb-24 pt-32">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center items-start relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online. Seeking AI Internship.
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-foreground"
          >
            Zeeshan Ahmad
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-mono text-muted-foreground mb-8"
          >
            &lt;<span className="text-primary glow-text">AI_Engineer</span> /&gt;
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 border-l-2 border-primary/50 pl-6"
          >
            Building intelligent systems, one agent at a time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
              <Terminal className="w-5 h-5" /> Initialize Contact
            </a>
            <a href="https://github.com/zeeshan-ahmad2003" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 border border-border transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" /> GitHub Logs
            </a>
            <button
              onClick={copyLink}
              className="px-6 py-3 rounded-md font-bold border transition-all duration-200 flex items-center gap-2"
              style={{
                background: copied ? "rgba(6,220,130,0.15)" : "rgba(6,220,130,0.07)",
                borderColor: copied ? "rgba(6,220,130,0.8)" : "rgba(6,220,130,0.35)",
                color: copied ? "rgba(6,220,130,1)" : "rgba(6,220,130,0.8)",
                boxShadow: copied ? "0 0 16px rgba(6,220,130,0.25)" : "none",
              }}
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-primary/10">
          <SectionHeading title="About_Me" icon={Terminal} />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I am a highly motivated Computer Science student at Abdul Wali Khan University Mardan with a deep passion for Artificial Intelligence, Machine Learning, and Agentic Systems.
              </p>
              <p>
                I don't just write code; I orchestrate intelligent workflows. My focus is on building robust, scalable AI solutions that solve real-world problems. Currently seeking an AI internship to bring my theoretical knowledge and hands-on project experience to a dynamic team.
              </p>
              <div className="mt-8 p-6 bg-secondary/50 rounded-lg border border-border">
                <h3 className="text-primary font-mono mb-4 text-sm uppercase tracking-wider">System Specifications</h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li className="flex justify-between border-b border-border/50 pb-2"><span>Languages:</span> <span className="text-foreground">English, Urdu, Pashto</span></li>
                  <li className="flex justify-between border-b border-border/50 pb-2"><span>Soft Skills:</span> <span className="text-foreground text-right">Communication, Teamwork, Problem Solving</span></li>
                  <li className="flex justify-between pb-2"><span>CGPA:</span> <span className="text-foreground">3.25 / 4.0</span></li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto w-full"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
              <div className="relative h-full w-full rounded-2xl border border-primary/30 bg-card overflow-hidden flex items-center justify-center glow-border">
                <BrainCircuit className="w-32 h-32 text-primary opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-24 border-t border-primary/10">
          <SectionHeading title="Education" icon={GraduationCap} />
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            
            {[
              {
                degree: "BS Computer Science",
                inst: "Abdul Wali Khan University Mardan",
                year: "2023–2027",
                detail: "CGPA: 3.25/4.0",
                current: true
              },
              {
                degree: "FSc (Pre-Engineering/CS)",
                inst: "Edwardes College Peshawar",
                year: "2023",
                detail: "Marks: 932 / A1 Grade",
                current: false
              },
              {
                degree: "Matriculation",
                inst: "Al-Karim Public High School, Charsadda",
                year: "2021",
                detail: "Marks: 1068 / A1 Grade",
                current: false
              }
            ].map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_hsla(180,100%,50%,0.5)] z-10">
                  <div className={`w-3 h-3 rounded-full ${edu.current ? 'bg-primary animate-ping' : 'bg-primary/50'}`}></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">{edu.degree}</h3>
                    <span className="font-mono text-sm text-primary">{edu.year}</span>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm mb-2">{edu.inst}</p>
                  <p className="text-sm text-foreground/80">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 border-t border-primary/10">
          <SectionHeading title="Tech_Stack" icon={Code2} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              {
                title: "Languages",
                items: ["C++", "Java", "Python", "HTML"],
                icons: [SiCplusplus, FaJava, SiPython, SiHtml5]
              },
              {
                title: "AI & ML",
                items: ["Machine Learning", "CNNs", "Generative AI", "NLP", "RAG", "Agentic AI", "YOLO"],
                icons: [BrainCircuit]
              },
              {
                title: "Databases",
                items: ["MySQL", "SQL Server", "MongoDB"],
                icons: [SiMysql, SiMongodb]
              },
              {
                title: "Tools",
                items: ["Git", "GitHub", "VS Code", "Google Colab"],
                icons: [SiGit, SiGithub, Code2, SiGooglecolab]
              }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-lg font-mono font-bold text-primary mb-4 border-b border-border pb-2">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.icons.map((Icon, i) => (
                    <Icon key={i} className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 border-t border-primary/10">
          <SectionHeading title="Active_Projects" icon={Cpu} />
          <div className="space-y-12">
            
            {[
              {
                title: "YouTube Video Summarizer",
                desc: "An AI-powered web application built on a RAG (Retrieval-Augmented Generation) pipeline. Users paste any YouTube URL, the app fetches the full transcript via the YouTube Transcript API, then sends it to Groq's LLaMA model which generates a clean, structured summary in seconds — saving hours of watching time. Presented as final project for KP IT Board ML & DeepLearning.AI course.",
                tags: ["Python", "Groq AI", "LLaMA", "Flask", "RAG", "YouTube Transcript API"],
                link: "#"
              },
              {
                title: "PDF Compressor",
                desc: "A Streamlit web application that compresses PDF files by 60–70% using Ghostscript's powerful compression engine — built entirely in Python with no HTML or CSS. Supports files up to 200MB with four quality levels (Screen, Ebook, Printer, Prepress). Deployed live on Streamlit Cloud, free forever. Built from scratch in 2 days.",
                tags: ["Python", "Streamlit", "Ghostscript", "PyMuPDF", "Streamlit Cloud"],
                link: "https://zeeshans-pdf-tool.streamlit.app"
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative grid md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors glow-border overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-xs text-primary mb-2">PROJECT_0{idx + 1}</div>
                    <h3 className="text-2xl font-bold text-foreground leading-tight mb-4">{project.title}</h3>
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors w-fit">
                    View Source <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-24 border-t border-primary/10">
          <SectionHeading title="Certifications" icon={Award} />
          <div className="grid md:grid-cols-3 gap-6">
            
            {[
              {
                title: "KP IT Board ML & DeepLearning",
                issuer: "KP IT Board & DeepLearning.AI",
                date: "2026",
                cred: "In Progress"
              }
            ].map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border flex flex-col h-full hover:bg-secondary/50 transition-colors"
              >
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{cert.issuer}</p>
                <div className="mt-auto pt-4 border-t border-border">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-primary">{cert.date}</span>
                    <span className="text-muted-foreground opacity-50">{cert.cred}</span>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-primary/10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-secondary border border-border p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-luminosity"></div>
            
            <div className="relative z-10">
              <Terminal className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-black mb-4">Let's Build the Future</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
                Actively seeking AI internship opportunities. Whether you have a challenging problem to solve or a team looking for a dedicated agentic systems builder, my inbox is open.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:z.ahmad2003x@gmail.com" className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Email Me
                </a>
                <a href="https://www.linkedin.com/in/zeeshan-ahmad-5b8a813aa" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-card border border-border text-foreground hover:border-primary/50 transition-colors flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" /> LinkedIn
                </a>
                <a href="tel:0310-9803584" className="px-6 py-3 rounded-md bg-card border border-border text-foreground hover:border-primary/50 transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" /> 0310-9803584
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-border py-8 text-center text-sm font-mono text-muted-foreground bg-background">
        <p>&copy; {new Date().getFullYear()} Zeeshan Ahmad. All systems functional.</p>
      </footer>
    </div>
  );
}
