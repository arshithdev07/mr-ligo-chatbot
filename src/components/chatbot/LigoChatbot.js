import React from "react";
import ChatBot from "react-simple-chatbot";
import MatChip from "./Chip";

function LigoChatbot(props) {

  const config = {
    width: "500px",
    height: "550px",
    floating: true
  };

  const ligoMaterialUICaseSteps = [
    {
      id: "Greet",
      message: "Hello, I'm Ligo, Walmart’s intelligent system. How can I help, Mr.X?",
      trigger: "Waiting user input for question"
    },
    {
      id: "Waiting user input for question",
      user: true,
      trigger: "Definition"
    },
    {
      id: "Definition",
      message: "Material-UI is a library created by Google which provides React components for faster and easier web development",
      trigger: "Help Options"
    },
    {
      id: "Help Options",
      message: "Are you facing issues in?",
      trigger: "Displaying issues options"
    },
    {
      id: "Displaying issues options",
      options: [
        { value: 1, label: 'Installation', trigger: 'Installation' },
        { value: 2, label: 'Syntax', trigger: 'SyntaxOrError' },
        { value: 3, label: 'Errors', trigger: 'SyntaxOrError' },
        { value: 4, label: 'Other', trigger: 'Other' },
      ]
    },
    {
      id: "Installation",
      component: (
        <div>
        <MatChip
          label="Walmart Documentation"
          link="https://confluence.walmart.com/display/SGIS/Material+UI+based+common+components"
        />
        <br/>
        <br/>
        <MatChip
          label="Material-Ui Documentation"
          link="https://material-ui.com/getting-started/installation/"
        /> <span> - 70% of the developers found this helpful</span>
        <br/>
        <br/>
        <MatChip
          label="Stack Overflow Most Viewed Article"
          link="https://stackoverflow.com/questions/29195787/how-to-use-material-ui-framework"
        />
        </div>
      ),
      trigger: "Other option"
    },
    {
      id: "SyntaxOrError",
      component: (
        <div>
        <MatChip
          label="Find the answer on Stack Overflow"
          link="https://stackoverflow.com/questions"
        />
        </div>
      ),
      trigger: "Other option"
    },
    {
      id: "Other",
      message: "I operate best when asked short, direct questions. What do you need help with?",
      trigger: "Waiting for other select user option"
    },
    {
      id: "Waiting for other select user option",
      user: true,
      trigger: "ConnectSME"
    },
    {
      id: "Other option",
      message: "Would you like to explore the other options?",
      trigger: "YesNoOptions"
    },
    {
      id: "YesNoOptions",
      options: [
        { value: 1, label: 'Yes', trigger: 'Help Options' },
        { value: 2, label: 'No', trigger: 'Done' },
        {value: 3, label: 'Connect with a SME', trigger: 'ConnectSME'}
      ]
    },
    {
      id: "ConnectSME",
      component: (
        <div>
          Component to come
        </div>
      ),
      trigger: 'Done'
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];

  return <ChatBot 
            headerTitle="Speech Recognition"
            recognitionEnable={true}
            speechSynthesis={{ enable: true, lang: 'en' }}
            steps={ligoMaterialUICaseSteps} 
            {...config}
          />
}
export default LigoChatbot;