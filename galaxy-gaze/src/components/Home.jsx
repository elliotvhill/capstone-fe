import Login from './Login'

const Home = () => {
    return (
        <div className='home text-spacecadet-500 mx-8 md:mx-60 font-medium pb-20 text-xl md:text-2xl'>
            <h2 className=' text-xl md:text-2xl my-2 font-semibold mt-8'> Let Galaxy Gaze be your guide to the sky! </h2>
            <div className='flex justify-center'>
            <img className="object-scale-down h-60 md:h-80" src="src/assets/rocket_silver.svg" alt="An illustration of a rocket." />
            </div>
            <p className='mt-6 md:mt-10'> <span className='font-bold'>Galaxy Gaze</span> is a lightweight astronomy planning app. Using the open Astronomy API, search for and find the locations of different deep space objects.</p>
            <p className='mt-8 md:mt-10'>Create an account and save your favorite space objects. Pull them up at any time to find their location in the sky!</p>
            <p className='mt-8 md:mt-10'>Future updates will allow users to check and track stargazing conditions in their area, learn about and get alerts about astronomical events like full moons, meteor showers, etc., and share posts about their observations with friends.</p>
        </div>
    )
}

export default Home