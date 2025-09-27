import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    technology: "",
    url: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `https://my-port-folio-livid.vercel.app/projects/${id}`
        );
        const project = res.data.project;
        setInputs({
          title: project.title,
          technology: project.technology,
          url: project.url,
        });
      } catch (error) {
        console.error("There was an error fetching the project!", error);
      }
    };
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("technology", inputs.technology);
    formData.append("url", inputs.url);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `https://my-port-folio-livid.vercel.app/projects/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("There was an error updating the project!", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Update <span className="text-blue-600">Project</span>
        </h1>
        <p className="text-gray-600 mt-2">Edit your project details below</p>
      </div>

      {/* Update Form */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter project title"
              value={inputs.title}
              name="title"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Technology */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Technology
            </label>
            <input
              type="text"
              placeholder="Enter technology"
              value={inputs.technology}
              name="technology"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* URL */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              URL
            </label>
            <input
              type="text"
              placeholder="Enter project URL"
              value={inputs.url}
              name="url"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Update Image (optional)
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
          >
            Update Project ✏️
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProject;
