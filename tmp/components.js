
/*-1390082465*/
/*
 * ===========================================================================================
 * COMPONENT: Background Mouse Parallax/example
 * ===========================================================================================
 */

$('body').parallax(15);
/*-1390082465*/
/*-308481248*/
/*
 * ===========================================================================================
 * COMPONENT: Mailify/example
 * ===========================================================================================
 */

var el=document.getElementById('content');el.innerHTML=mailify(el.innerHTML);
/*-308481248*/
/*1067694298*/
/*
 * ===========================================================================================
 * COMPONENT: Mouse and Touch movements/example
 * ===========================================================================================
 */

var m=new Movements('#place');m.onZoom=function(evt,zoom,x,y){console.log('ZOOM',zoom,x,y)};m.onMove=function(evt,x,y){console.log('MOVE',x,y)};m.onTap=function(evt,x,y){console.log('TAP',x,y)};
/*1067694298*/
/*357614106*/
/*
 * ===========================================================================================
 * COMPONENT: Simple Invoice/example
 * ===========================================================================================
 */

window.print();
/*357614106*/
/*1267996950*/
/*
 * ===========================================================================================
 * COMPONENT: Smilefy/example
 * ===========================================================================================
 */

var el=document.getElementById('post');el.innerHTML=smilefy(el.innerHTML);
/*1267996950*/
/*-815866713*/
/*
 * ===========================================================================================
 * COMPONENT: Tangular-Time/example
 * ===========================================================================================
 */

var dates=[new Date(),new Date().add('-30 minutes'),new Date().add('-2 days'),new Date().add('-3 month'),new Date().add('-1 year')];var builder=[];dates.forEach(function(dt){builder.push(Tangular.helpers.time(dt))});$('#output').html(builder.join('<br />'));
/*-815866713*/
/*-331462488*/
/*
 * ===========================================================================================
 * COMPONENT: URLify/example
 * ===========================================================================================
 */

var el=document.getElementById('post');el.innerHTML=urlify(el.innerHTML);
/*-331462488*/
/*1693012974*/
/*
 * ===========================================================================================
 * COMPONENT: j-Audio/example
 * ===========================================================================================
 */

var volume=50;FIND('audio',function(component){component.play('http://www.tonycuffe.com/mp3/cairnomount.mp3')});
/*1693012974*/
/*972798982*/
/*
 * ===========================================================================================
 * COMPONENT: j-AutoComplete/example
 * ===========================================================================================
 */

FIND('autocomplete',function(component){component.attach('input',function(q,render){console.log('---> autocomplete search query:',q);render([{name:'Item 1',type:'pages'},{name:'Item 2',type:'widgets'},{name:'Item 3'}])},function(value,input){alert('autocomplete selected --> '+JSON.stringify(value));input.val('')},17,0,21)});
/*972798982*/
/*-478318104*/
/*
 * ===========================================================================================
 * COMPONENT: j-Binder/example
 * ===========================================================================================
 */

var user={};user.logged=false;user.datetime;setInterval(function(){SET('user.logged',!user.logged)},2000);setInterval(function(){SET('user.datetime',new Date())},1000);STYLE('.green{color:green}.red{color:red}');
/*-478318104*/
/*-599058756*/
/*
 * ===========================================================================================
 * COMPONENT: j-Calendar/example
 * ===========================================================================================
 */

var form={};form.date=new Date();$('a[href="#calendar"]').on('click',function(e){FIND('calendar').toggle($(this),form.date,function(date){alert(date)})});
/*-599058756*/
/*-1781768910*/
/*
 * ===========================================================================================
 * COMPONENT: j-Centered/example
 * ===========================================================================================
 */

var form='';function show(){SET('form','login')}
/*-1781768910*/
/*-604708287*/
/*
 * ===========================================================================================
 * COMPONENT: j-Checkbox/example
 * ===========================================================================================
 */

var form={};form.terms=false;form.newsletter=true;
/*-604708287*/
/*1088139743*/
/*
 * ===========================================================================================
 * COMPONENT: j-Checkboxlist/example
 * ===========================================================================================
 */

var selected=[1,2];var datasource=[{id:1,name:'Total.js'},{id:2,name:'jComponent'},{id:3,name:'Express.js'},{id:4,name:'React'},{id:5,name:'Angular.js'}];
/*1088139743*/
/*-631395424*/
/*
 * ===========================================================================================
 * COMPONENT: j-Click/example
 * ===========================================================================================
 */

function doSubmit(){alert('SUBMIT')}
/*-631395424*/
/*771338030*/
/*
 * ===========================================================================================
 * COMPONENT: j-Clipboard/example
 * ===========================================================================================
 */

$('div').on('click',function(){var el= $(this);el.css('background-color','#E0E0E0');setTimeout(function(){el.css('background-color','transparent')},200);SETTER('clipboard','copy',el.html())});
/*771338030*/
/*362661795*/
/*
 * ===========================================================================================
 * COMPONENT: j-ClipboardImage/example
 * ===========================================================================================
 */

ON('clipboardimage',function(base64){var img=new Image();img.src=base64;$('#output').empty().append(img)});
/*362661795*/
/*1870940650*/
/*
 * ===========================================================================================
 * COMPONENT: j-CodeMirror Text Editor/example
 * ===========================================================================================
 */

var html='<h1>HELLO WORLD</h1>';
/*1870940650*/
/*-1601906391*/
/*
 * ===========================================================================================
 * COMPONENT: j-ColorPicker/example
 * ===========================================================================================
 */

setTimeout(function(){SETTER('colorpicker','show',100,100,function(color){console.log(color)})},500);
/*-1601906391*/
/*608621434*/
/*
 * ===========================================================================================
 * COMPONENT: j-ColorSelector/example
 * ===========================================================================================
 */

var mycolor='#3BAFDA';
/*608621434*/
/*-859367016*/
/*
 * ===========================================================================================
 * COMPONENT: j-Confirm/example
 * ===========================================================================================
 */

FIND('confirm',function(component){component.confirm('Do you want to remove user # 394893?',['OK','Cancel'],function(buttonIndex){console.log(buttonIndex)})});
/*-859367016*/
/*-795333114*/
/*
 * ===========================================================================================
 * COMPONENT: j-ContextMenu/example
 * ===========================================================================================
 */

$(document).on('click','a',function(){FIND('contextmenu').show('left',this,[{name:'Print',icon:'fa-print',value:'print'},{name:'Copy',icon:'fa-copy',value:'copy'},{name:'Remove',icon:'fa-times-circle',value:'remove'}],function(value){console.log('CLICK',value)})});
/*-795333114*/
/*1366846862*/
/*
 * ===========================================================================================
 * COMPONENT: j-Crop/example
 * ===========================================================================================
 */

var model={};model.picture='https://avatars0.githubusercontent.com/u/2414252?v=3&s=460';
/*1366846862*/
/*-1849805938*/
/*
 * ===========================================================================================
 * COMPONENT: j-DataGrid/example
 * ===========================================================================================
 */

var items=[];setTimeout(function(){items.push({name:'1 Lorem ipsum dolor.',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, mollitia!',created:new Date()});items.push({name:'2 Lorem ipsum dolor.',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, mollitia!',created:new Date()});items.push({name:'3 Lorem ipsum dolor.',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, mollitia!',created:new Date()});items.push({name:'4 Lorem ipsum dolor.',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, mollitia!',created:new Date()});items.push({name:'5 Lorem ipsum dolor.',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, mollitia!',created:new Date()});items.push({name:'6 Lorem ipsum dolor.',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, mollitia!',created:new Date()});UPDATE('items')},1000);FIND('datagrid',function(component){component.onButton=function(index,row,name,elButton){console.log('CLICK',row)};component.onCheckbox=function(index,row,checked,elCheckbox){console.log('CHECKED',row,checked)}});
/*-1849805938*/
/*-278286912*/
/*
 * ===========================================================================================
 * COMPONENT: j-Disable/example
 * ===========================================================================================
 */

var user=null;
/*-278286912*/
/*113104773*/
/*
 * ===========================================================================================
 * COMPONENT: j-Dropdown List/example
 * ===========================================================================================
 */

var datasource=[{name:'A',id:1},{name:'B',id:2},{name:'C',id:3}];var form={};
/*113104773*/
/*636802661*/
/*
 * ===========================================================================================
 * COMPONENT: j-Empty/example
 * ===========================================================================================
 */

setInterval(function(){SET('datasource',window.datasource?null:[1])},5000);
/*636802661*/
/*-1561839584*/
/*
 * ===========================================================================================
 * COMPONENT: j-Error/example
 * ===========================================================================================
 */

var mycustomerror=[{error:'Invalid Email Address'},{error:'Password is too short'}];
/*-1561839584*/
/*-874521969*/
/*
 * ===========================================================================================
 * COMPONENT: j-Exec/example
 * ===========================================================================================
 */

function myClick(el){alert('CLICK: '+el.html())}
/*-874521969*/
/*871455517*/
/*
 * ===========================================================================================
 * COMPONENT: j-FileReader/example
 * ===========================================================================================
 */

function fopen(){SETTER('filereader','open',function(file){$(document.body).append('<div><pre><code>{0}</code></pre></div>'.format(JSON.stringify(file,null,'    ').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')))})}
/*871455517*/
/*-423759269*/
/*
 * ===========================================================================================
 * COMPONENT: j-FileUpload/example
 * ===========================================================================================
 */

var mypicture='';
/*-423759269*/
/*2012110188*/
/*
 * ===========================================================================================
 * COMPONENT: j-FontAwesome/example
 * ===========================================================================================
 */

setTimeout(function(){SETTER('fontawesome','show',100,100,function(icon){console.log(icon)})},500);
/*2012110188*/
/*1102692164*/
/*
 * ===========================================================================================
 * COMPONENT: j-Form Window/example
 * ===========================================================================================
 */

function init_user_form(component){component.submit=function(hide){alert('SUBMIT');hide()};component.cancel=function(hide){alert('CANCEL');hide()}}var common={};common.form='user';
/*1102692164*/
/*21679247*/
/*
 * ===========================================================================================
 * COMPONENT: j-HighlightSyntax/example
 * ===========================================================================================
 */

var exampleHTML="This is <b>HTML</b>";var exampleJS="var a = 0;";var exampleCSS="body { color: red; }";
/*21679247*/
/*1925984912*/
/*
 * ===========================================================================================
 * COMPONENT: j-Importer/example
 * ===========================================================================================
 */

var myvalue='';setTimeout(function(){SET('myvalue','d3')},3000);setTimeout(function(){SET('myvalue',null)},5000);setTimeout(function(){SET('myvalue','d3')},8000);
/*1925984912*/
/*20322732*/
/*
 * ===========================================================================================
 * COMPONENT: j-Info/example
 * ===========================================================================================
 */

$(document).on('mouseenter mouseleave','a',function(e){var info=FIND('info');e.type==='mouseenter'?info.show('left',this,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nobis omnis quae commodi recusandae dolore saepe blanditiis, eligendi accusamus optio!'):info.hide()});
/*20322732*/
/*-2012862332*/
/*
 * ===========================================================================================
 * COMPONENT: j-Intro/example
 * ===========================================================================================
 */

var showme=false;SET('showme',true,2000);
/*-2012862332*/
/*-1606357552*/
/*
 * ===========================================================================================
 * COMPONENT: j-KeyValue/example
 * ===========================================================================================
 */

var keyvalue={};
/*-1606357552*/
/*-1674287683*/
/*
 * ===========================================================================================
 * COMPONENT: j-LazyContent/example
 * ===========================================================================================
 */

function method_init(){this.element.html('INIT');this.element.css('background-color','green')}function method_redraw(){this.element.html('REDRAW');this.element.css('background-color','blue')}function method_hide(){this.element.html('HIDDEN');this.element.css('background-color','red')}
/*-1674287683*/
/*189207032*/
/*
 * ===========================================================================================
 * COMPONENT: j-LazyLoad/example
 * ===========================================================================================
 */

function lazyload(el){var img=el.find('img');img.attr('src',img.attr('data-src'))}
/*189207032*/
/*2125649940*/
/*
 * ===========================================================================================
 * COMPONENT: j-Loading/example
 * ===========================================================================================
 */

var is=false;setInterval(function(){is=!is;var component=FIND('loading');if(is)component.show();else component.hide(1000)},5000);
/*2125649940*/
/*377832116*/
/*
 * ===========================================================================================
 * COMPONENT: j-Map/example
 * ===========================================================================================
 */

var mygps='48.727903,19.157763';
/*377832116*/
/*-1059914785*/
/*
 * ===========================================================================================
 * COMPONENT: j-Message/example
 * ===========================================================================================
 */

setTimeout(function(){FIND('message').success('Success message')},4000);
/*-1059914785*/
/*97184709*/
/*
 * ===========================================================================================
 * COMPONENT: j-Modal/example
 * ===========================================================================================
 */

var common={};SET('common.modal','user',2000);function showmodal(){SET('common.modal','user')}
/*97184709*/
/*1449726057*/
/*
 * ===========================================================================================
 * COMPONENT: j-NativeNotifications/example
 * ===========================================================================================
 */

var allowNotifications=true;setTimeout(function(){SETTER('nativenotifications','append','Hello!','jComponent is a great solution for everyone.',null,'https://messenger.totaljs.com/icon.png')},3000);
/*1449726057*/
/*-2070448627*/
/*
 * ===========================================================================================
 * COMPONENT: j-NoSQLcounter/example
 * ===========================================================================================
 */

var stats=[{"id":"201702","year":2017,"month":2,"value":1690},{"id":"201703","year":2017,"month":3,"value":1199},{"id":"201704","year":2017,"month":4,"value":393}];
/*-2070448627*/
/*-1838150144*/
/*
 * ===========================================================================================
 * COMPONENT: j-Notifications/example
 * ===========================================================================================
 */

FIND('notifications',function(component){component.append('fa-lightbulb-o','This is a new notification component.')});setTimeout(function(){FIND('notifications').append('fa-calendar','You have a meeting in the Central Park.',function(){alert('You clicked on the notification')},'red')},3000);setTimeout(function(){FIND('notifications').append('fa-link','Please support <a href="https://github.com/petersirka/jComponent" target="_blank">jComponent on GitHub</a>.')},6000);setTimeout(function(){FIND('notifications').append('fa-facebook-square','Total.js is node.js web application framework, please support it on social networks.')},10000);
/*-1838150144*/
/*-787372403*/
/*
 * ===========================================================================================
 * COMPONENT: j-Page/example
 * ===========================================================================================
 */

var currentpage='';
/*-787372403*/
/*177404504*/
/*
 * ===========================================================================================
 * COMPONENT: j-Pagination/example
 * ===========================================================================================
 */

var datasource={};datasource.page=3;datasource.pages=23;datasource.count=2320;FIND('pagination',function(component){component.onPage=function(page,elPage){console.log(page,elPage);SET('datasource.page',page)}});
/*177404504*/
/*310178487*/
/*
 * ===========================================================================================
 * COMPONENT: j-PictureUpload/example
 * ===========================================================================================
 */

var picture='';
/*310178487*/
/*-1594538446*/
/*
 * ===========================================================================================
 * COMPONENT: j-PriceRange/example
 * ===========================================================================================
 */

var filter={price:'200-800'};
/*-1594538446*/
/*1073643179*/
/*
 * ===========================================================================================
 * COMPONENT: j-Progress/example
 * ===========================================================================================
 */

var percentage=30;setInterval(function(){SET('percentage1',(Math.random()*100)>>0);SET('percentage2',(Math.random()*100)>>0);SET('percentage3',(Math.random()*100)>>0)},800);
/*1073643179*/
/*575100919*/
/*
 * ===========================================================================================
 * COMPONENT: j-QR Code Generator/example
 * ===========================================================================================
 */

var mytext='https://www.componentator.com';
/*575100919*/
/*-1083467179*/
/*
 * ===========================================================================================
 * COMPONENT: j-Range/example
 * ===========================================================================================
 */

var myrange=30;
/*-1083467179*/
/*-1104711418*/
/*
 * ===========================================================================================
 * COMPONENT: j-Repeater/example
 * ===========================================================================================
 */

var datasource=[];datasource.push({name:'Row 1',amount:1000,created:new Date()});datasource.push({name:'Row 2',amount:10000,created:new Date()});datasource.push({name:'Row 3',amount:100000,created:new Date()});
/*-1104711418*/
/*-1973398033*/
/*
 * ===========================================================================================
 * COMPONENT: j-RepeaterGroup/example
 * ===========================================================================================
 */

var datasource=[];datasource.push({name:'Row 1',category:'Jeans',amount:100,created:new Date()});datasource.push({name:'Row 2',category:'Shoes',amount:1000,created:new Date()});datasource.push({name:'Row 3',category:'Shoes',amount:10000,created:new Date()});datasource.push({name:'Row 4',category:'Jeans',amount:100000,created:new Date()});
/*-1973398033*/
/*-1259729012*/
/*
 * ===========================================================================================
 * COMPONENT: j-Resource/example
 * ===========================================================================================
 */

setTimeout(function(){console.log(RESOURCE('yes'));console.log(RESOURCE('no'));console.log(RESOURCE('message'));console.log(RESOURCE('first'));console.log(RESOURCE('second'));console.log(RESOURCE('a b c'));console.log(RESOURCE('notfound','NOT FOUND'))},2000);
/*-1259729012*/
/*912843750*/
/*
 * ===========================================================================================
 * COMPONENT: j-Search/example
 * ===========================================================================================
 */

var search='';
/*912843750*/
/*745211847*/
/*
 * ===========================================================================================
 * COMPONENT: j-SelectBox/example
 * ===========================================================================================
 */

var items=[2,5];
/*745211847*/
/*881211269*/
/*
 * ===========================================================================================
 * COMPONENT: j-Shortcuts/example
 * ===========================================================================================
 */

var keyvalue={};SETTER(true,'shortcuts','register','ENTER',()=>alert('ENTER'));
/*881211269*/
/*218633197*/
/*
 * ===========================================================================================
 * COMPONENT: j-Tab/example
 * ===========================================================================================
 */

var tab='tab1';
/*218633197*/
/*-640680520*/
/*
 * ===========================================================================================
 * COMPONENT: j-Tagger/example
 * ===========================================================================================
 */

var model={};model.user={};model.user.name='Peter Širka';model.user.age=31;model.amount=1033.45;model.beers=3;model.visible=false;
/*-640680520*/
/*735046648*/
/*
 * ===========================================================================================
 * COMPONENT: j-Template/example
 * ===========================================================================================
 */

var somemodel={name:'jComponent',version:'v2.1.3'};
/*735046648*/
/*666776249*/
/*
 * ===========================================================================================
 * COMPONENT: j-TextBox Tags/example
 * ===========================================================================================
 */

var tags=['HTML','jComponent'];
/*666776249*/
/*-2020469064*/
/*
 * ===========================================================================================
 * COMPONENT: j-Textarea/example
 * ===========================================================================================
 */

var form={};form.body='Hello';form.note='';
/*-2020469064*/
/*509092438*/
/*
 * ===========================================================================================
 * COMPONENT: j-Textbox/example
 * ===========================================================================================
 */

var form={};form.email='@';form.age=30;
/*509092438*/
/*714224532*/
/*
 * ===========================================================================================
 * COMPONENT: j-TextboxList/example
 * ===========================================================================================
 */

var redirects=['www.totaljs.com'];
/*714224532*/
/*1829900251*/
/*
 * ===========================================================================================
 * COMPONENT: j-Tooltip/example
 * ===========================================================================================
 */

$(document).on('mouseenter mouseleave','.tooltip',function(e){if(e.type==='mouseenter'){var el= $(this);SETTER('tooltip','show',el,el.attr('data-title'))}else SETTER('tooltip','hide')});
/*1829900251*/
/*123924296*/
/*
 * ===========================================================================================
 * COMPONENT: j-TouchMove/example
 * ===========================================================================================
 */

function goPrev(){alert('Prev')}function goNext(){alert('Next')}function goUp(){alert('Up')}function goDown(){alert('Down')}
/*123924296*/
/*2120503626*/
/*
 * ===========================================================================================
 * COMPONENT: j-Visible/example
 * ===========================================================================================
 */

var isVisible=false;setInterval(function(){SET('isVisible',!isVisible)},1000);
/*2120503626*/
/*-1292830593*/
/*
 * ===========================================================================================
 * COMPONENT: j-WebSocket/example
 * ===========================================================================================
 */

var message=null;
/*-1292830593*/
/*-1207272996*/
/*
 * ===========================================================================================
 * COMPONENT: j-iFramePreview/example
 * ===========================================================================================
 */

STYLE('body{background-color:red}');SET('url','https://www.totaljs.com',2000);
/*-1207272996*/
/*-1564802689*/
/*
 * ===========================================================================================
 * COMPONENT: j-reCAPTCHA/example
 * ===========================================================================================
 */

var form={};
/*-1564802689*/