import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import {
  Music2,
  Mic2,
  Volume2,
  Headphones,
  ArrowRight,
  CalendarCheck2,
  Check,
  MapPin,
} from "lucide-react";
import { contactDetails } from "../config/site.js";

const equipment = [
  {
    icon: <Volume2 size={20} />,
    name: "Nexo and ADM-PA2 Line Arrays",
    desc: "Capable of delivering crystal-clear sound to 5000+ attendees",
  },
  {
    icon: <Music2 size={20} />,
    name: "RMW Double-Magnet Subwoofers",
    desc: "5000W peak bass reinforcement units",
  },
  {
    icon: <Mic2 size={20} />,
    name: "Wireless Microphone Sets",
    desc: "Cover at least 100m with crystal-clear audio",
  },
  {
    icon: <Headphones size={20} />,
    name: "Serato DJ Controllers & Mixers",
    desc: "Complete DJ setup for professional performances",
  },
];

const eventTypes = [
  "Weddings & Introductions",
  "Corporate Events",
  "Concerts & Gigs",
  "Birthday Parties",
  "Church Services",
  "School Events",
  "Political Rallies",
  "Sports Events",
];

const serviceOptions = [
  "Sound System Hire",
  "Event Management",
  "Sound System + Event Management",
  "DJ & Public Address",
  "Stage, Lighting & Sound",
  "Other",
];

const budgetOptions = [
  "Below UGX 500,000",
  "UGX 500,000 - 1,000,000",
  "UGX 1,000,000 - 3,000,000",
  "UGX 3,000,000+",
  "Not sure yet",
];

export function Booking() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form] = Form.useForm();

  const handleBookingSubmit = (values) => {
    const eventDate = values.eventDate
      ? values.eventDate.format("DD MMM YYYY")
      : "Not specified";
    const guestCount = values.guestCount
      ? `${values.guestCount} guests`
      : "Not specified";
    const note = values.notes ? `\nNotes: ${values.notes}` : "";
    const text = [
      "Hello Bgimahood Technologies, I would like to make a booking.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Service: ${values.service}`,
      `Event type: ${values.eventType}`,
      `Event date: ${eventDate}`,
      `Location: ${values.location}`,
      `Guests: ${guestCount}`,
      `Budget: ${values.budget || "Not specified"}`,
      note,
    ].join("\n");
    const whatsappUrl = `https://wa.me/256768683090?text=${encodeURIComponent(
      text,
    )}`;

    message.success("Booking details prepared. Opening WhatsApp...");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.resetFields();
  };

  return (
    <>
      <section
        id="events"
        className="py-24 bg-[#09232E] relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/3 w-96 h-80 bg-[#a855f7]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/15 border border-[#a855f7]/30 rounded-full text-[#a855f7] text-sm font-medium mb-4">
              <Music2 size={14} /> Sound & Events Division
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
              }}
            >
              Premium Sound Systems &<br />
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                Professional Event Management
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From intimate gatherings to massive concerts, we deliver
              world-class audio experiences and flawless event execution across
              Uganda.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] gap-8 xl:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#a855f7",
                    borderRadius: 12,
                    colorText: "#ffffff",
                    colorTextPlaceholder: "#8b93a7",
                    colorBgContainer: "rgba(255, 255, 255, 0.06)",
                    colorBorder: "rgba(255, 255, 255, 0.14)",
                    controlHeight: 44,
                    fontFamily: "Inter, Segoe UI, sans-serif",
                  },
                  components: {
                    DatePicker: {
                      colorBgElevated: "#111827",
                      colorText: "#ffffff",
                      colorTextHeading: "#ffffff",
                      colorIcon: "#ffffff",
                    },
                    Select: {
                      optionSelectedBg: "rgba(168, 85, 247, 0.24)",
                      optionActiveBg: "rgba(255, 255, 255, 0.08)",
                      colorBgElevated: "#111827",
                    },
                  },
                }}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">
                        Make a Booking
                      </h3>
                      <p className="text-gray-500 text-xs">
                        Share your event details and we will confirm
                        availability.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#a855f7]/20 flex items-center justify-center shrink-0 text-[#a855f7]">
                      <CalendarCheck2 size={18} />
                    </div>
                  </div>

                  <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                    onFinish={handleBookingSubmit}
                    className="booking-ant-form"
                  >
                    <div className="grid sm:grid-cols-2 gap-x-4">
                      <Form.Item
                        label="Full name"
                        name="name"
                        rules={[
                          { required: true, message: "Enter your full name" },
                        ]}
                      >
                        <Input placeholder="Your name" />
                      </Form.Item>

                      <Form.Item
                        label="Phone / WhatsApp"
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Enter your phone number",
                          },
                        ]}
                      >
                        <Input placeholder="+256 7XX XXX XXX" />
                      </Form.Item>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-4">
                      <Form.Item
                        label="Service"
                        name="service"
                        rules={[
                          { required: true, message: "Select a service" },
                        ]}
                      >
                        <Select
                          placeholder="Choose service"
                          options={serviceOptions.map((service) => ({
                            label: service,
                            value: service,
                          }))}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Event type"
                        name="eventType"
                        rules={[
                          { required: true, message: "Select event type" },
                        ]}
                      >
                        <Select
                          placeholder="Choose event"
                          options={eventTypes.map((eventType) => ({
                            label: eventType,
                            value: eventType,
                          }))}
                        />
                      </Form.Item>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-4">
                      <Form.Item
                        label="Event date"
                        name="eventDate"
                        rules={[
                          { required: true, message: "Select event date" },
                        ]}
                      >
                        <DatePicker
                          className="w-full"
                          format="DD MMM YYYY"
                          placeholder="Select date"
                        />
                      </Form.Item>

                      <Form.Item label="Expected guests" name="guestCount">
                        <InputNumber
                          className="w-full"
                          min={1}
                          placeholder="e.g. 150"
                        />
                      </Form.Item>
                    </div>

                    <Form.Item
                      label="Event location"
                      name="location"
                      rules={[
                        { required: true, message: "Enter event location" },
                      ]}
                    >
                      <Input
                        prefix={<MapPin size={14} className="text-gray-500" />}
                        placeholder="Venue, district, or town"
                      />
                    </Form.Item>

                    <Form.Item label="Budget range" name="budget">
                      <Select
                        placeholder="Select budget range"
                        options={budgetOptions.map((budget) => ({
                          label: budget,
                          value: budget,
                        }))}
                      />
                    </Form.Item>

                    <Form.Item label="Extra notes" name="notes">
                      <Input.TextArea
                        rows={3}
                        placeholder="Tell us about stage size, power access, timing, or special requests..."
                      />
                    </Form.Item>

                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      block
                      className="booking-submit-button"
                    >
                      Book Now <ArrowRight size={14} />
                    </Button>
                    <a
                      href={contactDetails.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 text-[#a855f7] text-xs font-semibold hover:text-[#ec4899] transition-colors"
                    >
                      Prefer direct WhatsApp? Message us
                    </a>
                  </Form>
                </div>
              </ConfigProvider>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-white font-bold text-xl mb-5">
                  Our Equipment Fleet
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {equipment.map((eq, i) => (
                    <motion.div
                      key={eq.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#a855f7]/40 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#a855f7]/20 flex items-center justify-center shrink-0">
                        <span className="text-[#a855f7]">{eq.icon}</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">
                          {eq.name}
                        </div>
                        <div className="text-gray-500 text-xs">{eq.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-white font-bold text-xl mb-4">
                  Events We Cover
                </h3>
                <div className="flex flex-wrap gap-2 leading-relaxed">
                  {eventTypes.map((ev, i) => (
                    <motion.div
                      key={ev}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      className="group inline-flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 text-gray-300 text-xs border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-orange-400/15 hover:text-orange-100 hover:border-orange-400/40"
                    >
                      <Check
                        size={13}
                        className="text-orange-400 transition-colors duration-200 group-hover:text-orange-300"
                      />
                      {ev}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
