import React from 'react'

const Article = ({title, date = 'January 1, 1970', preview, minutes = 0}) => {   

  let emoji = '☕️';
  let count = Math.ceil(minutes / 5);

  if (minutes >= 30) {
    emoji = '🍱';
    count = Math.ceil(minutes / 10);
  }

  const emojis = Array(count).fill(emoji).join('');

  return (    
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{emojis} {minutes} mins read</p>
    </article>       
  )
}

export default Article