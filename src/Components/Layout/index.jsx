const Layout = ({ children }) => {
    return (
        <>
            <div className='relative w-[1000px] mx-auto min-h-screen pt-40'>
                {children}
            </div>
        </>
    )
}

export default Layout;

