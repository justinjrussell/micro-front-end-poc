(function(win){
    win.onload = function(){
        const messaging = new Messaging();
        win.messaging = messaging
        for(var i = 0; i < win.frames.length; i++) {
            win.frames[i].messaging = messaging;
        }
    }

    function Messaging() {
        win.addEventListener("message", function(e){
            if(e.origin === win.location.origin){
                parseMesssage(e.data);
            }
        })
        function parseMesssage(data) {
            console.log('parseMesssage', data)
            if(typeof data === "string"){
                win.dispatchEvent(new CustomEvent(data), {
                    bubbles: true
                })
            }
            else if(data.event){
                win.dispatchEvent(new CustomEvent(data.event, {
                    detail: {
                        payload: data.payload
                    }
                }),{
                    bubbles: true
                });
            }
        }
        function send(message){
            win.postMessage(message);
        }
        function subscribe(event, callback){
            win.addEventListener(event, function(e){
                if(e.detail && e.detail.payload){
                    callback(e.detail.payload)
                }else {
                    callback();
                }
            });
        }
        return {
            send: send,
            subscribe: subscribe
        }
    }
})(window)

