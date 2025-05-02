import React, { useState } from 'react';
import webTechQuizQuestions from './quiz';

const QuizApp = () => {
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const TotalQuestions = webTechQuizQuestions.length;
  const currentQuestion = webTechQuizQuestions[currentQuesIndex];

  // Animation styles
  const fadeIn = {
    animation: 'fadeIn 0.5s ease-in',
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 }
    }
  };

  function handlePrevClick() {
    setCurrentQuesIndex((prev) => (prev > 0 ? prev - 1 : TotalQuestions - 1));
  }

  function handleNextClick() {
    setCurrentQuesIndex((next) => (next < TotalQuestions - 1 ? next + 1 : 0));
  }

  function handleAnswerClick(option) {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuesIndex]: { 
        answer: option, 
        isCorrect: option === currentQuestion.answer 
      },
    }));
  }

  function calculateTotalScore() {
    setIsSubmitting(true);
    setTimeout(() => {
      const score = Object.values(selectedAnswers).reduce((total, answer) => {
        return total + (answer.isCorrect ? 1 : 0);
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
      transition: 'all 0.3s ease',
      ...fadeIn
    },
    header: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '25px',
      position: 'relative'
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
      position: 'relative',
      overflow: 'hidden'
    },
    optionText: {
      marginLeft: '10px',
      zIndex: 2
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
      ...fadeIn
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
    optionIndicator: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '5px',
      height: '100%',
      backgroundColor: '#3498db',
      transition: 'all 0.3s ease'
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
              const isSelected = selectedAnswers[currentQuesIndex]?.answer === option;
              const isCorrect = selectedAnswers[currentQuesIndex]?.isCorrect;
              
              return (
                <div
                  key={index}
                  style={{
                    ...styles.optionItem,
                    backgroundColor: isSelected 
                      ? isCorrect 
                        ? 'rgba(76, 175, 80, 0.1)' 
                        : 'rgba(244, 67, 54, 0.1)'
                      : '#fff',
                    borderColor: isSelected
                      ? isCorrect
                        ? '#4CAF50'
                        : '#F44336'
                      : '#e0e0e0',
                    transform: isSelected ? 'scale(0.98)' : 'scale(1)'
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
                  <div 
                    style={{
                      ...styles.optionIndicator,
                      backgroundColor: isSelected
                        ? isCorrect
                          ? '#4CAF50'
                          : '#F44336'
                        : '#3498db',
                      width: isSelected ? '8px' : '0px'
                    }}
                  />
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