var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');

    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }

	
};

function play(obj)
{
// set storage
 var storage = window.localStorage;
//�õ��ļ���
	var file=obj.attributes["file"].value;   
	 
	//�����ļ���
	if(storage!=null)
		storage.setItem("file", file);
		alert(storage.getItem("file"));
	this.location="playAudio.html";
}