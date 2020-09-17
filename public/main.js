function main() {
  const teamNameElement = document.querySelector('.team1 h2')
  function changeTeamOneName(event) {
    const elementThatChanged = event.target
    const inputFieldValue = elementThatChanged.value
    teamNameElement.textContent = inputFieldValue
  }
  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', changeTeamOneName)

  // 2ND TEAM NAME CHANGE****

  const teamNameElement2 = document.querySelector('.team2 h2')
  function changeTeamTwoName(event) {
    const elementThatChanged2 = event.target
    const inputFieldValue2 = elementThatChanged2.value
    teamNameElement2.textContent = inputFieldValue2
  }
  const teamTwoInput = document.querySelector('.team2 input')
  teamTwoInput.addEventListener('input', changeTeamTwoName)

  // POINTS BUTTON TEAM 1*****
  let team1Score = 0
  function changeScoreForTeam1() {
    team1Score = team1Score + 1
    // console.log(team1Score)
    const currentTeam1Score = document.querySelector('.team1 h3')
    currentTeam1Score.textContent = team1Score
  }
  const pointsButton1 = document.querySelector('.team1 .add ')
  console.log(pointsButton1)
  pointsButton1.addEventListener('click', changeScoreForTeam1)

  // POINTS BUTTON TEAM 2
  let team2Score = 0
  function changeScoreForTeam2() {
    team2Score = team2Score + 1
    // console.log(team1Score)
    const currentTeam2Score = document.querySelector('.team2 h3')
    currentTeam2Score.textContent = team2Score
  }
  const pointsButton2 = document.querySelector('.team2 .add ')
  console.log(pointsButton2)
  pointsButton2.addEventListener('click', changeScoreForTeam2)

  // MINUS BUTTON TEAM 1

  function reduceScoreForTeam1() {
    team1Score = team1Score - 1
    const currentTeam1Score = document.querySelector('.team1 h3')
    currentTeam1Score.textContent = team1Score
    // const reduceButton1 = document.querySelector('.team1 .subtract ')
    // reduceButton1.textContent = team1Score
  }
  const reduceButton1 = document.querySelector('.team1 .subtract ')
  // console.log(pButton2)
  reduceButton1.addEventListener('click', reduceScoreForTeam1)

  // MINUS BUTTON TEAM 2

  function reduceScoreForTeam2() {
    team2Score = team2Score - 1
    const currentTeam2Score = document.querySelector('.team2 h3')
    currentTeam2Score.textContent = team2Score
    // const reduceButton1 = document.querySelector('.team1 .subtract ')
    // reduceButton1.textContent = team1Score
  }
  const reduceButton2 = document.querySelector('.team2 .subtract ')
  // console.log(pButton2)
  reduceButton2.addEventListener('click', reduceScoreForTeam2)
}

document.addEventListener('DOMContentLoaded', main)
