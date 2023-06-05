import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserGraduate, faClipboardList, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


 // formulat to create the overall socre in case you dont know here 
 // overallScore = (weight1 * score1 + weight2 * score2 + ... + weightN * scoreN) / (weight1 + weight2 + ... + weightN)

const ViewFYPEvaluationPage = () => {
  const fypProject = {
    project_id: "1",
    title: "Sample FYP Project",
    description: "This is a sample FYP project.",
    teamMembers: ["John Doe", "Jane Smith"],
    teamlead_id: "2",
    supervisor: "Dr. Robert Johnson",
    evaluationCriteria: [
      { name: "Innovation", weight: 0.2, score: 8 },
      { name: "Technical Complexity", weight: 0.3, score: 7 },
      { name: "Implementation", weight: 0.2, score: 9 },
      { name: "Documentation", weight: 0.15, score: 8 },
      { name: "Collaboration", weight: 0.1, score: 9 },
      { name: "Timeliness", weight: 0.05, score: 7 },
    ],
    presentation: {
      content: 8,
      delivery: 9,
      visuals: 7,
    },
    innovation: 8,
    technicalComplexity: 7,
    implementation: 9,
    documentation: 8,
    collaboration: 9,
    timeliness: 7,
    overallScore: 8,
  };

  if (!fypProject) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center">
          <FontAwesomeIcon
            icon={faClipboardList}
            className="text-6xl text-gray-500 mb-4"
          />
          <h2 className="text-3xl font-semibold mb-4">No FYP Evaluation Yet</h2>
          <p className="text-gray-600">
            Sorry, there is no FYP evaluation available for this project.
          </p>
        </div>
      </div>
    );
  }

  const appreciationMessage = getEvaluationAppreciation(fypProject.overallScore);
  const appreciationIcon = appreciationMessage === 'Best' ? faThumbsUp : faThumbsDown;
  const appreciationColor = appreciationMessage === 'Best' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{fypProject.title}</h1>
      <p className="text-gray-600 text-lg">{fypProject.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUsers} className="text-indigo-600 mr-2 text-2xl" />
            <h2 className="text-xl font-semibold">Team Members</h2>
          </div>
          <ul className="list-disc pl-6 mt-2">
            {fypProject.teamMembers.map((member) => (
              <li key={member} className="text-gray-700 text-lg">{member}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faUserGraduate}
              className="text-indigo-600 mr-2 text-2xl"
            />
            <h2 className="text-xl font-semibold">Supervisor</h2>
          </div>
          <p className="text-lg">{fypProject.supervisor}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Evaluation Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {fypProject.evaluationCriteria.map((criteria) => (
            <div
              key={criteria.name}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">{criteria.name}</h3>
              <div className="flex justify-between text-lg">
                <p className="text-gray-600">Weight: {criteria.weight}</p>
                <p className="text-gray-600">Score: {criteria.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Presentation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Content</h3>
            <p className="text-lg">{fypProject.presentation.content}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Delivery</h3>
            <p className="text-lg">{fypProject.presentation.delivery}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Visuals</h3>
            <p className="text-lg">{fypProject.presentation.visuals}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Overall Score</h2>
        <div className="bg-white rounded-lg p-6 shadow-lg mt-4">
          <div className="flex items-center justify-between">
            <p className={`text-4xl ${appreciationColor}`}>{fypProject.overallScore}</p>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={appreciationIcon}
                className={`text-3xl ${appreciationColor} mr-2`}
              />
              <p className="text-lg">{appreciationMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getEvaluationAppreciation = (score) => {
  if (score >= 8) {
    return 'Best';
  } else if (score >= 6) {
    return 'Medium';
  } else {
    return 'Low';
  }
};

export default ViewFYPEvaluationPage;
