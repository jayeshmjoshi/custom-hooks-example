import {useEffect, useState} from 'react';

const useCounter = (grade) => {

  const [count, setCount] = useState(0);
  const [countMessage, setCountMessage] = useState('');

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  // useEffect(() => {
  //   if(count > 20) {
  //     setCountMessage("Grade A")
  //   } else if(count > 15) {
  //     setCountMessage("Grade B")
  //   } else if(count > 10) {
  //     setCountMessage("Grade C")
  //   } else if(count > 5) {
  //     setCountMessage("Grade D")
  //   } else {
  //     setCountMessage("")
  //   }
  // },[count])

  useEffect(() => {
    if(count > 20) {
      setCountMessage(`${grade} A`) 
    } else if(count > 15) {
      setCountMessage(`${grade} B`)
    } else if(count > 10) {
      setCountMessage(`${grade} C`)
    } else if(count > 5) {
      setCountMessage(`${grade} D`)
    } else {
      setCountMessage("")
    }
  },[count, grade])

  return [count, decrement, increment, reset, countMessage]

}

export default useCounter;