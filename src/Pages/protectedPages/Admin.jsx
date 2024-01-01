
import {Link} from 'react-router-dom'

const Admin = () => {
  return (
    <div className="flex flex-col bg-slate-200 w-[20vh] h-[90vh] py-20">
      <div >
       <Link to='/admin/all'> <button className="w-full font-semibold mb-2 p-2">All Products</button></Link>
      </div>
      <div>
      <Link to='/admin/add'><button className="w-full font-semibold  mb-2 p-2">Add Products</button></Link>
      </div>
    </div>
  )
}

export default Admin