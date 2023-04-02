import useWindowWide from "../hooks/useWindowWidth";


const IpInfo = () => {
    const isWideScreen = useWindowWide(975)

    return (
        <div className="z-50 bg-white rounded-xl w-[90%] mx-auto mt-7 lg:mt-12 absolute inset-x-0 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-y-5 py-5 px-10 lg:py-8 lg:px-12">
            <div className="ipAddress relative lg:w-[23%] flex-wrap">
                <p className="text-darkGrey text-xs font-semibold">IP ADDRESS</p>
                <p className="font-medium text-lg lg:text-xl">192.212.174.101</p>
                {isWideScreen && <div className="absolute bg-darkGrey rounded-full w-[2px] h-[50px] inset-y-0 right-2 opacity-70"></div>}
            </div>
            <div className="location relative lg:w-[23%] flex-wrap">
                <p className="text-darkGrey text-xs font-semibold">LOCATION</p>
                <p className="font-medium text-lg lg:text-xl">Brooklyn, NY 10001</p>
                {isWideScreen && <div className="absolute bg-darkGrey rounded-full w-[2px] h-[50px] inset-y-0 right-2 opacity-70"></div>}
            </div>
            <div className="timezone relative lg:w-[23%] flex-wrap">
                <p className="text-darkGrey text-xs font-semibold">TIMEZONE</p>
                <p className="font-medium text-lg lg:text-xl">UTC -05:00</p>
                {isWideScreen && <div className="absolute bg-darkGrey rounded-full w-[2px] h-[50px] inset-y-0 right-2 opacity-70"></div>}
            </div>
            <div className="isp lg:w-[23%] flex-wrap">
                <p className="text-darkGrey text-xs font-semibold">ISP</p>
                <p className="font-medium text-lg lg:text-xl capitalize">spaceX starlink</p>
            </div>
        </div>
    );
};

export default IpInfo;