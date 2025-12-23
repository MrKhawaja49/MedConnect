import React, { useContext, useState } from "react";
import Footer from "../Components/Footer";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);
    

    console.log(userData,"userData")

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append(
        "address",
        typeof userData.address === "string"
          ? userData.address
          : JSON.stringify(userData.address)
      );
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-lg flex flex-col gap-2 text-sm">
        {isEdit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer">
              <img
                className="w-36 rounded opacity-75"
                // src={image ? URL.createObjectURL(image) : userData.image}
                src={image ? URL.createObjectURL(image) : userData.image || ""}
                alt=""
              />
              <img
                className="w-10 absolute bottom-12 right-12"
                src={image ? "" : assets.upload_icon}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img className="w-60 rounded" src={userData.image} alt="" />
        )}

        {isEdit ? (
          <input
            className="bg-cyan-100 text-teal-800 text-3xl font-bold max-w-60 mt-4"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-bold text-3xl text-teal-800 mt-4">
            {userData.name}
          </p>
        )}

        <hr className="bg-cyan-900 h-[1px] border-none" />
        <div>
          <p className="text-teal-900 underline mt-3 font-bold">
            CONTACT INFORMATION
          </p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-teal-900">
            <p className="font-bold">Email id:</p>
            <p className="text-cyan-500">{userData.email}</p>
            <p className="font-bold">Phone:</p>
            {isEdit ? (
              <input
                className="bg-cyan-100 max-w-52"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-cyan-500">{userData.phone}</p>
            )}
            <p className="font-bold">Address:</p>
            {isEdit ? (
              <p>
                <input
                  className="bg-cyan-100"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {line2 : userData.address.line2 ,line1: e.target.value },
                    }))
                  }
                  // value={userData.address.line1}
                  value={userData.address?.line1 || ""}
                  type="text"
                />
                <br />
                <input
                  className="bg-cyan-100"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {line1 : userData.address.line1 , line2: e.target.value },
                    }))
                  }
                  // value={userData.address.line2}
                  value={userData.address?.line2 || ""}
                  type="text"
                />
              </p>
            ) : (
              <p className="text-cyan-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-teal-900 underline mt-3 font-bold">
            BASIC INFORMATION
          </p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-teal-900">
            <p className="font-bold">Gender:</p>
            {isEdit ? (
              <select
                className="max-w-20 bg-cyan-100"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-cyan-900">{userData.gender}</p>
            )}
            <p className="font-bold">Birthday:</p>
            {isEdit ? (
              <input
                className="max-w-20 bg-cyan-100"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p className="text-teal-900">{userData.dob}</p>
            )}
          </div>
        </div>

        <div className="mt-10">
          {isEdit ? (
            <button
              className="border border-primary  px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
              onClick={updateUserProfileData}
            >
              Save information
            </button>
          ) : (
            <button
              className="border border-primary text-cyan-900 px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>

        <Footer />
      </div>
    )
  );
};

export default MyProfile;
