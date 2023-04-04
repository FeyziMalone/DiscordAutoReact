'use strict';

const duration =  document.querySelector("#duration");
const statuss =  document.querySelector("#status");
const emote =  document.querySelector("#emote-seconds");
const channel =  document.querySelector("#channel-id");



function registerScript() {
  
  if(emote.value == "" || channel.value == "" ){
    alert("Please Type Correctly");
    return;
  }

  browser.storage.sync.set({
    duration: duration.value,
    status: statuss.checked, 
    emote: emote.value,
    channel: channel.value 
  });

  document.querySelector("#register").textContent = "Updated";



}

document.querySelector("#register").addEventListener('click', registerScript);


browser.storage.sync.get(['duration', 'status', 'emote', 'channel'], function(result) {
  if (result.status) {
    statuss.checked = true;
  } else {
    statuss.checked = false;
  }
  emote.value = result.emote;
  channel.value = result.channel;
});