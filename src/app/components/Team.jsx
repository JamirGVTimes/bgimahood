import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Jamir Muhumuza",
    role: "CEO & Lead Developer",
    avatar: "JM",
    color: "#207BA1",
    skills: ["React", "Node.js", "Leadership"],
    bio: "Founder and visionary behind BGIMAHOOD TECHNOLOGIES with 6+ years in software engineering.",
  },
  {
    name: "Scovia Nansubuga",
    role: "Full-Stack Developer",
    avatar: "SN",
    color: "#10b981",
    skills: ["Vue.js", "Django", "PostgreSQL"],
    bio: "Expert full-stack developer specializing in SaaS and enterprise web applications.",
  },
  {
    name: "Aganyira Chrispus",
    role: "Sound & Events Manager",
    avatar: "AC",
    color: "#a855f7",
    skills: ["Audio Engineering", "Event Planning", "Logistics"],
    bio: "10+ years experience managing events and professional Admark audio setups across Uganda.",
  },
  {
    name: "Samuel Tumusiime",
    role: "Product Support Specialist",
    avatar: "ST",
    color: "#f59e0b",
    skills: ["Client Support", "QA", "Training"],
    bio: "Product support specialist helping clients onboard, test workflows, and get value from their systems.",
  },
  {
    name: "Ramadhan Kabuleeta",
    role: "UI/UX Designer",
    avatar: "RK",
    color: "#ec4899",
    skills: ["Figma", "Tailwind", "Design Systems"],
    bio: "Creative designer crafting beautiful, user-centered digital experiences for African businesses.",
  },
  {
    name: "Racheal Kabapiina",
    role: "Project Manager",
    avatar: "RK",
    color: "#00d4ff",
    skills: ["Agile", "Client Relations", "Coordination"],
    bio: "Ensuring every project is delivered on time, on scope, and above client expectations.",
  },
];

export function Team() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id="team" className="py-24 bg-[#0B171C] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-72 bg-[#207BA1]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#207BA1]/15 border border-[#207BA1]/30 rounded-full text-[#207BA1] text-sm font-medium mb-4">
            Our People
          </div>
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
            }}
          >
            Meet The Team
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A passionate team of experts dedicated to delivering excellence
            across all our services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${member.color}18` }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all hover:border-white/20 group"
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-xl shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                }}
              >
                {member.avatar}
              </motion.div>

              <h3 className="text-white font-bold text-base mb-0.5">
                {member.name}
              </h3>
              <div className="text-sm mb-3" style={{ color: member.color }}>
                {member.role}
              </div>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full border"
                    style={{
                      color: member.color,
                      borderColor: `${member.color}44`,
                      background: `${member.color}11`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="flex justify-center gap-3">
                {[Linkedin, Twitter, Github, Mail].map((Icon, j) => (
                  <motion.button
                    key={j}
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-600 hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
