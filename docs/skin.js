// Garden Gnome Software - Skin
// Pano2VR 6.1.2/17873
// Filename: Personal Pe�uelas 2.ggsk
// Generated 2023-04-26T18:43:51

function pano2vrSkin(player,base) {
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, true);
	player.addVariable('category_follow', 2, true);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('vis_map', 2, false);
	player.addVariable('vis_map_close_desktop', 2, false);
	player.addVariable('vis_map_close_mobile', 2, false);
	player.addVariable('vis_auto_hide_controller', 2, true);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_hotspot_preview_1', 2, true);
	player.addVariable('opt_3d_preview_1', 2, true);
	player.addVariable('opt_hotspot_preview_2', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('opt_hotspot_preview_3', 2, true);
	player.addVariable('vis_info_popup_1', 2, false);
	player.addVariable('vis_auto_hide_controller_1', 2, true);
	player.addVariable('menu_open', 2, true);
	player.addVariable('menu_touch', 2, true);
	player.addVariable('menu_cloner', 1, 0);
	player.addVariable('category_var', 0, "");
	player.addVariable('open_tag_1', 0, "");
	player.addVariable('close_nodes_1', 2, false);
	player.addVariable('category_visible_1', 2, true);
	player.addVariable('category_follow_1', 2, true);
	player.addVariable('vis_info_popup_2', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._show_controller_button=document.createElement('div');
		els=me._show_controller_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMjQuNyAxMjQuNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMC'+
			'AwIDEyNC43IDEyNC43OyI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTEyLDQyLjFjLTIuMiwwLTQsMS44LTQsNHYzMi43YzAsMi4yLDEuOCw0LDQsNGgxMDAuOGMyLjIsMCw0LTEuOCw0LTRWNDZjMC0yLjItMS44LTQtNC00SDEyeiBNMzAuNCw3My43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuMywwLTExLjQtNS4xLTExLjQtMTEuNEMxOSw1Ni4xLDI0LjEsNTEsMzAuNCw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDNDEuOCw2OC42LDM2LjcsNzMuNywzMC40LDczLjd6IE02Mi40LDczLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi4zLDAtMTEuNC01LjEtMTEuNC0xMS40QzUx'+
			'LDU2LjEsNTYuMSw1MSw2Mi40LDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEM3My43LDY4LjYsNjguNiw3My43LDYyLjQsNzMuN3ogTTk0LjMsNzMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qzg4LDczLjcsODMsNjguNiw4Myw2Mi40QzgzLDU2LjEsODgsNTEsOTQuMyw1MWM2LjMsMCwxMS40LDUuMSwxMS40LDExLjRDMTA1LjcsNjguNiwxMDAuNiw3My43LDk0LjMsNzMuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPGNpcmNsZSBjeD0iMzAuNCIgY3k9IjYyLjQiIHI9IjExLjQiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iNj'+
			'IuNCIgY3k9IjYyLjQiIHI9IjExLjQiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iOTQuMyIgY3k9IjYyLjQiIHI9IjExLjQiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._show_controller_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_controller_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMjQuNyAxMjQuNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMC'+
			'AwIDEyNC43IDEyNC43OyI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTTYuNCwzOS44Yy0yLjQsMC00LjQsMi00LjQsNC40djM2LjNjMCwyLjQsMiw0LjQsNC40LDQuNGgxMTJjMi40LDAsNC40LTIsNC40LTQuNFY0NC4yYzAtMi40LTItNC40LTQuNC00LjRINi40eiBNMjYuOSw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkMzOS41LDY5LjMsMzMuOCw3NSwyNi45LDc1eiBNNjIuNCw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42'+
			'YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkM3NSw2OS4zLDY5LjMsNzUsNjIuNCw3NXogTTk3LjksNzUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNywwLTEyLjYtNS43LTEyLjYtMTIuNmMwLTcsNS43LTEyLjYsMTIuNi0xMi42YzcsMCwxMi42LDUuNywxMi42LDEyLjZDMTEwLjUsNjkuMywxMDQuOCw3NSw5Ny45LDc1eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxnPgogICA8Y2lyY2xlIGN4PSIyNi45IiBjbGFzcz0ic3QwIiBjeT0iNjIuNCIgcj0iMTIuNiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8Y2lyY2xlIGN4PSI2Mi'+
			'40IiBjbGFzcz0ic3QwIiBjeT0iNjIuNCIgcj0iMTIuNiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8Y2lyY2xlIGN4PSI5Ny45IiBjbGFzcz0ic3QwIiBjeT0iNjIuNCIgcj0iMTIuNiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._show_controller_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="show_controller_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_controller_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_controller_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_auto_hide_controller') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._show_controller_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._show_controller_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._show_controller_button.style[domTransition]='opacity 500ms ease 0ms';
				if (me._show_controller_button.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._show_controller_button.style.opacity == 0.0) { me._show_controller_button.style.visibility="hidden"; } }, 505);
					me._show_controller_button.style.opacity=0;
				}
				else {
					me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
					me._show_controller_button.style.opacity=1;
				}
			}
		}
		me._show_controller_button.onclick=function (e) {
			me._hide_controller_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_controller_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._show_controller_button.onmouseover=function (e) {
			me._show_controller_button__img.style.visibility='hidden';
			me._show_controller_button__imgo.style.visibility='inherit';
		}
		me._show_controller_button.onmouseout=function (e) {
			me._show_controller_button__img.style.visibility='inherit';
			me._show_controller_button__imgo.style.visibility='hidden';
		}
		me._show_controller_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._hide_controller_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=2000;
		el.ggId="hide_controller_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_controller_timer.ggIsActive=function() {
			return (me._hide_controller_timer.ggTimestamp + me._hide_controller_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_controller_timer.ggActivate=function () {
			player.setVariableValue('vis_auto_hide_controller', true);
		}
		me._hide_controller_timer.ggDeactivate=function () {
			player.setVariableValue('vis_auto_hide_controller', false);
		}
		me._hide_controller_timer.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button.appendChild(me._hide_controller_timer);
		me.divSkin.appendChild(me._show_controller_button);
		el=me._hide_controller_container=document.createElement('div');
		el.ggId="hide_controller_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_controller_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_controller_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_auto_hide_controller') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hide_controller_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hide_controller_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hide_controller_container.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hide_controller_container.ggCurrentLogicStateAlpha == 0) {
					me._hide_controller_container.style.visibility=me._hide_controller_container.ggVisible?'inherit':'hidden';
					me._hide_controller_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hide_controller_container.style.opacity == 0.0) { me._hide_controller_container.style.visibility="hidden"; } }, 505);
					me._hide_controller_container.style.opacity=0;
				}
			}
		}
		me._hide_controller_container.onmouseover=function (e) {
			me.elementMouseOver['hide_controller_container']=true;
		}
		me._hide_controller_container.onmouseout=function (e) {
			me.elementMouseOver['hide_controller_container']=false;
		}
		me._hide_controller_container.ontouchend=function (e) {
			me.elementMouseOver['hide_controller_container']=false;
		}
		me._hide_controller_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30%;';
		hs+='opacity : 0.7;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
		}
		me._map_1.ggNodeChange=function () {
			if (me._map_1.ggLastActivMarker) {
				if (me._map_1.ggLastActivMarker._div.ggDeactivate) me._map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_1.ggLastActivMarker=marker;
			}
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggCenterNode();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me._hide_controller_container.appendChild(me._map_1);
		me.divSkin.appendChild(me._hide_controller_container);
		el=me._plano=document.createElement('div');
		el.ggId="Plano";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 48px;';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._plano.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._plano.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._map_container=document.createElement('div');
		el.ggId="map_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(80%  - 100px);';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : calc(80%  - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_container.style[domTransition]='';
				if (me._map_container.ggCurrentLogicStateVisible == 0) {
					me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
					me._map_container.ggVisible=true;
				}
				else {
					me._map_container.style.visibility="hidden";
					me._map_container.ggVisible=false;
				}
			}
		}
		me._map_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.79999;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style[domTransition]='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					if (me._map.ggMapNotLoaded) {
						me._map.ggInitMap(false);
						me._map.ggInitMapMarkers(true);
					}
					me._map.ggVisible=true;
				}
				else {
					me._map.style.visibility="hidden";
					me._map.ggClearMap();
					me._map.ggVisible=false;
				}
			}
		}
		me._map.ggCurrentLogicStateVisible = -1;
		me._map.ggUpdateConditionTimer=function () {
			me._map.ggRadar.update();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._map.ggNodeChange=function () {
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (!me._map.ggMapNotLoaded) {
				me._map.ggCenterNode();
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			me._map.ggLastNodeId = id;
		}
		me._map_container.appendChild(me._map);
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4x'+
			'LTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40'+
			'LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._map_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0w'+
			'LjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4x'+
			'LTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="map_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -40px;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close.onclick=function (e) {
			player.setVariableValue('vis_map', false);
		}
		me._map_close.onmouseover=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
		}
		me._map_close.onmouseout=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._map_close);
		me._plano.appendChild(me._map_container);
		me.divSkin.appendChild(me._plano);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(68,68,68,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		me.divSkin.appendChild(me._dropdown_menu_title_background);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 65px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.501961);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible_1') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
				else {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 134px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 154px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = t[0].clientX;
			me._category_scroller.ggDragLastY = t[0].clientY;
			me._category_scroller__content.ontouchend = function() {
				me._category_scroller__content.ontouchend = null;
				me._category_scroller__content.ontouchmove = null;
			}
			me._category_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._category_scroller.ggDragLastX;
				var diffY = t[0].clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragLastX = t[0].clientX;
				me._category_scroller.ggDragLastY = t[0].clientY;
				me._category_scroller.ggScrollByX(-diffX);
				me._category_scroller.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._category_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._category_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._category_scroller.ggScrollPosX = 0;
		me._category_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragLastX = e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragLastX = t[0].clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._category_scroller.ggScrollWidth;
			if (e.offsetX < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._category_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._category_scroller.ggScrollByXSmooth(20 * wheelDelta);
		});
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 432px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 432px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragLastY = t[0].clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(90%  -  50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > offsetWidthWithScale) {
					me._category_scroller__horScrollBg.style.visibility = 'inherit';
					me._category_scroller__horScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggHorScrollVisible = true;
				} else {
					me._category_scroller__horScrollBg.style.visibility = 'hidden';
					me._category_scroller__horScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggHorScrollVisible = false;
				}
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
					if (!me._category_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._category_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._category_scroller__horScrollBg.style.visibility = 'inherit';
						me._category_scroller__horScrollFg.style.visibility = 'inherit';
						me._category_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggHorScrollVisible) {
					me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight - 15;
					if (me._category_scroller.ggVertScrollVisible) {
						me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth - 15;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width - me._category_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width;
					}
					me._category_scroller__horScrollBg.style.width = me._category_scroller.ggAvailableWidth + 'px';
					me._category_scroller.ggHPercentVisible = me._category_scroller.ggAvailableWidthWithScale / contentWidth;
					if (me._category_scroller.ggHPercentVisible > 1.0) me._category_scroller.ggHPercentVisible = 1.0;
					me._category_scroller.ggScrollWidth = Math.round(me._category_scroller__horScrollBg.offsetWidth * me._category_scroller.ggHPercentVisible);
					me._category_scroller__horScrollFg.style.width = me._category_scroller.ggScrollWidth + 'px';
					me._category_scroller.ggScrollPosX = me._category_scroller.ggScrollPosXPercent * me._category_scroller.ggAvailableWidth;
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
					me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight;
					me._category_scroller.ggScrollPosX = 0;
					me._category_scroller.ggScrollPosXPercent = 0.0;
					me._category_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth - 15;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight - 15;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = me._category_scroller.ggAvailableHeightWithScale / contentHeight;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					me.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 150;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._category_cloner.callChildLogicBlocks_changenode = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_changenode();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_mouseover();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_active = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_active();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_changevisitednodes();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_varchanged_open_tag = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
				}
			}
		}
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._category_cloner.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._category_cloner.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._category_cloner.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me._category_cloner.childNodes[currElement].clientHeight < me._category_cloner.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me._category_cloner.childNodes[currElement].style.overflow = 'hidden';
						me._category_cloner.childNodes[currElement].style['top'] = currYPos + 'px';
						me._category_cloner.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._category_cloner.childNodes[currElement].scrollHeight);
						me._category_cloner.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me._category_cloner.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._category_cloner.ggHeight) + 'px';
				parameter.left=(column * me._category_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.callChildLogicBlocks_changenode();
			me._category_cloner.callChildLogicBlocks_mouseover();
			me._category_cloner.callChildLogicBlocks_mouseover();
			me._category_cloner.callChildLogicBlocks_active();
			me._category_cloner.callChildLogicBlocks_changevisitednodes();
			me._category_cloner.callChildLogicBlocks_varchanged_open_tag();
			me._category_cloner.ggAutoPosition(true);
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"EXTERIORES",title:"\xc1reas Comunes"},
			{tag:"DEPTOA",title:"Depto. A"},
			{tag:"DEPTOB",title:"Depto. B"},
			{tag:"DEPTOC",title:"Depto. C"},
			{tag:"DEPTOD",title:"Depto. D"},
			{tag:"DEPTOA2",title:"Depto. A2"},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
				me._category_cloner.ggUpdate();
		}
		me._category_cloner.ggNodeChange=function () {
			me._category_cloner.ggUpdateConditionNodeChange();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._menu_background.appendChild(me._category_scroller);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._menu_background.appendChild(me._image_4);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgZmlsbC1vcGFjaXR5PSIxIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3'+
			'VuZDpuZXcgMCAwIDMyIDMyOyIgZmlsbD0iI2ZmZmZmZiI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('category_visible_1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='130px';
					me._menu_open.style.top='5px';
				}
				else {
					me._menu_open.style.left='5px';
					me._menu_open.style.top='5px';
				}
			}
		}
		me._menu_open.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['menu_open'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('category_visible_1') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStateAlpha == 0) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
				else if (me._menu_open.ggCurrentLogicStateAlpha == 1) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=0.6;
				}
				else {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
			}
		}
		me._menu_open.onclick=function (e) {
			player.setVariableValue('category_visible_1', !player.getVariableValue('category_visible_1'));
		}
		me._menu_open.onmouseover=function (e) {
			me.elementMouseOver['menu_open']=true;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmouseout=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ontouchend=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 480px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 640px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.onmouseover=function (e) {
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ontouchend=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._controles=document.createElement('div');
		el.ggId="Controles";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 17px;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 322px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controles.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controles.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_toggle_map=document.createElement('div');
		el.ggId="button_toggle_map";
		el.ggDx=-145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_toggle_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_toggle_map.onclick=function (e) {
			player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
		}
		me._button_toggle_map.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_open_map=document.createElement('div');
		els=me._button_open_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjhjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMVMtMjA2LDQ1My0xNzUsNDUzYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC44LTE3NSwzNDAuOHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTIwNi4yLDM3MS40YzAtMC44LDAuNy0xLjcsMS41LTJsNC0xLjJsMTMuMS00djI0LjJsLTE4LjUsNS43VjM3MS40eiBNLTIwNC43LDQyMi43Yy0wLjgsMC4yLTEuNS0wLjItMS41LTEuMXYtMjMuN2wxOC41LTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMCwwLDI1LjIsMCwyNS4zTC0yMDQuNyw0MjIuN3ogTS0xNjUuNyw0MjguOWwtMS4z'+
			'LTAuOGMwLDAtMTcuMi0xMC42LTE3LjMtMTAuNmMwLTAuMSwwLjEtMjQuOCwwLjEtMjQuOGwxOC42LDExLjVMLTE2NS43LDQyOC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE2NS43LDQyOC45eiBNLTE2NS43LDQwMC4xbC0xOC42LTExLjV2LTIzLjdjMCwwLDE4LjUsMTEuNCwxOC42LDExLjRDLTE2NS43LDM3Ni40LTE2NS43LDQwMC4xLTE2NS43LDQwMC4xeiBNLTE0My44LDQyMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjgtMC43LDEuNy0xLjUsMmwtMTcsNS4zdi0yNS4zbDE4LjUtNS45Qy0xNDMuOCwzOTguNC0xNDMuOCw0MjIuNC0xNDMuOCw0MjIuNHogTS0xNDMuOCwzOTQuN2wtMTguNS'+
			'w1Ljl2LTI0LjJsMTEuNi0zLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2w1LjQtMS43YzAuOC0wLjIsMS41LDAuMiwxLjUsMS4xVjM5NC43eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE4Ny43LDM5Mi4xbC0xOC41LDUuN3YyMy43YzAsMC44LDAuNywxLjMsMS41LDEuMWwxNy4xLTUuM0MtMTg3LjcsNDE3LjMtMTg3LjcsMzkyLjEtMTg3LjcsMzkyLjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTg3LjcsMzg4LjR2LTI0LjJsLTEzLjEsNGwtNCwxLjJjLTAuOCwwLjItMS41LDEuMS0xLjUsMnYyMi43TC0xODcuNywz'+
			'ODguNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xODQuMywzOTIuNmMwLDAsMCwyNC43LTAuMSwyNC44YzAuMSwwLjEsMTcuMywxMC42LDE3LjMsMTAuNmwxLjMsMC44di0yNC44TC0xODQuMywzOTIuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNDUuMywzNzEuMWwtNS40LDEuN2wtMTEuNiwzLjZ2MjQuMmwxOC41LTUuOXYtMjIuNEMtMTQzLjgsMzcxLjQtMTQ0LjUsMzcwLjktMTQ1LjMsMzcxLjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTg0LjMsMzY0Ljl2MjMuN2wxOC42LDExLjV2LTIzLjdDLTE2NS43LDM3Ni4zLTE4NC4zLDM2NC45LT'+
			'E4NC4zLDM2NC45eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE2Mi4zLDQwNC4zdjI1LjNsMTctNS4zYzAuOC0wLjIsMS41LTEuMSwxLjUtMnYtMjRMLTE2Mi4zLDQwNC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_open_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_open_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjVjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjUtMTc1LDMzNC41eiBNLTIwOS42LDM2OC42YzAtMC45LDAuNy0xLjksMS42LTIuMmw0LjQtMS40bDE0LjUtNC41djI2LjlsLTIwLjUsNi40VjM2OC42eiBNLTIwOCw0MjUuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjksMC4zLTEuNi0wLjMtMS42LTEuMnYtMjYuNGwyMC41LTYuNGMwLDAsMCwyOCwwLjEsMjguMUwtMjA4LDQyNS41eiBNLTE2NC43'+
			'LDQzMi40bC0xLjQtMC45YzAsMC0xOS4xLTExLjgtMTkuMi0xMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjEsMC4xLTI3LjYsMC4xLTI3LjZsMjAuNiwxMi43TC0xNjQuNyw0MzIuNEwtMTY0LjcsNDMyLjR6IE0tMTY0LjcsNDAwLjRsLTIwLjYtMTIuN3YtMjYuM2MwLDAsMjAuNiwxMi43LDIwLjYsMTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNjQuNywzNzQuMS0xNjQuNyw0MDAuNC0xNjQuNyw0MDAuNHogTS0xNDAuNCw0MjUuMmMwLDAuOS0wLjcsMS45LTEuNiwyLjJsLTE4LjksNS44di0yOC4xbDIwLjUtNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0MC4zLDM5OC42LTE0MC4zLDQyNS'+
			'4yLTE0MC40LDQyNS4yeiBNLTE0MC40LDM5NC40bC0yMC41LDYuNnYtMjYuOWwxMi45LTRsNi0xLjljMC45LTAuMywxLjYsMC4zLDEuNiwxLjJWMzk0LjR6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTg5LjEsMzkxLjZsLTIwLjUsNi40djI2LjRjMCwwLjksMC43LDEuNSwxLjYsMS4ybDE5LTUuOUMtMTg5LjEsNDE5LjYtMTg5LjEsMzkxLjYtMTg5LjEsMzkxLjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTg5LjEsMzg3LjR2LTI2LjlsLTE0LjUsNC41bC00LjQsMS40Yy0wLjksMC4zLTEuNiwxLjMtMS42LDIu'+
			'MnYyNS4zTC0xODkuMSwzODcuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xODUuMywzOTIuMWMwLDAsMCwyNy41LTAuMSwyNy42YzAuMSwwLjEsMTkuMiwxMS44LDE5LjIsMTEuOGwxLjQsMC45di0yNy41TC0xODUuMywzOTIuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNDIsMzY4LjNsLTYsMS45bC0xMi45LDRWNDAxbDIwLjUtNi42di0yNC45Qy0xNDAuNCwzNjguNS0xNDEuMSwzNjgtMTQyLDM2OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE4NS4zLDM2MS40djI2LjNsMjAuNiwxMi43di0yNi40Qy0xNjQuNywzNzQuMS0xODUuMywzNj'+
			'EuNC0xODUuMywzNjEuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjAuOSw0MDUuMXYyOC4xbDE4LjktNS44YzAuOS0wLjMsMS42LTEuMywxLjYtMi4ydi0yNi43TC0xNjAuOSw0MDUuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_open_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_open_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_open_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_open_map.onmouseover=function (e) {
			me._button_open_map__img.style.visibility='hidden';
			me._button_open_map__imgo.style.visibility='inherit';
		}
		me._button_open_map.onmouseout=function (e) {
			me._button_open_map__img.style.visibility='inherit';
			me._button_open_map__imgo.style.visibility='hidden';
		}
		me._button_open_map.ggUpdatePosition=function (useTransition) {
		}
		me._button_toggle_map.appendChild(me._button_open_map);
		el=me._button_close_map=document.createElement('div');
		els=me._button_close_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuMCI+CiAgPHBhdGggb3BhY2l0eT0iMS4wIiBkPSJNLTEzOS4zLDM1Ny44YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNDLTE0MC4xLDM1OC0xMzkuNywzNTcuOC0xMzkuMywzNTcuOCIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiLz4KPC9zdmc+'+
			'Cg==';
		me._button_close_map__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_close_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_close_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_close_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_close_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_close_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_close_map.style[domTransition]='';
				if (me._button_close_map.ggCurrentLogicStateVisible == 0) {
					me._button_close_map.style.visibility=(Number(me._button_close_map.style.opacity)>0||!me._button_close_map.style.opacity)?'inherit':'hidden';
					me._button_close_map.ggVisible=true;
				}
				else {
					me._button_close_map.style.visibility="hidden";
					me._button_close_map.ggVisible=false;
				}
			}
		}
		me._button_close_map.ggUpdatePosition=function (useTransition) {
		}
		me._button_toggle_map.appendChild(me._button_close_map);
		me._controles.appendChild(me._button_toggle_map);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBkPSJNODcuNSw0NC44SDQyLjVjLTYuNywwLTEwLjQsMS4yLTEyLjQsNGMtMi4zLDMuMi0yLjQsOC40LTIuNCwxNi41YzAsMTEuMSwyLDE2LjYsMy45LDE4LjFjMi44LDIuMSwzLjUsMi41LDgsMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LDAsNS44LTAuOCw4LjEtMS43YzMuMi0xLjMsNy4yLTMsMTcuNC0zYzEwLjQsMCwxNC4zLDEuNywxNy41LDNjMi4yLDAuOSw0LDEuNyw3LjksMS43YzQuNSwwLDUuMi0wLjMsOC0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOS0xLjQsMy45LTYuOSwzLjktMTguMWMw'+
			'LTguMi0wLjItMTMuNC0yLjQtMTYuNUM5Ny45LDQ2LDk0LjIsNDQuOCw4Ny41LDQ0Ljh6IE00Ni45LDczLjNjLTUuMywwLTkuNi00LjMtOS42LTkuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC01LjMsNC4zLTkuNiw5LjYtOS42YzUuMywwLDkuNiw0LjMsOS42LDkuNlM1Mi4xLDczLjMsNDYuOSw3My4zeiBNODAuOCw3My4zYy01LjMsMC05LjYtNC4zLTkuNi05LjZjMC01LjMsNC4zLTkuNiw5LjYtOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M1LjMsMCw5LjYsNC4zLDkuNiw5LjZTODYuMSw3My4zLDgwLjgsNzMuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTTY1LDlDMz'+
			'QsOSw4LjksMzQuMSw4LjksNjUuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMUMxMjEuMSwzNC4xLDk2LDksNjUsOXogTTU2LjksMjUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQsMC4yLTAuOCwwLjYtMS4yYzAuNC0wLjQsMC44LTAuNiwxLjQtMC42aDEyLjNjMS40LDAsMiwwLjYsMiwxLjh2MTJINTYuOVYyNS43eiBNMTAxLjgsODcuN2MtMy45LDMtNS44LDMuNi0xMS4zLDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUsMC03LjYtMS4xLTEwLTIuMWMtMi45LTEuMi02LjEtMi42LTE1LjQtMi42Yy05LjEsMC0xMi40LDEuNC0xNS4zLDIu'+
			'NmMtMi41LDEtNS4xLDIuMS0xMC4yLDIuMWMtNS42LDAtNy41LTAuNi0xMS4zLTMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuOS0zLjgtNi0xNC4yLTYtMjIuM2MwLTkuMywwLjItMTUuMiwzLjQtMTkuN2MzLjktNS41LDExLTYuMiwxNi44LTYuMmg0NS4xYzUuNywwLDEyLjgsMC43LDE2LjgsNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjIsNC41LDMuNSwxMC40LDMuNSwxOS43QzEwNy43LDczLjQsMTA2LjcsODMuOSwxMDEuOCw4Ny43eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTEwNC4zLDQ1LjZjLTMuOS01LjUtMTEtNi4yLTE2LjgtNi'+
			'4ySDQyLjVjLTUuNywwLTEyLjgsMC43LTE2LjgsNi4yYy0zLjIsNC41LTMuNCwxMC40LTMuNCwxOS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDguMSwxLDE4LjUsNiwyMi4zYzMuOSwzLDUuOCwzLjYsMTEuMywzLjZjNS4xLDAsNy42LTEuMSwxMC4yLTIuMWMyLjktMS4yLDYuMi0yLjYsMTUuMy0yLjZjOS4zLDAsMTIuNSwxLjQsMTUuNCwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNSwxLDUsMi4xLDEwLDIuMWM1LjYsMCw3LjUtMC42LDExLjMtMy42YzQuOS0zLjgsNi0xNC4yLDYtMjIuM0MxMDcuNyw1Ni4xLDEwNy41LDUwLjEsMTA0LjMsNDUuNnogTTk4LjUsODMuNCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuOCwyLjEtMy41LDIuNS04LDIuNWMtMy45LDAtNS43LTAuNy03LjktMS43Yy0zLjItMS4zLTcuMS0zLTE3LjUtM2MtMTAuMSwwLTE0LjEsMS43LTE3LjQsM2MtMi4zLDEtNC4xLDEuNy04LjEsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC41LDAtNS4yLTAuMy04LTIuNWMtMS45LTEuNC0zLjktNi45LTMuOS0xOC4xYzAtOC4yLDAuMi0xMy40LDIuNC0xNi41YzItMi44LDUuNy00LDEyLjQtNGg0NS4xYzYuNywwLDEwLjQsMS4yLDEyLjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi4zLDMuMiwyLjQsOC40LDIuNCwxNi41QzEwMi4zLDc2Lj'+
			'QsMTAwLjMsODEuOSw5OC41LDgzLjR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxjaXJjbGUgY3g9IjQ2LjkiIGN5PSI2My44IiByPSI5LjYiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iODAuOCIgY3k9IjYzLjgiIHI9IjkuNiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNNzMuMSwyNS43YzAtMS4yLTAuNi0xLjgtMi0xLjhINTguOWMtMC42LDAtMSwwLjItMS40LDAuNmMtMC40LDAuNC0wLjYsMC44LTAuNiwxLjJ2MTJoMTYuMkw3My4xLDI1LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDczLjEsMjUuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3Zn'+
			'Pgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgaGVpZ2h0PSIxMzBweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHdpZHRoPSIxMzBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTMwIDEzMCIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIj4KIDxnIGlkPSJMYXll'+
			'cl8xIi8+CiA8ZyBpZD0iTGF5ZXJfMiIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBkPSJNOTAuMDI4LDQyLjU3MUgzOS45NzFjLTcuNDM1LDAtMTEuNTQ3LDEuMzE2LTEzLjc1Myw0LjRjLTIuNTI4LDMuNTM0LTIuNzExLDkuMzAyLTIuNzExLDE4LjM4MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwxMi4zNTUsMi4yMjQsMTguNDY5LDQuMzA1LDIwLjA3YzMuMDk3LDIuMzg0LDMuODc0LDIuNzI3LDguOTE3LDIuNzI3YzQuNDE2LDAsNi40MzEtMC44MzcsOC45ODEtMS44OTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNTczLTEuNDg2LDguMDIxLTMuMzM1LDE5LjI5LT'+
			'MuMzM1YzExLjUyOCwwLDE1LjkzLDEuODYzLDE5LjQ2NiwzLjM2MWMyLjQ3MiwxLjA0Niw0LjQyMywxLjg3Myw4LjgwMiwxLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS4wNDQsMCw1LjgyMS0wLjM0Myw4LjkxOS0yLjcyN2MyLjA4Mi0xLjYwMiw0LjMwNy03LjcxNiw0LjMwNy0yMC4wN2MwLTkuMDc4LTAuMTgzLTE0Ljg0NC0yLjcxNC0xOC4zODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwMS41NzIsNDMuODg3LDk3LjQ2LDQyLjU3MSw5MC4wMjgsNDIuNTcxeiBNNDQuODQsNzQuMjQ2Yy01Ljg3MSwwLTEwLjYyNy00Ljc1Ni0xMC42MjctMTAuNjI2JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTsmI3g5O2MwLTUuODY5LDQuNzU2LTEwLjYyNiwxMC42MjctMTAuNjI2YzUuODY5LDAsMTAuNjI1LDQuNzU3LDEwLjYyNSwxMC42MjZDNTUuNDY1LDY5LjQ4OSw1MC43MDksNzQuMjQ2LDQ0Ljg0LDc0LjI0NnomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE04Mi41NTEsNzQuMjQ2Yy01Ljg3LDAtMTAuNjI2LTQuNzU2LTEwLjYyNi0xMC42MjZjMC01Ljg2OSw0Ljc1Ni0xMC42MjYsMTAuNjI2LTEwLjYyNmM1Ljg2OSwwLDEwLjYyNiw0Ljc1NywxMC42MjYsMTAuNjI2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5My4xNzcsNjkuNDg5LDg4LjQyLDc0LjI0Niw4Mi41NTEsNzQuMjQ2eiIgZmlsbD'+
			'0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNNjQuOTk5LDIuNzM3QzMwLjU1OCwyLjczNywyLjYzOCwzMC42NTYsMi42MzgsNjUuMWMwLDM0LjQ0MSwyNy45Miw2Mi4zNjIsNjIuMzYxLDYyLjM2MnM2Mi4zNjMtMjcuOTIsNjIuMzYzLTYyLjM2MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTI3LjM2MiwzMC42NTYsOTkuNDQsMi43MzcsNjQuOTk5LDIuNzM3eiBNNTUuOTc0LDIxLjI4NWMwLTAuNDQsMC4yMi0wLjg4LDAuNjU5LTEuMzIxYzAuNDQxLTAuNDQsMC44ODItMC42NiwxLjU0MS0wLjY2aDEzLjY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU0LDAsMi4yMDEsMC42NiwyLjIwMSwx'+
			'Ljk4djEzLjI4Nkg1NS45NzRWMjEuMjg1eiBNMTA1Ljg0Niw5MC4xNzhjLTQuMjkyLDMuMzA0LTYuNDA4LDMuOTcyLTEyLjU3OCwzLjk3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUuNTk3LDAtOC40MTUtMS4xOTMtMTEuMTQxLTIuMzQ3Qzc4LjkzMiw5MC40NSw3NS4zMSw4OC45MTcsNjUsODguOTE3Yy0xMC4wNzEsMC0xMy43NDUsMS41MjgtMTYuOTg2LDIuODc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi43ODgsMS4xNTktNS42NzEsMi4zNTgtMTEuMjg1LDIuMzU4Yy02LjE3LDAtOC4yODUtMC42NjgtMTIuNTc3LTMuOTczYy01LjQ5Mi00LjIyNy02LjY0NS0xNS44MzMtNi42ND'+
			'UtMjQuODI1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEwLjI3OCwwLjI1OC0xNi44NzksMy44MzEtMjEuODczYzQuMzgtNi4xMjQsMTIuMjU5LTYuOTA5LDE4LjYzMy02LjkwOWg1MC4wNThjNi4zNzIsMCwxNC4yNDgsMC43ODUsMTguNjMsNi45MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNTc3LDQuOTk4LDMuODM1LDExLjU5NywzLjgzNSwyMS44NzNDMTEyLjQ5Myw3NC4zNDUsMTExLjM0LDg1Ljk1MSwxMDUuODQ2LDkwLjE3OHoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMDguNjU4LDQzLjQ4Yy00LjM4Mi02LjEyNC0xMi4yNTgtNi45MDkt'+
			'MTguNjMtNi45MDlIMzkuOTcxYy02LjM3NCwwLTE0LjI1MywwLjc4NS0xOC42MzMsNi45MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjU3Myw0Ljk5NC0zLjgzMSwxMS41OTUtMy44MzEsMjEuODczYzAsOC45OTIsMS4xNTIsMjAuNTk4LDYuNjQ1LDI0LjgyNWM0LjI5MiwzLjMwNCw2LjQwNywzLjk3MywxMi41NzcsMy45NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzUuNjE0LDAsOC40OTctMS4xOTksMTEuMjg1LTIuMzU4YzMuMjQxLTEuMzQ4LDYuOTE1LTIuODc1LDE2Ljk4Ni0yLjg3NWMxMC4zMSwwLDEzLjkzMiwxLjUzMywxNy4xMjcsMi44ODYmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzIuNzI2LDEuMTU0LDUuNTQ0LDIuMzQ3LDExLjE0MSwyLjM0N2M2LjE3LDAsOC4yODYtMC42NjgsMTIuNTc4LTMuOTcyYzUuNDk0LTQuMjI4LDYuNjQ3LTE1LjgzMyw2LjY0Ny0yNC44MjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMi40OTMsNTUuMDc3LDExMi4yMzUsNDguNDc4LDEwOC42NTgsNDMuNDh6IE0xMDIuMTg3LDg1LjQyM2MtMy4wOTgsMi4zODQtMy44NzUsMi43MjctOC45MTksMi43MjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy00LjM3OSwwLTYuMzMtMC44MjYtOC44MDItMS44NzNDODAuOTMsODQuNzgsNzYuNTI4LDgyLjkxNyw2NSw4Mi45MTdjLTExLjI3LDAt'+
			'MTUuNzE3LDEuODUtMTkuMjksMy4zMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjU1MSwxLjA2MS00LjU2NSwxLjg5OC04Ljk4MSwxLjg5OGMtNS4wNDMsMC01LjgyLTAuMzQzLTguOTE3LTIuNzI3Yy0yLjA4MS0xLjYwMi00LjMwNS03LjcxNS00LjMwNS0yMC4wNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC05LjA4LDAuMTgzLTE0Ljg0OCwyLjcxMS0xOC4zODJjMi4yMDYtMy4wODQsNi4zMTgtNC40LDEzLjc1My00LjRoNTAuMDU4YzcuNDMyLDAsMTEuNTQ0LDEuMzE2LDEzLjc1MSw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNTMxLDMuNTM3LDIuNzE0LDkuMzA0LDIuNz'+
			'E0LDE4LjM4MUMxMDYuNDkzLDc3LjcwOCwxMDQuMjY5LDgzLjgyMSwxMDIuMTg3LDg1LjQyM3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iNDQuODQiIGN5PSI2My42MTkiIHI9IjEwLjYyNiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8Y2lyY2xlIGN4PSI4Mi41NTEiIGN5PSI2My42MTkiIHI9IjEwLjYyNiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNNzQuMDI1LDIxLjI4NWMwLTEuMzIxLTAuNjYxLTEuOTgtMi4yMDEtMS45OGgtMTMuNjVjLTAuNjU5LDAtMS4xLDAuMjE5LTEuNTQxLDAuNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQzOSwwLjQ0MS0wLjY1OSww'+
			'Ljg4LTAuNjU5LDEuMzIxdjEzLjI4NmgxOC4wNTJWMjEuMjg1eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggDx=145;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._controles.appendChild(me._enter_vr);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggDx=-95;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8cGF0aCBkPS'+
			'JNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiIGZpbGw9IiNGRkZGRkYiLz4KIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYjeGQ7JiN4YTsmI3g5OyBN'+
			'LTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjVjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8cGF0aCBkPS'+
			'JNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMkgtMTM5Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiA8cGF0aCBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7IE0tMTM3'+
			'LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTcwLjZjLTAuNCwwLTAuOC0wLjItMS4yLTAuNnMtMC42LTAuOC0wLjYtMS40di0xNy4yJiN4ZDsmI3hhOyYjeDk7YzAtMS40LDAuNi0yLDEuOC0yaDcwLjZjMS4yLDAsMS44LDAuNiwxLjgsMlY0MDUuNnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNDEuNiw0MDQuN2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0yMi4zdjIyLjFjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0y'+
			'Mi4xaC0yMi4zYy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjdjMS4xLDAsMS42LDAuNSwxLjYsMS44djIyLjFoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQxLjYsMzg5LjMtMTQxLjYsNDA0LjctMTQxLjYsNDA0Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjUuNSwzODcuNWgyMi4zYzEuMSwwLDEuNi'+
			'wwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTE1LjdjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjho'+
			'MTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDEuNiwwLjUsMS42LDEuOFYzODcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTM3LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTI0Ljh2MjQuNmMwLDAuNi0wLjIsMS0wLjYsMS40cy0wLjgsMC42LTEuMiwwLjZoLTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMjQuNmgtMjQu'+
			'OGMtMC40LDAtMC44LTAuMi0xLjItMC42cy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTImI3hkOyYjeGE7JiN4OTsmI3g5O2gyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYyNC42aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMkMtMTM3LjksMzg4LjQtMTM3LjksNDA1LjYtMTM3LjksNDA1LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjQuNSwzODYuNGgyNC44YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOC'+
			'wwLjYtMS4yLDAuNmgtMjQuOHYyNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjYtMC4yLDEtMC42LDEuNHMtMC44LDAuNi0xLjIsMC42aC0xNy40Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0yaDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwyVjM4Ni40eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomin);
		me._controles.appendChild(me._button_zoom);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggDx=75;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZD0iTTEwMy41LDU5LjRjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy00LjEtMS44LTkuMi0zLjItMTQuOS00LjFjMS4yLDMuNiwyLjMsNy41LDMuMSwxMS42YzEuMSw1LjYsMS42LDExLDEuNywxNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC41LDAuMS0wLjksMC4yLTEuNCwwLjNjLTEsMC4yLTIsMC40LTMuMSwwLjZjMC0wLjEsMC0wLjMsMC0wLjRjMC00LjgtMC41LTEwLjEtMS42LTE1LjVjLTAuOS00LjctMi4yLTkuMS0zLjctMTMuMSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTtjLTMuMi0wLjMtNi41LTAuNS0xMC0wLjVsLTAuOS00LjVjMC4zLDAsMC42LDAsMC45LDBjMi43LDAsNS40LDAuMSw4LDAuM2MtMi4xLTQuNC00LjQtOC4xLTYuOC0xMC42Yy0xLjctMS44LTMuNC0zLTQuOC0zLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw2LjksMzQuOWwyLjksMTQuN2MtMC45LDAtMS44LDAuMS0yLjcsMC4xbC0yLjgtMTQuMmwtNi45LTM0LjljLTAuNiwwLjMtMS4yLDAuNy0xLjgsMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMSwxLTEuOSwyLjYtMi43LDQuNWMtMS42LDMuOS0yLjUsOS41LTIuNSwxNS45Yz'+
			'AsNC44LDAuNSwxMC4xLDEuNiwxNS41bDAsMGMwLjksNC43LDIuMiw5LjEsMy43LDEzLjFjMy4yLDAuMyw2LjUsMC41LDEwLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNy43LDAsMTQuOS0wLjksMjEuMS0yLjRjNi4yLTEuNSwxMS4zLTMuNywxNC44LTYuMWMyLjMtMS42LDMuOS0zLjQsNC43LTVjMC40LTAuOSwwLjctMS44LDAuNy0yLjhjMC0wLjktMC4yLTEuOC0wLjctMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxMDUuMSw2MS4zLDEwNC40LDYwLjMsMTAzLjUsNTkuNHogTTUxLjYsNDkuNmMwLjEtMS42LDAuMi0zLjEsMC40LTQuNmMxLjktMC4yLDMuOC0wLjQsNS44LTAuNmww'+
			'LjksNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M1Ni4yLDQ5LjEsNTMuOCw0OS4zLDUxLjYsNDkuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xQzEyMS4xLDM0LDk2LDguOSw2NSw4Ljl6IE0xMDYuNyw3My44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi41LDIuNS01LjksNC42LTEwLDYuNGMtOC4yLDMuNS0xOS40LDUuNi0zMS42LDUuNmMtMi43LDAtNS40LTAuMS04LTAuM2MyLjEsNC40LDQuNCw4LjEsNi44LDEwLjZjMS43LDEuOC'+
			'wzLjQsMyw0LjgsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjgtMiwxLjQtNC40LDEuOS03LjJjMS0wLjEsMi0wLjMsMy0wLjVjMC42LTAuMSwxLjEtMC4yLDEuNi0wLjNjLTAuMywyLjEtMC42LDQuMS0xLjEsNS45Yy0xLjEsNC0yLjYsNy4zLTQuOSw5LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjUsMS42LTMuNCwyLjctNS41LDMuMWwwLDBj'+
			'LTAuNiwwLjEtMS4yLDAuMi0xLjgsMC4yYy0xLjQsMC0yLjgtMC4zLTQuMS0wLjhjLTEuMy0wLjUtMi42LTEuMy0zLjgtMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0zLjItMC40LTYuMi0xLTktMS43Yy02LjYtMS42LTEyLjItMy45LTE2LjMtNi44Yy0yLjgtMS45LTQuOS00LjItNi4yLTYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNy0xLjUtMS4xLTMuMS0xLjEtNC43YzAtMS42LDAuNC0zLjIsMS4xLTQuN2MwLjctMS41LDEuNy0yLjgsMy00LjFjMi41LTIuNSw1LjktNC42LDEwLTYuNG'+
			'MzLjEtMS4zLDYuNS0yLjQsMTAuMy0zLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEsMS41LTAuMiwzLjEtMC4yLDQuN2MtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41LDAuOSwxLjEsMS45LDIuMSwyLjljMS45LDEuOSw0LjksMy44LDguNiw1LjRjNC4xLDEuOCw5LjIsMy4yLDE0LjksNC4xYy0xLjItMy42LTIuMy03LjUtMy4xLTExLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjEtNS43LTEuNy0xMS4zLTEu'+
			'Ny0xNi40YzAtNS4xLDAuNS05LjgsMS42LTEzLjhjMS4xLTQsMi42LTcuMyw0LjktOS43YzEuNS0xLjYsMy40LTIuNyw1LjUtMy4xdjBjMC42LTAuMSwxLjItMC4yLDEuOC0wLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNCwwLDIuOCwwLjMsNC4xLDAuOGMxLjMsMC41LDIuNiwxLjMsMy44LDIuM2MyLjQsMS45LDQuNyw0LjUsNi43LDcuOGMxLjcsMi42LDMuMiw1LjYsNC42LDguOWMzLjIsMC40LDYuMiwxLDksMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjYsMS42LDEyLjIsMy45LDE2LjMsNi44YzIuOCwxLjksNC45LDQuMiw2LjEsNi43YzAuNywxLjUsMS4xLDMuMSwxLjEsNC'+
			'43YzAsMS42LTAuNCwzLjItMS4xLDQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNNTIsNDVjLTAuMiwxLjQtMC4zLDMtMC40LDQuNmMyLjMtMC4zLDQuNi0wLjYsNy0wLjdsLTAuOS00LjVDNTUuOCw0NC42LDUzLjgsNDQuOCw1Miw0NXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTEwOS42LDYwLjNjLTEuMi0yLjYtMy40LTQuOC02LjEtNi43Yy00LjEtMi45LTkuNy01LjItMTYuMy02LjhjLTIuOC0wLjctNS45LTEuMi05LTEuNyYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7JiN4OTtjLTEuNC0zLjMtMi45LTYuMy00LjYtOC45Yy0yLjEtMy4yLTQuMy01LjktNi43LTcuOGMtMS4yLTEtMi41LTEuNy0zLjgtMi4zYy0xLjMtMC41LTIuNy0wLjgtNC4xLTAuOGMtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjEsMC40LTQsMS42LTUuNSwzLjFjLTIuMywyLjQtMy44LDUuNy00LjksOS43Yy0xLjEsNC0xLjYsOC43LTEuNiwxMy44YzAsNS4xLDAuNSwxMC43LDEuNywxNi40YzAuOCw0LjEsMS45LDgsMy4xLDExLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctMC45LTEwLjgtMi4zLTE0LjktNC4xYy'+
			'0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjhoMGMwLTAuOSwwLjItMS44LDAuNy0yLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuM2MtNC4xLDEuOC03LjUsMy45LTEwLDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYs'+
			'My40LDQuOCw2LjIsNi43YzQuMSwyLjksOS43LDUuMiwxNi4zLDYuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi44LDAuNyw1LjksMS4zLDksMS43YzEuNCwzLjMsMi45LDYuMyw0LjYsOC45YzIuMSwzLjIsNC4zLDUuOSw2LjcsNy44YzEuMiwxLDIuNSwxLjcsMy44LDIuM2MxLjMsMC41LDIuNywwLjgsNC4xLDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMGMyLjEtMC40LDQtMS42LDUuNS0zLjFjMi4zLTIuNCwzLjgtNS43LDQuOS05LjdjMC41LTEuOCwwLjktMy44LDEuMS01LjljLTAuNSwwLjEtMS4xLDAuMi0xLjYsMC4zJiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTsmI3g5O2MtMSwwLjItMiwwLjMtMywwLjVjLTAuNCwyLjctMS4xLDUuMi0xLjksNy4yYy0wLjgsMi0xLjcsMy41LTIuNyw0LjVjLTAuNiwwLjYtMS4yLDEtMS44LDEuM2wtMi40LTEyLjJjLTAuOSwwLTEuOCwwLjEtMi43LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMi41LDEyLjZjLTAuNiwwLTEuMy0wLjItMi0wLjVjLTEuNS0wLjYtMy4yLTEuOC00LjgtMy42Yy0yLjQtMi41LTQuNy02LjEtNi44LTEwLjZjMi42LDAuMiw1LjMsMC4zLDgsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjZjNC4xLTEuOCw3LjUtMy45LDEwLTYu'+
			'NGMxLjItMS4zLDIuMy0yLjYsMy00LjFjMC43LTEuNSwxLjEtMy4xLDEuMS00LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNiw2MC4zeiBNMTA1LjYsNjcuOGMtMC44LDEuNi0yLjMsMy40LTQuNyw1Yy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjQsMC02LjgtMC4yLTEwLTAuNWMtMS41LTQtMi44LTguNC0zLjctMTMuMWwwLDBjLTEuMS01LjUtMS42LTEwLjctMS42LTE1LjVjMC02LjQsMC45LTEyLDIuNS0xNS45YzAuOC0yLDEuNy0zLjUsMi43LT'+
			'QuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42LTAuNiwxLjItMS4xLDEuOC0xLjRsNi45LDM0LjlsMi44LDE0LjJjMC45LDAsMS44LDAsMi43LTAuMWwtMi45LTE0LjdsLTYuOS0zNC45YzAuNiwwLDEuMywwLjIsMS45LDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41LDAuNiwzLjIsMS44LDQuOCwzLjZjMi40LDIuNSw0LjcsNi4xLDYuOCwxMC42Yy0yLjYtMC4yLTUuMy0wLjMtOC0wLjNjLTAuMywwLTAuNiwwLTAuOSwwbDAuOSw0LjVjMy40LDAsNi44LDAuMiwxMCwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNSw0LDIuOCw4LjQsMy43LDEzLjFjMS4xLDUuNSwxLjYs'+
			'MTAuNywxLjYsMTUuNWMwLDAuMiwwLDAuMywwLDAuNGMxLjEtMC4yLDIuMS0wLjQsMy4xLTAuNmMwLjUtMC4xLDAuOS0wLjIsMS40LTAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjgtNC4xLTEuOS04LTMuMS0xMS42YzUuNywwLjksMTAuNywyLjMsMTQuOSw0LjFjMy43LDEuNiw2LjcsMy41LDguNiw1LjRjMSwxLDEuNywxLjksMi4xLDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAuOSwwLjcsMS44LDAuNywyLjhDMTA2LjIsNjUuOSwxMDYsNjYuOCwxMDUuNiw2Ny44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._gyro_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZD0iTTEwNy44LDU4LjdjLTIuMS0yLjEtNS40LTQuMi05LjYtNmMtNC42LTItMTAuMi0zLjUtMTYuNS00LjVjMS40LDQsMi41LDguMywzLjQsMTIuOGMxLjIsNi4yLDEuOCwxMi4yLDEuOSwxNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC41LDAuMS0xLDAuMi0xLjYsMC4zYy0xLjEsMC4yLTIuMywwLjQtMy40LDAuNmMwLTAuMiwwLTAuMywwLTAuNWMwLTUuMy0wLjYtMTEuMi0xLjgtMTcuM2MtMS01LjItMi40LTEwLjEtNC4xLTE0LjUmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7Yy0zLjYtMC40LTcuMy0wLjYtMTEuMS0wLjZsLTEtNWMwLjMsMCwwLjcsMCwxLDBjMywwLDYsMC4xLDguOSwwLjRjLTIuMy00LjktNC45LTktNy41LTExLjdjLTEuOS0yLTMuNy0zLjMtNS40LTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjgtMC4zLTEuNS0wLjUtMi4yLTAuNWw3LjcsMzguOEw2OS43LDgxYy0xLDAtMiwwLjEtMywwLjFsLTMuMS0xNS44bC03LjctMzguN2MtMC43LDAuMy0xLjMsMC44LTIsMS41Yy0xLjEsMS4yLTIuMiwyLjktMyw1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M0OS4xLDM3LjUsNDgsNDMuNiw0OCw1MC44YzAsNS4zLDAuNiwxMS4yLDEuOCwxNy'+
			'4ybDAsMGMxLDUuMiwyLjQsMTAuMSw0LjEsMTQuNWMzLjYsMC40LDcuMywwLjYsMTEuMSwwLjZjOC42LDAsMTYuNi0xLDIzLjUtMi43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjktMS43LDEyLjYtNC4xLDE2LjQtNi44YzIuNi0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjFjMC0xLTAuMi0yLTAuNy0zLjFDMTA5LjYsNjAuOSwxMDguOCw1OS44LDEwNy44LDU4Ljd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNNTAuMSw0Ny45YzAuMS0xLjgsMC4yLTMuNSwwLjQtNS4xYzIuMS0wLjMsNC4yLTAuNSw2LjQtMC42bDEsNC45QzU1LjIsNDcuMyw1Mi42LDQ3LjYsNTAu'+
			'MSw0Ny45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNNjUsMi42QzMwLjYsMi42LDIuNiwzMC42LDIuNiw2NWMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNEMxMjcuNCwzMC42LDk5LjQsMi42LDY1LDIuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1LjEtMTEuMiw3LjFDOTEsODUuOCw3OC42LDg4LjEsNjUsODguMWMtMywwLTYtMC4xLTguOS0wLjNjMi4zLDQuOSw0LjksOSw3LjUsMTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS45LDIsMy43LDMuMyw1LjQsNGMwLjgsMC4zLD'+
			'EuNSwwLjUsMi4yLDAuNWwtMi44LTE0YzEsMCwyLTAuMSwzLTAuMWwyLjcsMTMuNWMwLjctMC4zLDEuMy0wLjgsMi0xLjVjMS4xLTEuMiwyLjItMi45LDMtNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC45LTIuMiwxLjYtNC45LDIuMS04YzEuMS0wLjIsMi4zLTAuMywzLjMtMC41YzAuNi0wLjEsMS4yLTAuMiwxLjgtMC40Yy0wLjMsMi4zLTAuNyw0LjUtMS4yLDYuNWMtMS4yLDQuNC0yLjksOC4xLTUuNCwxMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yYy0xLjUsMC0zLjEtMC4zLTQuNS0wLjljLTEu'+
			'NS0wLjYtMi45LTEuNC00LjItMi41Yy0yLjctMi4xLTUuMi01LTcuNS04LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgtMi45LTMuNi02LjItNS4xLTkuOWMtMy41LTAuNS02LjktMS4xLTEwLTEuOUMzMyw4My41LDI2LjgsODEsMjIuMiw3Ny43Yy0zLjEtMi4yLTUuNC00LjYtNi44LTcuNWMtMC44LTEuNi0xLjItMy40LTEuMi01LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEuOS0zLjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLD'+
			'UuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTYuNiwxLjctMTIuMiw0LTE2LDYuN2MtMi42LDEuOC00LjMsMy43LTUuMiw1LjZjLTAuNSwxLTAuNywyLTAuNywzLjFoMGMwLDEsMC4yLDIsMC43LDMuMWMwLjUsMSwxLjMsMi4xLDIuMywzLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMSwyLjEsNS40LDQuMiw5LjYsNmM0LjYsMiwxMC4yLDMuNSwxNi41LDQuNWMtMS40LTQtMi41LTguMy0zLjQtMTIuOEM0My42LDYyLjYsNDMsNTYuNCw0Myw1MC44YzAtNS43LDAuNi0xMC45LDEuOC0xNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjItNC40LDIuOS04LjEsNS40LTEwLjhjMS43'+
			'LTEuOCwzLjctMyw2LjEtMy41djBjMC43LTAuMSwxLjMtMC4yLDItMC4yYzEuNSwwLDMuMSwwLjMsNC41LDAuOWMxLjUsMC42LDIuOSwxLjQsNC4yLDIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43LDIuMSw1LjIsNSw3LjUsOC42YzEuOCwyLjksMy42LDYuMiw1LjEsOS45YzMuNSwwLjUsNi45LDEuMSwxMCwxLjljNy4zLDEuOCwxMy41LDQuNCwxOC4xLDcuNmMzLjEsMi4yLDUuNCw0LjYsNi44LDcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDEuNiwxLjIsMy40LDEuMiw1LjJjMCwxLjgtMC40LDMuNi0xLjIsNS4yQzExMy44LDcxLjksMTEyLjcsNzMuNCwxMTEuMyw3NC44ei'+
			'IgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTUwLjUsNDIuOGMtMC4yLDEuNi0wLjQsMy4zLTAuNCw1LjFjMi41LTAuNCw1LjEtMC42LDcuOC0wLjhsLTEtNC45QzU0LjcsNDIuMyw1Mi42LDQyLjUsNTAuNSw0Mi44eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNMTE0LjYsNTkuOGMtMS40LTIuOS0zLjgtNS4zLTYuOC03LjVjLTQuNi0zLjItMTAuOC01LjgtMTguMS03LjZjLTMuMS0wLjgtNi41LTEuNC0xMC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjUtMy43LTMuMy03LTUuMS05LjljLTIuMy0zLjYtNC44LTYuNS03LjUtOC42Yy0xLjMt'+
			'MS4xLTIuNy0xLjktNC4yLTIuNWMtMS41LTAuNi0zLTAuOS00LjUtMC45Yy0wLjcsMC0xLjQsMC4xLTIsMC4ydjAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjQsMC41LTQuNCwxLjctNi4xLDMuNWMtMi41LDIuNy00LjIsNi40LTUuNCwxMC44Yy0xLjIsNC40LTEuOCw5LjYtMS44LDE1LjNjMCw1LjcsMC42LDExLjgsMS45LDE4LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOSw0LjUsMi4xLDguOCwzLjQsMTIuOGMtNi4zLTEtMTEuOS0yLjYtMTYuNS00LjVjLTQuMi0xLjgtNy40LTMuOS05LjYtNmMtMS4xLTEuMS0xLjgtMi4xLTIuMy0zLjJjLTAuNS0xLTAuNy0yLTAuNy0zLjFoMC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLDAuMi0yLDAuNy0zLjFjMC45LTEuOCwyLjYtMy44LDUuMi01LjZjMy44LTIuNyw5LjMtNSwxNS45LTYuN2MwLTEuOCwwLjEtMy41LDAuMy01LjJjLTQuMiwxLTgsMi4yLTExLjUsMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC42LDItOC40LDQuMy0xMS4yLDcuMWMtMS40LDEuNC0yLjUsMi45LTMuMyw0LjVjLTAuOCwxLjYtMS4yLDMuNC0xLjIsNS4yYzAsMS44LDAuNCwzLjYsMS4yLDUuMmMxLjQsMi45LDMuOCw1LjMsNi44LDcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNC42LDMuMiwxMC44LDUuOCwxOC4xLDcuNmMzLjEsMC44'+
			'LDYuNSwxLjQsMTAsMS45YzEuNSwzLjcsMy4zLDcsNS4xLDkuOWMyLjMsMy42LDQuOCw2LjUsNy41LDguNmMxLjMsMS4xLDIuNywxLjksNC4yLDIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41LDAuNiwzLDAuOSw0LjUsMC45YzAuNywwLDEuMy0wLjEsMi0wLjJsMCwwYzIuNC0wLjUsNC40LTEuNyw2LjEtMy41YzIuNS0yLjcsNC4yLTYuNCw1LjQtMTAuOGMwLjUtMiwwLjktNC4yLDEuMi02LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjYsMC4xLTEuMiwwLjMtMS44LDAuNGMtMS4xLDAuMi0yLjIsMC40LTMuMywwLjVjLTAuNSwzLTEuMiw1LjctMi4xLDhjLTAuOSwyLjItMS45LD'+
			'MuOS0zLDVjLTAuNiwwLjctMS4zLDEuMi0yLDEuNWwtMi43LTEzLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLDAuMS0yLDAuMS0zLDAuMWwyLjgsMTRjLTAuNy0wLjEtMS40LTAuMi0yLjItMC41Yy0xLjctMC43LTMuNS0yLTUuNC00Yy0yLjYtMi44LTUuMi02LjgtNy41LTExLjdDNTksODgsNjIsODguMSw2NSw4OC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMy42LDAsMjYtMi4zLDM1LjItNi4yYzQuNi0yLDguNC00LjMsMTEuMi03LjFjMS40LTEuNCwyLjUtMi45LDMuMy00LjVjMC44LTEuNiwxLjItMy40LDEuMi01LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExNS44LDYz'+
			'LjIsMTE1LjQsNjEuNCwxMTQuNiw1OS44eiBNMTEwLjEsNjguMWMtMC45LDEuOC0yLjYsMy44LTUuMiw1LjZjLTMuOSwyLjctOS42LDUuMS0xNi40LDYuOGMtNi45LDEuNy0xNC45LDIuNy0yMy41LDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuOCwwLTcuNS0wLjItMTEuMS0wLjZjLTEuNy00LjQtMy4xLTkuMy00LjEtMTQuNWwwLDBDNDguNiw2MS45LDQ4LDU2LjEsNDgsNTAuOGMwLTcuMSwxLTEzLjMsMi44LTE3LjdjMC45LTIuMiwxLjktMy45LDMtNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LTAuNywxLjMtMS4yLDItMS41bDcuNywzOC43bDMuMSwxNS44YzEsMCwyLDAsMy'+
			'0wLjFsLTMuMi0xNi4zTDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS42LDAuNywzLjUsMiw1LjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LDQxLjksNjUsNDEuOWMtMC4zLDAtMC43LDAtMSwwbDEsNWMzLjgsMCw3LjUsMC4yLDExLjEsMC42YzEuNyw0LjQsMy4xLDkuMyw0LjEsMTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4yLDYuMSwxLjgsMTEuOSwxLjgsMTcuM2MwLDAuMiwwLDAuMywwLDAuNWMxLjItMC4yLDIuMy0wLjQsMy40LTAuNmMwLjUtMC4xLDEtMC4yLDEuNi0wLjNjMC01LjUtMC42LTExLjUt'+
			'MS45LTE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjktNC41LTIuMS04LjgtMy40LTEyLjhjNi4zLDEsMTEuOSwyLjYsMTYuNSw0LjVjNC4yLDEuOCw3LjQsMy45LDkuNiw2YzEuMSwxLjEsMS44LDIuMSwyLjMsMy4yYzAuNSwxLDAuNywyLDAuNywzLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMC44LDY2LDExMC42LDY3LDExMC4xLDY4LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 0s';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBkPSJNNjUsOC45QzM0LDguOSw4LjksMzQsOC45LDY1YzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTQ2LjgsMzguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMS00LDIuNi03LjMsNC45LTkuN2MxLjUtMS42LDMuNC0yLjcsNS41LTMuMXYwYzAuNi0wLjEsMS4yLTAuMiwxLjgtMC4yYzEuNCwwLDIuOCwwLjMsNC4xLDAuOGMxLjMsMC41LDIuNiwxLjMsMy44LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIu'+
			'NCwxLjksNC43LDQuNSw2LjcsNy44YzEuNywyLjYsMy4yLDUuNiw0LjYsOC45YzAuMSwwLDAuMiwwLDAuMywwLjFsLTQuMSw0LjFjLTMtMC4zLTYuMi0wLjUtOS41LTAuNWwtMC45LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNiwwLDAuOSwwYzIuNywwLDUuNCwwLjEsOCwwLjNjLTIuMS00LjQtNC40LTguMS02LjgtMTAuNmMtMS43LTEuOC0zLjQtMy00LjgtMy42Yy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw1LjcsMjguNyYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0yLjMsMi4zbC02LTMwLjRjLTAuNiwwLjMtMS4yLDAuNy0xLjgsMS40Yy0xLDEtMS45LDIuNi0yLjcsNC41Yy0xLjYsMy'+
			'45LTIuNSw5LjUtMi41LDE1LjljMCw0LjgsMC41LDEwLjEsMS42LDE1LjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDEuMywwLjUsMi41LDAuOCwzLjhsLTMuNywzLjdjLTAuNi0yLjEtMS4xLTQuMy0xLjYtNi42Yy0xLjEtNS43LTEuNy0xMS4zLTEuNy0xNi40QzQ1LjIsNDcsNDUuOCw0Mi40LDQ2LjgsMzguNHogTTU4LjYsNDguOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjQsMC4yLTQuOCwwLjQtNywwLjdjMC4xLTEuNiwwLjItMy4xLDAuNC00LjZjMS45LTAuMiwzLjgtMC40LDUuOC0wLjZMNTguNiw0OC45eiBNMjAuNCw2OS43Yy0wLjctMS41LTEuMS0zLjEtMS4xLTQuNyYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7YzAtMS42LDAuNC0zLjIsMS4xLTQuN2MwLjctMS41LDEuNy0yLjgsMy00LjFjMi41LTIuNSw1LjktNC42LDEwLTYuNGMzLjEtMS4zLDYuNS0yLjQsMTAuMy0zLjNjLTAuMSwxLjUtMC4yLDMuMS0wLjIsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYsMS41LTExLDMuNi0xNC40LDZjLTIuMywxLjYtMy45LDMuNC00LjcsNWMtMC40LDAuOS0wLjcsMS44LTAuNywyLjhoMGMwLDAuOSwwLjIsMS44LDAuNywyLjhjMC41LDAuOSwxLjEsMS45LDIuMSwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjksMS45LDQuOSwzLjgsOC42LDUuNGMyLjgsMS4yLDUuOSwyLjIsOS40LDNsLTMuNy'+
			'wzLjdjLTUuNy0xLjYtMTAuNi0zLjctMTQuNC02LjNDMjMuOCw3NC41LDIxLjYsNzIuMywyMC40LDY5Ljd6IE0zMi44LDEwMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMzMy42LDEwMC4yLDMzLjIsMTAwLjMsMzIuOCwxMDAuM3ogTTc4LjcsNjIuM2MtMC4zLTEuMy0wLjUtMi41LTAuOC0zLjhsMy43LTMuNyYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7YzAuNiwyLjEsMS4xLDQuMywxLjYsNi42YzEuMSw1LjYsMS42LDExLDEuNywxNS45Yy0wLjUsMC4xLTAuOSwwLjItMS40LDAuM2MtMSwwLjItMiwwLjQtMy4xLDAuNmMwLTAuMSwwLTAuMywwLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzgwLjMsNzMsNzkuOCw2Ny44LDc4LjcsNjIuM3ogTTY5LjMsNzkuNGMtMC45LDAtMS44LDAuMS0yLjcsMC4xbC0xLjYtOC4xbDIuMy0yLjNMNjkuMyw3OS40eiBNMTA2LjcsNzMuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjUsMi41LTUuOSw0LjYtMTAsNi40Yy04LjIsMy41LTE5LjQsNS42LTMxLjYsNS42Yy0yLjcsMC01LjQtMC4xLTgtMC'+
			'4zYzIuMSw0LjQsNC40LDguMSw2LjgsMTAuNmMxLjcsMS44LDMuNCwzLDQuOCwzLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTIsMS40LTQuNCwxLjktNy4yYzEtMC4xLDItMC4zLDMtMC41YzAuNi0wLjEsMS4xLTAuMiwxLjYtMC4zYy0wLjMsMi4xLTAuNiw0LjEtMS4xLDUuOWMtMS4xLDQtMi42LDcuMy00LjksOS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNSwxLjYt'+
			'My40LDIuNy01LjUsMy4xbDAsMGMtMC42LDAuMS0xLjIsMC4yLTEuOCwwLjJjLTEuNCwwLTIuOC0wLjMtNC4xLTAuOGMtMS4zLTAuNS0yLjYtMS4zLTMuOC0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0wLjEsMC0wLjIsMC0wLjQtMC4xbDQuMS00LjFjMywwLjMsNi4yLDAuNSw5LjUsMC41YzcuNywwLDE0LjktMC45LDIxLjEtMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNi4yLTEuNSwxMS4zLTMuNywxNC44LTYuMWMyLjMtMS42LDMuOS0zLjQsNC43LTVjMC40LTAuOSwwLjctMS44LDAuNy0yLjhjMC0wLjktMC'+
			'4yLTEuOC0wLjctMi44Yy0wLjQtMC45LTEuMS0xLjktMi4xLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjktMS45LTQuOS0zLjgtOC42LTUuNGMtMi44LTEuMi02LTIuMi05LjUtM2wzLjctMy43YzUuNywxLjYsMTAuNiwzLjcsMTQuNCw2LjNjMi44LDEuOSw0LjksNC4yLDYuMSw2LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMS41LDEuMSwzLjEsMS4xLDQuN2MwLDEuNi0wLjQsMy4yLTEuMSw0LjdDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik01MS42LDQ5LjZjMi4zLTAuMyw0LjYtMC42LDctMC43bC0wLjkt'+
			'NC41Yy0yLDAuMS0zLjksMC4zLTUuOCwwLjZDNTEuOCw0Ni41LDUxLjcsNDgsNTEuNiw0OS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNOTkuOSwzMS44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNHMtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMxMDAuNSwzMy4zLDEwMC41LDMyLjQsOTkuOSwzMS44eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNNjYuNSw3OS41Yz'+
			'AuOSwwLDEuOCwwLDIuNy0wLjFsLTItMTAuM2wtMi4zLDIuM0w2Ni41LDc5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik04My40LDc3LjdjMC41LTAuMSwwLjktMC4yLDEuNC0wLjNjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjQtMi4zLTEtNC41LTEuNi02LjZsLTMuNywzLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywxLjIsMC42LDIuNSwwLjgsMy44YzEuMSw1LjUsMS42LDEwLjcsMS42LDE1LjVjMCwwLjIsMCwwLjMsMCwwLjRDODEuMyw3OC4xLDgyLjQsNzcuOSw4My40LDc3Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik00OC41LDc1LjJsMy43LTMu'+
			'N2MtMC4zLTEuMi0wLjYtMi41LTAuOC0zLjhsMCwwYy0xLjEtNS41LTEuNi0xMC43LTEuNi0xNS41YzAtNi40LDAuOS0xMiwyLjUtMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LTIsMS43LTMuNSwyLjctNC41YzAuNi0wLjYsMS4yLTEuMSwxLjgtMS40bDYsMzAuNGwyLjMtMi4zbC01LjctMjguN2MwLjYsMCwxLjMsMC4yLDEuOSwwLjVjMS41LDAuNiwzLjIsMS44LDQuOCwzLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNCwyLjUsNC43LDYuMSw2LjgsMTAuNmMtMi42LTAuMi01LjMtMC4zLTgtMC4zYy0wLjMsMC0wLjYsMC0wLjksMGwwLjksNC41YzMuMywwLDYuNCwwLjIsOS'+
			'41LDAuNWw0LjEtNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAtMC4yLDAtMC4zLTAuMWMtMS40LTMuMy0yLjktNi4zLTQuNi04LjljLTIuMS0zLjItNC4zLTUuOS02LjctNy44Yy0xLjItMS0yLjUtMS43LTMuOC0yLjNjLTEuMy0wLjUtMi43LTAuOC00LjEtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjBjLTIuMSwwLjQtNCwxLjYtNS41LDMuMWMtMi4zLDIuNC0zLjgsNS43LTQuOSw5LjdjLTEuMSw0LTEuNiw4LjctMS42LDEzLjhjMCw1LjEsMC41LDEwLjcsMS43LDE2LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzQ3LjQsNzAu'+
			'OCw0Ny45LDczLDQ4LjUsNzUuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTQ0LjYsNzkuMWMtMy41LTAuOC02LjctMS44LTkuNC0zYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDBjMC0wLjksMC4yLTEuOCwwLjctMi44YzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuMSwxLjgtNy41LDMuOS'+
			'0xMCw2LjRjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjcsMi42LDguNiw0LjcsMTQuNCw2LjNMNDQuNiw3OS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNMTA5LjcsNjAuM2MtMS4yLTIuNi0zLjQtNC44LTYuMS02LjdjLTMuNy0yLjYtOC42LTQuNy0xNC40LTYuM2wtMy43LDMuN2MzLjUsMC44LDYuNywxLjgsOS41LDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNywxLjYsNi43LDMuNSw4LjYsNS40YzEs'+
			'MSwxLjcsMS45LDIuMSwyLjljMC40LDAuOSwwLjcsMS44LDAuNywyLjhjMCwwLjktMC4yLDEuOC0wLjcsMi44Yy0wLjgsMS42LTIuMywzLjQtNC43LDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjRjLTMuMywwLTYuNC0wLjItOS41LTAuNWwtNC4xLDQuMWMwLjEsMCwwLjIsMCwwLjQsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQsMy4zLDIuOSw2LjMsNC42LDguOWMyLjEsMy4yLDQuMyw1LjksNi43LDcuOGMxLjIsMSwyLjUsMS43LDMuOCwyLjNjMS4zLDAuNSwyLjcsMC44LDQuMSwwLjhjMC'+
			'42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi4xLTAuNCw0LTEuNiw1LjUtMy4xYzIuMy0yLjQsMy44LTUuNyw0LjktOS43YzAuNS0xLjgsMC45LTMuOCwxLjEtNS45Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuM2MtMSwwLjItMiwwLjMtMywwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQsMi43LTEuMSw1LjItMS45LDcuMmMtMC44LDItMS43LDMuNS0yLjcsNC41Yy0wLjYsMC42LTEuMiwxLTEuOCwxLjNsLTIuNC0xMi4yYy0wLjksMC0xLjgsMC4xLTIuNywwLjFsMi41LDEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjYsMC0xLjMt'+
			'MC4yLTItMC41Yy0xLjUtMC42LTMuMi0xLjgtNC44LTMuNmMtMi40LTIuNS00LjctNi4xLTYuOC0xMC42YzIuNiwwLjIsNS4zLDAuMyw4LDAuM2MxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQuMS0xLjgsNy41LTMuOSwxMC02LjRjMS4yLTEuMywyLjMtMi42LDMtNC4xYzAuNy0xLjUsMS4xLTMuMSwxLjEtNC43QzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNyw2MC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxwYXRoIGQ9Ik02NSwyLjZDMzAuNiwyLjYsMi42LDMwLjYsMi42LDY1YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40QzEyNy40LDMwLjYsOTkuNSwyLjYsNjUsMi42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE00NC44LDM1LjRjMS4yLTQuNCwyLjktOC4xLDUuNC0xMC44YzEuNy0xLjgsMy43LTMsNi4xLTMuNXYwYzAuNy0wLjEsMS4zLTAu'+
			'MiwyLTAuMmMxLjUsMCwzLjEsMC4zLDQuNSwwLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjUsMC42LDIuOSwxLjQsNC4yLDIuNWMyLjcsMi4xLDUuMiw1LDcuNSw4LjZjMS44LDIuOSwzLjYsNi4yLDUuMSw5LjljMC4xLDAsMC4zLDAsMC40LDAuMWwtNC41LDQuNWMtMy40LTAuMy02LjktMC41LTEwLjUtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTEtNWMwLjMsMCwwLjcsMCwxLDBjMywwLDYsMC4xLDguOSwwLjRjLTIuMy00LjktNC45LTktNy41LTExLjdjLTEuOS0yLTMuNy0zLjMtNS40LTRjLTAuOC0wLjMtMS41LTAuNS0yLjItMC41bDYuMywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTIuNi'+
			'wyLjZsLTYuNy0zMy44Yy0wLjcsMC4zLTEuMywwLjgtMiwxLjVjLTEuMSwxLjItMi4yLDIuOS0zLDVDNDkuMSwzNy41LDQ4LDQzLjYsNDgsNTAuOGMwLDUuMywwLjYsMTEuMiwxLjgsMTcuMmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMS40LDAuNiwyLjgsMC45LDQuMmwtNC4xLDQuMWMtMC43LTIuNC0xLjItNC44LTEuNy03LjNDNDMuNiw2Mi42LDQzLDU2LjQsNDMsNTAuOEM0Myw0NS4xLDQzLjYsMzkuOSw0NC44LDM1LjR6IE01Ny45LDQ3LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi43LDAuMi01LjMsMC40LTcuOCwwLjhjMC4xLTEuOCwwLjItMy41LDAuNC01LjFjMi4xLTAuMyw0LjIt'+
			'MC41LDYuNC0wLjZMNTcuOSw0Ny4xeiBNMTUuNCw3MC4yYy0wLjgtMS42LTEuMi0zLjQtMS4yLTUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEuOS0zLjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLDUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy02LjYsMS43LTEyLjIsNC0xNiw2LjdjLTIuNiwxLjgtNC4zLDMuNy01LjIsNS42Yy0wLjUsMS0wLjcsMi0wLjcsMy4xaDBjMCwxLDAuMiwyLDAuNywzLjFjMC41LDEsMS4zLDIuMSwyLjMsMy4yJiN4ZDsmI3'+
			'hhOyYjeDk7JiN4OTtjMi4xLDIuMSw1LjQsNC4yLDkuNiw2YzMuMSwxLjMsNi42LDIuNCwxMC41LDMuM2wtNC4xLDQuMWMtNi40LTEuOC0xMS44LTQuMS0xNi03QzE5LjIsNzUuNiwxNi44LDczLjEsMTUuNCw3MC4yeiBNMjkuMywxMDQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM0MzMC4xLDEwNC4xLDI5Ljcs'+
			'MTA0LjMsMjkuMywxMDQuM3ogTTgwLjIsNjJjLTAuMy0xLjQtMC42LTIuOC0wLjktNC4ybDQuMS00LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMi40LDEuMiw0LjgsMS43LDcuM2MxLjIsNi4yLDEuOCwxMi4yLDEuOSwxNy43Yy0wLjUsMC4xLTEsMC4yLTEuNiwwLjNjLTEuMSwwLjItMi4zLDAuNC0zLjQsMC42YzAtMC4yLDAtMC4zLDAtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODIsNzMuOSw4MS40LDY4LjEsODAuMiw2MnogTTY5LjcsODFjLTEsMC0yLDAuMS0zLDAuMWwtMS44LTguOWwyLjYtMi42TDY5LjcsODF6IE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1LjEtMTEuMiw3LjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O0M5MSw4NS44LDc4LjYsODguMSw2NSw4OC4xYy0zLDAtNi0wLjEtOC45LTAuM2MyLjMsNC45LDQuOSw5LDcuNSwxMS43YzEuOSwyLDMuNywzLjMsNS40LDRjMC44LDAuMywxLjUsMC41LDIuMiwwLjVsLTIuOC0xNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEsMCwyLTAuMSwzLTAuMWwyLjcsMTMuNWMwLjctMC4zLDEuMy0wLjgsMi0xLjVjMS4xLTEuMiwyLjItMi45LDMtNWMwLjktMi4yLDEuNi00LjksMi4xLThjMS4xLTAuMiwyLjMtMC4zLDMuMy0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC4xLDEuMi0wLjIsMS44LTAuNGMtMC4zLDIuMy0wLjcsNC41LTEuMiw2LjVj'+
			'LTEuMiw0LjQtMi45LDguMS01LjQsMTAuOGMtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNSwwLTMuMS0wLjMtNC41LTAuOWMtMS41LTAuNi0yLjktMS40LTQuMi0yLjVjLTIuNy0yLjEtNS4yLTUtNy41LTguNmMtMS44LTIuOS0zLjYtNi4yLTUuMS05LjljLTAuMSwwLTAuMywwLTAuNC0wLjFsNC41LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNCwwLjMsNi45LDAuNSwxMC41LDAuNWM4LjYsMCwxNi42LTEsMjMuNS0yLjdjNi45LTEuNywxMi42LTQuMSwxNi40LTYuOGMyLjYtMS44LDQuMy0zLjcsNS4yLTUuNm'+
			'MwLjUtMSwwLjctMiwwLjctMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLTAuMi0yLTAuNy0zLjFjLTAuNS0xLTEuMy0yLjEtMi4zLTMuMmMtMi4xLTIuMS01LjQtNC4yLTkuNi02Yy0zLjEtMS4zLTYuNi0yLjQtMTAuNS0zLjRsNC4xLTQuMWM2LjQsMS44LDExLjgsNC4xLDE2LDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjEsMi4yLDUuNCw0LjYsNi44LDcuNWMwLjgsMS42LDEuMiwzLjQsMS4yLDUuMmMwLDEuOC0wLjQsMy42LTEuMiw1LjJDMTEzLjgsNzEuOSwxMTIuNyw3My40LDExMS4zLDc0Ljh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik01MC4xLDQ3LjljMi41LTAu'+
			'NCw1LjEtMC42LDcuOC0wLjhsLTEtNC45Yy0yLjIsMC4yLTQuMywwLjQtNi40LDAuNkM1MC4zLDQ0LjQsNTAuMiw0Ni4xLDUwLjEsNDcuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTEwMy44LDI4LjFsLTEuOC0xLjhjLTAuMy0wLjMtMC44LTAuNS0xLjItMC41cy0wLjksMC4yLTEuMiwwLjVMMjYuMiw5OS41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVzMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MxMDQuNCwyOS44LDEwNC40LDI4LjcsMTAzLjgsMjguMXoiIGZpbGw9IiNGRkZGRk'+
			'YiLz4KICAgPHBhdGggZD0iTTY2LjcsODEuMWMxLDAsMiwwLDMtMC4xbC0yLjMtMTEuNGwtMi42LDIuNkw2Ni43LDgxLjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik04NS40LDc5LjFjMC41LTAuMSwxLTAuMiwxLjYtMC4zYzAtNS41LTAuNi0xMS41LTEuOS0xNy43Yy0wLjUtMi41LTEuMS01LTEuNy03LjNsLTQuMSw0LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywxLjQsMC43LDIuOCwwLjksNC4yYzEuMiw2LjEsMS44LDExLjksMS44LDE3LjNjMCwwLjIsMCwwLjMsMCwwLjVDODMuMiw3OS41LDg0LjMsNzkuMyw4NS40LDc5LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxw'+
			'YXRoIGQ9Ik00Ni42LDc2LjNsNC4xLTQuMWMtMC4zLTEuNC0wLjYtMi44LTAuOS00LjJsMCwwQzQ4LjYsNjEuOSw0OCw1Ni4xLDQ4LDUwLjhjMC03LjEsMS0xMy4zLDIuOC0xNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjktMi4yLDEuOS0zLjksMy01YzAuNy0wLjcsMS4zLTEuMiwyLTEuNWw2LjcsMzMuOGwyLjYtMi42TDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS42LDAuNywzLjUsMiw1LjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LjEsNDEuOSw2NSw0MS45Yy0wLjMsMC0wLjcsMC0xLDBsMSw1YzMuNi'+
			'wwLDcuMSwwLjIsMTAuNSwwLjVsNC41LTQuNWMtMC4xLDAtMC4zLDAtMC40LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNS0zLjctMy4zLTctNS4xLTkuOWMtMi4zLTMuNi00LjgtNi41LTcuNS04LjZjLTEuMy0xLjEtMi43LTEuOS00LjItMi41Yy0xLjUtMC42LTMtMC45LTQuNS0wLjljLTAuNywwLTEuNCwwLjEtMiwwLjJ2MCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNCwwLjUtNC40LDEuNy02LjEsMy41Yy0yLjUsMi43LTQuMiw2LjQtNS40LDEwLjhjLTEuMiw0LjQtMS44LDkuNi0xLjgsMTUuM2MwLDUuNywwLjYsMTEuOCwxLjksMTguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtDNDUuNCw3MS41LDQ2LDczLjksNDYuNiw3Ni4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNNDIuMyw4MC42Yy0zLjktMC45LTcuNC0yLTEwLjUtMy4zYy00LjItMS44LTcuNC0zLjktOS42LTZjLTEuMS0xLjEtMS44LTIuMS0yLjMtMy4yYy0wLjUtMS0wLjctMi0wLjctMy4xaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMSwwLjItMiwwLjctMy4xYzAuOS0xLjgsMi42LTMuOCw1LjItNS42YzMuOC0yLjcsOS4zLTUsMTUuOS02LjdjMC0xLjgsMC4xLTMuNSwwLjMtNS4yYy00LjIsMS04LDIuMi0xMS41LDMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuNiwyLT'+
			'guNCw0LjMtMTEuMiw3LjFjLTEuNCwxLjQtMi41LDIuOS0zLjMsNC41Yy0wLjgsMS42LTEuMiwzLjQtMS4yLDUuMmMwLDEuOCwwLjQsMy42LDEuMiw1LjJjMS40LDIuOSwzLjgsNS4zLDYuOCw3LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQuMSwyLjksOS42LDUuMywxNiw3TDQyLjMsODAuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTExNC42LDU5LjhjLTEuNC0yLjktMy44LTUuMy02LjgtNy41Yy00LjEtMi45LTkuNi01LjMtMTYtN2wtNC4xLDQuMWMzLjksMC45LDcuNCwyLDEwLjUsMy40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjIsMS44LDcuNCwzLjksOS42LDZj'+
			'MS4xLDEuMSwxLjgsMi4xLDIuMywzLjJjMC41LDEsMC43LDIsMC43LDMuMWMwLDEtMC4yLDItMC43LDMuMWMtMC45LDEuOC0yLjYsMy44LTUuMiw1LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjksMi43LTkuNiw1LjEtMTYuNCw2LjhjLTYuOSwxLjctMTQuOSwyLjctMjMuNSwyLjdjLTMuNiwwLTcuMi0wLjItMTAuNS0wLjVMNTAsODcuMWMwLjEsMCwwLjMsMCwwLjQsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjUsMy43LDMuMyw3LDUuMSw5LjljMi4zLDMuNiw0LjgsNi41LDcuNSw4LjZjMS4zLDEuMSwyLjcsMS45LDQuMiwyLjVjMS41LDAuNiwzLDAuOSw0LjUsMC45YzAuNy'+
			'wwLDEuMy0wLjEsMi0wLjJsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjQtMC41LDQuNC0xLjcsNi4xLTMuNWMyLjUtMi43LDQuMi02LjQsNS40LTEwLjhjMC41LTIsMC45LTQuMiwxLjItNi41Yy0wLjYsMC4xLTEuMiwwLjMtMS44LDAuNGMtMS4xLDAuMi0yLjIsMC40LTMuMywwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUsMy0xLjIsNS43LTIuMSw4Yy0wLjksMi4yLTEuOSwzLjktMyw1Yy0wLjYsMC43LTEuMywxLjItMiwxLjVsLTIuNy0xMy41Yy0xLDAuMS0yLDAuMS0zLDAuMWwyLjgsMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjctMC4xLTEuNC0wLjItMi4y'+
			'LTAuNWMtMS43LTAuNy0zLjUtMi01LjQtNGMtMi42LTIuOC01LjItNi44LTcuNS0xMS43QzU5LDg4LDYyLDg4LjEsNjUsODguMWMxMy42LDAsMjYtMi4zLDM1LjItNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjYtMiw4LjQtNC4zLDExLjItNy4xYzEuNC0xLjQsMi41LTIuOSwzLjMtNC41YzAuOC0xLjYsMS4yLTMuNCwxLjItNS4yQzExNS44LDYzLjIsMTE1LjQsNjEuNCwxMTQuNiw1OS44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 0s';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		me._controles.appendChild(me._gyro);
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNDksMzk4LjFsLTMwLjEsMzAuMWMtMC42LDAuNi0xLjYsMC42LTIuMiwwbC0xMS4zLTExLjNjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxNy43LTE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNy0xNy43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zYzAuNi0wLjYsMS42LTAuNiwyLjIsMGwzMC4x'+
			'LDMwYzAuMywwLjMsMC40LDAuNywwLjQsMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0OC41LDM5Ny40LTE0OC42LDM5Ny44LTE0OSwzOTguMXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5Mi41LDM3OS4zbDE3LjcsMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMTEuMywxMS4zYzAuNiwwLjYsMS42LDAuNiwyLjIsMGwzMC4xLTMwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4zLDAuNS0wLjcsMC40LTEuMWMwLTAuNC0wLjEtMC44LTAuNC0xLjFsLTMwLjEtMzBjLTAuNi0wLjYtMS42LTAuNi0yLjIsMGwtMT'+
			'EuMywxMS4zQy0xOTMuMSwzNzcuNy0xOTMuMSwzNzguNy0xOTIuNSwzNzkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ni4xLDM5OC4ybC0zMy41LDMzLjRjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMTIuNS0xMi41Yy0wLjctMC43LTAuNy0xLjcsMC0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxOS43LTE5LjdsLTE5LjctMTkuN2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcs'+
			'Mi40LDBsMzMuNSwzMy40YzAuMywwLjMsMC41LDAuOCwwLjUsMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0NS42LDM5Ny40LTE0NS43LDM5Ny45LTE0Ni4xLDM5OC4yeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTk0LjQsMzc3LjNsMTkuNywxOS43bC0xOS43LDE5LjdjLTAuNywwLjctMC43LDEuNywwLDIuNGwxMi41LDEyLjVjMC43LDAuNywxLjcsMC43LDIuNCwwbDMzLjUtMzMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjMsMC41LTAuOCwwLjUtMS4zYzAtMC40LTAuMi0wLjktMC41LTEuMmwtMzMuNS0zMy40Yy0wLjctMC43LT'+
			'EuNy0wLjctMi40LDBsLTEyLjUsMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xOTUuMSwzNzUuNi0xOTUuMSwzNzYuNi0xOTQuNCwzNzcuM3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		me._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjhjLTMxLDAtNTYuMiwyNS4xLTU2LjIsNTYuMnMyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTE4LjgsMzY2LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU3LjUsNDE2LjlsLTExLjMsMTEuM2MtMC42LDAuNi0xLjUsMC42LTIuMiwwbC0zMC4yLTMwLjFjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOCwwLjQtMS4ybDMwLjItMzAuMWMwLjYtMC42LDEuNS0wLjYsMi4yLDBsMTEuMywxMS4zYzAuNiwwLjYsMC42LDEuNSww'+
			'LDIuMmwtMTcuNywxNy43bDE3LjcsMTcuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTYuOSw0MTUuNC0xNTYuOSw0MTYuMy0xNTcuNSw0MTYuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1Ny41LDQxNC43bC0xNy43LTE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMC42LTEuNSwwLTIuMmwtMTEuMy0xMS4zYy0wLjYtMC42LTEuNS0wLjYtMi4yLDBsLTMwLjIsMzAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4zLTAuNCwwLjctMC40LDEuMmMwLDAuNCwwLjIsMC44LDAuNCwxLjFsMzAuMiwzMC4xYzAuNiwwLjYsMS41LDAuNiwyLjIsMG'+
			'wxMS4zLTExLjNDLTE1Ni45LDQxNi4zLTE1Ni45LDQxNS40LTE1Ny41LDQxNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU1LjYsNDE5LjFsLTEyLjUsMTIuNWMtMC43LDAuNy0xLjcsMC43LTIuNCwwbC0zMy41LTMzLjRjLTAuMy0wLjMtMC41LTAuOC0wLjUtMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDMzLjUtMzMuNGMwLjctMC43LDEuNy0wLjcsMi40LDBsMTIuNSwxMi41YzAuNywwLjcsMC43'+
			'LDEuNywwLDIuNGwtMTkuNywxOS43bDE5LjcsMTkuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTQuOSw0MTcuNC0xNTQuOSw0MTguNC0xNTUuNiw0MTkuMXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1NS42LDQxNi43bC0xOS43LTE5LjdsMTkuNy0xOS43YzAuNy0wLjcsMC43LTEuNywwLTIuNGwtMTIuNS0xMi41Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTMzLjUsMzMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4zLTAuNSwwLjgtMC41LDEuM2MwLDAuNCwwLjIsMC45LDAuNSwxLjJsMzMuNSwzMy40YzAuNywwLjcsMS43LDAuNy'+
			'wyLjQsMGwxMi41LTEyLjVDLTE1NC45LDQxOC40LTE1NC45LDQxNy40LTE1NS42LDQxNi43JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		me._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE0My44LDM5Mi45bC0zMCwzMC4xYy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40bC0zMC4xLTMwLjFjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxMS4zLTExLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTcuNywxNy43bDE3LjctMTcuN2MwLjYtMC42LDEuNi0w'+
			'LjYsMi4yLDBsMTEuMywxMS4zQy0xNDMuMiwzOTEuNC0xNDMuMiwzOTIuMy0xNDMuOCwzOTIuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1Ny4zLDM3OS41bC0xNy43LDE3LjdsLTE3LjctMTcuN2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0xMS4zLDExLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwzMC4xLDMwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC4zLDAuNywwLjUsMS4xLDAuNGMwLjQsMCwwLjgtMC4xLDEuMS0wLjRsMzAtMzAuMWMwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTExLjMtMTEuM0MtMTU1LjcsMzc4LjktMTU2Lj'+
			'csMzc4LjktMTU3LjMsMzc5LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0MC40LDM5Mi41bC0zMy40LDMzLjVjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41Yy0wLjUsMC0wLjktMC4xLTEuMy0wLjVsLTMzLjQtMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOS43LDE5LjdsMTkuNy0xOS43YzAuNy0w'+
			'LjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM5LjcsMzkwLjctMTM5LjcsMzkxLjgtMTQwLjQsMzkyLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNTUuMywzNzcuNmwtMTkuNywxOS43bC0xOS43LTE5LjdjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzMuNCwzMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDMzLjQtMzMuNWMwLjctMC43LDAuNy0xLjcsMC0yLj'+
			'RsLTEyLjUtMTIuNUMtMTUzLjYsMzc2LjktMTU0LjYsMzc2LjktMTU1LjMsMzc3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		me._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE0My44LDQwMy4ybC0xMS4zLDExLjNjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTcuNy0xNy43bC0xNy43LDE3LjdjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwzMC0zMC4xYzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCww'+
			'LjEsMS4xLDAuNGwzMC4xLDMwLjFDLTE0My4yLDQwMS43LTE0My4yLDQwMi42LTE0My44LDQwMy4yeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTkyLjcsNDE0LjVsMTcuNy0xNy43bDE3LjcsMTcuN2MwLjYsMC42LDEuNiwwLjYsMi4yLDBsMTEuMy0xMS4zYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMzAuMS0zMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjMtMC43LTAuNS0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTMwLDMwLjFjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjMmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O0MtMTk0LjMsNDE1LjEtMTkzLjMsNDE1LjEtMTkyLjcsNDE0LjV6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0MC40LDQwMy45bC0xMi41LDEyLjVjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMTkuNy0xOS43bC0xOS43LDE5LjdjLTAuNywwLjctMS43LDAuNy0yLjQsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xMi41LTEyLjVjLTAuNy0wLjctMC43LTEuNywwLTIuNGwzMy40LTMzLjVjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVjMC41'+
			'LDAsMC45LDAuMSwxLjMsMC41bDMzLjQsMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzkuNyw0MDIuMi0xMzkuNyw0MDMuMy0xNDAuNCw0MDMuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5NC43LDQxNi40bDE5LjctMTkuN2wxOS43LDE5LjdjMC43LDAuNywxLjcsMC43LDIuNCwwbDEyLjUtMTIuNWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTMzLjQtMzMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC4zLTAuOC0wLjUtMS4zLTAuNWMtMC40LDAtMC45LDAuMi0xLjIsMC41bC0zMy40LDMzLjVjLTAuNywwLjctMC43LDEuNywwLD'+
			'IuNGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTk2LjQsNDE3LjEtMTk1LjQsNDE3LjEtMTk0LjcsNDE2LjR6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		me._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me._controles.appendChild(me._button_direction);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggDx=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQtNC40Qy0xOTYuOSwzNzIt'+
			'MTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMiw0MzIuMyYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNjNS44LDAsMTEuMS0yLDE1'+
			'LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'tjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDIuOCwzNjEuN2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2Yy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NkMtMTQzLjYsMzYxLjgtMTQzLjIsMzYxLjctMTQyLjgsMzYxLjciIGZpbGw9IiNG'+
			'RkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2gtNy43aC0wLjVjMC03Lj'+
			'ctMi42LTE0LjktNy0yMC42bC02LjQsNi40YzIuOCw0LDQuNCw4LjksNC40LDE0LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aC0wLjdoLTcuNmMtMC41LDAtMC44LDAuMi0xLjEsMC43Yy0wLjMsMC41LTAuMiwxLDAuMSwxLjNsMTIuOCwxNy44YzAuMywwLjQsMC42LDAuNiwxLDAuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjZsMTIuNy0xNy44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjYtMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNLTIwOSwzOTdjMC4xLDcuNywyLjcsMTQuOCw3LjEsMjAuNWw2'+
			'LjQtNi40Yy0yLjgtNC00LjUtOC44LTQuNS0xNC4xaDAuNmg3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN0gtMjA5eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS'+
			'41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTk4LjUsMzY3LjVjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmM4LjYsMCwxNi41LDIuOSwyMi45LDcuOGwtNy4yLDcuMmMtNC41LTMuMS05LjktNC45LTE1LjctNC45Yy02LjQsMC0xMi4zLDIuMi0xNyw1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Qy0xOTkuMywzNjkuMi0xOTkuMywzNjguMS0xOTguNSwzNjcuNXogTS0yMjEuOSwzOTdjLTAuNSwwLTAuOS0wLjItMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMiwwLjdoLTguNWgtMC43YzAuMSw1LjgsMS45LDExLjIsNSwxNS42bC03LjEsNy4xYy00LjktNi4zLTcuOC0xNC4yLTcuOS0yMi44aC0wLjZILTIyMS45eiBNLT'+
			'IxMC43LDQzNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjUsMC0xNi40LTIuOS0yMi44LTcuN2w3LjItNy4yYzQuNCwzLDku'+
			'OCw0LjgsMTUuNiw0LjhjNi40LDAsMTIuMy0yLjIsMTctNS45YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1MC43LDQyNC41LTE1MC43LDQyNS43LTE1MS41LDQyNi4zeiBNLTE0MS4xLDQxOS4xYy0wLjMsMC40LTAuNiwwLjYtMS4yLDAuNmMtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC'+
			'4zLDcuOCwyMi45aDAuNmg4LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTM5LjMsMzU3LjdjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM0MtMTQw'+
			'LjEsMzU3LjktMTM5LjcsMzU3LjctMTM5LjMsMzU3LjciIGZpbGw9IiNGRkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMzcxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTI2Lj'+
			'ksMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTguNi0yLjktMTYuNS03LjgtMjIuOWwtNy4yLDcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4xLDQuNSw0LjksOS45LDQuOSwxNS43aC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjhDLTEyNi43LDM5OC44LTEyNi42LDM5OC4zLTEyNi45LDM5Ny43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0yMTIuNywzOTdjMC4xLDguNiwzLDE2LjUsNy45LDIyLjhsNy4xLTcuMWMtMy4xLTQuNC01LTkuOC01LTE1LjZoMC43aDguNWMwLjUsMCwwLjktMC4yLDEuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZILTIxMi43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIC'+
			'A8cGF0aCBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1LjIsNDE5LjQtMTU1LjgsNDE4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwx'+
			'LDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LDM5N3ogTS0xNDQuNSw0MT'+
			'YuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBjMTguNywwLDM0LDE1LjIs'+
			'MzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy0wLjQtMC42LTAuNi0xLT'+
			'AuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0xNS4zLDIuOC0yMS4xLDcu'+
			'NCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii'+
			'BmaWxsPSIjRkZGRkZGIi8+CiAgPGNpcmNsZSBjeD0iLTE3NSIgY3k9IjM5NyIgcj0iNCIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAuNi0wLjYsMS4yLTAuNmMw'+
			'LjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC40LDIsNC40LDQuNGMwLD'+
			'IuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45Yy0wLjctMC44LTAuNi0y'+
			'LDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy43LTEyLjQtMjcuNy0yNy'+
			'43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTEyNi45LDM5'+
			'Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLj'+
			'YsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxjaXJjbGUgY3g9Ii0xNzUiIGN5PSIzOTciIHI9IjQuNCIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me._controles.appendChild(me._button_auto_rotate);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=110;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGhlaWdodD0iMjIuMiIgeD0iLTIwNi4yIiB3aWR0aD0iMzIuMSIgeT0iMzk3IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4zLDEuOS00LjIsNC4yLTQu'+
			'MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjEtMC4zLDAuNC0wLjYsMC44LTAuNmMwLj'+
			'QsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPH'+
			'BhdGggZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGhlaWdodD0iMjQuNiIgeD0iLTIwOS42IiB3aWR0aD0iMzUuNyIgeT0iMzk3IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7JiN4OTtjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDUuOC0xNy4xYzAuMS0wLjQsMC40LTAuNywwLjgtMC43Yz'+
			'AuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNz'+
			'IuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAuM2wtMy45LTUuNGMwLDAt'+
			'MTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAuNS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLjMsMC00LjItMS45LTQuMi'+
			'00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE3LjcsMTIuNy0xNy43LDEyLjdjLTAuNywwLjUtMC44LDEuNS0wLjQsMi4xbDEuNCwxLjljMC41'+
			'LDAuNywxLjUsMC44LDIuMSwwLjRjMCwwLDE3LjYtMTIuNywxNy43LTEyLjdsMy45LDUuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC40LDAuNCwwLjksMC4zYzAuNCwwLDAuNy0wLjMsMC44LTAuNmw1LjItMTUuNEMtMTQ3LjIsMzc4LjQtMTQ3LjIsMzc4LjEtMTQ3LjQsMzc3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTS0xNDIuNyw0MjQuNmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43YzIuMywwLDQuMiwxLjksNC4yLDQuMnY0Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzOC40LDQyMi43LTE0MC4zLD'+
			'QyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00LjMtNmMtMC4xLDAuMS0x'+
			'OS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi42LDAtNC43LTIuMS00Lj'+
			'ctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMTkuNywxNC4xLTE5LjcsMTQuMWMtMC44LDAuNS0wLjksMS42LTAuNCwyLjRsMS41LDIuMWMwLjUs'+
			'MC44LDEuNiwwLjksMi40LDAuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWw0LjMsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC41LDAuNCwxLDAuNGMwLjUsMCwwLjctMC4zLDAuOC0wLjdsNS44LTE3LjFDLTE0NC4xLDM3Ni4zLTE0NC4xLDM3Ni0xNDQuMywzNzUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTEzOS4xLDQyNy42aC03MS44Yy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTUxLjhjMC0yLjYsMi4xLTQuNyw0LjctNC43aDcxLjhjMi42LDAsNC43LDIuMSw0LjcsNC43djUxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM0LjQsNDI1LjUtMTM2LjUsNDI3LjYtMT'+
			'M5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me._controles.appendChild(me._button_fullscreen);
		me._controller.appendChild(me._controles);
		me._container_1.appendChild(me._controller);
		el=me._show_controller_button_1=document.createElement('div');
		els=me._show_controller_button_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iLTM1NjYgLTI2MDYgMzIgMzIiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMH'+
			'B4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzU2NiAtMjYwNiAzMiAzMiIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSIvPgogPGcgaWQ9IkxheWVy'+
			'XzIiPgogIDxnPgogICA8Zz4KICAgIDxjaXJjbGUgb3BhY2l0eT0iMC40IiBjeD0iLTM1NTkuMzMzIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBjeT0iLTI1OTAuMzc2IiByPSIyLjc2IiBmaWxsPSJub25lIi8+CiAgICA8Y2lyY2xlIGN4PSItMzU1OS4zMzMiIGN5PSItMjU5MC4zNzYiIHI9IjIuNzYiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxjaXJjbGUgY3g9Ii0zNTU5LjMzMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgY3k9Ii0yNTkwLjM3NiIgcj0iMi43NiIgZmlsbD0ibm9uZSIvPgogIC'+
			'A8L2c+CiAgIDxnPgogICAgPGNpcmNsZSBvcGFjaXR5PSIwLjQiIGN4PSItMzU0MC42NjciIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGN5PSItMjU5MC4zNzYiIHI9IjIuNzYiIGZpbGw9Im5vbmUiLz4KICAgIDxjaXJjbGUgY3g9Ii0zNTQwLjY2NyIgY3k9Ii0yNTkwLjM3NiIgcj0iMi43NiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPGNpcmNsZSBjeD0iLTM1NDAuNjY3IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBjeT0iLTI1OTAuMzc2IiByPSIyLjc2IiBmaWxsPSJub25lIi8+CiAgIDwvZz4K'+
			'ICA8L2c+CiAgPGc+CiAgIDxjaXJjbGUgb3BhY2l0eT0iMC40IiBjeD0iLTM1NTAiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGN5PSItMjU5MC4zNzYiIHI9IjIuNzYiIGZpbGw9Im5vbmUiLz4KICAgPGNpcmNsZSBjeD0iLTM1NTAiIGN5PSItMjU5MC4zNzYiIHI9IjIuNzYiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeD0iLTM1NTAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGN5PSItMjU5MC4zNzYiIHI9IjIuNzYiIGZpbGw9Im5vbmUiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._show_controller_button_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_controller_button_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iLTM1NjYgLTI1NzEuMzMzIDMyIDMyIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIH'+
			'g9IjBweCIgd2lkdGg9IjMycHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM1NjYgLTI1NzEuMzMzIDMyIDMyIiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIi8+CiA8ZyBp'+
			'ZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnPgogICAgPGNpcmNsZSBvcGFjaXR5PSIwLjQiIGN4PSItMzU2MC4yNjYiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGN5PSItMjU1NS43MDkiIHI9IjMuMDM2IiBmaWxsPSJub25lIi8+CiAgICA8Y2lyY2xlIGN4PSItMzU2MC4yNjYiIGN5PSItMjU1NS43MDkiIHI9IjMuMDM2IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8Y2lyY2xlIGN4PSItMzU2MC4yNjYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGN5PSItMjU1NS43MDkiIHI9IjMuMDM2IiBmaWxsPS'+
			'Jub25lIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8Y2lyY2xlIG9wYWNpdHk9IjAuNCIgY3g9Ii0zNTM5LjczMyIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgY3k9Ii0yNTU1LjcwOSIgcj0iMy4wMzYiIGZpbGw9Im5vbmUiLz4KICAgIDxjaXJjbGUgY3g9Ii0zNTM5LjczMyIgY3k9Ii0yNTU1LjcwOSIgcj0iMy4wMzYiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDxjaXJjbGUgY3g9Ii0zNTM5LjczMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgY3k9Ii0yNTU1LjcwOSIgcj0iMy4wMzYiIGZpbGw9Im5v'+
			'bmUiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPGNpcmNsZSBvcGFjaXR5PSIwLjQiIGN4PSItMzU1MCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgY3k9Ii0yNTU1LjcwOSIgcj0iMy4wMzYiIGZpbGw9Im5vbmUiLz4KICAgPGNpcmNsZSBjeD0iLTM1NTAiIGN5PSItMjU1NS43MDkiIHI9IjMuMDM2IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxjaXJjbGUgY3g9Ii0zNTUwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBjeT0iLTI1NTUuNzA5IiByPSIzLjAzNiIgZmlsbD0ibm9uZSIvPgogIDwvZz'+
			'4KIDwvZz4KPC9zdmc+Cg==';
		me._show_controller_button_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="show_controller_button_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_controller_button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._show_controller_button_1.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._show_controller_button_1.onmouseover=function (e) {
			me._show_controller_button_1__img.style.visibility='hidden';
			me._show_controller_button_1__imgo.style.visibility='inherit';
			me.elementMouseOver['show_controller_button_1']=true;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button_1.onmouseout=function (e) {
			me._show_controller_button_1__img.style.visibility='inherit';
			me._show_controller_button_1__imgo.style.visibility='hidden';
			me.elementMouseOver['show_controller_button_1']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button_1.ontouchend=function (e) {
			me.elementMouseOver['show_controller_button_1']=false;
			me._tt_show_controller.logicBlock_visible();
		}
		me._show_controller_button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=2000;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_timer.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='1';
			me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='0';
			me._show_controller_button.style.visibility='hidden';
		}
		me._hide_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._show_controller_button.style[domTransition]='none';
			} else {
				me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show_controller_button.style.opacity='1';
			me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='0';
			me._controller.style.visibility='hidden';
		}
		me._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._show_controller_button_1.appendChild(me._hide_timer);
		el=me._tt_show_controller=document.createElement('div');
		els=me._tt_show_controller__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_show_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Controller";
		el.appendChild(els);
		me._tt_show_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_show_controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_show_controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_show_controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_show_controller.style[domTransition]='left 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_show_controller.style.top='-25px';
					me._tt_show_controller.ggUpdatePosition(true);
				}
				else {
					me._tt_show_controller.ggDx=0;
					me._tt_show_controller.style.top='32px';
					me._tt_show_controller.ggUpdatePosition(true);
				}
			}
		}
		me._tt_show_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['show_controller_button_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_show_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_show_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_show_controller.style[domTransition]='left 0s, top 0s';
				if (me._tt_show_controller.ggCurrentLogicStateVisible == 0) {
					me._tt_show_controller.style.visibility=(Number(me._tt_show_controller.style.opacity)>0||!me._tt_show_controller.style.opacity)?'inherit':'hidden';
					me._tt_show_controller.ggVisible=true;
				}
				else {
					me._tt_show_controller.style.visibility="hidden";
					me._tt_show_controller.ggVisible=false;
				}
			}
		}
		me._tt_show_controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._show_controller_button_1.appendChild(me._tt_show_controller);
		me._container_1.appendChild(me._show_controller_button_1);
		me.divSkin.appendChild(me._container_1);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan03';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggMarkerArray=[];
		me._map_1.ggGoogleMarkerArray=[];
		me._map_1.ggLastZoom = -1;
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#ff0000',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_1.ggInitMap=function(keepZoom) {
			me._map_1.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(0,0);
			}
			if (mapType == 'web') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails['styleurl'] == '') {
						L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_1.ggMap);
					} else {
						var styleurlstring = mapDetails['styleurl'];
						styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
						L.tileLayer('https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map_1.ggMap);
				}
			} else if (mapType == 'file') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					zoomControls: true,
					attributionControl: false
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map_1.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map_1.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map_1.ggMap);
				me._map_1.ggMap.on('move zoom', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
				me._map_1.ggCheckBounds(mapDetails);
			}
		}
		me._map_1.ggClearMap=function() {
		if (me._map_1.ggMap) me._map_1.ggMap.remove();
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map_1.ggMap);
				}
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		me._map_1.ggCenterNode=function() {
			if (!me._map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map_1.ggFitBounds=function(force) {
			if (me._map_1.ggMarkerBounds.isValid()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					me._map_1.ggMap.zoomOut(1, {animate: false});
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._map_1.ggMap.setView(me._map_1.ggMarkerBounds.getCenter(), me._map_1.ggMap.getZoom());
					if (player.getMapType(me._map_1.ggMapId) == 'web') {
						me._map_1.ggMap.setZoom(18);
					} else {
						me._map_1.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map_1.ggInitMapMarkers=function(updateMapBounds) {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var mapIcon = L.icon({iconUrl: basePath + 'images/_ggMapPin.png', iconRetinaUrl: basePath + 'images/_ggMapPin.png', iconSize : [40, 40], iconAnchor: [20, 40]});
					marker = L.marker(markerLocation, {title: player.getNodeTitle(id), icon: mapIcon});
					marker.ggId=id;
					marker.on('click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					marker.addTo(me._map_1.ggMap);
					me._map_1.ggGoogleMarkerArray[id] = marker;
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map_1.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			skin.updateSize(me._map_1);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			if (me._map_1.ggMap) {
				me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(true);
			me._map_1.ggInitMapMarkers(false);
		var mapDetails = player.getMapDetails(me._map_1.ggMapId);
		me._map_1.ggCheckBounds(mapDetails);
		}
		me._map_1.ggInCheckBounds=false;
		me._map_1.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				var mapWidthInDeg = tileInDeg * (tmpWidth / 256);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				var mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				var mapWidthInDeg = mapHeightInDeg * mapAR;
			}
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			if (mapWidthInDeg < me._map_1.clientWidth * pixelInDeg) {
				x = mapWidthInDeg / 2;
			} else {
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			}
			if (mapHeightInDeg < me._map_1.clientHeight * pixelInDeg) {
				y = -mapHeightInDeg / 2;
			} else {
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			}
			var newCenter = L.latLng(y, x);
			me._map_1.ggMap.setView(newCenter, me._map_1.ggMap.getZoom(), {animate: false});
			me._map_1.ggInCheckBounds = false;
		}
		me._map.ggMarkerInstances=[];
		me._map.ggMapId = 'FloorPlan01';
		me._map.ggLastNodeId=null;
		me._map.callChildLogicBlocksHotspot_map_pin_changenode = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_configloaded = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_active && me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling) {
						me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling();
					}
					if (me._map.ggMarkerInstances[i]._map_pin_normal && me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling) {
						me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_active = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_active && me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha();
					}
					if (me._map.ggMarkerInstances[i]._map_pin_normal && me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha) {
						me._map.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha();
					}
				}
			}
		}
		me._map.callChildLogicBlocksHotspot_map_pin_hastouch = function(){
			if(me._map.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map.ggMarkerInstances.length; i++) {
					if (me._map.ggMarkerInstances[i]._map_pin_tt && me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map.ggRadar.update=function() {
			var radar=me._map.ggRadar;
			var map=me._map.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
				pan -= me._map.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map.ggFilteredIds.length > 0 && me._map.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#aa0000',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#aa0000',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggInitMap=function(keepZoom) {
			me._map.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(0,0);
			}
			if (mapType == 'web') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._map.ggMap = L.map(me._map, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails['styleurl'] == '') {
						L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{}).addTo(me._map.ggMap);
					} else {
						var styleurlstring = mapDetails['styleurl'];
						styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
						L.tileLayer('https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{}).addTo(me._map.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map.ggMap);
				}
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					zoomControls: true,
					attributionControl: false
				};
				me._map.ggMap = L.map(me._map, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map.ggMap);
				me._map.ggMap.on('move zoom', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				me._map.ggCheckBounds(mapDetails);
			}
		}
		me._map.ggClearMap=function() {
		if (me._map.ggMap) me._map.ggMap.remove();
		me._map.ggMap = null;
		me._map.ggClearMapMarkers();
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map.ggMap);
				}
			}
			me._map.ggMarkerArray=[];
			me._map.ggMarkerInstances=[];
			me._map.ggLastActivMarker = null;
		}
		me._map.ggCenterNode=function() {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map.ggFitBounds=function(force) {
			if (me._map.ggMarkerBounds.isValid()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					me._map.ggMap.zoomOut(1, {animate: false});
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._map.ggMap.setView(me._map.ggMarkerBounds.getCenter(), me._map.ggMap.getZoom());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						me._map.ggMap.setZoom(18);
					} else {
						me._map.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					this._div = div;
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._div.style.left = -12 + 'px';
					this._div.style.top = -41 + 'px';
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._map.ggMap);
					me._map.ggMarkerArray[id]=marker;
					me._map.ggMarkerInstances.push(div);
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
		me._map.callChildLogicBlocksHotspot_map_pin_changenode();
		me._map.callChildLogicBlocksHotspot_map_pin_configloaded();
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map.callChildLogicBlocksHotspot_map_pin_active();
		me._map.callChildLogicBlocksHotspot_map_pin_hastouch();
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			if (me._map.ggMap) {
				me._map.ggLastZoom = me._map.ggMap.getZoom();
			}
			me._map.ggMapId = mapId;
			me._map.ggClearMap();
			me._map.ggInitMap(true);
			me._map.ggInitMapMarkers(false);
		var mapDetails = player.getMapDetails(me._map.ggMapId);
		me._map.ggCheckBounds(mapDetails);
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				var mapWidthInDeg = tileInDeg * (tmpWidth / 256);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				var mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				var mapWidthInDeg = mapHeightInDeg * mapAR;
			}
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			if (mapWidthInDeg < me._map.clientWidth * pixelInDeg) {
				x = mapWidthInDeg / 2;
			} else {
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			}
			if (mapHeightInDeg < me._map.clientHeight * pixelInDeg) {
				y = -mapHeightInDeg / 2;
			} else {
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			}
			var newCenter = L.latLng(y, x);
			me._map.ggMap.setView(newCenter, me._map.ggMap.getZoom(), {animate: false});
			me._map.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			if (me._map.ggMapNotLoaded == false) {
				me._map.ggClearMap();
				me._map.ggInitMap(false);
				me._map.ggInitMapMarkers(true);
			}
			me._category_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._category_scroller.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_tooltip && hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_image && hotspotTemplates['ht_node'][i]._ht_image.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_image.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_image && hotspotTemplates['ht_node'][i]._ht_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_image_background && hotspotTemplates['ht_node'][i]._ht_image_background.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_image_background.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_tooltip && hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._hide_controller_timer.ggLastIsActive!=me._hide_controller_timer.ggIsActive()) {
			me._hide_controller_timer.ggLastIsActive=me._hide_controller_timer.ggIsActive();
			if (me._hide_controller_timer.ggLastIsActive) {
				player.setVariableValue('vis_auto_hide_controller', true);
			} else {
				player.setVariableValue('vis_auto_hide_controller', false);
			}
		}
		if (me.elementMouseOver['hide_controller_container']) {
			me._hide_controller_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_controller_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._map_1.ggUpdateConditionTimer();
		me._map.ggUpdateConditionTimer();
		if (me.elementMouseOver['controller']) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			player.changeTiltLog(0.5,true);
		}
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='1';
				me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='0';
				me._show_controller_button.style.visibility='hidden';
			} else {
				if (player.transitionsDisabled) {
					me._show_controller_button.style[domTransition]='none';
				} else {
					me._show_controller_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._show_controller_button.style.opacity='1';
				me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='0';
				me._controller.style.visibility='hidden';
			}
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 53px;';
		hs+='position : absolute;';
		hs+='top : 85px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_image.logicBlock_scaling();
			me._ht_image.logicBlock_alpha();
			me._ht_image_background.logicBlock_scaling();
			me._ht_tooltip.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._ht_image.logicBlock_scaling();
			me._ht_image.logicBlock_alpha();
			me._ht_image_background.logicBlock_scaling();
			me._ht_tooltip.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_image.logicBlock_scaling();
			me._ht_image.logicBlock_alpha();
			me._ht_image_background.logicBlock_scaling();
			me._ht_tooltip.logicBlock_alpha();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image=document.createElement('div');
		els=me._ht_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_image_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 50%;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateScaling == 0) {
					me._ht_image.ggParameter.sx = 1;
					me._ht_image.ggParameter.sy = 1;
					me._ht_image.style[domTransform]=parameterToTransform(me._ht_image.ggParameter);
				}
				else {
					me._ht_image.ggParameter.sx = 0;
					me._ht_image.ggParameter.sy = 0;
					me._ht_image.style[domTransform]=parameterToTransform(me._ht_image.ggParameter);
				}
			}
		}
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image.style.opacity == 0.0) { me._ht_image.style.visibility="hidden"; } }, 505);
					me._ht_image.style.opacity=0;
				}
			}
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._ht_image);
		el=me._ht_image_background=document.createElement('div');
		el.ggId="ht_image_background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_image_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_background.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_background.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_background.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_background.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_image_background.ggCurrentLogicStateScaling == 0) {
					me._ht_image_background.ggParameter.sx = 1;
					me._ht_image_background.ggParameter.sy = 1;
					me._ht_image_background.style[domTransform]=parameterToTransform(me._ht_image_background.ggParameter);
				}
				else {
					me._ht_image_background.ggParameter.sx = 0.8;
					me._ht_image_background.ggParameter.sy = 0.8;
					me._ht_image_background.style[domTransform]=parameterToTransform(me._ht_image_background.ggParameter);
				}
			}
		}
		me._ht_image_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._ht_image_background);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 65px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.313725);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 7px 4px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_tooltip.style[domTransition]='opacity 500ms ease 0ms';
				if (me._ht_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_tooltip.style.visibility=me._ht_tooltip.ggVisible?'inherit':'hidden';
					me._ht_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_tooltip.style.opacity == 0.0) { me._ht_tooltip.style.visibility="hidden"; } }, 505);
					me._ht_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._ht_tooltip);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup_2', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImJhc2ljIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4'+
			'Ljg1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMS4zMTMsNy4wMj'+
			'IsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8'+
			'cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5aC0xLjIwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNi'+
			'wxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0w'+
			'LjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bD'+
			'AsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYxLTAuNTM2LDEuMTk2'+
			'LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS'+
			'4yMDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9ImJhc2ljIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEy'+
			'LjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMz'+
			'E0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4y'+
			'NDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBmaWxsPSIjRkZGRkZGIj4KICA8Zz4K'+
			'ICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLj'+
			'k2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEs'+
			'MC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4yNDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2'+
			'MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIv'+
			'PgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.59999;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #7a7a7a;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-208;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 291px;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			if (
				(
					((player.getVariableValue('vis_map_close_desktop') == true)) && 
					((player.getHasTouch() == false))
				)
			||
				(
					((player.getVariableValue('vis_map_close_mobile') == true)) && 
					((player.getHasTouch() == true))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
		}
		me._map_pin.onmouseover=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseout=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ontouchend=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAATIUlEQVR4nMWba3Bcx3Xnf6e77wxmQFLiA5Yl0SQlK5JsQpJtWCJVVhKwnCwp26mkolBVydbWVqKqPKryIZ9clVQSM0pixS57vYmTKEqZ5Yo363VZeViJYlMVe4lNLJESRclLgqHEOLT4BgmAIDDPe293n3y4M8AIJEGAguSDupiZO7cf/z6nz/n36R7hOuTrO7EAjz5NAFAwz2299wNC/EiEB1DuBt1kRNYqCICARtVJkDcQXjPwkmKe377/0PcE4pXqXYrIUh5WMCPDw2bbyIgH2HP/+zeLMf9VhZ8xIu/rdxYAr5DHSFB9U3krQmIMrtNqwwei6lFRvqEx/u8dB/7tCMDe4WE3PDISuwCXFchTQ0PJrxw8mAP80wODHzaG3xL4mZXOSY6ShqgxBO'+
			'+9F9UgghgRI7MtKKhGVTSKWHXOqbHWla2RBKHmvSp8I0Y+/fGXRl+e3+ZyAJG9w8N228iI/8ehO9clSemzVuQXK9bQjEoIIc/z1AjG9q9YwapVN7ByxQoq5RIll4B0mlAl8zmtNKNWrzMzM02jXkeJIUnK0VqbVI3QCpGg+uU8zz75UwePTewdHnbbRkZCMRTXCWQXmE+BCuieLff8NKK7Vzq7thFUYww+S1NX6e+Xd990E+9as5ZV/VVKzmGMKfp+lcZijGTeM9NocuHiJGPnz9NqNrRUKntjrOu3IjUfJlF5bMeLh59RkN8D2bWAqV0ViILp2uhzWwY/3efMb3oFr5qlabtUqVTZ9J4N3DKwjkq53OmgoqrowoOHIIgIxhTNt9KUs+MTvHHyJK12k3K5L3MiJSfQ9vGJ7S+O/tb8Pi0KSG+BPVvu+eoNifn5magh'+
			'hojPU7thw0beu3491b4+YoyEWNQtsiTfgXacgTUGYwzNdpv/OH2akydP4JJyMNawyoidzuP/2fHi4V9YCMxlLWth1QqwZ+vg39zg7CMzIWbe50niEnn/nXdx89q1RJTYBbA053c5IOYACcK5yUn+7djr5D5X55J8lTWlaR/+dsf+0Z+b38eumPmVPr2zuPfc1sEv3eDsI7WoaZ7npWp1hTxw333csm4tPgRiiMjsSOhburr1hBDxwXPLurU8cN99VKsrJM/zUi1qeoOzjzy3dfBLvX3sFdv74eWhoeQnv33O73lw82+scu43a0HzPM9KK/r7uX/zIP2VCrn3GOkC6PGtl32Wea+93zPvOTqACt36EKiUy7xrzRomLl2i1W47LyZf6eyHd966bvqnnxvf9/LQUPKX587NmthszR035/c8uPkBi3kxAsF77euryP2Dg1'+
			'TLZXwIS54H1yuqirOWZppyYHSUdrul1jkxQCBu2bHvyEvdPkPHtBSkewOV3YkRVNWLEbnvrruolsvkwXdCwlszo0Wbm0AePNVymXvvuhMREVX1iRFQ2Q2wbWTEdymQAfjLoSEHsGfr5k+ucnYwjWRZlrq7b7+D1StWFOaELKkvqoU77r10iXgMgveeNStWcvd77yDLUpdGslXODu7ZuvmTvX2XXWB2QXz2oXtWO6//nhiztpmm8V3rBsyH7ryT2JmMizeJwgtZMTgz5w5A8VEJGjtxZAl1UoB65dgxLkyMx2q5bPIYJ72TH/nEdw9P7QJjfnx42AA4r7+20tm1PmpurTF3rF+PEYGoix7BGBUnQtk6fIycrTc5MT3DiekZztab+BgpW4cTIS6hXqJiRLhj/XqsNcZHzVc6u9Z5/TWAHx8eLkLrNx++o2ymyq+VrdtU'+
			'b7fCe25Zb+/ZtAkfw6JjRFSl7BxT7TYjp87yT8dPsPvYDwoVAYjw2J238fHbNzL8nltY3ddH6n0xWIvSiuKM5fAbb3Dq7Omwoq9i0+DfiKvTuz/2re+nDsBcrOyoOtnUitEbY9yt69YVJtLrHRdqRJWytXzvwgS//p3v8vz45Ox3a2zh8i+GyO7Xj7P79eN8ZGAtf/rRh/jAwFrSRXrCbn9uXbeOM2NnbRajr1q7qXmxsgN4phNY9GetMeR5zpobV7OqUiHEUGDo1nCVK8ZI2VqePzPGB7/2DM+PT3J3f4UBZymJMB0i0yFSEmHAWe7ur/D8+GTx7JkxytYWDOEa7QgQYmBVpcKaG1eT5znWGEB/FsC88OCDFYThrKDkZuDGNThjCh50rTmhSp+1fH9qmof+7psAbCyXeK3RYtwHclUiBTHKVRn3gdcaLTaWSwjw0N'+
			'99k3+fmqbPWuIi2lNVnDEM3LiGEILJooIw/MKDD1ZMLdbfb0Q2pCFQShJZ3V9d1AihigFSH/iTVw8DcFtfiRNp9qb43nvRsdQTacamvhIAX3z1MKkPnYB27TZjjKzur1JKEklDwIhs6GDgnqo1xBh9pVKRSqmEql6TQ0WNlIzhtYtTfPHIMW4rl/hBO8P0dPqKtk4RvH7QzritXOKLR47x2sUpSsYQNS7YplBopVIqUalUJMboq9Ygwj0mwvuMCCFGqn0VEmvRK7nG3p50w6kqr1yYeFNHF7PInv/MKxcmZufBZe313lPQqCTWUu2rEGLEiBDhfU7RDcXDqtVSaRb1ZY5kXuVCkWA4OjkFgNeF9HBl6ZY5OjlFHmOPFVwBTLcbWiwbqqUS3QWNohucwE2hmEhSTkpznmpR8UNJvZ99v3QpyqTed+bAYooUmisnJVRV'+
			'QmEdNzlFk+4zZna5sshKL+/T9ZdZLJBO33oDqaKJE5lXXAtyJ3L1WrvfWAwDlT5g6cvc3jIDlb6CINJdcS4AQ7v/eupR1KHiu6VDjJ34odekilEV64R7160FILkOIN0y965bixUhCwWnWlAxWiQ4QoxziEWCQ2XMCIiIplk6mxCYj3o+riLSRj44sAaAsSwjEcHrtXIoRVknwliWAfDBgTWE7mSf5WYUqr/CAlNVSbMUEdFOIua8QfS4UNhcM02JehVdzHPHAmQhsL6/ypd/bAsNhburfbNtLwRCKZ5tKHz5x7awvr9KFsKby+m81573qkoryxApKK0ox40gR6MqxlhppG1y72dd8GL4jw+RR27fyGN3bOJwo8W9/RVKC5hZSYR7+yscbrR47I5NPHL7Rnzo0cYi2ETuPY20jRhrYmEBR11UPVz3ASPi2mmqrSyTUq'+
			'XSddgLiiD4GKlayxNbPwQou79/AgfcXk6I82zMCJxMcw41Wjx2x0ae2PohqtaSdQLbtdyWdrxVO89pp6laEdvwgWjiqNM17ddlqu8HJWtum8kzrbVasrpS6WTSrzWBixHKQmBNucT//MgDPPTum/jF5w9wPL1K7lmEL3/kfn7uvRupOEtW8KXL5+RVkAhQa7XIvdcV5bKkMZ6xDXfMfexb30/3bB08UBJzmzEmTjXqZv3q1XNDsAgxImQhUjaG/37Xe/mJ9TdzaOIiR6YuMZMWE3pVucTm1Tdy77o13NpfxcdIFuLiQfSAmWo2EJFYMsZkGl7efuhQw3W+/WdFH7XGcqlRJ81zStZxbf8zV7kBgirBe26uVli/cT3bN9w66wVFBCtC0A4bEJljvIuUgm17LtXrOGu1cNTm2wAOIDGyt+6Dd8a4ZprqdKspN61chY9L'+
			'Szx0n81DIFO9LEh2773JzS5SlCKlWm+3aaZtdc4lNR8QY0YAjIJ89IXR/wD291kDQhiv1eYC47UdyWUXHWJ3ucsu7l1Pnd2F3kS9RtAY+4xB0Ve3v3BoFIqtNAsgyjMWsMYyWa/RznNEpGNeP9xLUQxC6nPGazMk1sVEBFGehSJLasYHRrQwi/BMrWNerTTVqWazZ9XW+9p9r/Pam/95Md/pFeqb307xagSmWy0a7ZYaMUk9BBD7DYDxgQEVKHamdkHcs3Xzt/ud++h0mvl3rbrB3XfresLVIv07KN21+pGxc5yemgyrSmXbjOHlh/eN3t99xkCR4AIQ+F8COFuYVz1NsXTt84dzqRZEspXnTNRrJMZFJyCRr0GxYToLZLjYbKTqzD/Ucj+RGOPy4OOFWq0zQRcym7f7KubHRL1OK0ujNZLUfGgHG/4G4NzBg2EWiI'+
			'DuHR52P/rdw1Mi8nSfMSTWhbGZaTKfFwnsHxKS7n7JuZlprLGxYg0K3/r4C0dPfH0ndlcnBTC78zM+MFBMepXdjRCwYlwtbTHZbBZrhB+CVlQVK8J0q8WlVgNnrQRVUPkSwMD48Oz0nc+cjUDcs3Xw//Zbu20mz/2aar/74C23LjV+LYsoYI0wen6MszNTYWVSsu0Qj27fP7p5wT3Ekc6kNyJPKsWO0WSzwaVWC9vVyjukjkIbUE9TxjuTPClyCrsFtDvJrwikO+mT8tq/b4ZwrGzEKTGcmZmhw/vfOYcFgHCuViPzPjpjknoeLjn4a5ib5FcE0kW6bWTEC+YvEhFKxsUL9RlqaYoV5rQyXzvLqa0OCW3nOWO1aRJrQ6XYgf3qT7w4en7v8LDbNS/Pd9k27y8fPOgBVOJf1byfcMYkeQzxXG0G0R7+xLz2539ehkl+'+
			'vl6jlWdqjElqPpCb8CRAl40sCKSrlR37jlxU4UsVI5SsC2P1GZp5NqeVtzkAZt5ztjaDM9b3W4PA33/ihaOjX9+5017pPNdlQDpaKYKMlz+fyUPDiiRtn8cztZmetfXyaeDNV2FWFxoNamlbjYhNY0Sj+QLAwPj4FRnTFYEIxL3Dw277gdFTCF+pWkPJuHC2Nk0rzzu5p7cHSTehcbo2jTEmVK01edSRHS8d+tddMHvobVFAAIZHRiKAWvPHNR+CMZKkPtdzjXpxXOJt0Ep3bky0mkynLZwx4lVB9DMwxwmXBKSrlYefP/Q68JV+a3DG+dMz0zTzgrYst1YE8DFyauYSRoyvGGPTGF/ase/IHu091LAUIDDnHaLq52o+RGskaflcz9Zr2CL5tayT3Iow2WwyVWijA5DPA3QXgAsM/MIyd0Zl8Csrrf1vNR9yKya5/6'+
			'abi41MfXN2cynSLdNb9tXxMS5laVjhrG2F+P937B/9wGLqWlAj0OOzTfxMzQc1hQfTs406QkFbuia21L/ZMh2Xe6HV5GLaIjFGO2cmnugO5rX6uahBnNXKlsHdKxP7SzUfciOS3D9wM2U3p5W3Kq9MnKeWpb7fWdcK8cCO/aMP9PRTFyp7TY3AnFbUmc/WfAhGJEmD1zONWk9uSudee9/3zgXm3WOOHF5oNbiUtjqn6AAtPFVHGwuC6CJdlHTP4O7ZOvjkSmd/teZDLpB8eODdVK0r1vbXeZZLVXll8gK1POvOjZd27B/dolc48nc1WZRGAFbffrCIK7jP1HxoW5EkiyGertfmRuN6PBVwvtXkUtbueCoQ4ffh2p7quoA8+jThqaGh5OH933tD0Cer1pAYG862GtTybC5JsYS4YYAsBk42ZnCduNHy8V+27xt9dtcC'+
			'UfwtAYG5NYAPfHbGh5oTSXwMerLRq5XFXV1tjDWbxUAYI0EVY8zjsHAUf8tAdkF8amgo+fiBI2Oi+oWKNZSM9YVpLD51pJ3MSDt4TjVrOLG+aoxNY/jWf9l36Dtf34ldijaWDATmtGJ963/UfDjvjEmCajzZqMFi3XBHG2eaTZo+VyfYNEai2sfhzUmFxcqSgeyC+PLQUPKTB49PK/qZPiOUjA0X0haTaRtDseOrC1xGhIbPOd2qkxjrq85Krvq1j714aH/vydG3FQjAUGcVWavxZzN5OF4ykggSTjRrhKjI/MX3PLMShVPNBmkomELdhxjgcbjy6u9tA9JdRT565EhmRB93IjgxejFLmUi7GZfu03P9UgWLUPMZZ9tNEmN8vzUg8uQn9o8e3Ts87K7n1zzXDQSg8wMV2b7/yF81Qnilz4ozRsKJVmPugMz8id5xWS'+
			'ebDXyM6kSSmg91nP9DgP/XWQO9o0AA9nb3VoRPATgxTOcZ59utnoxLIarFIYFLWcb5tEXJmOKsFXxux78ePffy0FCyawk/RVpWINtGRvwuMNv3jT7bCvHbVWOsM8afbDVIQ+gcei60IRSn30606iiExEgy4/3ZUp9+HuDZeXmqdxQIzAUuNfK7aYxYMI3gOdsuNoq6nsoijGcpE3lKSUwsGQPI728bOVJ/6i1qA5aHfffQ/Hu+uiIxP1/3ITeQDK1aQ58xs87r1doUtRhCvzG2FePhh/eP3rsc7cMyaATmXKYYHq93aX6MerrdRBSswFja4lLIcVIcJxeV34HFLZoWI8sCpEsot+87/Brok/3WkBjjz2YtGsGTx8gbaZNEjK8aY1shfGfHi4ef2bVEYriQLAsQmKMu5cAfzhFKjafTFqfSFu0Y1DBLRX4b4P07dy7b'+
			'9uSyAdnVIZTbDhwZAz5fEEoTxvKUU2mLkhjf76wE1b/uUpFHn376LXmqXlk2IDCXADdN87m6D2ecSCLFYWwFkroPWR7kU3D9VORqsqxABPTloaFk+6FDDVV9onOSIgr4lc4C+oVPHDh8/KmhoeR6qcjVZFmBwByhnNlw5C9mvD+WiDgRkhkfLpT7kj+CyzdplkOWHcgsoXyaICp/YI3QZwwon9428r1LyxH83mkRgD1bBl/bs3Xw1Pz7yy3LrpGuzBFKfQKV3+3cW1SO6nrkPwHZ1w2h+2jlNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
				else {
					me._map_pin_tt.ggDx=0;
					me._map_pin_tt.ggDy=38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map_pin.appendChild(me._map_pin_tt);
	};
	function SkinCloner_category_cloner_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 150px; height: 128px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 141;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me.__div.appendChild(me._node_cloner);
		el=me._category=document.createElement('div');
		els=me._category__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: auto;';
		hs+='background: #a1a1a1;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggTitle;
		el.appendChild(els);
		me._category.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['category'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('open_tag') == me.ggTag))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._category.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._category.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._category__text.style[domTransition]='background-color 0s';
				if (me._category.ggCurrentLogicStateBackgroundColor == 0) {
					me._category__text.style.backgroundColor="rgba(0,0,0,0)";
				}
				else if (me._category.ggCurrentLogicStateBackgroundColor == 1) {
					me._category__text.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me._category__text.style.backgroundColor="rgba(161,161,161,1)";
				}
			}
		}
		me._category.onclick=function (e) {
			if (
				(
					((player.getVariableValue('open_tag') == me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', true);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', false);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
			if (
				(
					((player.getVariableValue('close_nodes') == true))
				)
			) {
				player.setVariableValue('open_tag', "_nop_");
			}
		}
		me._category.onmouseover=function (e) {
			me.elementMouseOver['category']=true;
			me._category.logicBlock_backgroundcolor();
		}
		me._category.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._category__text)
					return;
				}
			}
			me.elementMouseOver['category']=false;
			me._category.logicBlock_backgroundcolor();
		}
		me._category.ontouchend=function (e) {
			me.elementMouseOver['category']=false;
			me._category.logicBlock_backgroundcolor();
		}
		me._category.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._category.ggNodeChange=function () {
			if (
				(
					((me._category.ggIsActive() == true)) && 
					((player.getVariableValue('category_follow') == true))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
		}
		me.__div.appendChild(me._category);
		me._node_cloner.style['display']='none';
		var p = me._node_cloner.parentElement;
		while (p != null && p!==this.divSkin) {
			if (p.ggType && p.ggType == 'cloner') {
				if (p.ggAutoPosition) {
					p.ggAutoPosition(false);
				}
			}
			if (p.ggType && p.ggType == 'scrollarea') {
				if (p.ggUpdatePosition) {
					p.ggUpdatePosition();
				}
			}
			p = p.parentElement;
		}
		me.event_varchanged_open_tag=function() {if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.ggText="_nop_";
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.style['display']='none';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.ggText=me.ggTag;
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.style['display']='inline';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
		}};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 141px; height: 100px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image=document.createElement('div');
		els=me._node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image.onclick=function (e) {
			if (
				(
					((me._node_image.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._node_image.onmouseover=function (e) {
			me.elementMouseOver['node_image']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image.onmouseout=function (e) {
			me.elementMouseOver['node_image']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image.ontouchend=function (e) {
			me.elementMouseOver['node_image']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #a1a1a1;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['node_image'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(161,161,161,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_image.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image);
	};
	player.addListener('varchanged_open_tag', function() {
		var inst_j=skin;
		for(var i = 0; i < inst_j._category_cloner.ggInstances.length; i++) {
			var inst_i=inst_j._category_cloner.ggInstances[i];
			inst_i.event_varchanged_open_tag();
		}
	});
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._show_controller_button.logicBlock_alpha();
	me._hide_controller_container.logicBlock_alpha();
	me._map_container.logicBlock_visible();
	me._map.logicBlock_visible();
	me._menu_background.logicBlock_alpha();
	me._menu_open.logicBlock_position();
	me._menu_open.logicBlock_alpha();
	me._button_close_map.logicBlock_visible();
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	me._tt_show_controller.logicBlock_position();
	me._enter_vr.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._show_controller_button.logicBlock_alpha();me._hide_controller_container.logicBlock_alpha();me._map_container.logicBlock_visible();me._map.logicBlock_visible();me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha();me._button_close_map.logicBlock_visible();me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._tt_show_controller.logicBlock_position(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_show_controller.logicBlock_position(); });
	player.addListener('varchanged_vis_auto_hide_controller', function(args) { me._show_controller_button.logicBlock_alpha();me._hide_controller_container.logicBlock_alpha(); });
	player.addListener('varchanged_category_visible_1', function(args) { me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha(); });
	player.addListener('varchanged_vis_map', function(args) { me._map_container.logicBlock_visible();me._map.logicBlock_visible();me._button_close_map.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._category_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._category_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._category_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._category_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._category_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('varchanged_open_tag', function(args) { me._category_cloner.callChildLogicBlocks_varchanged_open_tag(); });
	player.addListener('changenode', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_changenode(); });
	player.addListener('configloaded', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_configloaded(); });
	player.addListener('mouseover', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('mouseover', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('changenode', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_active(); });
	player.addListener('hastouch', function(args) { me._map.callChildLogicBlocksHotspot_map_pin_hastouch(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_info_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_info_hastouch(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};