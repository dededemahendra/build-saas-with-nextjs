

const Navbar = () => {
  return (
    <nav className='w-full min-h-10 flex justify-between items-center border-2 border-gray-700 bg-[#96ceb4]'>
        <div className='pl-5'>
            <h1 className='font-serif font-extrabold text-5xl text-black'>Epic Saas</h1>
        </div>
        <div className='border-l-gray-700 border-l-2 flex max-w-[200px] w-full h-20'>
            <button className='flex justify-center items-center text-2xl text-black w-full' >Sign in</button>
            <button className='flex justify-center items-center text-2xl text-black w-full border-l-2 border-l-gray-700' >Pricing</button>
        </div>
    </nav>
  )
}

export default Navbar