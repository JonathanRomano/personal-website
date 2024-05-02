import AnimatedButton from "@/components/animatedButton";
import AnimationProvider from "@/components/animationProvider";
import ExperienceCounter from "@/components/experienceCounter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-dark-blue">
      <div className="py-36 flex justify-center">
        <div className="w-1/3 flex flex-col justify-center">
          <AnimationProvider>
            <h1 className="text-4xl font-bold text-white">
              I'm Jonathan Romano, a
            </h1>
            <h1 className="text-5xl font-bold text-primary">
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
        <div className="w-1/3 flex items-center">
          <div className="relative w-full aspect-square">
            <Image
              src="/eu.png"
              alt="Um gajo bonito."
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold text-white">About me</h1>
      <div className="flex justify-center">
        <div className="w-1/3">
          <ExperienceCounter />
        </div>
        <div className="w-1/3 text-secondary flex flex-col justify-center gap-5">
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
      <h1 className="text-center text-4xl font-bold text-white">
        My expertise
      </h1>
      <div></div>
    </main>
  );
}
