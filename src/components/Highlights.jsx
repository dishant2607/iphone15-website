import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from '../utils';
import VideoCarousel from "./VideoCarousel";
import { animatewithgsap } from "../utils/animations";

const Highlights = () => {
    useGSAP(() => {
        animatewithgsap('#title', { opacity: 1, y: 0 });
        gsap.to('.link', { opacity: 1, y: 0, stagger: 0.25, duration: 1 });
    }, []);

    return (
        <section id='highlights' className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full items-start justify-between md:flex">
                    <h1 id='title' className="section-heading top">
                        Get the Highlights!!
                    </h1>
                    <div className="flex flex-wrap items-start gap-5 mt-4">
                        <p className="link flex items-center">
                            Watch the film
                            <img src={watchImg} alt="watch" className="ml-2" />
                        </p>

                        <p className="link flex items-center">
                            Watch the event
                            <img src={rightImg} alt="right" className="ml-2" />
                        </p>
                    </div>
                </div>
                <VideoCarousel />
            </div>
        </section>
    );
};

export default Highlights;
