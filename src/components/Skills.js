import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    import('vanilla-tilt').then((VanillaTilt) => {
      VanillaTilt.default.init(document.querySelectorAll('.tilt-card'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    });
  }, []);

  const skills = [
    { icon: 'fas fa-code', title: 'Programming', tools: 'Python, R, SQL, JavaScript' },
    { icon: 'fas fa-cloud', title: 'Cloud Platforms', tools: 'AWS (SageMaker, Lambda), Azure (ML, Data Factory), GCP (Vertex AI)' },
    { icon: 'fas fa-brain', title: 'AI/ML Frameworks', tools: 'PyTorch, TensorFlow, Keras, Scikit-learn, Hugging Face' },
    { icon: 'fas fa-chart-bar', title: 'Data Visualization', tools: 'Tableau, Power BI, Matplotlib, Seaborn, Plotly' },
    { icon: 'fas fa-database', title: 'Databases', tools: 'MySQL, NoSQL (Cosmos DB, MongoDB), Snowflake' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Technical Expertise</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md tilt-card">
                <i className={`${skill.icon} fa-3x text-purple-600 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.tools}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Skills;