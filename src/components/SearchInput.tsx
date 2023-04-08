import { FormEvent, useRef } from 'react';
import {AiOutlineRight} from 'react-icons/ai'

interface Props {
    onSubmit: (ip: string | undefined) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(inputRef.current?.value)
        onSubmit(inputRef.current?.value)
    }
    return (
        <form action="#" onSubmit={(e) => handleSubmit(e)} className="w-[90%] mx-auto max-w-xl mt-7 flex items-center">
            <input ref={inputRef} required minLength={11} type="number" className="bg-white rounded-l-xl text-lg h-14 px-4 w-full outline-none" placeholder="Search for any IP address" />
            <button className='bg-black h-14 p-5 rounded-r-xl hover:bg-vDarkGrey' type="submit"><AiOutlineRight color='#fff' /></button>
        </form>
    );
};

export default SearchInput;
