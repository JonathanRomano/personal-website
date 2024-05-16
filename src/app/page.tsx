import AnimatedButton from "@/components/animatedButton";
import AnimationProvider from "@/components/animationProvider";
import Card from "@/components/card";
import ExperienceCounter from "@/components/experienceCounter";
import PostCard from "@/components/postCard";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { RiTreasureMapFill } from "react-icons/ri";
import { RiRobot2Fill } from "react-icons/ri";
import { TbSettingsAutomation } from "react-icons/tb";
import {
  BiLogoWhatsapp,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";
import Link from "next/link";
import Slider from "@/components/slider";
import NavBar from "@/components/navBar";

export default function Home() {
  const habilitiesCards = [
    {
      title: "Websites",
      description:
        "Crafting dynamic websites that captivate and engage. Your online presence, elevated.",
      icon: <CgWebsite color={"#58cfff"} size={40} />,
      bgColor: "#111d3d",
    },
    {
      title: "Planning and troubleshooting",
      description:
        "Mastering the art of strategic problem-solving, ensuring smooth operations and assertive resolutions for your project.",
      icon: <RiTreasureMapFill color={"#c656ff"} size={40} />,
      bgColor: "#1d103d",
    },
    {
      title: "Automations",
      description:
        "Automating repetitive tasks to boost productivity and streamline operations. Experience efficiency like never before with my tailored automation solutions.",
      icon: <RiRobot2Fill color={"#ffa03a"} size={40} />,
      bgColor: "#221829",
    },
    {
      title: "Software",
      description:
        "Developing tailor-made software solutions to precisely fit your unique needs. Enhance your digital experience with my customized, innovative approach.",
      icon: <TbSettingsAutomation color={"#15de9b"} size={40} />,
      bgColor: "#0b1e33",
    },
  ];

  return (
    <main className="bg-dark-blue">
      <NavBar />
      <div
        className="pt-36 pb-20 flex flex-col-reverse lg:flex-row items-center justify-center gap-10"
        id="home"
      >
        <div className="w-auto mr-10 flex flex-col justify-center">
          <AnimationProvider>
            <h1 className="text-4xl font-bold text-white">
              I'm Jonathan Romano, a
            </h1>
            <h1 className="text-5xl font-bold text-primary ">
              Software Developer
            </h1>
            <p className="font-bold text-secondary pt-5">
              Bringing ideas to life and discovering smart solutions.
            </p>

            <AnimatedButton
              text="Contact me"
              className="rounded-md border border-1 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 mr-auto mt-10"
            />
          </AnimationProvider>
        </div>

        <div className="flex items-center w-2/5 lg:w-1/5 bg-neutral pt-32 pl-10 pr-10 rounded-lg overflow-hidden">
          <div className="relative w-full aspect-custom">
            <Image
              src="/hero.png"
              alt="Um gajo bonito."
              className="transition-transform duration-300 hover:scale-105"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
      <h1
        className="text-center text-4xl font-bold text-white pt-10"
        id="about-me"
      >
        About me
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center pt-10 pb-20 gap-5">
        <div className="w-auto lg:w-1/3">
          <ExperienceCounter />
        </div>
        <div className="w-4/5 lg:w-1/3 text-secondary flex flex-col justify-center gap-5">
          <AnimationProvider>
            <p>
              Since my childhood, technology has always sparked a deep
              fascination within me. This passion stems not only from the ease
              with which I can grasp new concepts but also from a relentless
              curiosity that has formed the foundation of my career. Although I
              recognize that perfection is a lofty ideal, each line of code I
              write brings me closer to excellence. In my journey, I not only
              refine my technical skills but also strive to innovate and solve
              problems to positively transform the world around me.
            </p>
          </AnimationProvider>
          <AnimationProvider>
            <p>
              Throughout this path, I have explored various aspects of
              technology, from software development to artificial intelligence,
              each offering valuable lessons about the power and impact of
              computing. For me, programming is not just a profession; it is a
              form of creative expression that allows me to bring my ideas to
              life, making a meaningful contribution to projects larger than
              myself.
            </p>
          </AnimationProvider>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold text-white pb-12 pt-10">
        My expertise
      </h1>

      <div className="flex flex-wrap gap-6 justify-center pt-6 items-stretch">
        {habilitiesCards.map((card) => {
          return (
            <div className="w-4/5 lg:w-4/12">
              <AnimationProvider className="h-full">
                <Card cardDictionary={card} />
              </AnimationProvider>
            </div>
          );
        })}
      </div>

      <div className="mt-16 pt-10 px-64 flex flex-col" id="portfolio">
        <h1 className="text-center text-4xl font-bold text-white">
          Some of my work
        </h1>
        <Slider>
          <PostCard
            post={{
              title: "post test, construindo o site XD",
              img: "/post_test.webp",
              description:
                "Explore a fronteira da tecnologia com este post exclusivo, onde tanto o texto quanto a imagem foram criados utilizando inteligência artificial avançada. Descubra como a IA está moldando o futuro do conteúdo digital, através de uma análise profunda e exemplos visuais cativantes que demonstram o poder e a criatividade das máquinas. Junte-se a nós nesta jornada fascinante pelo universo da IA!",
            }}
          />
          <PostCard
            post={{
              title: "post test, construindo o site XD",
              img: "/post_drone.webp",
              description:
                "Explore a fronteira da tecnologia com este post exclusivo, onde tanto o texto quanto a imagem foram criados utilizando inteligência artificial avançada. Descubra como a IA está moldando o futuro do conteúdo digital, através de uma análise profunda e exemplos visuais cativantes que demonstram o poder e a criatividade das máquinas. Junte-se a nós nesta jornada fascinante pelo universo da IA!",
            }}
          />
          <PostCard
            post={{
              title: "post test, construindo o site XD",
              img: "/post_test2.webp",
              description:
                "Explore a fronteira da tecnologia com este post exclusivo, onde tanto o texto quanto a imagem foram criados utilizando inteligência artificial avançada. Descubra como a IA está moldando o futuro do conteúdo digital, através de uma análise profunda e exemplos visuais cativantes que demonstram o poder e a criatividade das máquinas. Junte-se a nós nesta jornada fascinante pelo universo da IA!",
            }}
          />
        </Slider>
      </div>

      <div className="py-36 flex items-center justify-center" id="contact">
        <div className="w-auto px-14 lg:px-40 bg-neutral flex flex-col items-center rounded-lg">
          <AnimationProvider>
            <h1 className="text-2xl font-bold text-primary pt-36">
              Hire me to get best
            </h1>
          </AnimationProvider>
          <AnimationProvider>
            <h1 className="text-white font-bold text-3xl lg:text-4xl pt-12">
              Want to start your next project with me?
            </h1>
          </AnimationProvider>
          <AnimationProvider>
            <h1 className="text-white font-bold text-5xl lg:text-6xl">
              Let's chat about your goals
            </h1>
          </AnimationProvider>
          <AnimationProvider>
            <AnimatedButton
              text="Let's work together"
              className="rounded-md border border-1 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 mt-16"
            />
          </AnimationProvider>
          <div className="h-36" />
        </div>
      </div>

      <div className="bg-neutral  pt-10">
        <div className="aspect-logo w-3/12 relative mx-auto">
          <Image
            src="/logo.png"
            alt="Um gajo bonito."
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <p className="text-secondary text-center pt-10">
          Coimbra, Portugal – 3000-389.
        </p>
        <div className="flex justify-between px-[18vw] pt-20 pb-10">
          <div className="text-secondary text-sm">
            © 2024, Jonathan Lauxen Romano. All rights reserved.
          </div>
          <div className="text-secondary flex gap-1 items-center">
            <p className="pr-3 text-sm"> GIVE A LOOK</p>
            <Link
              className="rounded-full p-2 hover:text-white hover:bg-primary hover:bg-opacity-20 hover:scale-110"
              href="https://api.whatsapp.com/send/?phone=351963484010"
            >
              <BiLogoWhatsapp size={20} />
            </Link>
            <Link
              className="rounded-full p-2 hover:text-white hover:bg-primary hover:bg-opacity-20 hover:scale-110"
              href="https://www.linkedin.com/in/jonathan-lauxen-romano-626718193/"
            >
              <BiLogoLinkedinSquare size={20} />
            </Link>
            <Link
              className="rounded-full p-2 hover:text-white hover:bg-primary hover:bg-opacity-20 hover:scale-110"
              href="https://github.com/JonathanRomano/"
            >
              <BiLogoGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
