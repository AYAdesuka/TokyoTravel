
function formatTimeAgo(dateString) {
  const now = new Date();
  const pubDate = new Date(dateString);
  const diffInHours = Math.floor((now - pubDate) / (1000 * 60 * 60));
  
  if (diffInHours < 24) {

    const hoursText = diffInHours === 1 ? 'час' : 
                     diffInHours >= 2 && diffInHours <= 4 ? 'часа' : 'часов';
    return `${diffInHours} ${hoursText} назад`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);

    const daysText = diffInDays === 1 ? 'день' : 
                    diffInDays >= 2 && diffInDays <= 4 ? 'дня' : 'дней';
    return `${diffInDays} ${daysText} назад`;
  }
}


document.querySelectorAll('.news-time').forEach(element => {
  const pubDate = element.getAttribute('data-pubdate');
  element.textContent = formatTimeAgo(pubDate);
}); 