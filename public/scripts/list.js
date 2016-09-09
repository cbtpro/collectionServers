(function() {
	'use strict';
	var Collections = {
		serverUrl: 'http://localhost:3000/api/collection/list',
		addUrl: 'http://localhost:3000/api/collection/add',
		save: function(obj) {
			//保存收藏信息
		},
		init: function() {
			/**
			//初始化列表
			var list = [
				{
					id: 'WERTY',
					title: '手把手教你开发Chrome扩展二：为html添加行为 - walkingp - 博客园',
					website: 'http://www.cnblogs.com/walkingp/archive/2011/04/02/2002668.html',
					detailNoteText: ''
				},
				{
					id: 'WERTY1',
					title: '纯CSS实现的帮助提示信息效果_Helloweba',
					website: 'http://www.helloweba.com/view-blog-269.html',
					detailNoteText: ''
				},
				{
					id: 'WERTY2',
					title: '网易公开课',
					website: 'http://open.163.com/ted/',
					detailNoteText: ''
				},
				{
					id: 'WERTY3',
					title: '超星尔雅',
					website: 'http://mooc.chaoxing.com/',
					detailNoteText: ''
				},
				{
					id: 'WERTY4',
					title: '720云',
					website: 'http://www.720yun.com/',
					detailNoteText: ''
				}
			];
			Collections.__buildCollection(list);
			**/
			this.warnInfo('欢迎使用收藏管理，您可以使用它来替换您的浏览器书签', 4000);
			//绑定事件
			var moveHistory = document.getElementById('moveToHistory');
			moveHistory.addEventListener('click', function() {
				Collections.warnInfo('请选择要移入历史的收藏');
			});
			//用委托给保存按钮绑定保存事件
			var collectionItemListPanel = document.getElementById('collection-item-list');
			collectionItemListPanel.onclick = function(e) {
				var e = e || event;
				var target = e.target || ev.srcElement;
				if(target.nodeName.toLowerCase() === 'button' && target.className === 'save-collection') {
					var collection = {};
					collection.id = target.parentElement.parentElement.id;
					collection.detailNoteText = target.parentElement.getElementsByTagName('textarea')[0].value;
					Collections.save(collection);
				} else if(target.nodeName.toLowerCase() === 'label' && target.classList.contains('checkbox')) {
					if(target.classList.contains('on')) {
						target.classList.add('off');
						target.classList.remove('on')
					} else {
						target.classList.add('on')
						target.classList.remove('off');
					}
				}
			};
		},
		addCollection: function(obj) {
			//向后台提交新增加的收藏
		},
		deleteCollection: function(objs) {
			//向后台删除新增加的收藏
		},
		__buildCollection: function(list) {
			var collectionItemListElement = document.getElementById('collection-item-list');
			//构造收藏到页面
			for(var i in list) {
				var collection = list[i];
				/*collection.id
				collection.title
				collection.website
				collection.detailNoteText*/
				var collectionItemElement = document.createElement('div');
				collectionItemElement.className = 'collection-item';
				
				var checkboxLabel = document.createElement('label');
				checkboxLabel.className = 'on';
				
				var title = document.createElement('span');
				title.className = 'collection-title';
				
				var website = document.createElement('a');
				website.href = '#' + collection.id;
				website.text = collection.title;
				title.appendChild(website);
				
				var detailPanel = document.createElement('div');
				detailPanel.id = collection.id;
				detailPanel.className = 'collection-detail';
				
				var detailSiteP = document.createElement('p');
				detailSiteP.className = 'detail-site';
				var detailSiteJumpUrl = document.createElement('a');
				detailSiteJumpUrl.href = collection.website;
				detailSiteJumpUrl.target = '_blank';
				detailSiteJumpUrl.text = collection.website;
				
				var detailBody = document.createElement('div');
				detailBody.className = 'detail-body';
				
				var detailNoteLabel = document.createElement('label');
				detailNoteLabel.setAttribute('for', 'detailNoteTextArea');
				detailNoteLabel.text = '备注:';
				
				var detailNoteTextArea = document.createElement('textarea');
				detailNoteTextArea.textContent = collection.detailNoteText;
				detailNoteTextArea.className = 'detail-note-textarea';
				
				var saveButton = document.createElement('button');
				saveButton.className = 'save-collection';
				saveButton.textContent = '保存';
				
				detailBody.appendChild(detailNoteLabel);
				detailBody.appendChild(detailNoteTextArea);
				detailBody.appendChild(saveButton);
				
				detailSiteP.appendChild(detailSiteJumpUrl);
				
				detailPanel.appendChild(detailSiteP);
				detailPanel.appendChild(detailBody);
				//装配
				collectionItemElement.appendChild(checkboxLabel);
				collectionItemElement.appendChild(title);
				collectionItemElement.appendChild(detailPanel);
				
				collectionItemListElement.appendChild(collectionItemElement);
			}
		},
		__lTrim: function(str) {
			if(str.charAt(0) === " ") {
				str = str.slice(1);
				str = Collections.__lTrim(str);
			}
			return str;
		},
		__rTrim: function(str) {
			var iLength;
			iLength = str.length;
			if(str.charAt(iLength - 1) === '') {
				str = str.slice(0, iLength -1);
				str = Collections.__rTrim(str);
			}
			return str;
		},
		__Trim: function(str) {
			return Collections.__lTrim(Collections.__rTrim(str));
		},
		warnInfo: function(msg, delay) {
			//弹出消息
			var msgDom = document.getElementById('msg');
			msgDom.className += ' active'
			msgDom.getElementsByTagName('p')[0].innerHTML = msg;
			requestAnimationFrame(function() {
				setTimeout(function() {
					var msgDom = document.getElementById('msg');
					msgDom.className = Collections.__Trim(msgDom.className.replace('active', ''));
				}, delay || 2000);
			});
		}
	};
	
	Collections.init();
})();
