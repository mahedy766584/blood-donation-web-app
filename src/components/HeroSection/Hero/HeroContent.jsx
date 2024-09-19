/* eslint-disable react/prop-types */
import Container from "../../Container/Container"

const HeroContent = ({ heroImg }) => {
    return (
        <div className='relative w-full h-screen'>
            <div className='w-full h-screen bg-cover bg-center bg-no-repeat bg-blend-overlay' >
                <img className='w-full h-screen bg-cover bg-center bg-no-repeat' src={heroImg} />
            </div>
            <div className="bg-gradient-to-r from-white bg-opacity-20  w-full h-full  absolute top-0">
                <Container>
                    <div className='flex lg:justify-start justify-center items-center'>
                        <div className="lg:space-y-10 space-y-8 lg:mt-28 mt-20 w-full">
                            <h1 className="text-[#EA062B] text-4xl font-bold hero-title">Donate blood, save life !</h1>
                            <h1 className='lg:text-6xl text-4xl font-bold text-gray-900 hero-title '>Your Blood, <br /> Their Hope: Join <br /> the Life-Saving Mission</h1>
                            <button style={{ borderRadius: '16px 0px' }} className="hero-btn uppercase  mt-6 text-white px-8 py-4  bg-red-600 font-medium hero-btn">Start Donating</button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default HeroContent;