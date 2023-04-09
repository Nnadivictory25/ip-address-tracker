import { FormEvent, useRef } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { z } from 'zod';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
	onSubmit: (ip: string) => void;
}

const FormSchema = z.object({
	ip: z.string().ip({ message: 'Enter a valid IP address' }),
});

type FormData = z.infer<typeof FormSchema>;

const SearchInput = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<FormData>({ resolver: zodResolver(FormSchema) });

	const handleSearch = (data: FieldValues) => {
        // console.log(data.ip);
        onSubmit(data.ip)
        reset()
    };
    
	return (
		<>
			<form
				action='#'
				onSubmit={handleSubmit(handleSearch)}
				className='w-[90%] mx-auto max-w-xl mt-7 flex items-center relative'>
				<input
					{...register('ip')}
					type='text'
					className={`bg-white border ${errors.ip && 'border-red-500'}  rounded-l-xl text-lg h-14 px-4 w-full outline-none`}
					placeholder='Search for any IP address'
				/>
				<button
					className='bg-black h-14 p-5 rounded-r-xl hover:bg-vDarkGrey'
					type='submit'>
					<AiOutlineRight color='#fff' />
				</button>
                {errors.ip && <p className='text-red-500 text-sm absolute bottom-[-1.5rem]'>{ errors.ip.message}</p>}
            </form>
		</>
	);
};

export default SearchInput;
