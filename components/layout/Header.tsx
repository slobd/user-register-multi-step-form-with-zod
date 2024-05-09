
import {
    UserCircleIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
    return (
        <div className="sticky top-0 z-40 h-20 border-b border-gray-200">
            <div className="container mx-auto flex flex-col justify-center items-center bg-white px-4 h-full">
                <div className="flex justify-between items-center w-full">
                    <div className='text-3xl font-bold text-green-600 cursor-pointer'>Nnenna UI</div>
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <UserCircleIcon className="h-10 w-10" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
