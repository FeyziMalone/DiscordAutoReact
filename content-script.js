var tick__ = 0;  
var targetTime = 0;
var actionTp = 0;
function doAction(channelID,number2,emoteTarget) {
               let Authorization = "REPLACETOKEN";
                Authorization = Authorization.replace(/"/g, '');
            fetch("https://discord.com/api/v9/channels/"+channelID+"/messages/"+number2+"/reactions/"+emoteTarget+"/%40me?location=Message&type=0", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
                    "Accept": "*/*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Authorization": Authorization,
                    "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRmlyZWZveCIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjEwOS4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzExMS4wIiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTExLjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6Ind3dy5nb29nbGUuY29tIiwic2VhcmNoX2VuZ2luZSI6Imdvb2dsZSIsInJlZmVycmVyX2N1cnJlbnQiOiIiLCJyZWZlcnJpbmdfZG9tYWluX2N1cnJlbnQiOiIiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjoxODU2MjEsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGwsImRlc2lnbl9pZCI6MH0=",
                    "X-Discord-Locale": "en-US",
                    "X-Debug-Options": "bugReporterEnabled",
                    "Alt-Used": "discord.com",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "no-cors",
                    "Sec-Fetch-Site": "same-origin",
                    "Pragma": "no-cache",
                    "Cache-Control": "no-cache"
                },
                "method": "PUT",
                "mode": "cors"
            })
            .then(response => {
                if (!response.ok){
                    throw new Error("Network response was not ok");
                }
                return "Reaction Added";
            })
            .then(data => {
                console.log("Action: "+data);
                actionTp = targetTime;
                tick__ = 0;
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });     
  }
  


const interval2 = setInterval(function() {

console.log(tick__);

tick__++;
checkProtest();

}, 1000);
  

function checkProtest() {
    const currentURL = window.location.href;

    const parts = currentURL.split('/');
    const channelID = parts[5]; // channel ID is the sixth element in the array
   
    //   console.log("channelID: "+channelID);
    var elemnnubmerlast = $('.messageListItem-ZZ7v6g').last();
    
    
    var lastnol = elemnnubmerlast.attr('id');
    const partsn = lastnol.split("-");
   
    const number2 = partsn[3]; // Second number is the fourth element in the array
    const reactions = document.getElementById('message-reactions-'+number2);

   
    browser.storage.sync.get(['duration', 'status', 'emote', 'channel'], function(result) {
      
        targetTime = parseInt(result.duration);
       
   
        if(!result.status || result.emote == null || result.channel == null){
            console.log("You Are In Offline Mode Or Channel_ID or Emote Not Set ");
            return;
        }


        
        if (elemnnubmerlast.text().indexOf("Closed by Bimmer") !== -1) {
            if (reactions) {
                console.log('Reaction found!');
                return ;
              }
              
              console.log("targetTime: "+targetTime);
            if(tick__ <= actionTp){
                console.log("Waiting For Action");
            } else {
                var emoteTarget = result.emote;
				console.log("emoteTarget: "+emoteTarget);
                var channelTarget = result.channel;
                doAction(channelTarget,number2 ,emoteTarget);
            }
              
        }
    })
}