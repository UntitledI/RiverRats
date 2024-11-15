import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search lobbies..." className="input input-bordered w-full max-w-xs" />
        <button type="submit" className="btn btn-circle bg-base-200 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      
    </form>
  )
}

export default SearchInput
