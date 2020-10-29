import React from "react";
import {
  Gitgraph,
  Mode,
  templateExtend,
  TemplateName,
  Orientation
} from "@gitgraph/react";
import showdown from "showdown";

import useWindowSize from "./useWindowSize";
import data from "./data";
import meImg from "./assets/me.jpg";

import "./App.css";

const converter = new showdown.Converter();

const MOBILE_SCREEN_MAX_WIDTH = 800;

const branchesOrder = ["master", "volunteer", "work"];
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
  const [currentCommit, setCurrentCommit] = React.useState(null);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < MOBILE_SCREEN_MAX_WIDTH;
  const currentExperience = React.useMemo(
    () => (currentCommit != null ? data[currentCommit.hash] : data["102019"]),
    [currentCommit]
  );
  return (
    <div>
      <div className="App-Header">
        <img src={meImg} alt="Avatar" className="App-Avatar" />
        <div className="App-Header-Title">
          <h1>Andrea Tosatto</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
      <div className="App-Content">
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
              const master = gitgraph.branch("master");
              master.commit({
                author: "My Parents",
                subject: "Initial commit",
                dotText: "👶",
                hash: "071990",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });

              const work = gitgraph.branch({
                name: "work"
              });

              master.commit({
                subject: "Beginning of college",
                dotText: "📚",
                hash: "102009",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              work.commit({
                subject: "System administrator - Alì S.p.A.",
                dotText: "🖥️",

                hash: "072011",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              work.commit({
                subject: "Software Developer - Freelancer",
                dotText: "📈",
                hash: "052012",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              work.commit({
                subject: "Software Developer - QBGroup",
                dotText: "🕹️",
                hash: "102012",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              master.commit({
                subject: "Bachelor degree",
                dotText: "🎓",
                hash: "082013",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              master.commit({
                subject: "Erasmus - DTU",
                dotText: "🇩🇰",
                hash: "012014",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              work.commit({
                subject: "Software Developer - Freelancer",
                dotText: "🔍",
                hash: "072014",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              const volunteer = gitgraph.branch({
                name: "volunteer",
                from: master
              });
              volunteer.commit({
                subject: "Coderdojo",
                dotText: "🥋",
                hash: "092014",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              work.commit({
                subject: "Teacher - IFOA",
                dotText: "👨‍🏫️",
                hash: "092015",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });

              master.commit({
                subject: "Thesis - Paris",
                dotText: "🇫🇷",
                hash: "112015",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              work.commit({
                subject: "Teacher - H-Farm Education",
                dotText: "👨‍🏫️",
                hash: "072016",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });
              master.commit({
                subject: "Master degree",
                dotText: "🎓",
                hash: "092016",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });

              work.commit({
                subject: "Software developer - Mostaza",
                dotText: "📲",
                hash: "102016",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });

              work.commit({
                subject: "CTO - Mostaza",
                dotText: "👨‍💻️",
                hash: "102018",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });

              work.commit({
                subject: "Senior software engineer - Tes",
                dotText: "👨‍💻️",
                hash: "012020",
                onMouseOver: c => setCurrentCommit(c),
                onMessageClick: c => setCurrentCommit(c)
              });

              master.merge({
                branch: volunteer,
                fastForward: true,
                commitOptions: {
                  subject: "NOW",
                  hash: "112020",
                  onMouseOver: c => setCurrentCommit(c),
                  onMessageClick: c => setCurrentCommit(c)
                }
              });
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
            {currentExperience.img && (
              <img
                alt={currentExperience.title}
                src={currentExperience.img}
              ></img>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
