const timeline = [
  {
    id: '0',
    avatar:
      'https://pbs.twimg.com/profile_images/1274822387532328960/feySZs0k_reasonably_small.jpg',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Karl BEhrens',
    avatar:
      'https://scontent.fscl6-1.fna.fbcdn.net/v/t1.0-9/70598909_10221218616522080_1448066460277538816_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=E3mwY7d34xYAX-pIXVr&_nc_ht=scontent.fscl6-1.fna&oh=d31ba1df7403a025227a8cdf19960720&oe=5F7EC42E',
    message: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  },
  {
    id: '0',
    avatar:
      'https://pbs.twimg.com/profile_images/1274822387532328960/feySZs0k_reasonably_small.jpg',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Karl BEhrens',
    avatar:
      'https://scontent.fscl6-1.fna.fbcdn.net/v/t1.0-9/70598909_10221218616522080_1448066460277538816_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=E3mwY7d34xYAX-pIXVr&_nc_ht=scontent.fscl6-1.fna&oh=d31ba1df7403a025227a8cdf19960720&oe=5F7EC42E',
    message: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  },
  {
    id: '0',
    avatar:
      'https://pbs.twimg.com/profile_images/1274822387532328960/feySZs0k_reasonably_small.jpg',
    username: 'wongmjane',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Karl BEhrens',
    avatar:
      'https://scontent.fscl6-1.fna.fbcdn.net/v/t1.0-9/70598909_10221218616522080_1448066460277538816_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=E3mwY7d34xYAX-pIXVr&_nc_ht=scontent.fscl6-1.fna&oh=d31ba1df7403a025227a8cdf19960720&oe=5F7EC42E',
    message: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`
  }
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(timeline))
}
