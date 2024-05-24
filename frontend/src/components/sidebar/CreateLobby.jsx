import { useState } from 'react';
import useCreateLobby from '../../hooks/useCreateLobby';

function CreateLobby() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const{loading, createLobby} = useCreateLobby();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccess = await createLobby({ name, password });

    if (isSuccess) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.reload();
    } else {
        console.error('Lobby creation failed.');
    }
};


  return (
    <div className="w-full flex items-center justify-center px-4 py-1 mb-1">
        <button className="btn btn-wide text-gray-200" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create Lobby</button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
            <form onSubmit={handleSubmit}>
              <h1 className='text-xl font-medium text-center text-gray-300'> Create
                <span className='text-2xl text-green-200'>Lobby</span>
            </h1>
            <div>
                    <label className='label p-2 '>
                        <span className='text-base label-text font-medium'>Lobby Name</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label className='label p-2 '>
                        <span className='text-base label-text font-medium'>Password
                        <span className='text-base label-text opacity-50'>(Optional)</span></span>
                        
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="password" className="grow" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>

                <div className="w-full flex items-center justify-center px-2 py-3 mb-1">
                    <button className="btn btn-block btn-xl mt-2 text-xl btn-success" disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Create"}
                    </button>
                </div>
            </form>

          </div>
        </dialog>
    </div>
  )
}

export default CreateLobby
