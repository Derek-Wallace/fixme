class AnswersService {
  trialOneAnswer(answers) {
    if (answers.red === '5' && answers.blue === '2' && answers.yellow === '7' && answers.green === '9') {
      return true
    } else { return false }
  }
}

export const answersService = new AnswersService()
