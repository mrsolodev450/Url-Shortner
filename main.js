const longUrl = document.getElementById('long-url')
const btn = document.getElementById('btn')
const shortedUrl = document.getElementById('short-url')

async function shortUrl(){
  
  let request = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl.value}`)
  
  let response = await request.json()
  
  let url = response.result.full_short_link
  
  shortedUrl.textContent = url
  
}

btn.addEventListener('click', shortUrl)
