 chrome.tabs.onActivated.addListener(tab=>{
    console.log(tab);
    chrome.tabs.get(tab.tabId,info=>{
     
        //  if(/^https:\/\/www\.google/.test(info)){
        //  chrome.tabs.executeScript(null,{file:'./foreground.js'},()=>console.log('i injected the code ...'))
        //  console.log(info.url)
        // }

        
        chrome.tabs.executeScript(null,{file:'./foreground.js'},()=>console.log('i injected the code ...'))
         



        //console.log(info);


      })

  })

