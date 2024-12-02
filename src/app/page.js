import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/layout/navbar/Navbar";
import AboutComponent from "@/components/aboutComponent/AboutComponent";
import Footer from "@/layout/footer/Footer";
import ServicesComponent from "@/components/servicesComponent/ServicesComponent";
import TestimonialsComponent from "@/components/testimonialsComponent/TestimonialsComponent";
import ContactComponent from "@/components/contactComponent/ContactComponent";
import Head from "next/head";
import Seo from "@/seo/Seo";

export default function Home() {
  return (
    <div className={styles.page}>
      <Seo />
      <Navbar />
      <AboutComponent />
      <ServicesComponent />
      <TestimonialsComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
}
