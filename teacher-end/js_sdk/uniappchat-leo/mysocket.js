/**
 * version 1.1.7
 */
import apirequest from 'apiconfig.js'
import store from './store'

class mysocket {
  constructor(config = {}) {
      this.mineid=0;
	  this.sockettast=null;
	  this.config = {socketurl:'ws://111.229.100.131:2348'};

	}
	setConfig(config = {}) {
	  this.config = this._deepCopy(this._merge(this.config, config));
	}
	connectserver(usign){
		 this.mineid=usign;
		this.sockettast=uni.connectSocket({
			url: this.config.socketurl,
			complete:function(res){
					if(res.errMsg=='connectSocket:ok'){
					     console.log('成功连接服务器')
					}else{
						  uni.showModal({
									title:'链接服务器失败'
								})
							}
			
			}
		})
		
		this.sockettast.onMessage(function(res){
		 		
		  // let temdata=JSON.parse(res.data);
		         let temdata= eval("("+res.data+")");
				
		 		switch(temdata.type){
		 				case 'init':
					       apirequest.registClientid_f({data:{
		 						'cid':temdata.client_id,
		 						'usign':usign
		 					}}).then(res=>{
		 						if(res.data.code!=1){
		 							uni.showToast({
		 								icon:'none',
		 								title:res.data.msg
		 							})
		 						}
		 							
		 				});
						
		         	break;
					case 'getmessage':
				       let msg =temdata.message;
					   let tempv=0;
					   store.commit("setCurrentMsg",msg)
					   if(msg.sendmethod=='group'){
						       tempv=msg.toid;
						   }else{
							   tempv=msg.fromid;
					  }
					   store.commit('updateChaterAttr',{type:msg.sendmethod,val:tempv,attr:'lastmsg',data:msg.msg.content,time:msg.msg.time,addinfo:msg.msg.senderinfo})
				       let tempapp=getApp();
					   let tempmy={id:usign};
					   tempapp.cacheMessage(msg,msg.sendmethod,tempv,tempmy);
				
					break;
					case 'setfriendstue':
					///设置好友状态
					   let msg2 =temdata.message;
					   store.commit('setFriendstue',{val:msg2.toid,data:msg2.state,character:msg2.character})
					   
					break;
					case 'msgboxuser':
					   ///获取到信息盒子
					   store.commit('setmsgboxuser',temdata.message)
					break;
					case 'msgboxgroup':
					   ///获取到信息盒子
					    store.commit('setmsgboxgroup',temdata.message)
					break;
					case 'addgroup':
					   //自己成功创建群
					   store.commit('updateGrouplist',temdata.message)
					break;
					case 'addfriend':
					   ///成功添加好友
					     store.commit('updateFriendlist',temdata.message)
					break;
					
		 			
		 		}
		 })
	}
	  
}

if (!global.$mysocket) {
  global.$mysocket = new mysocket();
}

export default global.$mysocket;
