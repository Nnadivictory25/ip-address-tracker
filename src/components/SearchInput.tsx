import {AiOutlineRight} from 'react-icons/ai'

interface Props {
    onSubmit?: (ip: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {

    const handleSubmit = () => {
        console.log('submit')
    }
    return (
        <form action="#" onSubmit={handleSubmit} className="w-[90%] mx-auto max-w-xl mt-7 flex items-center">
            <input required minLength={11} type="tel" className="bg-white rounded-l-xl text-lg h-14 px-4 w-full outline-none" placeholder="Search for any IP address or domain" />
            <button className='bg-black h-14 p-5 rounded-r-xl hover:bg-vDarkGrey' type="submit"><AiOutlineRight color='#fff' /></button>
        </form>
    );
};

export default SearchInput;