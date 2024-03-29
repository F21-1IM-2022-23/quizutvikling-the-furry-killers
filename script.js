let score = 0;
const totalQuestions = 6; //endre dette antallet dersom dere ønsker flere spørsmål (inkluder "start quiz" som om det er et spørmål)
const questions = [
  { //Dette er kodet som et spørsmål, men er egntlig kun satt opp for at dere skal slippe å lage en unik start
    options: [
      { text: "Start Quizen!", correct: false},
    ]
  },
  {
    question: "Hvor mye kan du om koding?",
    options: [
      { text: "Litt", correct: true }, //"true" = riktig svar. Skriv det inn i ulike linjer for å endre hvilken knapp som er riktig
      { text: "Greit", correct: true }, //Legg til eller fjern så mange svaralternativ som dere ønsker.
      { text: "Alt", correct: true } //Siste spørsmålslinje skal ikke ha komma.
    ],
    imageUrl: 'https://unsplash.it/400/200', //bytt ut med en ny bildeaddresse for hvert spørsmål. 400 og 200 er størrelsen i pixler.
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "hva gjør en funksjon?",
    options: [
      { text: "Funksjoner kan lages for å gjøre spesifikke ting og brukes om igjen", correct: true },
      { text: "Funksjoner bare gir mening", correct: false },
      { text: "Spør meg om noe vanskeligere", correct: true }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hva gjør en løkke?",
    options: [
      { text: "Skriver pen skrift", correct: false },
      { text: "Gjentar hendelser", correct: false },
      { text: "Gjenta den samme operasjonen flere ganger", correct: true }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hva er dette?",
    options: [
      { text: "Atom et programmeringsspråk", correct: false },
      { text: "React et programmeringsspråk", correct: false },
      { text: "React et JavaScript-bibliotek", correct: true }
    ],
    imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvilken av disse har mer programmering?",
    options: [
      { text: "IT-Drift", correct: false },
      { text: "IT-Utvikler", correct: true },
    ],
    imageUrl: 'https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/400/100',
    altText: 'Beskrivelse av bilde'
  },
  // Kopier malen over for å legge til flere spørsmål. Husk å endre antall spørsmål øverst.
];

//________________Dere trenger ikke redigere noe under denne linjen________________//


// Lager en variabel for å holde styr på hvilket spørsmål som er aktivt
let currentQuestion = 0;

// Håndterer klikk på alternativer, øker poengsummen hvis riktig alternativ er valgt
const handleOptionClick = (isCorrect) => {
  if (isCorrect) {
    score++;
  }
  // Sjekker om dette er siste spørsmål
  if (currentQuestion === totalQuestions - 1) {
    const resultContainer = document.querySelector("#resultContainer");
    resultContainer.innerHTML = `Your final score is: ${score}/${questions.length-1}`;
    resultContainer.style.display = "block"; //Viser resultatteksten etter at siste spørsmål er besvart
    questionContainer.style.display = "none"; //skjuler spørsmålsboksen etter at siste spørsmål er besvart

  } else {
    currentQuestion++;
    renderQuestion();
  }
};
// Renderer det aktive spørsmålet til siden
const renderQuestion = () => {
  const questionContainer = document.querySelector("#questionContainer");
  const currentQ = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h3>${currentQ.question}</h3>
    <img src="${questions[currentQuestion].imageUrl}" alt="Question Image">
    <div>
      ${currentQ.options
        .map(
          (option, index) => `
        <button onclick="handleOptionClick(${option.correct})">
          ${option.text}
        </button>
      `
        )
        .join("")}
    </div>
  `;
};
// Render første spørsmål når siden lastes
renderQuestion();