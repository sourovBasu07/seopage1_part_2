import React, { SetStateAction, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const UploadFilesModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFiles(files);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-500/50 flex justify-center items-center">
      <div className="relative w-[700px] h-[650px] rounded-3xl pt-16 bg-white z-10 flex justify-center items-center text-primary">
        <MdOutlineCancel
          size={25}
          className="absolute top-5 right-3 cursor-pointer hover:text-gray-300 duration-300"
          onClick={() => setIsModalOpen(false)}
        />
        {files.length > 0 ? (
          <div className="max-w-full max-h-full flex flex-col gap-2 mx-5 overflow-scroll">
            <table className="w-full border-collapse border-t ">
              <thead>
                <tr className="p-medium-14 border-b text-grey-500">
                  <th className="min-w-[250px] py-3 text-left">Name</th>
                  <th className="min-w-[100px] flex-1 py-3 pr-4 text-left">
                    Size
                  </th>
                  <th className="min-w-[100px] py-3 text-left">Type</th>
                </tr>
              </thead>

              <tbody>
                {files.map((file, index) => (
                  <tr
                    key={index}
                    className="border-b"
                    style={{ boxSizing: "border-box" }}
                  >
                    <td className="min-w-[250px] py-4 text-primary-500">
                      {file.name}
                    </td>
                    <td className="min-w-[100px] flex-1 py-4 pr-4">
                      {file.size / 1000} KB
                    </td>
                    <td className="min-w-[100px] py-4">
                      {file.type.split("/")[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <form>
            <input type="file" multiple onChange={handleFileChange} />
          </form>
        )}
      </div>
    </div>
  );
};
export default UploadFilesModal;
