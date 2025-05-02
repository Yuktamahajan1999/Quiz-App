import React, { useState } from 'react';
import webTechQuizQuestions from './quiz';

const QuizApp = () => {
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const TotalQuestions = webTechQuizQuestions.length;
  const currentQuestion = webTechQuizQuestions[currentQuesIndex];

  function handlePrevClick() {
    setCurrentQuesIndex((prev) => (prev > 0 ? prev - 1 : TotalQuestions - 1));
  }

  function handleNextClick() {
    setCurrentQuesIndex((next) => (next < TotalQuestions - 1 ? next + 1 : 0));
  }

  function handleAnswerClick(option) {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuesIndex]: option, // Store only the selected answer
    }));
  }

  function calculateTotalScore() {
    setIsSubmitting(true);
    setTimeout(() => {
      const score = Object.entries(selectedAnswers).reduce((total, [index, answer]) => {
        const correctAnswer = webTechQuizQuestions[index].answer;
        return total + (answer === correctAnswer ? 1 : 0);
      }, 0);
      setTotalScore(score);
      setIsSubmitting(false);
    }, 800);
  }

  function renderResults() {
    if (totalScore !== null) {
      const scorePercentage = (totalScore / TotalQuestions) * 100;
      let message = '';
      let emoji = '';
      
      if (scorePercentage === 100) {
        message = 'Excellent! Perfect Score!';
        emoji = '🎯';
      } else if (scorePercentage >= 80) {
        message = 'Great Job! Keep it up!';
        emoji = '🌟';
      } else if (scorePercentage >= 50) {
        message = 'Good Try! You can do better!';
        emoji = '👍';
      } else {
        message = 'Better luck next time!';
        emoji = '💪';
      }

      return (
        <div style={styles.resultContainer}>
          <div style={styles.scoreCircle}>
            <span style={styles.scoreText}>
              {totalScore}<span style={styles.totalText}>/{TotalQuestions}</span>
            </span>
          </div>
          <h2 style={styles.resultMessage}>
            {message} {emoji}
          </h2>
          <div style={styles.progressBarContainer}>
            <div 
              style={{
                ...styles.progressBar,
                width: `${scorePercentage}%`,
                backgroundColor: 
                  scorePercentage === 100 ? '#4CAF50' :
                  scorePercentage >= 80 ? '#8BC34A' :
                  scorePercentage >= 50 ? '#FFC107' : '#F44336'
              }}
            />
          </div>
          
          {/* Detailed results */}
          <div style={styles.detailedResults}>
            {webTechQuizQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.answer;
              
              return (
                <div key={index} style={styles.resultItem}>
                  <p style={styles.resultQuestion}>{index + 1}. {question.question}</p>
                  <p style={styles.resultAnswer}>
                    Your answer: <span style={{ 
                      color: isCorrect ? '#4CAF50' : '#F44336',
                      fontWeight: 'bold'
                    }}>{userAnswer || 'Not answered'}</span>
                  </p>
                  {!isCorrect && (
                    <p style={styles.correctAnswer}>
                      Correct answer: {question.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          
          <button 
            style={styles.restartButton}
            onClick={() => {
              setCurrentQuesIndex(0);
              setSelectedAnswers({});
              setTotalScore(null);
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return null;
  }

  // Styles object
  const styles = {
    appContainer: {
      maxWidth: '800px',
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '16px',
      margin: '40px auto',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '25px',
    },
    questionCounter: {
      fontSize: '14px',
      color: '#7f8c8d',
      marginBottom: '5px'
    },
    questionText: {
      fontSize: '22px',
      fontWeight: '500',
      color: '#34495e',
      lineHeight: '1.4',
      margin: '15px 0 25px'
    },
    optionsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
      margin: '30px 0'
    },
    optionItem: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '18px 15px',
      cursor: 'pointer',
      border: '2px solid #e0e0e0',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
    },
    selectedOption: {
      backgroundColor: '#f8f9fa',
      border: '2px solid #3498db',
      transform: 'scale(0.98)'
    },
    optionText: {
      marginLeft: '10px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px'
    },
    button: {
      padding: '12px 30px',
      fontSize: '16px',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      border: 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    prevButton: {
      backgroundColor: '#f1f1f1',
      color: '#333'
    },
    nextButton: {
      backgroundColor: '#3498db',
      color: 'white'
    },
    finishButton: {
      backgroundColor: '#2ecc71',
      color: 'white'
    },
    resultContainer: {
      textAlign: 'center',
      padding: '30px',
    },
    scoreCircle: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: '#f8f9fa',
      margin: '0 auto 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      border: '5px solid #e9ecef'
    },
    scoreText: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#2c3e50'
    },
    totalText: {
      fontSize: '24px',
      color: '#7f8c8d'
    },
    resultMessage: {
      fontSize: '24px',
      color: '#2c3e50',
      margin: '20px 0',
      fontWeight: '600'
    },
    progressBarContainer: {
      height: '10px',
      backgroundColor: '#f1f1f1',
      borderRadius: '5px',
      margin: '30px auto',
      width: '80%',
      overflow: 'hidden'
    },
    progressBar: {
      height: '100%',
      transition: 'width 0.5s ease'
    },
    restartButton: {
      padding: '12px 30px',
      fontSize: '16px',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      transition: 'all 0.3s ease',
      marginTop: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    detailedResults: {
      marginTop: '40px',
      textAlign: 'left',
      maxHeight: '400px',
      overflowY: 'auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px'
    },
    resultItem: {
      marginBottom: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #e0e0e0'
    },
    resultQuestion: {
      fontWeight: '500',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    resultAnswer: {
      margin: '5px 0',
      color: '#34495e'
    },
    correctAnswer: {
      margin: '5px 0',
      color: '#4CAF50'
    }
  };

  return (
    <div style={styles.appContainer}>
      {totalScore === null ? (
        <>
          <div style={styles.header}>
            <div style={styles.questionCounter}>
              Question {currentQuesIndex + 1} of {TotalQuestions}
            </div>
            <h2 style={styles.questionText}>{currentQuestion.question}</h2>
          </div>

          <div style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuesIndex] === option;
              
              return (
                <div
                  key={index}
                  style={{
                    ...styles.optionItem,
                    ...(isSelected ? styles.selectedOption : {}),
                  }}
                  onClick={() => handleAnswerClick(option)}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <span style={styles.optionText}>
                    <strong>{String.fromCharCode(65 + index)}.</strong> {option}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={styles.buttonContainer}>
            <button
              style={{
                ...styles.button,
                ...styles.prevButton,
                opacity: isSubmitting ? 0.5 : 1
              }}
              onClick={handlePrevClick}
              disabled={isSubmitting}
            >
              ← Previous
            </button>
            <button
              style={{
                ...styles.button,
                ...(currentQuesIndex === TotalQuestions - 1 
                  ? styles.finishButton 
                  : styles.nextButton),
                opacity: isSubmitting ? 0.5 : 1
              }}
              onClick={() => {
                if (currentQuesIndex === TotalQuestions - 1) {
                  calculateTotalScore();
                } else {
                  handleNextClick();
                }
              }}
              disabled={isSubmitting}
            >
              {currentQuesIndex === TotalQuestions - 1 
                ? isSubmitting ? 'Submitting...' : 'Submit Quiz' 
                : 'Next →'}
            </button>
          </div>
        </>
      ) : (
        renderResults()
      )}
    </div>
  );
};

export default QuizApp;
