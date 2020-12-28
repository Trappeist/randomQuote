function getRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const randomQuote = {
    firstPart: ["Someone once said: ", "Here's some inspiration for you: ", "This is going to make you feel better: "],
    quotes: ["The best way to get started is to quit talking and begin doing.",
            "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
            "Don’t let yesterday take up too much of today.",
            "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
            "It’s not whether you get knocked down, it’s whether you get up.",
            "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
            "People who are crazy enough to think they can change the world, are the ones who do.",
            "Failure will never overtake me if my determination to succeed is strong enough.",
            "We may encounter many defeats but we must not be defeated.",
            "All these quotes sound really lame..."],
    lastPart: ["Tresure it.", "Never forget.", "Feel free to ignore me."]
  }
  
  let personalQuote = []
  
  for(let prop in randomQuote) {
    let optionIdx = getRandomNumber(randomQuote[prop].length)
   
    switch(prop) {
      case 'firstPart':
        personalQuote.push(`${randomQuote[prop][optionIdx]}`)
        break
      case 'quotes':
        personalQuote.push(`${randomQuote[prop][optionIdx]}`)
        break
      case 'lastPart':
        personalQuote.push(`${randomQuote[prop][optionIdx]}`)
        break
      default:
        personalQuote.push("You don't deserve a quote!")
    }
  }
  
  function formatQuote(quote) {
    const formatted = personalQuote.join('\n')
    console.log(formatted)
  }
  
  formatQuote(personalQuote);