import Image from "next/image";

const DetailsSection = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative w-full h-full">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-primary/20"></div>
          <Image
            className=" aspect-square object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Artisanal luthier workshop with wooden guitar necks, tools, and sawdust under a warm vintage lamp"
            src={"/whyimg.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
        <div>
          <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-12 uppercase tracking-tighter">
            Why the Fermin?
          </h2>
          <div className="space-y-12">
            <div className="flex items-start gap-8">
              <span className="text-primary font-headline font-black text-4xl opacity-30">
                01
              </span>
              <div>
                <h4 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-2">
                  The Setup
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Every instrument passes through our master luthier&apos;s
                  hands for a custom 15-point inspection and professional setup
                  before shipping.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-primary font-headline font-black text-4xl opacity-30">
                02
              </span>
              <div>
                <h4 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-2">
                  Tone Match
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  We record high-fidelity sound samples of the exact instrument
                  you are buying, so you know its unique voice before it
                  arrives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-primary font-headline font-black text-4xl opacity-30">
                03
              </span>
              <div>
                <h4 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-2">
                  Lifetime Support
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Membership at Fermín includes an annual professional cleaning
                  and truss-rod adjustment at any of our authorized centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
