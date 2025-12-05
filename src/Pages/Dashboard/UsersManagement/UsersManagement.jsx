import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosInstance from './../../../Hooks/useAxiosInstance';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagement = () => {
    const axiosSecure = useAxiosInstance()
    const {refetch , data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })


    const handleMakeUser = user => {
      const roleInfo = {role: 'admin'}
      axiosSecure.patch(`/users/${user._id}`, roleInfo)
      .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount){
          refetch();
          Swal.fire({
                        title: `${user.displayName} Marked as an Admin`,
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000
                      })
                    }
                  })
                }
                
                
                const handleRemoveAdmin = user => {
                  const roleInfo = {role: 'user'}
                  axiosSecure.patch(`/users/${user._id}`, roleInfo)
                  .then(res => {
                    if(res.data.modifiedCount){
                      refetch()
                      Swal.fire({
                                    title: `${user.displayName} removed from Admin`,
                                    position: 'top-end',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 3000
                                  })
        }
      })
    }


    return (
        <div>
            <h2 className='text-4xl'>Users {users.length}</h2>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
No
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Actions</th>
        <th>Other Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => 
      <tr key={index}>
        <td>
          {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.role}
        </td>
        <td>
          {user.role === "admin" ?
            <button onClick={() => handleRemoveAdmin(user)} className='btn bg-red-500'>
            <FiShieldOff/>
          </button> : 
          <button onClick={() => handleMakeUser(user)} className='btn bg-green-500'>
            <FaUserShield/>
          </button>
          }
        </td>
        <th>
          Actions
        </th>
      </tr>
        )
      }
      
      
    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UsersManagement;