import SectionTitle from "../../component/shered/SectionTitle/SectionTitle";
import ContactInfo from "../../component/ContactInfo/ContactInfo";
import ContactForm from "../../component/ContactForm/ContactForm";
// import ContactFormNew from "../../component/ContactForm/ContactFormNew";


const Contact = () => {

  return (
    <section className="md:mt-20">
      <div>
        <SectionTitle titleF={"contact"} titleS={"me"} />
      </div>
      <div className="md:flex md:gap-10">
        <div data-aos="fade-right" className=" md:w-6/12">
          <ContactInfo />
        </div>
        <div className=" md:w-6/12 px-2">
          <ContactForm />
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
