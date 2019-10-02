import React from "react";

import useWindowSize from "./useWindowSize";
import data from "./data";
import "./App.css";
import {
  Gitgraph,
  Mode,
  templateExtend,
  TemplateName,
  Orientation
} from "@gitgraph/react";

import showdown from "showdown";

const converter = new showdown.Converter();

const branchesOrder = [
  "master",
  "volunteer",
  "college",
  "erasmus",
  "thesis",
  "work"
];
const compareBranchesOrder = (a, b) => {
  return branchesOrder.indexOf(a) - branchesOrder.indexOf(b);
};

const createTemplate = isMobile =>
  templateExtend(TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: true,
        font: "normal 11pt Calibri"
      },
      dot: {
        strokeWidth: 1,
        size: 12,
        font: "normal 11pt Calibri"
      },
      spacing: 50
    },
    branch: {
      lineWidth: 8,
      label: {
        font: isMobile ? "normal 11pt Calibri" : "normal 11pt Calibri"
      }
    }
  });

function App() {
  const [commit, setCommit] = React.useState(null);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 700;
  // TODO: memo
  const currentExperience = commit != null ? data[commit.hash] : data["102019"];
  console.log(createTemplate(isMobile));
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Andrea Tosatto - Software Developer</h1>
      </div>
      <div className="App">
        <div className="App-Git">
          <Gitgraph
            key={`${isMobile}`}
            options={{
              mode: isMobile ? Mode.Compact : undefined,
              orientation: isMobile
                ? Orientation.Horizontal
                : Orientation.Vertical,
              template: createTemplate(isMobile),
              compareBranchesOrder,
              branchLabelOnEveryCommit: isMobile ? false : true
            }}
          >
            {gitgraph => {
              // Simulate git commands with Gitgraph API.
              const master = gitgraph.branch("master");
              master.commit({
                author: "My Parents",
                subject: "Initial commit",
                dotText: "👶",
                hash: "071990",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });

              const work = gitgraph.branch({
                name: "work"
                /*style: { color: "#C74939" },
            commitDefaultOptions: {
              style: {
                message: {
                  color: "#C74939"
                },
                dot: {
                  color: "#C74939"
                }
              }
            }*/
              });

              const college = gitgraph.branch("college");

              college.commit({
                subject: "College start",
                dotText: "📚",
                hash: "102009",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              work.commit({
                subject: "System administrator - Alì S.p.A.",
                dotText: "🖥️",

                hash: "072011",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              work.commit({
                subject: "Software Developer - Freelancer",
                dotText: "📈",
                hash: "052012",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              work.commit({
                subject: "Software Developer - QBGroup",
                dotText: "🕹️",
                hash: "102012",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              work.commit({
                subject: "Software Developer - Freelancer",
                dotText: "🔍",
                hash: "072014",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              college.commit({
                subject: "Bachelor degree",
                dotText: "🎓",
                hash: "082014",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              const volunteer = gitgraph.branch("volunteer");
              volunteer.commit({
                subject: "Coderdojo",
                dotText: "🥋",
                hash: "092014",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              work.commit({
                subject: "Teacher - IFOA",
                dotText: "👨‍🏫️",
                hash: "092015",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });

              const erasmus = gitgraph.branch({
                name: "erasmus",
                from: college
              });
              erasmus.commit({
                subject: "Erasmus - DTU",
                dotText: "🇩🇰",
                hash: "012014",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              college.merge({ branch: erasmus, fastForward: true });
              work.commit({
                subject: "Teacher - H-Farm Education",
                dotText: "👨‍🏫️",
                hash: "072016",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              const thesis = gitgraph.branch({ name: "thesis", from: college });
              thesis.commit({
                subject: "Thesis - Paris",
                dotText: "🇫🇷",
                hash: "112015",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });
              college.merge({
                branch: "thesis",
                commitOptions: {
                  subject: "Master degree",
                  dotText: "🎓",
                  onMouseOver: c => setCommit(c),
                  onMessageClick: c => setCommit(c)
                },
                fastForward: true
              });
              college.commit({
                subject: "Master degree",
                dotText: "🎓",
                hash: "092016",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });

              master.merge({ branch: college, fastForward: true, commit: {} });

              work.commit({
                subject: "Software developer - Mostaza",
                dotText: "📲",
                hash: "102016",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              });

              master.merge({
                branch: volunteer,
                fastForward: true,
                commitOptions: {
                  subject: "NOW",
                  hash: "102019",
                  onMouseOver: c => setCommit(c),
                  onMessageClick: c => setCommit(c)
                }
              }); /*
            master.merge({
              branch: work,
              fastForward: true,
              commitOptions: {
                subject: "Current",
                hash: "NOW",
                onMouseOver: c => setCommit(c),
                onMessageClick: c => setCommit(c)
              }
            }); */
            }}
          </Gitgraph>
        </div>
        {currentExperience && (
          <div className="App-Description">
            <h2>{currentExperience.title}</h2>
            <h3>{currentExperience.subtitle}</h3>
            {currentExperience.from && (
              <h3>{`From ${currentExperience.from} to ${currentExperience.to}`}</h3>
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(currentExperience.description)
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
