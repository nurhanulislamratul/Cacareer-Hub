import bannerImg from '../../assets/images/user2.png'

const Banner = () => {
    return (
        <div className='flex lg:justify-between lg:flex-row flex-col  items-center lg:pt-9 pt-9'>
            <div className='lg:w-[600px] space-y-6 px-2'>
                <h1 className=" text-5xl lg:text-6xl font-semibold lg:font-extrabold leading-[50px] lg:leading-[80px]">One Step <br /> Closer To Your <br /> <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">Dream Job</span></h1>
                <p className='text-base lg:text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-medium py-2 px-4 rounded">Get Started</button>
            </div>
            <div className=''>
                <img className='' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;