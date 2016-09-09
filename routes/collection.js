exports.list = function(req, res){
	var list = [
	           {
					id: 'WERTY',
					title: '手把手教你开发Chrome扩展二：为html添加行为 - walkingp - 博客园',
					website: 'http://www.cnblogs.com/walkingp/archive/2011/04/02/2002668.html',
					detailNoteText: '开发chrome浏览器扩展'
			   },
				{
					id: 'WERTY1',
					title: '纯CSS实现的帮助提示信息效果_Helloweba',
					website: 'http://www.helloweba.com/view-blog-269.html',
					detailNoteText: 'css3'
				},
				{
					id: 'WERTY2',
					title: '网易公开课',
					website: 'http://open.163.com/ted/',
					detailNoteText: '网易TED'
				},
				{
					id: 'WERTY3',
					title: '超星尔雅',
					website: 'http://mooc.chaoxing.com/',
					detailNoteText: '在线学习'
				},
				{
					id: 'WERTY4',
					title: '720云',
					website: 'http://www.720yun.com/',
					detailNoteText: '全景视频'
				}
                ];
    res.render('list', { title: '收藏列表' , list: list});
};
exports.add = function(req, res){
    res.send("add with a resource");
};