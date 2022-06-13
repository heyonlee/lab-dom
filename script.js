let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)
  
  // Part 1
  //document.getElementById('main-title').innerHTML = "Hi! Welcome to Dom's homepage."
  document.querySelector('#main-title').innerHTML = "Hi! Welcome to Dom's homepage."
  // Part 2   = use .style.backgroundColor
  document.body.style.backgroundColor = "blanchedalmond"
  // Part 3
  last = document.getElementById('favorite-things') 
  last.removeChild(last.lastElementChild)
  // removeChild(지울 어린이);  
   // Part 4

   //Select all `.special-title` class elements 
   //and change their `font-size` to `2rem`.
   // Remember you might have to iterate through the list of elements
    // document.querySelectorAll(".special-title").style.fontSize = "2rem"
    // console.log(document.querySelectorAll(".special-title"))
   
    document.querySelectorAll(".special-title").forEach(el => el.style.fontSize = "2rem");
  //[]+1   interate 필요한 이유 잘 모르지만; all을 쓰면 복수 iterable한 걸 줘서 꼭 룹 해줘야함

  // Part 5
  //Turns out DOM never raced in **Chicago**. 
  //Access the **Past Races** list and remove **Chicago**.
   races = document.getElementById("past-races")
   console.log(races)
   races.removeChild(races.children[3])


  // Part 6

  // Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` 
  // text to the name of a city, and append it to the **Past Races** list.
   li =document.createElement('li')
   li.textContent='Boston'
   races.append(li)
  //  li.setAttribute('id',addValue)
  //  node = document.createTextNode("Boston");
  //  li.appendChild(node);
  
  // Part 7

  // Create a new `.blog-post` corresponding to the new city added in **Part 6**. 
  // You will have to create a new `<div>` with class of `.blog-post`, a new `<h1>` with text, 
  // and a new `<p>` with some text. Make the new element consistent with the other posts. 
  // Think about what order you want to create the elements, and what order you want to append them in.
   m= document.getElementsByClassName('main')  //s 조심 !! 유사배열때문에 힘듬 ㅠㅠ
   d=document.createElement('div')
   m[0].append(d)
   d.className = "blog-post purple"
  //  c=document.createElement('class')
   d.className = "blog-post purple";
   
    h1=document.createElement('h1')
    Boston=h1.textContent= 'Boston'
    p=document.createElement('p')
    p.textContent= 'I DROVED INSIDE OF THE FANWAY PARK WITH MY CAR!'
    d.append(h1)
    d.append(p)
 

}