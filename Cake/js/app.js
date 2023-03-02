var product = document.querySelector('.prood');
var span_l = document.querySelector('.main');
var span_ch = document.querySelector('.change');
var span_hide = document.querySelector('.change1');

var team = document.querySelector('.tea');
var team_hide = document.querySelector('.hovers');

product.onmouseover = function(){
        span_ch.style.display = 'block';
        span_ch.style.borderBottom = '2px solid #f08632';
        span_hide.style.display = 'none';
        span_l.style.backgroundColor = '#f08632';
};

product.onmouseout = function(){
        span_ch.style.display = 'none';
        span_hide.style.display = 'block';
        span_hide.style.borderBottom = '2px solid transparent';
        span_l.style.backgroundColor = '#fff';
};

//team.onmousemove = function(){
//    team_hide.style.display = 'block';
//}
//team.onmouseout = function(){
//    team_hide.style.display = 'none';
//}