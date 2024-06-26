const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] relative overflow-hidden">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://source.unsplash.com/featured/?car,appointment" className="w-full rounded-xl" alt="Car Appointment 1" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of Passages of Available,But The Majority Have Suffered Alteration In Some Form</p>
                        <div>
                            <button className="btn btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src="https://source.unsplash.com/featured/?car,servicing" className="w-full rounded-xl" alt="Car Appointment 1" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of Passages of Available,But The Majority Have Suffered Alteration In Some Form</p>
                        <div>
                            <button className="btn btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>                <div className="absolute flex justify-end items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src="https://source.unsplash.com/featured/?car,repair" className="w-full rounded-xl" alt="Car Appointment 1" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of Passages of Available,But The Majority Have Suffered Alteration In Some Form</p>
                        <div>
                            <button className="btn btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>                <div className="absolute flex justify-end items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src="https://source.unsplash.com/featured/?car,service" className="w-full rounded-xl" alt="Car Appointment 1" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of Passages of Available,But The Majority Have Suffered Alteration In Some Form</p>
                        <div>
                            <button className="btn btn-primary mr-4">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>                <div className="absolute flex justify-end items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
