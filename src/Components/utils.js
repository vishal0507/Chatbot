import moment from "moment/moment"

export const analyze = (text) =>{
    if(text.includes('hi') || text.includes("hai") || text.includes("hello"))
        return 'Hi, How can I help you.'
    else if(text.includes('date'))
        return moment().format('MMMM Do YYYY');
    else if(text.includes('time'))
        return moment().format('h:mm:ss a')
    else if (text.includes("google link"))
        return 'https://www.google.com'
    else if(text.includes("intrest"))
        return 'Bank Intrst is 8.7'
    else if (text.includes("thank you"))
        return "Thanks for contacting me"
    return "I can't get you. Can you rephrase the message. "
}