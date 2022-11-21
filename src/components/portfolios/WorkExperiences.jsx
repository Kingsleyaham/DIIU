import workExperiences from "../../data/workExperiences";
const WorkExperiences = () => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg p-2">
      <div className="px-4 py-5 sm:px-4">
        <h3 className="text-xl font-medium leading-6 text-gray-900 pb-3">
          Work Experiences
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-sm">
          <div className="w-full overflow-x-auto ">
            <table className="w-full">
              <thead>
                <tr className="text-base font-semibold tracking-wide text-left text-gray-700 bg-white  border-b border-gray-600">
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Position</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {workExperiences.map((experience, index) => (
                  <tr className="text-gray-700" key={index}>
                    <td className="px-4 py-3 border">{experience.place}</td>
                    <td className="px-4 py-3 text-ms font-500 border">
                      {experience.duration}
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-500 leading-tight text-green-700 bg-green-100 rounded-sm">
                        {experience.position}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
