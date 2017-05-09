
var today = new Date();
var randomCourse =today.getDay();
  if(randomCourse === 0 )
  {

  document.getElementById("subject").innerHTML = 'Today Subject : Physics';
  var questions = [
  
  {
    question: "What is unit of Work and Energy ?",
    questionType: "radio",
    choices: ["Joule", "kilogram", "amphere", "meter"],
    correctAnswer: 0,

  },

  {
    question: "Energy posses by a body in motion is called ?",
    questionType: "radio",
    choices: ["Kinetic Energy","PotentialEnergy ", "Both of Above", "None of Above"],
    correctAnswer: 0,

  },

   {
    question: "Solar cell converts ?",
    questionType: "textbox",
    correctAnswer: "Solar energy into electrical energy",

  },


  {
    question :"Mach number is used in connection with the speed of_____",
    questionType: "textbox",
    correctAnswer: "aircraft",
  },

  {
    question :"Magnetism at the centre of a bar magnet is ",
    questionType: "radio",
    choices:["minimum","maximum","Zero","minimum or maximum"],
    correctAnswer: 2,
  },
  
  {
    question :"Nuclear sizes are expressed in a unit named ",
    questionType: "textbox",
    correctAnswer: "Fermi",
   },
   {
    question :"Large transformers, when used for some time, become very hot and are cooled by circulating oil. The heating of the transformer is due to ",
    questionType: "radio",
    choices:["the heating effect of current alone", "hysteresis loss alone", "both the heating effect of current and hysteresis loss", "intense sunlight at noon"],
    correctAnswer:2,
    },
    
    {
    question : " Find the maximum velocity for the overturn of a car moving on a circular track of radius 100 m. The co-efficient of friction between the road and tyre is 0.2",
    questionType: "radio",
    choices: ["0.14 m/s", "140 m/s", "1.4 km/s","14 m/s"],
     correctAnswer: 3,
    },
    {
    question :"If two bodies of different masses, initially at rest, are acted upon by the same force for the same time, then the both bodies acquire the same _________.",
     questionType: "textbox",
    correctAnswer:"momentum",
    }
 ];

}

if(randomCourse === 1 )
  {

  document.getElementById("subject").innerHTML = 'Today Subject : Georaphy';
  var questions = [
  
  {
    question: "In China, regional differences in food crops, types of homes, and clothing are most likely the result of ?",
    questionType: "radio",
    choices:["social mobility ", "nationalism and colonialism", "government directives", "geography and climate"],
    correctAnswer: 3,

  },

  {
    question:"A major environmental problem affecting Latin America, subSaharan Arica, and Southeast Asia has been?",
    questionType: "radio",
    choices: ["air pollution", "deforestation", "disposal of nuclear waste ", "acid rain"],
    correctAnswer: 1,
  },

  {
  question: "In Japan, a major economic problem has been the lack of ?",
  questionType: "radio",
  choices:["natural resources","investment capital", "skilled labour","experienced management"],
   correctAnswer: 0,
  },
  
  {
  question: "The history of Russia was influenced by its lack of?",
  questionType: "radio",
  choices:["warm waterports ", "mineral deposits", "different climates", "navigable river systems"],
  correctAnswer: 0,
   },
   
   {
  question:  "What is the world's third largest sea? ",
  questionType: "textbox",
  correctAnswer: "mediterranean",
    },
  
  {
  question: "What is the capital of California? ",
  questionType: "textbox",
  correctAnswer: "sacramento",
  },
   
   {
  question: " ________ Valley is a nickname for the southern portion of the San Francisco Bay Area? ",
  questionType: "textbox",
  correctAnswer: "silicon",
    },
    
    {
  question:  "City of Santa Clara, home of the new _________ Stadium and the San Francisco 49ers.",
  questionType: "textbox",
  correctAnswer: "levis",
  },
      
    {
  question: "The great Victoria Desert is located in__________.",
  questionType: "textbox",
  correctAnswer:"Australia"

  }

 ];

}


if(randomCourse === 2)
  {

  document.getElementById("subject").innerHTML = 'Today Subject : Inventions';
  var questions = [
  
  {
    question:"Which scientist discovered the radioactive element radium?",
    questionType: "radio",
    choices:["Isaac Newton", "Albert Einstein", "Benjamin Franklin", "Marie Curie"],
    correctAnswer: 3,
  },
   
   {
    question: "Who invented the BALLPOINT PEN?",
    questionType: "radio",
    choices:["Biro Brothers","Waterman Brothers ", "Bicc Brothers", "Write Brothers"],
     correctAnswer: 0,
   },

   {
    question:"Which scientist discovered the radioactive element radium? ___________.",
    questionType: "textbox",
    correctAnswer:"Marie Curie",
    },

    {
    question:"What Galileo invented?_________",
    questionType: "textbox",
    correctAnswer: "Thermometer",
    },

    {
    question: "What invention caused many deaths while testing it?",
    questionType: "radio",
    choices:["Dynamite","Ladders","Race Cars","Parachute"],
    correctAnswer:3,
    },

    {
    question: "Until Victorian times, chocolate was thought of as a drink. When did the first chocolate bar appear?",
    questionType: "radio",
    choices: ["1828","1825","1831","1830"],
    correctAnswer:1,
    },
    
    {
    question: "Who is the only U.S. President to invent and patent something?__________.",
    questionType: "textbox",
    correctAnswer: "Abraham Lincoln",
    },
       {
    question: "Who is the only U.S. President to invent and patent something?",
    questionType: "radio",
    choices: ["Theodore Roosevelt","Abraham Lincoln","Thomas Jefferson","Barak Obama"],
    correctAnswer:1,
    },
      
    {
     question:  "Who is the English physicist responsible for the 'Big Bang Theory'?",
    questionType: "radio",
    choices: ["Albert Einstein","Michael Skube","George Gamow","Roger Penrose"],
      correctAnswer: 2,
  },

 ];

}

if(randomCourse === 3)
  {

  document.getElementById("subject").innerHTML = 'Today Subject : Math';
  var questions = [
  
  {
    question: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
     questionType: "radio",
    choices:["(1/3) ", "(1/8)", "(2/8)", "(1/16)"],
    correctAnswer: 1,
  },

{

  question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
  questionType: "textbox",
  correctAnswer:"10"
},
  {

   question: "Look at this series: F2, __, D8, C16, B32, ... What number should fill the blank?",
    questionType: "textbox",
    correctAnswer: "E4"
  },

{

   question:  "Look at this series: V, VIII, XI, XIV, __, XX, ... What number should fill the blank?",
   questionType: "radio",
    choices: ["IX ", "XXIII", "XV", "XVII"],
    correctAnswer: 3,
  },
  {

   question: "Look at this series: J14, L16, __, P20, R22, ... What number should fill the blank?",
   questionType: "radio",
   choices: ["S24 ", "N18", "M18", "T24"],
   correctAnswer: 1,
  },
    {

   question: "An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is:",
    questionType: "radio",
   choices: ["2%", "2.02%", "4% ", "4.04%"],
     correctAnswer: 3,
  },
     {

   question:  "A man walked diagonally across a square lot. Approximately, what was the percent saved by not walking along the edges?",
  questionType: "radio",
   choices: ["20","24", "30","33"],
  correctAnswer: 2,
  },
    {

   question: "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?_____",
   questionType: "textbox",
    correctAnswer: 6.25,
         },
      {

   question:"A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
   questionType: "radio",
   choices: ["3.6","7.2","8.4","10"],
    correctAnswer: 1,
},

 ];

}


if(randomCourse === 4)
  {

  document.getElementById("subject").innerHTML = 'Today Subject : Technology';
  var questions = [
  
  {
    question:" What is part of a database that holds only one type of information?",
    questionType: "radio",
    choices: ["Report", "Fields", "Records", "File"],
    correctAnswer: 1,
  },
 
 {
    question: "OS' computer abbreviation usually means ?________.",
    questionType: "textbox",
    correctAnswer: "operating System"
  },
   
  {
    question: "'.MOV' extension refers usually to what kind of file?",
    questionType: "radio",
    choices:  ["Image file","Movie file", "Audio","MS Office Doc"],
     correctAnswer:1
  },
  {
    question: "Who developed Yahoo?",
    questionType: "radio",
    choices: ["David Filo & Jerry Yang ", "Dennis Ritchie & Ken Thompson", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"],
    correctAnswer:1
  },
  {
    question:" What is part of a database that holds only one type of information?",
    questionType: "radio",
    choices: ["Report", "Fields", "Records", "File"],
    correctAnswer:1
  },
   
  {
    question: "WWW means ?________.",
    questionType: "textbox",
    correctAnswer: "world wide web"
  },
   {
    question:"What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.",
    questionType: "radio",
    choices:  ["URL","LAN", "WAN","WWW"],
    correctAnswer:2
   },
   {
    question: "Who invented 1st computer",
    questionType: "textbox",
    correctAnswer: "Charles Babbage"
  },
   {
    question: "Each of data files has a _____ that describe the way the data is stored in the fil",
    questionType: "radio",
    choices:["File structure","Records","None","file"],
     correctAnswer:0
},

 ];

}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


questions = shuffle(questions);

