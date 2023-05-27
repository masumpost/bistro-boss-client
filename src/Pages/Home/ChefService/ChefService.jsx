import cimg from '../../../assets/home/chef-service.jpg'
const ChefService = () => {
    return (
        <div className='my-5 relative'>
            <img src={cimg} alt="" />
            <div className='w-8/12 text-center absolute md:bottom-28 md:left-56 bg-white md:py-10 md:px-24'>
                <h1 className='md:text-3xl uppercase'>BISTRO BOSS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefService;