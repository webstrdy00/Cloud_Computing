var Body = {
  SetBackgroundColor : function(color){
      document.querySelector('body').style.backgroundColor = color;
    },
  SetColor : function(color){
    document.querySelector('body').style.color = color;
  }
}

var Link ={
  SetColor : function(color){
    var alist = document.querySelectorAll('a');
    for(var i = 0; i<alist.length; ++i){
      alist[i].style.color = color;
    }
  }
}

  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.SetBackgroundColor('black');
      Body.SetColor('white');
      self.value = 'day';

      Link.SetColor('powderblue');
    }
    else{
      Body.SetBackgroundColor('white');
      Body.SetColor('black');
      self.value = 'night';

      Link.SetColor('blue');
    }
  }
