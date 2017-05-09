(function() {

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var myVar;
  var isPaused = false;


  $('#next').hide();
  $('#prev').hide();
  $('#stop').hide();
  $('#timer').hide();
  $('#pause').hide();
  $('#resume').hide();
  $('#totalQuestion').hide();
  $('#rightQuestion').hide();
  $('#wrongQuestion').hide();
  $('#totalQuestionAnswered').hide();
  $('#home').show();


  $('#start').show();

    // Click handler for the 'Start' button
    $('#start').on('click', function (e) {
      e.preventDefault();

      if(quiz.is(':animated')) {
        return false;
      }
      
      questionCounter = 0;
      selections = [];

      $('#stop').show();
      $('#pause').show();
      $('#start').hide();
      $('#home').hide();

      displayNext();
      displayRegularScore();
    });


    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
    e.preventDefault();
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    if(questions[questionCounter].questionType == 'radio' )
    {
      if (isNaN(selections[questionCounter]))
      {
        alert('Please make a selection!');
        return false;
      }
    }
    if(questions[questionCounter].questionType == 'textbox' )
    {
      if ($('input[name="answerText"]').val() == '')
      {
        alert('Please enter answer!');
        return false;
      }
    }
    questionCounter++;
    displayNext();
    });

 
  // Click handler for the 'Stop' button
  $('#stop').on('click', function (e) {

      e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    $('#question').remove();
    var scoreElem = displayScore();
    quiz.append(scoreElem).fadeIn();
    $('#next').hide();
    $('#prev').hide();
    $('#start').show();
    $('#stop').hide();
    $('#pause').hide();
    $('#resume').hide();
    stopTimer();
    $('#timer').hide();
    $('#totalQuestion').hide();
    $('#rightQuestion').hide();
    $('#wrongQuestion').hide();
    $('#totalQuestionAnswered').hide();
    $('#home').show();


  });

  // Click handler for the 'prev' button
  $('#pause').on('click', function (e) {
    e.preventDefault();
    isPaused = true;
    $('#pause').hide();
    $('#resume').show();

  });

   // Click handler for the 'prev' button
  $('#resume').on('click', function (e) {
    e.preventDefault();
    isPaused = false;
    $('#pause').show();
    $('#resume').hide();
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    if(questions[index].questionType =='radio')
    {
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
    }

    if(questions[index].questionType == 'textbox')
    {
      var inputTextBox = createTextBox(index);
      qElement.append(inputTextBox);
    }

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Creates a list of the answer choices as radio inputs
  function createTextBox(index) {
    var ulTagList = $('<ul>');
    var item;
    var input = '';
      item = $('<li>');
      input = '<input type="text" name="answerText" id='+ index+' />';
      item.append(input);
      ulTagList.append(item);
    return ulTagList;
  }


  // Reads the user selection and pushes the value to an array
  function choose() {
    if(questions[questionCounter].questionType == 'radio' )
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    if(questions[questionCounter].questionType == 'textbox' )
      selections[questionCounter] = $('input[name="answerText"]').val(); 
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {

      document.getElementById("timer").innerHTML = 'Time Left : '+ 15 +' seconds.';
      displayRegularScore();

      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
      if (!(isNaN(selections[questionCounter]))) {
        $('input[value='+selections[questionCounter]+']').prop('checked', true);
      }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }

      stopTimer();
      startTimer();

      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        stopTimer();

        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
        $('#home').show();
        $('#stop').hide();
        $('#timer').hide();
        $('#pause').hide();
        $('#resume').hide();
        $('#totalQuestion').hide();
        $('#rightQuestion').hide();
        $('#wrongQuestion').hide();
        $('#totalQuestionAnswered').hide();


      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if(questions[i].questionType == 'radio' )
      {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
       if(questions[i].questionType == 'textbox' )
      {
        if (selections[i] == questions[i].correctAnswer) {
          numCorrect++;
        }
      }
    }
    var wrongAnswer = questions.length - numCorrect;
    score.append(' <div class="result"> <b> Your Results </b> <br/> <br/>  <font color="#663300"> Total Questions : ' + questions.length + ' </font> <br/> <font color="#009900"> Correct Answer : ' +
                 numCorrect + ' </font> <br/>  <font color="#cc0000"> Wrong Answer : ' +wrongAnswer + '</font> </div>' );
    return score;
  }

  //Start Timer
  function startTimer()
  {
    $('#timer').show();
    myVar = setInterval(function() {
      if(!isPaused) {
      myTimer();
      }
    }, 1000);
    var d = 15;
    function myTimer()
    {
      if(d === 0)
      {
      questionCounter++;
      displayNext();
      }
      else
      {
        document.getElementById("timer").innerHTML = 'Time Left : '+d-- +' seconds.';
      }
    }
  }
  //Stop Timer
  function stopTimer()
  {
   clearTimeout(myVar);
  }

    //Computes score and display on each questions
   function displayRegularScore() {

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if(questions[i].questionType == 'radio' )
      {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
       if(questions[i].questionType == 'textbox' )
      {
        if (selections[i] == questions[i].correctAnswer) {
          numCorrect++;
        }
      }

    }

    $('#totalQuestionAnswered').show();
    $('#totalQuestion').show();
    $('#rightQuestion').show();
    $('#wrongQuestion').show();

    var wrongAnswer =  questionCounter - numCorrect;
    var totalQuestionAnswered = numCorrect+wrongAnswer;
    document.getElementById("totalQuestion").innerHTML = 'Total Questions  : '+questions.length;
    document.getElementById("totalQuestionAnswered").innerHTML = 'Total Questions Answered : '+ totalQuestionAnswered;
    document.getElementById("rightQuestion").innerHTML = 'Right Answer : '+numCorrect ;
    document.getElementById("wrongQuestion").innerHTML = 'Wrong Answer : '+wrongAnswer ;

  }

})();