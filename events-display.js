(()=>{
const events=Array.isArray(window.GIRT_EVENTS)?window.GIRT_EVENTS:[];
function render(target,items){target.replaceChildren();for(const event of items){const card=document.createElement('article');card.className='event-entry';const title=document.createElement('h3');title.textContent=event.title;card.append(title);for(const text of [event.when,event.location,event.description]){if(text){const p=document.createElement('p');p.textContent=text;card.append(p)}}target.append(card)}}
const current=events.filter(e=>e&&e.title&&!e.archived);const past=events.filter(e=>e&&e.title&&e.archived);
if(current.length)render(document.getElementById('current-events'),current);
if(past.length){render(document.getElementById('past-event-list'),past);document.getElementById('past-events').hidden=false}
})();
