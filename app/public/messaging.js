(function(){
    window.onload = function(){
        window.messaging = new Messaging();
        for(var i = 0; i < window.frames.length; i++) {
            window.frames[i].messaging = messaging;
        }
    }

    function Messaging() {
        window.addEventListener("message", function(e){
            if(e.origin === window.location.origin){
                parseMesssage(e.data);
            }
        })
        function parseMesssage(data) {
            console.log(data)
            if(typeof data === "string"){
                window.dispatchEvent(new CustomEvent(data), {
                    bubbles: true
                })
            }
            else if(data.event){
                window.dispatchEvent(new CustomEvent(data.event, {
                    detail: {
                        payload: data.payload
                    }
                }),{
                    bubbles: true
                });
            }
        }
        function send(message){
            window.postMessage(message);
        }
        function subscribe(event, callback){
            window.addEventListener(event, function(e){
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
})()

