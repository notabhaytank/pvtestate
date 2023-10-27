import { services } from "../../../../realeproj/nike_landing_page/src/constants/index.js";
import { ServiceCard } from "../components/index.js";

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
