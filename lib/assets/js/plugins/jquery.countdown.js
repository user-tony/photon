jQuery.fn.countdown=function(userOptions)
{var options={stepTime:60,format:"dd:hh:mm:ss",startTime:"01:12:32:55",digitImages:6,digitWidth:53,digitHeight:77,timerEnd:function(){},image:"digits.png"};var digits=[],interval;var createDigits=function(where)
{var c=0;for(var i=0;i<options.startTime.length;i++)
{if(parseInt(options.startTime[i])>=0)
{elem=$('<div id="cnt_'+ i+'" class="cntDigit" />').css({height:options.digitHeight*options.digitImages*10,float:'left',background:'url(\''+ options.image+'\')',width:options.digitWidth});digits.push(elem);margin(c,-((parseInt(options.startTime[i])*options.digitHeight*options.digitImages)));digits[c].__max=9;switch(options.format[i]){case'h':digits[c].__max=(c%2==0)?2:9;if(c%2==0)
digits[c].__condmax=4;break;case'd':digits[c].__max=9;break;case'm':case's':digits[c].__max=(c%2==0)?5:9;}
++c;}
else
elem=$('<div class="cntSeparator"/>').css({float:'left'}).text(options.startTime[i]);where.append(elem)}};var margin=function(elem,val)
{if(val!==undefined)
return digits[elem].css({'marginTop':val+'px'});return parseInt(digits[elem].css('marginTop').replace('px',''));};var moveStep=function(elem)
{digits[elem]._digitInitial=-(digits[elem].__max*options.digitHeight*options.digitImages);return function _move(){mtop=margin(elem)+ options.digitHeight;if(mtop==options.digitHeight){margin(elem,digits[elem]._digitInitial);if(elem>0)moveStep(elem- 1)();else
{clearInterval(interval);for(var i=0;i<digits.length;i++)margin(i,0);options.timerEnd();return;}
if((elem>0)&&(digits[elem].__condmax!==undefined)&&(digits[elem- 1]._digitInitial==margin(elem- 1)))
margin(elem,-(digits[elem].__condmax*options.digitHeight*options.digitImages));return;}
margin(elem,mtop);if(margin(elem)/ options.digitHeight % options.digitImages != 0)setTimeout(_move,options.stepTime);if(mtop==0)digits[elem].__ismax=true;}};$.extend(options,userOptions);this.css({height:options.digitHeight,overflow:'hidden'});createDigits(this);interval=setInterval(moveStep(digits.length- 1),1000);};